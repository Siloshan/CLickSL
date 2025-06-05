import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, Shield, Camera, Save } from 'lucide-react';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSave = () => {
    // Implementation for saving profile changes
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully."
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50" data-id="lthkogu2b" data-path="src/pages/Profile.tsx">
      <Navigation data-id="lpe0s2j2x" data-path="src/pages/Profile.tsx" />
      
      <div className="pt-20 pb-16" data-id="n82u8y97o" data-path="src/pages/Profile.tsx">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-id="x8rrip5yi" data-path="src/pages/Profile.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} data-id="a8hpfpb9t" data-path="src/pages/Profile.tsx">

            <h1 className="text-3xl font-bold text-gray-900 mb-8" data-id="1jk85hod6" data-path="src/pages/Profile.tsx">Profile Settings</h1>

            <div className="grid lg:grid-cols-3 gap-8" data-id="yjsi11p0r" data-path="src/pages/Profile.tsx">
              {/* Profile Card */}
              <Card className="lg:col-span-1" data-id="o7fxvlr68" data-path="src/pages/Profile.tsx">
                <CardContent className="p-6 text-center" data-id="rbasn05ce" data-path="src/pages/Profile.tsx">
                  <div className="relative inline-block mb-4" data-id="j23whip23" data-path="src/pages/Profile.tsx">
                    <Avatar className="w-24 h-24" data-id="g0lcgoad3" data-path="src/pages/Profile.tsx">
                      <AvatarImage src={user.avatar} alt={user.name} data-id="e9o9ytmfz" data-path="src/pages/Profile.tsx" />
                      <AvatarFallback className="text-2xl" data-id="c8ud8v77r" data-path="src/pages/Profile.tsx">
                        {user.name.split(' ').map((n) => n[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                      variant="secondary" data-id="b76hfrqtk" data-path="src/pages/Profile.tsx">

                      <Camera className="w-4 h-4" data-id="waxvp9fnz" data-path="src/pages/Profile.tsx" />
                    </Button>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-2" data-id="w4e7lgv7p" data-path="src/pages/Profile.tsx">
                    {user.name}
                  </h2>
                  
                  <div className="flex justify-center mb-4" data-id="fa0onwii4" data-path="src/pages/Profile.tsx">
                    <Badge
                      className={
                      user.role === 'admin' ?
                      'bg-purple-100 text-purple-800' :
                      'bg-blue-100 text-blue-800'
                      } data-id="nuwq48oj8" data-path="src/pages/Profile.tsx">

                      {user.role === 'admin' ?
                      <>
                          <Shield className="w-3 h-3 mr-1" data-id="h1u60ewm9" data-path="src/pages/Profile.tsx" />
                          Administrator
                        </> :

                      <>
                          <User className="w-3 h-3 mr-1" data-id="10n94uzo5" data-path="src/pages/Profile.tsx" />
                          Community Member
                        </>
                      }
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 text-sm" data-id="vxn0zf4xn" data-path="src/pages/Profile.tsx">
                    Member since January 2024
                  </p>
                </CardContent>
              </Card>

              {/* Profile Information */}
              <Card className="lg:col-span-2" data-id="fyk35x2jm" data-path="src/pages/Profile.tsx">
                <CardHeader className="flex flex-row items-center justify-between" data-id="p66602b05" data-path="src/pages/Profile.tsx">
                  <CardTitle data-id="vn95pgwpu" data-path="src/pages/Profile.tsx">Personal Information</CardTitle>
                  <Button
                    variant={isEditing ? "default" : "outline"}
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)} data-id="sw1ue9kbd" data-path="src/pages/Profile.tsx">

                    {isEditing ?
                    <>
                        <Save className="w-4 h-4 mr-2" data-id="82fm5gq61" data-path="src/pages/Profile.tsx" />
                        Save Changes
                      </> :

                    'Edit Profile'
                    }
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6" data-id="hqlid3oh3" data-path="src/pages/Profile.tsx">
                  <div className="space-y-4" data-id="mooec9qrg" data-path="src/pages/Profile.tsx">
                    <div data-id="c2nn23ms9" data-path="src/pages/Profile.tsx">
                      <Label htmlFor="name" data-id="t3jzoqbgx" data-path="src/pages/Profile.tsx">Full Name</Label>
                      <div className="relative mt-1" data-id="ceaqbhgcb" data-path="src/pages/Profile.tsx">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" data-id="diciwg7oo" data-path="src/pages/Profile.tsx" />
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="pl-10" data-id="jour3crbu" data-path="src/pages/Profile.tsx" />

                      </div>
                    </div>

                    <div data-id="aixrmumc5" data-path="src/pages/Profile.tsx">
                      <Label htmlFor="email" data-id="kx2en5skl" data-path="src/pages/Profile.tsx">Email Address</Label>
                      <div className="relative mt-1" data-id="qwthfcedt" data-path="src/pages/Profile.tsx">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" data-id="n4ihdy6ov" data-path="src/pages/Profile.tsx" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="pl-10" data-id="jdxabxa2y" data-path="src/pages/Profile.tsx" />

                      </div>
                    </div>

                    <div data-id="ycr7kkh60" data-path="src/pages/Profile.tsx">
                      <Label data-id="ao46ps3fm" data-path="src/pages/Profile.tsx">Account Type</Label>
                      <div className="mt-1 p-3 bg-gray-50 rounded-md" data-id="5999kav0c" data-path="src/pages/Profile.tsx">
                        <div className="flex items-center space-x-2" data-id="x72x6p9hd" data-path="src/pages/Profile.tsx">
                          {user.role === 'admin' ?
                          <Shield className="w-5 h-5 text-purple-600" data-id="4wd26fgnl" data-path="src/pages/Profile.tsx" /> :

                          <User className="w-5 h-5 text-blue-600" data-id="navzwtdda" data-path="src/pages/Profile.tsx" />
                          }
                          <span className="font-medium capitalize" data-id="go2mqdtbu" data-path="src/pages/Profile.tsx">{user.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {isEditing &&
                  <div className="flex space-x-3 pt-4 border-t" data-id="mysz92s6d" data-path="src/pages/Profile.tsx">
                      <Button
                      variant="outline"
                      onClick={() => {
                        setIsEditing(false);
                        setFormData({
                          name: user.name,
                          email: user.email
                        });
                      }} data-id="wwlwtmqym" data-path="src/pages/Profile.tsx">

                        Cancel
                      </Button>
                      <Button
                      onClick={handleSave}
                      className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700" data-id="73muyoh01" data-path="src/pages/Profile.tsx">

                        <Save className="w-4 h-4 mr-2" data-id="df9iwlg6r" data-path="src/pages/Profile.tsx" />
                        Save Changes
                      </Button>
                    </div>
                  }
                </CardContent>
              </Card>
            </div>

            {/* Activity Stats */}
            <Card className="mt-8" data-id="wtgqvuj02" data-path="src/pages/Profile.tsx">
              <CardHeader data-id="h4fa7h38t" data-path="src/pages/Profile.tsx">
                <CardTitle data-id="6xwwmsfis" data-path="src/pages/Profile.tsx">Activity Overview</CardTitle>
              </CardHeader>
              <CardContent data-id="eatmd6vye" data-path="src/pages/Profile.tsx">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-id="qht7leyvs" data-path="src/pages/Profile.tsx">
                  <div className="text-center p-4 bg-blue-50 rounded-lg" data-id="iqv4qorp2" data-path="src/pages/Profile.tsx">
                    <div className="text-2xl font-bold text-blue-600 mb-1" data-id="vh5x5q7xh" data-path="src/pages/Profile.tsx">3</div>
                    <div className="text-sm text-gray-600" data-id="jl23yuqkq" data-path="src/pages/Profile.tsx">Listings Created</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg" data-id="asozl170b" data-path="src/pages/Profile.tsx">
                    <div className="text-2xl font-bold text-emerald-600 mb-1" data-id="5pwl5x0oi" data-path="src/pages/Profile.tsx">24</div>
                    <div className="text-sm text-gray-600" data-id="eq9zj4xeg" data-path="src/pages/Profile.tsx">Reviews Posted</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg" data-id="ag6dvkwvj" data-path="src/pages/Profile.tsx">
                    <div className="text-2xl font-bold text-orange-600 mb-1" data-id="hmhebeqyn" data-path="src/pages/Profile.tsx">1.2K</div>
                    <div className="text-sm text-gray-600" data-id="c75wm4uog" data-path="src/pages/Profile.tsx">Profile Views</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>);

};

export default Profile;