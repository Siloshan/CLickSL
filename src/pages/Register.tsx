import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from 'lucide-react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { register } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!agreeToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const success = await register(formData.name, formData.email, formData.password);

      if (success) {
        toast({
          title: "Welcome to Explore Sri Lanka!",
          description: "Your account has been created successfully."
        });
        navigate('/');
      } else {
        setErrors({ general: 'Registration failed. Please try again.' });
      }
    } catch (error) {
      setErrors({ general: 'An error occurred during registration. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-orange-50 flex items-center justify-center p-4" data-id="92eu3awwk" data-path="src/pages/Register.tsx">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" data-id="fdqn17m2a" data-path="src/pages/Register.tsx">
        <img
          src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1920&h=1080&fit=crop&opacity=20"
          alt="Sri Lanka"
          className="w-full h-full object-cover opacity-20" data-id="ihxgqsynq" data-path="src/pages/Register.tsx" />

      </div>

      <div className="relative z-10 w-full max-w-md" data-id="hfkaueh2g" data-path="src/pages/Register.tsx">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6" data-id="yw8fgc3we" data-path="src/pages/Register.tsx">

          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-900" data-id="7tmqnow1w" data-path="src/pages/Register.tsx">

            <ArrowLeft className="w-4 h-4 mr-2" data-id="d7p21wfk9" data-path="src/pages/Register.tsx" />
            Back to Home
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} data-id="scvoz7dzm" data-path="src/pages/Register.tsx">

          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm" data-id="uw0kxerib" data-path="src/pages/Register.tsx">
            <CardHeader className="text-center space-y-4" data-id="a1pmshtqb" data-path="src/pages/Register.tsx">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center" data-id="jlkgrn5ws" data-path="src/pages/Register.tsx">
                <span className="text-white font-bold text-xl" data-id="a264ax0oe" data-path="src/pages/Register.tsx">SL</span>
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent" data-id="8odtepvj1" data-path="src/pages/Register.tsx">
                Join Our Community
              </CardTitle>
              <p className="text-gray-600" data-id="r61ue38tc" data-path="src/pages/Register.tsx">
                Start sharing your Sri Lankan adventures
              </p>
            </CardHeader>

            <CardContent className="space-y-6" data-id="mv9mv7wt3" data-path="src/pages/Register.tsx">
              {errors.general &&
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }} data-id="322tsp55t" data-path="src/pages/Register.tsx">

                  <Alert className="border-red-200 bg-red-50" data-id="q3svy3m3l" data-path="src/pages/Register.tsx">
                    <AlertDescription className="text-red-700" data-id="2ob0it39m" data-path="src/pages/Register.tsx">
                      {errors.general}
                    </AlertDescription>
                  </Alert>
                </motion.div>
              }

              <form onSubmit={handleSubmit} className="space-y-4" data-id="rtvxz2e7v" data-path="src/pages/Register.tsx">
                <div className="space-y-2" data-id="hjnxnldwl" data-path="src/pages/Register.tsx">
                  <Label htmlFor="name" data-id="fw80zoang" data-path="src/pages/Register.tsx">Full Name</Label>
                  <div className="relative" data-id="k13kcqlt8" data-path="src/pages/Register.tsx">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" data-id="sj1cowp4u" data-path="src/pages/Register.tsx" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`pl-10 ${errors.name ? 'border-red-300 focus:border-red-500' : ''}`}
                      disabled={isLoading} data-id="xabuk9q7t" data-path="src/pages/Register.tsx" />

                  </div>
                  {errors.name &&
                  <p className="text-red-500 text-sm" data-id="rcs69hkg0" data-path="src/pages/Register.tsx">{errors.name}</p>
                  }
                </div>

                <div className="space-y-2" data-id="3jp1hz2x7" data-path="src/pages/Register.tsx">
                  <Label htmlFor="email" data-id="yqhyxax96" data-path="src/pages/Register.tsx">Email</Label>
                  <div className="relative" data-id="jm6ix9xeo" data-path="src/pages/Register.tsx">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" data-id="m06wjlbua" data-path="src/pages/Register.tsx" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`pl-10 ${errors.email ? 'border-red-300 focus:border-red-500' : ''}`}
                      disabled={isLoading} data-id="fri0t8sbc" data-path="src/pages/Register.tsx" />

                  </div>
                  {errors.email &&
                  <p className="text-red-500 text-sm" data-id="iubk7c49s" data-path="src/pages/Register.tsx">{errors.email}</p>
                  }
                </div>

                <div className="space-y-2" data-id="zshj86796" data-path="src/pages/Register.tsx">
                  <Label htmlFor="password" data-id="xrjnpgek2" data-path="src/pages/Register.tsx">Password</Label>
                  <div className="relative" data-id="uskezn0dv" data-path="src/pages/Register.tsx">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" data-id="q4k7k63bx" data-path="src/pages/Register.tsx" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`pl-10 pr-10 ${errors.password ? 'border-red-300 focus:border-red-500' : ''}`}
                      disabled={isLoading} data-id="69trcxw20" data-path="src/pages/Register.tsx" />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      disabled={isLoading} data-id="prstthx2d" data-path="src/pages/Register.tsx">

                      {showPassword ?
                      <EyeOff className="w-4 h-4 text-gray-400" data-id="a82dksr56" data-path="src/pages/Register.tsx" /> :

                      <Eye className="w-4 h-4 text-gray-400" data-id="5fv4o5a8q" data-path="src/pages/Register.tsx" />
                      }
                    </Button>
                  </div>
                  {errors.password &&
                  <p className="text-red-500 text-sm" data-id="werbe2ud3" data-path="src/pages/Register.tsx">{errors.password}</p>
                  }
                </div>

                <div className="space-y-2" data-id="4pvpamr4o" data-path="src/pages/Register.tsx">
                  <Label htmlFor="confirmPassword" data-id="ylzw5c3r3" data-path="src/pages/Register.tsx">Confirm Password</Label>
                  <div className="relative" data-id="0xa97sx1n" data-path="src/pages/Register.tsx">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" data-id="zv2l0aw18" data-path="src/pages/Register.tsx" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`pl-10 pr-10 ${errors.confirmPassword ? 'border-red-300 focus:border-red-500' : ''}`}
                      disabled={isLoading} data-id="s8jrk22hj" data-path="src/pages/Register.tsx" />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      disabled={isLoading} data-id="xl24hh7pw" data-path="src/pages/Register.tsx">

                      {showConfirmPassword ?
                      <EyeOff className="w-4 h-4 text-gray-400" data-id="e6exjfryf" data-path="src/pages/Register.tsx" /> :

                      <Eye className="w-4 h-4 text-gray-400" data-id="t33cmasuk" data-path="src/pages/Register.tsx" />
                      }
                    </Button>
                  </div>
                  {errors.confirmPassword &&
                  <p className="text-red-500 text-sm" data-id="392j2m6kz" data-path="src/pages/Register.tsx">{errors.confirmPassword}</p>
                  }
                </div>

                <div className="space-y-2" data-id="owfhmaudc" data-path="src/pages/Register.tsx">
                  <div className="flex items-center space-x-2" data-id="iagewtx3t" data-path="src/pages/Register.tsx">
                    <Checkbox
                      id="terms"
                      checked={agreeToTerms}
                      onCheckedChange={(checked) => {
                        setAgreeToTerms(checked as boolean);
                        if (errors.terms) {
                          setErrors((prev) => {
                            const newErrors = { ...prev };
                            delete newErrors.terms;
                            return newErrors;
                          });
                        }
                      }}
                      disabled={isLoading} data-id="x8m7wje7r" data-path="src/pages/Register.tsx" />

                    <Label htmlFor="terms" className="text-sm leading-5" data-id="uwdwjr3nb" data-path="src/pages/Register.tsx">
                      I agree to the{' '}
                      <Link to="/terms" className="text-emerald-600 hover:text-emerald-700" data-id="jfjvpbxk0" data-path="src/pages/Register.tsx">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-emerald-600 hover:text-emerald-700" data-id="xcqriaoce" data-path="src/pages/Register.tsx">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  {errors.terms &&
                  <p className="text-red-500 text-sm" data-id="bdb14zg7t" data-path="src/pages/Register.tsx">{errors.terms}</p>
                  }
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700"
                  disabled={isLoading} data-id="3sogpvp0y" data-path="src/pages/Register.tsx">

                  {isLoading ?
                  <div className="flex items-center space-x-2" data-id="xsbqvu2g9" data-path="src/pages/Register.tsx">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" data-id="qk62iy3ex" data-path="src/pages/Register.tsx" />
                      <span data-id="w0it0f04u" data-path="src/pages/Register.tsx">Creating account...</span>
                    </div> :

                  'Create Account'
                  }
                </Button>
              </form>

              <div className="text-center" data-id="x9osu40rf" data-path="src/pages/Register.tsx">
                <p className="text-gray-600" data-id="hmf48lscl" data-path="src/pages/Register.tsx">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="text-emerald-600 hover:text-emerald-700 font-medium" data-id="9znkhgy7n" data-path="src/pages/Register.tsx">

                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>);

};

export default Register;