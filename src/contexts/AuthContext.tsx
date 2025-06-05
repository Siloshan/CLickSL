import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  wishlist: string[];
  addToWishlist: (listingId: string) => void;
  removeFromWishlist: (listingId: string) => void;
  isFavorite: (listingId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{children: React.ReactNode;}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const verifyTokenAndFetchUser = async (token: string) => {
    try {
      const response = await fetch('/api/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        // Load wishlist after user is set
        const savedWishlist = localStorage.getItem(`wishlist_${userData.id}`);
        if (savedWishlist) {
          setWishlist(JSON.parse(savedWishlist));
        } else {
          setWishlist([]); // Initialize if no saved wishlist
        }
      } else {
        localStorage.removeItem('authToken');
        setUser(null);
        setWishlist([]); // Clear wishlist if token invalid
      }
    } catch (error) {
      console.error('Error verifying token:', error);
      localStorage.removeItem('authToken');
      setUser(null);
      setWishlist([]); // Clear wishlist on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      verifyTokenAndFetchUser(token);
    } else {
      setIsLoading(false);
      setWishlist([]); // No token, no user, empty wishlist
    }
  }, []);

  // Save wishlist to localStorage when it changes
  useEffect(() => {
    if (user && wishlist.length >= 0) {
      localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(wishlist));
    }
  }, [wishlist, user]);


  const addToWishlist = (listingId: string) => {
    if (user) {
      setWishlist(prev => {
        if (!prev.includes(listingId)) {
          return [...prev, listingId];
        }
        return prev;
      });
    }
  };

  const removeFromWishlist = (listingId: string) => {
    if (user) {
      setWishlist(prev => prev.filter(id => id !== listingId));
    }
  };

  const isFavorite = (listingId: string): boolean => {
    return wishlist.includes(listingId);
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.token);
        setUser(data.user);
        // Load wishlist for the new user after login
        const savedWishlist = localStorage.getItem(`wishlist_${data.user.id}`);
        if (savedWishlist) {
          setWishlist(JSON.parse(savedWishlist));
        } else {
          setWishlist([]);
        }
        return true;
      }
      setWishlist([]); // Clear wishlist on failed login
      return false;
    } catch (error) {
      console.error('Login error:', error);
      setWishlist([]); // Clear wishlist on error
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.token);
        setUser(data.user);
        setWishlist([]); // New user starts with an empty wishlist
        return true;
      }
      setWishlist([]); // Clear wishlist on failed registration
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    // Optional: Call API to invalidate token on server-side
    // try {
    //   await fetch('/api/auth/logout', { method: 'POST' });
    // } catch (error) {
    //   console.error('Logout API error:', error);
    // }
    localStorage.removeItem('authToken');
    setUser(null);
    setWishlist([]); // Clear wishlist on logout
  };

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isFavorite
  };

  return (
    <AuthContext.Provider value={value} data-id="tkwpsw1jk" data-path="src/contexts/AuthContext.tsx">
      {children}
    </AuthContext.Provider>);

};