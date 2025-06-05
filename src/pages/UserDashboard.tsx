import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react'; // Added useEffect, useCallback
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge"; // Added Badge
import Navigation from '@/components/Navigation';
import { useAuth } from '@/contexts/AuthContext';
import ListingForm, { ListingFormData } from '@/components/ListingForm';
import { addListing, Listing, mockListingsData } from '@/data/mockData'; // Added mockListingsData for filtering
import { Plus, Eye, Edit, Trash2, Clock, CheckCircle, XCircle, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showListingForm, setShowListingForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [myListings, setMyListings] = useState<Listing[]>([]);

  const fetchMyListings = useCallback(() => {
    if (user) {
      const userListings = mockListingsData.filter(listing => listing.createdBy === user.id);
      setMyListings(userListings);
    }
  }, [user]);

  useEffect(() => {
    fetchMyListings();
  }, [fetchMyListings]);

  if (!user) {
    navigate('/login'); // Should be handled by ProtectedRoute, but good failsafe
    return null;
  }

  const handleCreateListing = async (formData: ListingFormData) => {
    if (!user) return;
    setIsSubmitting(true);
    try {
      const newListing: Listing = {
        ...formData,
        id: Date.now().toString(),
        approved: false,
        createdBy: user.id,
        createdAt: new Date().toISOString().split('T')[0],
        rating: 0,
        reviewCount: 0, // Assuming new listings have 0 reviews
        featured: false,
        // Add a mock view count for new listings if needed for "Views" card
        // views: 0,
      };

      addListing(newListing);
      fetchMyListings(); // Re-fetch listings to include the new one

      toast({
        title: "Listing Submitted!",
        description: `${newListing.title} has been submitted for approval.`,
        variant: "success",
      });
      setShowListingForm(false);
    } catch (error) {
      console.error("Error creating listing:", error);
      toast({
        title: "Error",
        description: "Failed to create listing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalListings = myListings.length;
  const approvedListings = myListings.filter(l => l.approved).length;
  const pendingListings = myListings.filter(l => !l.approved).length;
  // Placeholder for views - could sum a `views` property if added to Listing
  const totalViews = myListings.reduce((sum, l) => sum + (l.reviewCount || 0) * 5, 0); // Mock views based on reviews

  return (
    <div className="min-h-screen bg-gray-50" data-id="rswt26bib" data-path="src/pages/UserDashboard.tsx">
      <Navigation data-id="m94cudbis" data-path="src/pages/UserDashboard.tsx" />
      
      <div className="pt-20 pb-16" data-id="o0a5c0moj" data-path="src/pages/UserDashboard.tsx">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-id="gc8rpazoa" data-path="src/pages/UserDashboard.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} data-id="8853ggscy" data-path="src/pages/UserDashboard.tsx">

            <div className="flex items-center justify-between mb-8" data-id="ueip58iyk" data-path="src/pages/UserDashboard.tsx">
              <div data-id="tv0084v9u" data-path="src/pages/UserDashboard.tsx">
                <h1 className="text-3xl font-bold text-gray-900" data-id="wp2hj894o" data-path="src/pages/UserDashboard.tsx">Dashboard</h1>
                <p className="text-gray-600 mt-2" data-id="7e5k1v7y2" data-path="src/pages/UserDashboard.tsx">Manage your listings and profile</p>
              </div>
              <Button onClick={() => setShowListingForm(true)} className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700" data-id="24643rgvu" data-path="src/pages/UserDashboard.tsx">
                <Plus className="w-5 h-5 mr-2" data-id="f17wza81p" data-path="src/pages/UserDashboard.tsx" />
                Add New Listing
              </Button>
            </div>

            <Dialog open={showListingForm} onOpenChange={setShowListingForm}>
              <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Create New Listing</DialogTitle>
                </DialogHeader>
                <ListingForm
                  onSubmit={handleCreateListing}
                  isLoading={isSubmitting}
                  onCancel={() => setShowListingForm(false)}
                />
              </DialogContent>
            </Dialog>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8" data-id="le5s5wete" data-path="src/pages/UserDashboard.tsx">
              <Card data-id="mb6jpv55t" data-path="src/pages/UserDashboard.tsx">
                <CardContent className="p-6" data-id="7yowii6ug" data-path="src/pages/UserDashboard.tsx">
                  <div className="flex items-center justify-between" data-id="dc85r6yas" data-path="src/pages/UserDashboard.tsx">
                    <div data-id="9zecroam8" data-path="src/pages/UserDashboard.tsx">
                      <p className="text-sm text-gray-600" data-id="8f2xun5sh" data-path="src/pages/UserDashboard.tsx">Total Listings</p>
                      <p className="text-2xl font-bold text-gray-900" data-id="zn3ouiio3" data-path="src/pages/UserDashboard.tsx">{totalListings}</p>
                    </div>
                    <Eye className="w-8 h-8 text-blue-500" data-id="xpexwy7gu" data-path="src/pages/UserDashboard.tsx" />
                  </div>
                </CardContent>
              </Card>
              
              <Card data-id="ojqb4dhiy" data-path="src/pages/UserDashboard.tsx">
                <CardContent className="p-6" data-id="9wnl4zsv0" data-path="src/pages/UserDashboard.tsx">
                  <div className="flex items-center justify-between" data-id="72lrxmhsd" data-path="src/pages/UserDashboard.tsx">
                    <div data-id="2k6m86qw0" data-path="src/pages/UserDashboard.tsx">
                      <p className="text-sm text-gray-600" data-id="ij492n4fi" data-path="src/pages/UserDashboard.tsx">Approved</p>
                      <p className="text-2xl font-bold text-green-600" data-id="zsgp9rqeo" data-path="src/pages/UserDashboard.tsx">{approvedListings}</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-500" data-id="2f9g1e2ku" data-path="src/pages/UserDashboard.tsx" />
                  </div>
                </CardContent>
              </Card>
              
              <Card data-id="apif1h86p" data-path="src/pages/UserDashboard.tsx">
                <CardContent className="p-6" data-id="gb0vpg9kc" data-path="src/pages/UserDashboard.tsx">
                  <div className="flex items-center justify-between" data-id="sszq6vptt" data-path="src/pages/UserDashboard.tsx">
                    <div data-id="vddg41uiv" data-path="src/pages/UserDashboard.tsx">
                      <p className="text-sm text-gray-600" data-id="ga0n2nqd9" data-path="src/pages/UserDashboard.tsx">Pending</p>
                      <p className="text-2xl font-bold text-yellow-600" data-id="0dnkp1xtv" data-path="src/pages/UserDashboard.tsx">{pendingListings}</p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-500" data-id="5pjiptf4g" data-path="src/pages/UserDashboard.tsx" />
                  </div>
                </CardContent>
              </Card>
              
              <Card data-id="hd6uisapg" data-path="src/pages/UserDashboard.tsx">
                <CardContent className="p-6" data-id="5h2m5oxto" data-path="src/pages/UserDashboard.tsx">
                  <div className="flex items-center justify-between" data-id="ehoymbamt" data-path="src/pages/UserDashboard.tsx">
                    <div data-id="93cnweweu" data-path="src/pages/UserDashboard.tsx">
                      <p className="text-sm text-gray-600" data-id="xvys86vmt" data-path="src/pages/UserDashboard.tsx">Views</p>
                      <p className="text-2xl font-bold text-gray-900" data-id="e0fqikaxp" data-path="src/pages/UserDashboard.tsx">{totalViews.toLocaleString()}</p>
                    </div>
                    <Eye className="w-8 h-8 text-purple-500" data-id="orfa1q5h4" data-path="src/pages/UserDashboard.tsx" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* My Listings */}
            <Card data-id="yiu6x82v3" data-path="src/pages/UserDashboard.tsx">
              <CardHeader data-id="bty3mrywb" data-path="src/pages/UserDashboard.tsx">
                <CardTitle data-id="4g8xse4zg" data-path="src/pages/UserDashboard.tsx">My Listings</CardTitle>
              </CardHeader>
              <CardContent data-id="e4pkflzs3" data-path="src/pages/UserDashboard.tsx">
                {myListings.length === 0 ? (
                  <div className="text-center py-12" data-id="yax6fcmts" data-path="src/pages/UserDashboard.tsx">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4" data-id="9arzbj7a0" data-path="src/pages/UserDashboard.tsx">
                      <Plus className="w-8 h-8 text-gray-400" data-id="sgy3hoc15" data-path="src/pages/UserDashboard.tsx" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2" data-id="qilo7kada" data-path="src/pages/UserDashboard.tsx">
                      No listings yet
                    </h3>
                    <p className="text-gray-600 mb-6" data-id="pqx9gnkyd" data-path="src/pages/UserDashboard.tsx">
                      Start sharing your favorite places in Sri Lanka with the community
                    </p>
                    <Button onClick={() => setShowListingForm(true)} className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700" data-id="cfxv16wal" data-path="src/pages/UserDashboard.tsx">
                      <Plus className="w-5 h-5 mr-2" data-id="228uax316" data-path="src/pages/UserDashboard.tsx" />
                      Create Your First Listing
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {myListings.map(listing => (
                      <Card key={listing.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 hover:shadow-md transition-shadow">
                        <div className="flex-grow mb-4 sm:mb-0">
                          <h4 className="font-semibold text-lg text-gray-800">{listing.title}</h4>
                          <p className="text-sm text-gray-500">{listing.location.city}, {listing.location.district}</p>
                          <div className="mt-2">
                            <Badge variant={listing.approved ? 'default' : 'secondary'} className={listing.approved ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                              {listing.approved ? <CheckCircle className="w-3 h-3 mr-1.5" /> : <Clock className="w-3 h-3 mr-1.5" />}
                              {listing.approved ? 'Approved' : 'Pending'}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                           <Button variant="outline" size="sm" onClick={() => alert(`Viewing ${listing.title}`)}>
                            <Eye className="w-4 h-4 mr-1" /> View
                          </Button>
                           <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => alert(`Editing ${listing.title}`)}>
                                <Edit className="w-4 h-4 mr-2" /> Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => alert(`Deleting ${listing.title}`)} className="text-red-600 hover:!text-red-600">
                                <Trash2 className="w-4 h-4 mr-2" /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>);

};

export default UserDashboard;