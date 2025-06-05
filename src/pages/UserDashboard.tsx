import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Plus, Eye, Edit, Trash2, Clock, CheckCircle, XCircle } from 'lucide-react';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

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
              <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700" data-id="24643rgvu" data-path="src/pages/UserDashboard.tsx">
                <Plus className="w-5 h-5 mr-2" data-id="f17wza81p" data-path="src/pages/UserDashboard.tsx" />
                Add New Listing
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8" data-id="le5s5wete" data-path="src/pages/UserDashboard.tsx">
              <Card data-id="mb6jpv55t" data-path="src/pages/UserDashboard.tsx">
                <CardContent className="p-6" data-id="7yowii6ug" data-path="src/pages/UserDashboard.tsx">
                  <div className="flex items-center justify-between" data-id="dc85r6yas" data-path="src/pages/UserDashboard.tsx">
                    <div data-id="9zecroam8" data-path="src/pages/UserDashboard.tsx">
                      <p className="text-sm text-gray-600" data-id="8f2xun5sh" data-path="src/pages/UserDashboard.tsx">Total Listings</p>
                      <p className="text-2xl font-bold text-gray-900" data-id="zn3ouiio3" data-path="src/pages/UserDashboard.tsx">3</p>
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
                      <p className="text-2xl font-bold text-green-600" data-id="zsgp9rqeo" data-path="src/pages/UserDashboard.tsx">2</p>
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
                      <p className="text-2xl font-bold text-yellow-600" data-id="0dnkp1xtv" data-path="src/pages/UserDashboard.tsx">1</p>
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
                      <p className="text-2xl font-bold text-gray-900" data-id="e0fqikaxp" data-path="src/pages/UserDashboard.tsx">1.2K</p>
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
                  <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700" data-id="cfxv16wal" data-path="src/pages/UserDashboard.tsx">
                    <Plus className="w-5 h-5 mr-2" data-id="228uax316" data-path="src/pages/UserDashboard.tsx" />
                    Create Your First Listing
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>);

};

export default UserDashboard;