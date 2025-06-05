import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Navigation from '@/components/Navigation';
import { useAuth } from '@/contexts/AuthContext';
import { mockListingsData, Listing } from '@/data/mockData';
import ListingCard from '@/components/ListingCard';
import { Button } from '@/components/ui/button';
import { Heart, LayoutGrid } from 'lucide-react';

const WishlistPage: React.FC = () => {
  const { user, wishlist, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [favoritedListings, setFavoritedListings] = useState<Listing[]>([]);

  useEffect(() => {
    if (!authLoading && !user) {
      // This check is technically redundant if ProtectedRoute is used,
      // but good for direct access attempts or if ProtectedRoute isn't set up yet.
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user && wishlist.length >= 0) {
      const listings = mockListingsData.filter(listing => wishlist.includes(listing.id));
      setFavoritedListings(listings);
    } else {
      setFavoritedListings([]); // Clear if no user or empty wishlist
    }
  }, [user, wishlist]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div>Loading your wishlist...</div>
      </div>
    );
  }

  // User check is primarily handled by ProtectedRoute, but this is a fallback.
  if (!user) {
     return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-semibold mb-4">Please login to view your wishlist.</h1>
          <Button onClick={() => navigate('/login')}>Login</Button>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-orange-50">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <Heart className="w-8 h-8 text-red-500 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
            </div>

            {favoritedListings.length === 0 ? (
              <div className="text-center py-12 bg-white shadow-lg rounded-lg">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-gray-400" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Your Wishlist is Empty</h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Looks like you haven't added any favorite spots yet. Explore our listings and add some to your wishlist!
                </p>
                <Button
                  onClick={() => navigate('/')}
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
                >
                  <LayoutGrid className="w-5 h-5 mr-2" />
                  Explore Listings
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favoritedListings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default WishlistPage;
