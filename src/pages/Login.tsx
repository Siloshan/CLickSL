import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(formData.email, formData.password);

      if (success) {
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in."
        });
        navigate('/');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      setError('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (error) setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-orange-50 flex items-center justify-center p-4" data-id="c7qfnzs4d" data-path="src/pages/Login.tsx">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" data-id="ojcdkevyf" data-path="src/pages/Login.tsx">
        <img
          src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1920&h=1080&fit=crop&opacity=20"
          alt="Sri Lanka"
          className="w-full h-full object-cover opacity-20" data-id="vjmglcsxr" data-path="src/pages/Login.tsx" />

      </div>

      <div className="relative z-10 w-full max-w-md" data-id="1ntqaxrm9" data-path="src/pages/Login.tsx">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6" data-id="nlr3kfbeq" data-path="src/pages/Login.tsx">

          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-900" data-id="t89x7w0p6" data-path="src/pages/Login.tsx">

            <ArrowLeft className="w-4 h-4 mr-2" data-id="pu59zvg6s" data-path="src/pages/Login.tsx" />
            Back to Home
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} data-id="1va21a89b" data-path="src/pages/Login.tsx">

          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm" data-id="m1d746ui7" data-path="src/pages/Login.tsx">
            <CardHeader className="text-center space-y-4" data-id="jiimwt1ti" data-path="src/pages/Login.tsx">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center" data-id="3rdpwex48" data-path="src/pages/Login.tsx">
                <span className="text-white font-bold text-xl" data-id="qnsrefzb0" data-path="src/pages/Login.tsx">SL</span>
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent" data-id="jlx9wjx8u" data-path="src/pages/Login.tsx">
                Welcome Back
              </CardTitle>
              <p className="text-gray-600" data-id="zdfts79gk" data-path="src/pages/Login.tsx">
                Sign in to continue exploring Sri Lanka
              </p>
            </CardHeader>

            <CardContent className="space-y-6" data-id="jskgz8na3" data-path="src/pages/Login.tsx">
              {error &&
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }} data-id="tfo1h59um" data-path="src/pages/Login.tsx">

                  <Alert className="border-red-200 bg-red-50" data-id="rymgxkgg7" data-path="src/pages/Login.tsx">
                    <AlertDescription className="text-red-700" data-id="u2our1gsi" data-path="src/pages/Login.tsx">
                      {error}
                    </AlertDescription>
                  </Alert>
                </motion.div>
              }

              <form onSubmit={handleSubmit} className="space-y-4" data-id="drsezyvjs" data-path="src/pages/Login.tsx">
                <div className="space-y-2" data-id="m1rn3s23j" data-path="src/pages/Login.tsx">
                  <Label htmlFor="email" data-id="gszgfjrt4" data-path="src/pages/Login.tsx">Email</Label>
                  <div className="relative" data-id="0rrorz0g8" data-path="src/pages/Login.tsx">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" data-id="x86at1tje" data-path="src/pages/Login.tsx" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                      disabled={isLoading} data-id="wu617i86w" data-path="src/pages/Login.tsx" />

                  </div>
                </div>

                <div className="space-y-2" data-id="5gnposz3f" data-path="src/pages/Login.tsx">
                  <Label htmlFor="password" data-id="9gxknrp31" data-path="src/pages/Login.tsx">Password</Label>
                  <div className="relative" data-id="65uvr96rl" data-path="src/pages/Login.tsx">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" data-id="7cdfpppoo" data-path="src/pages/Login.tsx" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-10"
                      required
                      disabled={isLoading} data-id="oyc72akmi" data-path="src/pages/Login.tsx" />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      disabled={isLoading} data-id="s05p3soc6" data-path="src/pages/Login.tsx">

                      {showPassword ?
                      <EyeOff className="w-4 h-4 text-gray-400" data-id="z8ql27426" data-path="src/pages/Login.tsx" /> :

                      <Eye className="w-4 h-4 text-gray-400" data-id="ee98tlxzi" data-path="src/pages/Login.tsx" />
                      }
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700"
                  disabled={isLoading} data-id="6bxxbu1gp" data-path="src/pages/Login.tsx">

                  {isLoading ?
                  <div className="flex items-center space-x-2" data-id="my13m3ns4" data-path="src/pages/Login.tsx">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" data-id="fcfb2mr8l" data-path="src/pages/Login.tsx" />
                      <span data-id="yoi80rhyj" data-path="src/pages/Login.tsx">Signing in...</span>
                    </div> :

                  'Sign In'
                  }
                </Button>
              </form>

              <div className="text-center space-y-4" data-id="2r3udg1hv" data-path="src/pages/Login.tsx">
                <div className="relative" data-id="knrjock9r" data-path="src/pages/Login.tsx">
                  <div className="absolute inset-0 flex items-center" data-id="o00u01toq" data-path="src/pages/Login.tsx">
                    <div className="w-full border-t border-gray-200" data-id="bx0ne5cts" data-path="src/pages/Login.tsx" />
                  </div>
                  <div className="relative flex justify-center text-sm" data-id="1er1dhxq6" data-path="src/pages/Login.tsx">
                    <span className="px-2 bg-white text-gray-500" data-id="h6w0vkkrw" data-path="src/pages/Login.tsx">Demo Accounts</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs" data-id="s13iyxpd4" data-path="src/pages/Login.tsx">
                  <div className="bg-blue-50 p-2 rounded border" data-id="exe0oohwh" data-path="src/pages/Login.tsx">
                    <div className="font-medium text-blue-900" data-id="k5eudrsqz" data-path="src/pages/Login.tsx">Admin</div>
                    <div className="text-blue-700" data-id="wrj3karsn" data-path="src/pages/Login.tsx">admin@srilanka.com</div>
                    <div className="text-blue-700" data-id="ujxfqva51" data-path="src/pages/Login.tsx">admin123</div>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded border" data-id="ytefvxe5e" data-path="src/pages/Login.tsx">
                    <div className="font-medium text-emerald-900" data-id="rhefmd2ak" data-path="src/pages/Login.tsx">User</div>
                    <div className="text-emerald-700" data-id="ixikbvxwc" data-path="src/pages/Login.tsx">user@example.com</div>
                    <div className="text-emerald-700" data-id="79i24xc9k" data-path="src/pages/Login.tsx">password</div>
                  </div>
                </div>

                <p className="text-gray-600" data-id="oeiodi8dz" data-path="src/pages/Login.tsx">
                  Don't have an account?{' '}
                  <Link
                    to="/register"
                    className="text-emerald-600 hover:text-emerald-700 font-medium" data-id="83zwcngyl" data-path="src/pages/Login.tsx">

                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>);

};

export default Login;