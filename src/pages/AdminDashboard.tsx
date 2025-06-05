import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import { useAuth } from '@/contexts/AuthContext';
import { mockListings } from '@/data/mockData';
import {
  Shield,
  Users,
  Eye,
  CheckCircle,
  Clock,
  XCircle,
  MapPin,
  Star,
  AlertTriangle } from
'lucide-react';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [pendingListings] = useState(mockListings.filter((listing) => !listing.approved));

  if (!user || user.role !== 'admin') {
    navigate('/');
    return null;
  }

  const handleApprove = (listingId: string) => {
    console.log('Approving listing:', listingId);
    // Implementation for approving listing
  };

  const handleReject = (listingId: string) => {
    console.log('Rejecting listing:', listingId);
    // Implementation for rejecting listing
  };

  return (
    <div className="min-h-screen bg-gray-50" data-id="cc7dwpc8y" data-path="src/pages/AdminDashboard.tsx">
      <Navigation data-id="wtnsszx23" data-path="src/pages/AdminDashboard.tsx" />
      
      <div className="pt-20 pb-16" data-id="1lu5onrob" data-path="src/pages/AdminDashboard.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="5ac5ksxla" data-path="src/pages/AdminDashboard.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} data-id="g9ug7xn4b" data-path="src/pages/AdminDashboard.tsx">

            <div className="flex items-center mb-8" data-id="dbyhrwzbg" data-path="src/pages/AdminDashboard.tsx">
              <Shield className="w-8 h-8 text-purple-600 mr-3" data-id="z9tp3vh64" data-path="src/pages/AdminDashboard.tsx" />
              <div data-id="3jxk5eixb" data-path="src/pages/AdminDashboard.tsx">
                <h1 className="text-3xl font-bold text-gray-900" data-id="l5rh6lax8" data-path="src/pages/AdminDashboard.tsx">Admin Dashboard</h1>
                <p className="text-gray-600 mt-2" data-id="3036psszq" data-path="src/pages/AdminDashboard.tsx">Manage listings, users, and platform content</p>
              </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8" data-id="hv9nohymt" data-path="src/pages/AdminDashboard.tsx">
              <Card data-id="mqywvc3io" data-path="src/pages/AdminDashboard.tsx">
                <CardContent className="p-6" data-id="atzdyqazt" data-path="src/pages/AdminDashboard.tsx">
                  <div className="flex items-center justify-between" data-id="vvm7ik5b8" data-path="src/pages/AdminDashboard.tsx">
                    <div data-id="2969lr232" data-path="src/pages/AdminDashboard.tsx">
                      <p className="text-sm text-gray-600" data-id="ygogjivjo" data-path="src/pages/AdminDashboard.tsx">Total Listings</p>
                      <p className="text-2xl font-bold text-gray-900" data-id="4wmlc5r4r" data-path="src/pages/AdminDashboard.tsx">{mockListings.length}</p>
                    </div>
                    <Eye className="w-8 h-8 text-blue-500" data-id="8nh22n09l" data-path="src/pages/AdminDashboard.tsx" />
                  </div>
                </CardContent>
              </Card>
              
              <Card data-id="kvmv1aydy" data-path="src/pages/AdminDashboard.tsx">
                <CardContent className="p-6" data-id="l2co1xj8v" data-path="src/pages/AdminDashboard.tsx">
                  <div className="flex items-center justify-between" data-id="6p4upjmyo" data-path="src/pages/AdminDashboard.tsx">
                    <div data-id="51hum8k40" data-path="src/pages/AdminDashboard.tsx">
                      <p className="text-sm text-gray-600" data-id="rklagegs0" data-path="src/pages/AdminDashboard.tsx">Approved</p>
                      <p className="text-2xl font-bold text-green-600" data-id="b34e51l8b" data-path="src/pages/AdminDashboard.tsx">
                        {mockListings.filter((l) => l.approved).length}
                      </p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-500" data-id="9vsp1dvmo" data-path="src/pages/AdminDashboard.tsx" />
                  </div>
                </CardContent>
              </Card>
              
              <Card data-id="li65qo0pd" data-path="src/pages/AdminDashboard.tsx">
                <CardContent className="p-6" data-id="wcgnrtask" data-path="src/pages/AdminDashboard.tsx">
                  <div className="flex items-center justify-between" data-id="xr4xb7wef" data-path="src/pages/AdminDashboard.tsx">
                    <div data-id="x29ynq5co" data-path="src/pages/AdminDashboard.tsx">
                      <p className="text-sm text-gray-600" data-id="b7ffkhtj5" data-path="src/pages/AdminDashboard.tsx">Pending</p>
                      <p className="text-2xl font-bold text-yellow-600" data-id="ffj974uis" data-path="src/pages/AdminDashboard.tsx">
                        {pendingListings.length}
                      </p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-500" data-id="zydw7p6l7" data-path="src/pages/AdminDashboard.tsx" />
                  </div>
                </CardContent>
              </Card>
              
              <Card data-id="h75a07etz" data-path="src/pages/AdminDashboard.tsx">
                <CardContent className="p-6" data-id="y9rgx2y2m" data-path="src/pages/AdminDashboard.tsx">
                  <div className="flex items-center justify-between" data-id="bmwkp2l01" data-path="src/pages/AdminDashboard.tsx">
                    <div data-id="0ocbiejah" data-path="src/pages/AdminDashboard.tsx">
                      <p className="text-sm text-gray-600" data-id="qmwd17e9w" data-path="src/pages/AdminDashboard.tsx">Users</p>
                      <p className="text-2xl font-bold text-gray-900" data-id="y2krzcmk8" data-path="src/pages/AdminDashboard.tsx">156</p>
                    </div>
                    <Users className="w-8 h-8 text-purple-500" data-id="08m51y8gb" data-path="src/pages/AdminDashboard.tsx" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="pending" className="space-y-6" data-id="zcuqdfiji" data-path="src/pages/AdminDashboard.tsx">
              <TabsList className="grid w-full grid-cols-3 lg:w-400" data-id="r5ltuat1v" data-path="src/pages/AdminDashboard.tsx">
                <TabsTrigger value="pending" data-id="2c7xc998q" data-path="src/pages/AdminDashboard.tsx">
                  Pending Approval ({pendingListings.length})
                </TabsTrigger>
                <TabsTrigger value="approved" data-id="tjdf5y0g2" data-path="src/pages/AdminDashboard.tsx">Approved</TabsTrigger>
                <TabsTrigger value="users" data-id="2q540r0eu" data-path="src/pages/AdminDashboard.tsx">Users</TabsTrigger>
              </TabsList>

              {/* Pending Listings */}
              <TabsContent value="pending" data-id="r8w6efk7w" data-path="src/pages/AdminDashboard.tsx">
                <Card data-id="yszcqy0kz" data-path="src/pages/AdminDashboard.tsx">
                  <CardHeader data-id="cmmtu71sq" data-path="src/pages/AdminDashboard.tsx">
                    <CardTitle className="flex items-center space-x-2" data-id="0q00jf629" data-path="src/pages/AdminDashboard.tsx">
                      <Clock className="w-5 h-5 text-yellow-500" data-id="f1c74rrto" data-path="src/pages/AdminDashboard.tsx" />
                      <span data-id="m2kefi84h" data-path="src/pages/AdminDashboard.tsx">Listings Pending Approval</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent data-id="kpxl13evm" data-path="src/pages/AdminDashboard.tsx">
                    {pendingListings.length === 0 ?
                    <div className="text-center py-8" data-id="bbbf28bw4" data-path="src/pages/AdminDashboard.tsx">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" data-id="0fz4avb4c" data-path="src/pages/AdminDashboard.tsx" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2" data-id="al8xp7g6x" data-path="src/pages/AdminDashboard.tsx">
                          All caught up!
                        </h3>
                        <p className="text-gray-600" data-id="wdntf01l1" data-path="src/pages/AdminDashboard.tsx">
                          No listings are pending approval at the moment.
                        </p>
                      </div> :

                    <div className="space-y-4" data-id="rhziz7t4b" data-path="src/pages/AdminDashboard.tsx">
                        {pendingListings.map((listing) =>
                      <motion.div
                        key={listing.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow" data-id="htfio3nwd" data-path="src/pages/AdminDashboard.tsx">

                            <div className="flex items-start space-x-4" data-id="zq0zviwmm" data-path="src/pages/AdminDashboard.tsx">
                              <img
                            src={listing.images[0]}
                            alt={listing.title}
                            className="w-24 h-24 object-cover rounded-lg" data-id="a1klocwhs" data-path="src/pages/AdminDashboard.tsx" />

                              <div className="flex-1" data-id="b3f5mzep7" data-path="src/pages/AdminDashboard.tsx">
                                <div className="flex items-start justify-between" data-id="0hbkizvuy" data-path="src/pages/AdminDashboard.tsx">
                                  <div data-id="i32l1t9fa" data-path="src/pages/AdminDashboard.tsx">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1" data-id="0t7p09lhu" data-path="src/pages/AdminDashboard.tsx">
                                      {listing.title}
                                    </h3>
                                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2" data-id="2y8dlhx5d" data-path="src/pages/AdminDashboard.tsx">
                                      <div className="flex items-center space-x-1" data-id="ozpe90ina" data-path="src/pages/AdminDashboard.tsx">
                                        <MapPin className="w-4 h-4" data-id="6bzbjwnu1" data-path="src/pages/AdminDashboard.tsx" />
                                        <span data-id="qodpubak8" data-path="src/pages/AdminDashboard.tsx">{listing.location.city}, {listing.location.district}</span>
                                      </div>
                                      <Badge variant="secondary" data-id="xnjv9cn2e" data-path="src/pages/AdminDashboard.tsx">
                                        {listing.category}
                                      </Badge>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3" data-id="u407fbw6a" data-path="src/pages/AdminDashboard.tsx">
                                      {listing.shortDescription}
                                    </p>
                                    <div className="text-xs text-gray-500" data-id="uvz3kz5pv" data-path="src/pages/AdminDashboard.tsx">
                                      Submitted by: {listing.createdBy} on {listing.createdAt}
                                    </div>
                                  </div>
                                  <div className="flex space-x-2" data-id="5pgdjqlk0" data-path="src/pages/AdminDashboard.tsx">
                                    <Button
                                  size="sm"
                                  onClick={() => handleApprove(listing.id)}
                                  className="bg-green-600 hover:bg-green-700" data-id="udjub3uxn" data-path="src/pages/AdminDashboard.tsx">

                                      <CheckCircle className="w-4 h-4 mr-1" data-id="jbq7uzyx0" data-path="src/pages/AdminDashboard.tsx" />
                                      Approve
                                    </Button>
                                    <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleReject(listing.id)}
                                  className="text-red-600 border-red-200 hover:bg-red-50" data-id="dkakshjfi" data-path="src/pages/AdminDashboard.tsx">

                                      <XCircle className="w-4 h-4 mr-1" data-id="poqnzsy9c" data-path="src/pages/AdminDashboard.tsx" />
                                      Reject
                                    </Button>
                                    <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => navigate(`/listing/${listing.id}`)} data-id="rj425jtqq" data-path="src/pages/AdminDashboard.tsx">

                                      <Eye className="w-4 h-4" data-id="ez49o3a6s" data-path="src/pages/AdminDashboard.tsx" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                      )}
                      </div>
                    }
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Approved Listings */}
              <TabsContent value="approved" data-id="v53sn56v2" data-path="src/pages/AdminDashboard.tsx">
                <Card data-id="wihgldnrh" data-path="src/pages/AdminDashboard.tsx">
                  <CardHeader data-id="kpkzz057i" data-path="src/pages/AdminDashboard.tsx">
                    <CardTitle className="flex items-center space-x-2" data-id="rku5e9zwt" data-path="src/pages/AdminDashboard.tsx">
                      <CheckCircle className="w-5 h-5 text-green-500" data-id="croexo4m9" data-path="src/pages/AdminDashboard.tsx" />
                      <span data-id="2fl9op5f0" data-path="src/pages/AdminDashboard.tsx">Approved Listings</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent data-id="1kx1iel20" data-path="src/pages/AdminDashboard.tsx">
                    <div className="space-y-4" data-id="kcg5js9m0" data-path="src/pages/AdminDashboard.tsx">
                      {mockListings.filter((l) => l.approved).map((listing) =>
                      <div
                        key={listing.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg" data-id="6dsuneo02" data-path="src/pages/AdminDashboard.tsx">

                          <div className="flex items-center space-x-4" data-id="ktth9ifv1" data-path="src/pages/AdminDashboard.tsx">
                            <img
                            src={listing.images[0]}
                            alt={listing.title}
                            className="w-16 h-16 object-cover rounded-lg" data-id="zy9fbbom1" data-path="src/pages/AdminDashboard.tsx" />

                            <div data-id="utzgfnddk" data-path="src/pages/AdminDashboard.tsx">
                              <h3 className="font-semibold text-gray-900" data-id="7vhrel5u5" data-path="src/pages/AdminDashboard.tsx">{listing.title}</h3>
                              <div className="flex items-center space-x-2 text-sm text-gray-600" data-id="jz4r1wd4f" data-path="src/pages/AdminDashboard.tsx">
                                <MapPin className="w-4 h-4" data-id="aso7iwlty" data-path="src/pages/AdminDashboard.tsx" />
                                <span data-id="crgr4rjua" data-path="src/pages/AdminDashboard.tsx">{listing.location.city}</span>
                                <Star className="w-4 h-4 text-yellow-400" data-id="90syud7fa" data-path="src/pages/AdminDashboard.tsx" />
                                <span data-id="aehvodslc" data-path="src/pages/AdminDashboard.tsx">{listing.rating}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2" data-id="u5hfghavo" data-path="src/pages/AdminDashboard.tsx">
                            {listing.featured &&
                          <Badge className="bg-yellow-100 text-yellow-800" data-id="oxyo0izv6" data-path="src/pages/AdminDashboard.tsx">
                                Featured
                              </Badge>
                          }
                            <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => navigate(`/listing/${listing.id}`)} data-id="fe4w7czsc" data-path="src/pages/AdminDashboard.tsx">

                              <Eye className="w-4 h-4" data-id="ha2gtq33a" data-path="src/pages/AdminDashboard.tsx" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Users Management */}
              <TabsContent value="users" data-id="essjwbk96" data-path="src/pages/AdminDashboard.tsx">
                <Card data-id="lokda6q5j" data-path="src/pages/AdminDashboard.tsx">
                  <CardHeader data-id="f4wvfmv79" data-path="src/pages/AdminDashboard.tsx">
                    <CardTitle className="flex items-center space-x-2" data-id="jt7i7qryl" data-path="src/pages/AdminDashboard.tsx">
                      <Users className="w-5 h-5 text-purple-500" data-id="141kb3dsu" data-path="src/pages/AdminDashboard.tsx" />
                      <span data-id="d48xv6m3v" data-path="src/pages/AdminDashboard.tsx">User Management</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent data-id="fbx501s8z" data-path="src/pages/AdminDashboard.tsx">
                    <div className="text-center py-8" data-id="ap4qusgvg" data-path="src/pages/AdminDashboard.tsx">
                      <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" data-id="2te7gaxq3" data-path="src/pages/AdminDashboard.tsx" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2" data-id="2egatsiw9" data-path="src/pages/AdminDashboard.tsx">
                        User Management
                      </h3>
                      <p className="text-gray-600" data-id="09dxxbcev" data-path="src/pages/AdminDashboard.tsx">
                        User management features will be available in the next update.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>);

};

export default AdminDashboard;