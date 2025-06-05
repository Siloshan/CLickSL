import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext'; // Assuming AuthContext.tsx
import React from 'react';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock fetch
global.fetch = vi.fn();

const mockUser = { id: '1', name: 'Test User', email: 'test@example.com', role: 'user' as 'user' | 'admin' };
const mockAdminUser = { id: 'admin1', name: 'Admin User', email: 'admin@example.com', role: 'admin' as 'user' | 'admin' };
const mockToken = 'fake-jwt-token';

// Wrapper for the hook
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe('AuthContext', () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.resetAllMocks(); // Resets fetch mocks etc.
    // Default successful verification for tests that need an initial logged-in state
    // This will be overridden in tests that need specific mock responses for verifyTokenAndFetchUser
    (fetch as vi.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => (mockUser), // API returns user directly, not {user: mockUser} for /me
    });
  });

  afterEach(() => {
    localStorageMock.clear();
  });

  it('should initialize with no user if no token in localStorage', async () => {
    localStorageMock.removeItem('authToken'); // Ensure no token
     // Prevent default verify mock from running for this specific test
    (fetch as vi.Mock).mockReset();
    (fetch as vi.Mock).mockResolvedValueOnce({ ok: false }); // Simulate token verification failure or no token

    const { result } = renderHook(() => useAuth(), { wrapper });

    // Wait for isLoading to become false
    await act(async () => {
        await vi.waitFor(() => expect(result.current.isLoading).toBe(false));
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isLoading).toBe(false);
  });

  it('should load user from localStorage if token is valid (mocked verify)', async () => {
    localStorageMock.setItem('authToken', mockToken);
    // fetch mock for verifyTokenAndFetchUser is already set in beforeEach
    // for /api/auth/me, it should return the user object directly
    (fetch as vi.Mock).mockReset();
    (fetch as vi.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => (mockUser),
    });

    const { result } = renderHook(() => useAuth(), { wrapper });

    await act(async () => {
      await vi.waitFor(() => expect(result.current.isLoading).toBe(false));
    });

    expect(result.current.user).toEqual(mockUser);
    expect(result.current.isLoading).toBe(false);
  });

  describe('login', () => {
    it('should login a user and store token and user', async () => {
      // Reset fetch mock for this specific test path
      (fetch as vi.Mock).mockReset();
      (fetch as vi.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ token: mockToken, user: mockUser }),
      });

      const { result } = renderHook(() => useAuth(), { wrapper });

      // Initial state check (isLoading might be true due to verifyToken call)
      // We need to ensure verifyToken (if any from beforeEach) has resolved if we didn't reset it properly for this path
       await act(async () => {
          await vi.waitFor(() => expect(result.current.isLoading).toBe(false));
       });


      await act(async () => {
        const success = await result.current.login('test@example.com', 'password');
        expect(success).toBe(true);
      });

      // isLoading becomes true during login, then false
       await act(async () => {
         await vi.waitFor(() => expect(result.current.isLoading).toBe(false));
       });


      expect(result.current.user).toEqual(mockUser);
      expect(localStorageMock.getItem('authToken')).toBe(mockToken);
      expect(fetch).toHaveBeenCalledWith('/api/auth/login', expect.any(Object));
    });

    it('should return false on login failure', async () => {
      (fetch as vi.Mock).mockReset();
      (fetch as vi.Mock).mockResolvedValueOnce({ ok: false }); // login fails
      const { result } = renderHook(() => useAuth(), { wrapper });

      // Wait for initial loading to complete (from verifyToken)
      await act(async () => {
        await vi.waitFor(() => expect(result.current.isLoading).toBe(false));
      });
      const initialUser = result.current.user; // Could be null or mockUser based on beforeEach verify

      let success = false;
      await act(async () => {
        success = await result.current.login('wrong@example.com', 'wrongpassword');
      });
      expect(success).toBe(false);
      // User should revert to its state before login attempt or null if verify failed
      expect(result.current.user).toEqual(initialUser);
    });
  });

  describe('register', () => {
    it('should register a user and store token and user', async () => {
      (fetch as vi.Mock).mockReset();
      (fetch as vi.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ token: mockToken, user: mockUser }),
      });
      const { result } = renderHook(() => useAuth(), { wrapper });

      await act(async () => { // initial load
        await vi.waitFor(() => expect(result.current.isLoading).toBe(false));
      });

      let success = false;
      await act(async () => {
        success = await result.current.register('Test User', 'test@example.com', 'password');
      });

      expect(success).toBe(true);
      expect(result.current.user).toEqual(mockUser);
      expect(localStorageMock.getItem('authToken')).toBe(mockToken);
      expect(fetch).toHaveBeenCalledWith('/api/auth/register', expect.any(Object));
    });
  });

  describe('logout', () => {
    it('should clear user and token', async () => {
      localStorageMock.setItem('authToken', mockToken);
      // Setup verifyToken mock for initial load
      (fetch as vi.Mock).mockReset();
      (fetch as vi.Mock).mockResolvedValueOnce({ ok: true, json: async () => (mockUser) });

      const { result } = renderHook(() => useAuth(), { wrapper });

      await act(async () => { // Wait for initial load
          await vi.waitFor(() => expect(result.current.isLoading).toBe(false));
      });
      expect(result.current.user).toEqual(mockUser); // Pre-condition

      await act(async () => { // Use async act for logout as it's async
        await result.current.logout();
      });

      expect(result.current.user).toBeNull();
      expect(localStorageMock.getItem('authToken')).toBeNull();
      // Wishlist for mockUser.id should be cleared from localStorage by the effect in AuthContext
      // or because user becomes null. The effect saves wishlist IF user exists.
      // If logout removes user before effect runs, wishlist might not be cleared for that ID
      // but it will be empty on next load for that user.
      // Let's check if the wishlist state is empty
      expect(result.current.wishlist).toEqual([]);
    });
  });

  describe('wishlist', () => {
    const listingId1 = 'listing1';
    const listingId2 = 'listing2';

    beforeEach(() => {
        // Ensure user is "logged in" for wishlist tests
        localStorageMock.setItem('authToken', mockToken);
        (fetch as vi.Mock).mockReset();
        (fetch as vi.Mock).mockResolvedValueOnce({ok: true, json: async () => (mockUser)});
    });

    it('should add and remove items from wishlist and sync with localStorage', async () => {
      const { result } = renderHook(() => useAuth(), { wrapper });

      await act(async () => {
        await vi.waitFor(() => expect(result.current.isLoading).toBe(false));
      });
      expect(result.current.user).toEqual(mockUser);


      // Add to wishlist
      await act(async () => {
        result.current.addToWishlist(listingId1);
      });
      expect(result.current.isFavorite(listingId1)).toBe(true);
      expect(result.current.wishlist).toContain(listingId1);
      expect(JSON.parse(localStorageMock.getItem(`wishlist_${mockUser.id}`)!)).toContain(listingId1);

      // Add another item
      await act(async () => {
        result.current.addToWishlist(listingId2);
      });
      expect(result.current.isFavorite(listingId2)).toBe(true);
      expect(result.current.wishlist).toEqual([listingId1, listingId2]);

      // Remove from wishlist
      await act(async () => {
        result.current.removeFromWishlist(listingId1);
      });
      expect(result.current.isFavorite(listingId1)).toBe(false);
      expect(result.current.wishlist).not.toContain(listingId1);
      expect(JSON.parse(localStorageMock.getItem(`wishlist_${mockUser.id}`)!)).not.toContain(listingId1);

      // Logout should clear wishlist from state
      await act(async () => { // logout is async
        await result.current.logout();
      });
      expect(result.current.wishlist.length).toBe(0);
    });

    it('should load wishlist from localStorage on initial load', async () => {
        localStorageMock.setItem(`wishlist_${mockUser.id}\`, JSON.stringify([listingId1]));
        // fetch mock for verify is already set in this describe's beforeEach

        const { result } = renderHook(() => useAuth(), { wrapper });

        await act(async () => {
            await vi.waitFor(() => expect(result.current.isLoading).toBe(false));
        });
        expect(result.current.user).toEqual(mockUser);
        expect(result.current.wishlist).toContain(listingId1);
        expect(result.current.isFavorite(listingId1)).toBe(true);
    });
  });
});
