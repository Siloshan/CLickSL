import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Needed due to useNavigate in ListingCard
import ListingCard from './ListingCard';
import { AuthContext, AuthContextType } from '@/contexts/AuthContext'; // Adjust path as needed
import { Listing } from '@/data/mockData'; // Adjust path as needed
import React from 'react';

const mockListing: Listing = {
  id: '1',
  title: 'Test Listing Title',
  shortDescription: 'A short description for testing.',
  description: 'Full description.',
  category: 'attraction',
  location: {
    city: 'Test City',
    district: 'Test District',
    coordinates: { lat: 1, lng: 1 },
  },
  images: ['https://via.placeholder.com/300'],
  rating: 4.5,
  reviewCount: 120,
  price: { amount: 50, currency: 'USD', unit: 'person' },
  features: ['Feature 1', 'Feature 2'],
  approved: true,
  createdBy: 'user1',
  createdAt: '2023-01-01',
  featured: true,
};

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...(actual as any), // Cast to any to avoid type issues with module mocking
    useNavigate: () => mockNavigate,
  };
});

// Default mock auth context values
const mockAuthContextValue: AuthContextType = {
  user: { id: 'testUser', name: 'Test User', email: 'test@example.com', role: 'user' },
  login: vi.fn().mockResolvedValue(true),
  register: vi.fn().mockResolvedValue(true),
  logout: vi.fn(),
  isLoading: false,
  wishlist: [],
  addToWishlist: vi.fn(),
  removeFromWishlist: vi.fn(),
  isFavorite: vi.fn().mockReturnValue(false),
};

// Helper to render with AuthContext
const renderWithAuth = (ui: React.ReactElement, authValue: Partial<AuthContextType> = {}) => {
  return render(
    <AuthContext.Provider value={{ ...mockAuthContextValue, ...authValue }}>
      <BrowserRouter>{ui}</BrowserRouter>
    </AuthContext.Provider>
  );
};


describe('ListingCard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset isFavorite mock for each test unless overridden
    mockAuthContextValue.isFavorite = vi.fn().mockReturnValue(false);
    mockAuthContextValue.addToWishlist = vi.fn();
    mockAuthContextValue.removeFromWishlist = vi.fn();
    mockAuthContextValue.user = { id: 'testUser', name: 'Test User', email: 'test@example.com', role: 'user' };

  });

  it('renders listing information correctly', () => {
    renderWithAuth(<ListingCard listing={mockListing} />);

    expect(screen.getByText(mockListing.title)).toBeInTheDocument();
    expect(screen.getByText(/Test City, Test District/)).toBeInTheDocument();
    expect(screen.getByText(mockListing.shortDescription)).toBeInTheDocument();
    expect(screen.getByText(mockListing.rating.toString())).toBeInTheDocument();
    expect(screen.getByText(/120 reviews/)).toBeInTheDocument(); // reviewCount
    expect(screen.getByText(mockListing.price!.amount.toString())).toBeInTheDocument();
    // Category name is "Attraction" (first letter capitalized)
    expect(screen.getByText('Attraction')).toBeInTheDocument();
    expect(screen.getByText('⭐ Featured')).toBeInTheDocument(); // Featured badge
  });

  it('navigates to listing detail page on card click', () => {
    renderWithAuth(<ListingCard listing={mockListing} />);

    // The Card component itself is the clickable group.
    // We find it by a class that should be on the Card's root in ListingCard.tsx
    // For example, if Card has `className="group"`
    const cardElement = screen.getByText(mockListing.title).closest('.group');
    expect(cardElement).toBeInTheDocument();
    if (cardElement) {
         fireEvent.click(cardElement);
    }
    expect(mockNavigate).toHaveBeenCalledWith(`/listing/${mockListing.id}`);
  });

  it('navigates to listing detail page on "View Details" button click', () => {
    renderWithAuth(<ListingCard listing={mockListing} />);
    const viewDetailsButton = screen.getByText(/View Details →/); // Text includes arrow
    fireEvent.click(viewDetailsButton);
    expect(mockNavigate).toHaveBeenCalledWith(`/listing/${mockListing.id}`);
  });

  it('calls addToWishlist when favorite button is clicked and item is not favorite', () => {
    const addToWishlistMock = vi.fn();
    renderWithAuth(<ListingCard listing={mockListing} />, {
      isFavorite: () => false,
      addToWishlist: addToWishlistMock
    });

    // Assuming the favorite button is the only one with a Heart icon initially unfilled
    // Or add aria-label="Favorite" to the button in ListingCard.tsx
    const favoriteButton = screen.getByRole('button', { name: /favorite/i });
    fireEvent.click(favoriteButton);
    expect(addToWishlistMock).toHaveBeenCalledWith(mockListing.id);
  });

  it('calls removeFromWishlist when favorite button is clicked and item is favorite', () => {
    const removeFromWishlistMock = vi.fn();
    renderWithAuth(<ListingCard listing={mockListing} />, {
      isFavorite: () => true,
      removeFromWishlist: removeFromWishlistMock
    });

    const favoriteButton = screen.getByRole('button', { name: /favorite/i });
    fireEvent.click(favoriteButton);
    expect(removeFromWishlistMock).toHaveBeenCalledWith(mockListing.id);
  });

  it('disables favorite button if no user is logged in', () => {
    renderWithAuth(<ListingCard listing={mockListing} />, { user: null });
    const favoriteButton = screen.getByRole('button', { name: /favorite/i });
    expect(favoriteButton).toBeDisabled();
  });

  it('renders filled heart icon if item is favorite', () => {
    renderWithAuth(<ListingCard listing={mockListing} />, { isFavorite: () => true });
    // To make this testable, the button or icon should have a distinct property when favorited
    // For example, an aria-pressed attribute or a specific data-testid state.
    // Checking SVG 'fill' attribute is implementation-specific.
    // Let's assume the button gets an aria-pressed="true" when favorited.
    // This would require adding aria-pressed={isFavorite(listing.id)} to the Button in ListingCard.tsx
    const favoriteButton = screen.getByRole('button', { name: /favorite/i });
    const heartIcon = favoriteButton.querySelector('svg'); // Assuming Heart is an SVG
    expect(heartIcon).toHaveAttribute('fill', 'currentColor');
  });

  it('renders unfilled heart icon if item is not favorite', () => {
    renderWithAuth(<ListingCard listing={mockListing} />, { isFavorite: () => false });
    const favoriteButton = screen.getByRole('button', { name: /favorite/i });
    const heartIcon = favoriteButton.querySelector('svg');
    expect(heartIcon).toHaveAttribute('fill', 'none');
  });

});

// Note: The favorite button selector `screen.getByRole('button', { name: /favorite/i })`
// assumes the button has an aria-label or accessible text like "favorite".
// This should be added to the Button component in ListingCard.tsx for robustness:
// e.g. <Button aria-label="Favorite" ... > <Heart ... /> </Button>
// The test for card click using `.closest('.group')` assumes 'group' class is on the main clickable Card element.
// If Radix UI Card component doesn't directly have a role="button",
// a more resilient selector like a data-testid attribute would be better.
// For the category badge, the test expects "Attraction", implying title-casing of the category ID.
// The "View Details →" text for the button is also specific.
```

One minor adjustment: The favorite button selector `screen.getByRole('button', { name: /favorite/i })` implies the button itself has the name "favorite". If the name comes from the icon inside, this might fail. It's more robust if an `aria-label="Favorite"` is added to the `Button` in `ListingCard.tsx`. I'll proceed with the current test structure, assuming this or a similar accessible name is available.
