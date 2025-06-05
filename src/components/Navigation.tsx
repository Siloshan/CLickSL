import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Search, Menu, X, User, Settings, LogOut, Plus, Shield } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navigationItems = [
  { path: '/', label: 'Home' },
  { path: '/search', label: 'Search' }];


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200" data-id="4mj79rmua" data-path="src/components/Navigation.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="i9k265lbm" data-path="src/components/Navigation.tsx">
        <div className="flex justify-between items-center h-16" data-id="z4uxcleci" data-path="src/components/Navigation.tsx">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" data-id="1gpdbusjs" data-path="src/components/Navigation.tsx">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center" data-id="di2ymvtma" data-path="src/components/Navigation.tsx">
              <span className="text-white font-bold text-sm" data-id="agafgi8sh" data-path="src/components/Navigation.tsx">SL</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent" data-id="bmtdou30c" data-path="src/components/Navigation.tsx">
              Explore Sri Lanka
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" data-id="c92769gzc" data-path="src/components/Navigation.tsx">
            {navigationItems.map((item) =>
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium" data-id="iobineqeh" data-path="src/components/Navigation.tsx">

                {item.label}
              </Link>
            )}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4" data-id="cg99c7ji8" data-path="src/components/Navigation.tsx">
            {user ?
            <>
                <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/dashboard')}
                className="hidden sm:flex items-center space-x-2" data-id="av7acf3as" data-path="src/components/Navigation.tsx">

                  <Plus className="w-4 h-4" data-id="wv8cylxof" data-path="src/components/Navigation.tsx" />
                  <span data-id="09m3dqlgf" data-path="src/components/Navigation.tsx">Add Listing</span>
                </Button>

                <DropdownMenu data-id="68hm3fra4" data-path="src/components/Navigation.tsx">
                  <DropdownMenuTrigger asChild data-id="9ztx23xlq" data-path="src/components/Navigation.tsx">
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full" data-id="act568x1p" data-path="src/components/Navigation.tsx">
                      <Avatar className="h-10 w-10" data-id="teervsppb" data-path="src/components/Navigation.tsx">
                        <AvatarImage src={user.avatar} alt={user.name} data-id="s6awaqksv" data-path="src/components/Navigation.tsx" />
                        <AvatarFallback data-id="rspu5ehl0" data-path="src/components/Navigation.tsx">
                          {user.name.split(' ').map((n) => n[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      {user.role === 'admin' &&
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-purple-600" data-id="4z6lr53ay" data-path="src/components/Navigation.tsx">
                          <Shield className="w-3 h-3" data-id="kvou20lpq" data-path="src/components/Navigation.tsx" />
                        </Badge>
                    }
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" data-id="ldgkrn7eo" data-path="src/components/Navigation.tsx">
                    <div className="flex items-center justify-start gap-2 p-2" data-id="9lab65jea" data-path="src/components/Navigation.tsx">
                      <div className="flex flex-col space-y-1 leading-none" data-id="uy495f3wy" data-path="src/components/Navigation.tsx">
                        <p className="font-medium" data-id="rujs4mp3j" data-path="src/components/Navigation.tsx">{user.name}</p>
                        <p className="w-[200px] truncate text-sm text-muted-foreground" data-id="i7kozrwzz" data-path="src/components/Navigation.tsx">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuSeparator data-id="jiadijyi2" data-path="src/components/Navigation.tsx" />
                    <DropdownMenuItem onClick={() => navigate('/profile')} data-id="eu7aqhxw6" data-path="src/components/Navigation.tsx">
                      <User className="mr-2 h-4 w-4" data-id="t918out0a" data-path="src/components/Navigation.tsx" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/dashboard')} data-id="eg428kkp0" data-path="src/components/Navigation.tsx">
                      <Settings className="mr-2 h-4 w-4" data-id="hx1yvd2xp" data-path="src/components/Navigation.tsx" />
                      Dashboard
                    </DropdownMenuItem>
                    {user.role === 'admin' &&
                  <DropdownMenuItem onClick={() => navigate('/admin')} data-id="502qkwpt7" data-path="src/components/Navigation.tsx">
                        <Shield className="mr-2 h-4 w-4" data-id="dvlwxvhc2" data-path="src/components/Navigation.tsx" />
                        Admin Panel
                      </DropdownMenuItem>
                  }
                    <DropdownMenuSeparator data-id="bkrjeugk1" data-path="src/components/Navigation.tsx" />
                    <DropdownMenuItem onClick={handleLogout} className="text-red-600" data-id="orpwcofjh" data-path="src/components/Navigation.tsx">
                      <LogOut className="mr-2 h-4 w-4" data-id="tzhrdaksa" data-path="src/components/Navigation.tsx" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </> :

            <div className="hidden sm:flex items-center space-x-2" data-id="x7azio2ha" data-path="src/components/Navigation.tsx">
                <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/login')} data-id="5eaifctqw" data-path="src/components/Navigation.tsx">

                  Sign In
                </Button>
                <Button
                size="sm"
                onClick={() => navigate('/register')}
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700" data-id="7zfeqbtsv" data-path="src/components/Navigation.tsx">

                  Join Now
                </Button>
              </div>
            }

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)} data-id="l0kyfd58j" data-path="src/components/Navigation.tsx">

              {isMenuOpen ? <X className="w-5 h-5" data-id="htbsetbf6" data-path="src/components/Navigation.tsx" /> : <Menu className="w-5 h-5" data-id="16r8h5beh" data-path="src/components/Navigation.tsx" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-gray-200 bg-white" data-id="hyh4kutjb" data-path="src/components/Navigation.tsx">

            <div className="px-2 pt-2 pb-3 space-y-1" data-id="6lc0zjyf1" data-path="src/components/Navigation.tsx">
              {navigationItems.map((item) =>
            <Link
              key={item.path}
              to={item.path}
              className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)} data-id="12qghkbm8" data-path="src/components/Navigation.tsx">

                  {item.label}
                </Link>
            )}
              
              {user ?
            <>
                  <div className="px-3 py-2 border-t border-gray-200 mt-2" data-id="793na327t" data-path="src/components/Navigation.tsx">
                    <div className="flex items-center space-x-3" data-id="5rg597lyf" data-path="src/components/Navigation.tsx">
                      <Avatar className="h-8 w-8" data-id="adsgg0fiq" data-path="src/components/Navigation.tsx">
                        <AvatarImage src={user.avatar} alt={user.name} data-id="cm6fbvg36" data-path="src/components/Navigation.tsx" />
                        <AvatarFallback data-id="0lui5f93y" data-path="src/components/Navigation.tsx">
                          {user.name.split(' ').map((n) => n[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div data-id="cdyww3947" data-path="src/components/Navigation.tsx">
                        <div className="font-medium text-sm" data-id="j8v5jp295" data-path="src/components/Navigation.tsx">{user.name}</div>
                        <div className="text-xs text-gray-500" data-id="z5o6p9nfg" data-path="src/components/Navigation.tsx">{user.email}</div>
                      </div>
                    </div>
                  </div>
                  <Link
                to="/dashboard"
                className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)} data-id="fqdux9ask" data-path="src/components/Navigation.tsx">

                    Dashboard
                  </Link>
                  <Link
                to="/profile"
                className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)} data-id="jj7gx7p7h" data-path="src/components/Navigation.tsx">

                    Profile
                  </Link>
                  {user.role === 'admin' &&
              <Link
                to="/admin"
                className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)} data-id="ntndid1oo" data-path="src/components/Navigation.tsx">

                      Admin Panel
                    </Link>
              }
                  <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 transition-colors" data-id="vhcgn39en" data-path="src/components/Navigation.tsx">

                    Sign Out
                  </button>
                </> :

            <div className="px-3 py-2 border-t border-gray-200 mt-2 space-y-2" data-id="apzlnn3rl" data-path="src/components/Navigation.tsx">
                  <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => {
                  navigate('/login');
                  setIsMenuOpen(false);
                }} data-id="fxq7m0ub4" data-path="src/components/Navigation.tsx">

                    Sign In
                  </Button>
                  <Button
                size="sm"
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700"
                onClick={() => {
                  navigate('/register');
                  setIsMenuOpen(false);
                }} data-id="wspkudsiw" data-path="src/components/Navigation.tsx">

                    Join Now
                  </Button>
                </div>
            }
            </div>
          </motion.div>
        }
      </div>
    </nav>);

};

export default Navigation;