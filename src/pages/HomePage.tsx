import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import ListingCard from '@/components/ListingCard';
import SearchBar from '@/components/SearchBar';
import { mockListings, categories } from '@/data/mockData';
import { Search, MapPin, Star, TrendingUp, Users, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const featuredListings = mockListings.filter((listing) => listing.featured && listing.approved);

  const stats = [
  { icon: MapPin, label: 'Destinations', value: '500+', color: 'bg-blue-500' },
  { icon: Star, label: 'Reviews', value: '10K+', color: 'bg-emerald-500' },
  { icon: Users, label: 'Travelers', value: '50K+', color: 'bg-orange-500' },
  { icon: Award, label: 'Awards', value: '25+', color: 'bg-purple-500' }];


  return (
    <div className="min-h-screen" data-id="xrqwbbn4c" data-path="src/pages/HomePage.tsx">
      <Navigation data-id="jra0ib8qx" data-path="src/pages/HomePage.tsx" />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-id="i6qhfyp21" data-path="src/pages/HomePage.tsx">
        <div className="absolute inset-0 z-0" data-id="2fq0nd5jd" data-path="src/pages/HomePage.tsx">
          <img
            src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1920&h=1080&fit=crop"
            alt="Sri Lanka Landscape"
            className="w-full h-full object-cover" data-id="sb7thl3u6" data-path="src/pages/HomePage.tsx" />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-emerald-900/50 to-orange-900/70" data-id="d4vpbs6q5" data-path="src/pages/HomePage.tsx" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4" data-id="66ztwhlrz" data-path="src/pages/HomePage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} data-id="n5uef5u35" data-path="src/pages/HomePage.tsx">

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" data-id="y3c0boba2" data-path="src/pages/HomePage.tsx">
              Explore
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent" data-id="tgdca2m8y" data-path="src/pages/HomePage.tsx"> Sri Lanka</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-id="qa1qzi5qh" data-path="src/pages/HomePage.tsx">
              Your AI-powered travel companion for discovering the pearl of the Indian Ocean
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto" data-id="cy8fjui84" data-path="src/pages/HomePage.tsx">

            <SearchBar placeholder="Ask me anything about Sri Lanka..." data-id="dch8h1g8p" data-path="src/pages/HomePage.tsx" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8" data-id="k29z2yzxa" data-path="src/pages/HomePage.tsx">

            <p className="text-white/80 text-sm mb-4" data-id="az9jw6zz8" data-path="src/pages/HomePage.tsx">Try asking:</p>
            <div className="flex flex-wrap justify-center gap-2" data-id="7oadnffdg" data-path="src/pages/HomePage.tsx">
              {[
              "Show me beaches in Mirissa",
              "Best temples in Kandy",
              "Luxury hotels near Sigiriya",
              "Wildlife parks for safari"].
              map((suggestion, index) =>
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-white/20 transition-colors"
                onClick={() => navigate(`/search?q=${encodeURIComponent(suggestion)}`)} data-id="wjfi1dl8o" data-path="src/pages/HomePage.tsx">

                  {suggestion}
                </Badge>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }} data-id="fpmnqtvmn" data-path="src/pages/HomePage.tsx">

          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center" data-id="3ajx7u2vg" data-path="src/pages/HomePage.tsx">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" data-id="farz3ogx4" data-path="src/pages/HomePage.tsx" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white" data-id="anrjebsm9" data-path="src/pages/HomePage.tsx">
        <div className="max-w-6xl mx-auto px-4" data-id="jli7zr09b" data-path="src/pages/HomePage.tsx">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-id="28xmnyv8c" data-path="src/pages/HomePage.tsx">
            {stats.map((stat, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center" data-id="ko5dk7ymj" data-path="src/pages/HomePage.tsx">

                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`} data-id="z8lyfzhjs" data-path="src/pages/HomePage.tsx">
                  <stat.icon className="w-8 h-8 text-white" data-id="jnee7cy4g" data-path="src/pages/HomePage.tsx" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2" data-id="too0mlopm" data-path="src/pages/HomePage.tsx">{stat.value}</div>
                <div className="text-gray-600" data-id="17ykiqlpn" data-path="src/pages/HomePage.tsx">{stat.label}</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50" data-id="l3v0ddomj" data-path="src/pages/HomePage.tsx">
        <div className="max-w-6xl mx-auto px-4" data-id="myrrvdmld" data-path="src/pages/HomePage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12" data-id="7oenxx168" data-path="src/pages/HomePage.tsx">

            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="mfxjduker" data-path="src/pages/HomePage.tsx">
              What Would You Like to Explore?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="9izrjol0o" data-path="src/pages/HomePage.tsx">
              From ancient temples to pristine beaches, discover the diverse wonders of Sri Lanka
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4" data-id="7znn1yl5f" data-path="src/pages/HomePage.tsx">
            {categories.map((category, index) =>
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => navigate(`/search?category=${category.id}`)} data-id="zie1yr9tg" data-path="src/pages/HomePage.tsx">

                <Card className="h-32 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-2 hover:border-emerald-200" data-id="yaeot96nr" data-path="src/pages/HomePage.tsx">
                  <CardContent className="flex flex-col items-center justify-center h-full p-4" data-id="72nao7s9o" data-path="src/pages/HomePage.tsx">
                    <div className="text-3xl mb-2" data-id="mgcp2d3an" data-path="src/pages/HomePage.tsx">{category.icon}</div>
                    <div className="text-sm font-medium text-gray-700 text-center" data-id="so0kemxpf" data-path="src/pages/HomePage.tsx">
                      {category.name}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-white" data-id="wjusvhcwe" data-path="src/pages/HomePage.tsx">
        <div className="max-w-6xl mx-auto px-4" data-id="55ou8g2xl" data-path="src/pages/HomePage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12" data-id="7ouxvv2jr" data-path="src/pages/HomePage.tsx">

            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="7hp7gj3y9" data-path="src/pages/HomePage.tsx">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="b0c1e6min" data-path="src/pages/HomePage.tsx">
              Handpicked by our travel experts and loved by thousands of visitors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="3wq66hl2f" data-path="src/pages/HomePage.tsx">
            {featuredListings.map((listing, index) =>
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }} data-id="5s4qj1tnx" data-path="src/pages/HomePage.tsx">

                <ListingCard listing={listing} data-id="bttrbmve9" data-path="src/pages/HomePage.tsx" />
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12" data-id="g035hrnam" data-path="src/pages/HomePage.tsx">

            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700"
              onClick={() => navigate('/search')} data-id="eeybf60ua" data-path="src/pages/HomePage.tsx">

              <Search className="w-5 h-5 mr-2" data-id="sub6hy6ry" data-path="src/pages/HomePage.tsx" />
              Explore All Destinations
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600" data-id="pspbc1eak" data-path="src/pages/HomePage.tsx">
        <div className="max-w-4xl mx-auto px-4 text-center" data-id="k5wq2mx1q" data-path="src/pages/HomePage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} data-id="25dxrfvl5" data-path="src/pages/HomePage.tsx">

            <h2 className="text-4xl font-bold text-white mb-4" data-id="mc0fgys90" data-path="src/pages/HomePage.tsx">
              Share Your Sri Lankan Adventure
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-id="xqvjx1ysa" data-path="src/pages/HomePage.tsx">
              Join our community of travelers and share your favorite places with fellow explorers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="evb7ar7cc" data-path="src/pages/HomePage.tsx">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate('/register')} data-id="riyid7nnc" data-path="src/pages/HomePage.tsx">

                Join Community
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
                onClick={() => navigate('/dashboard')} data-id="nh8lx4jle" data-path="src/pages/HomePage.tsx">

                Add Your Listing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" data-id="dco9ntj11" data-path="src/pages/HomePage.tsx">
        <div className="max-w-6xl mx-auto px-4" data-id="jb0dls7hv" data-path="src/pages/HomePage.tsx">
          <div className="grid md:grid-cols-4 gap-8" data-id="v0800tqhk" data-path="src/pages/HomePage.tsx">
            <div className="col-span-2" data-id="seupuw3pv" data-path="src/pages/HomePage.tsx">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent" data-id="qqaiqowss" data-path="src/pages/HomePage.tsx">
                Explore Sri Lanka
              </h3>
              <p className="text-gray-400 mb-4" data-id="01j8qf61k" data-path="src/pages/HomePage.tsx">
                Your intelligent travel companion for discovering the hidden gems and popular attractions of beautiful Sri Lanka.
              </p>
            </div>
            <div data-id="2lc5roo1k" data-path="src/pages/HomePage.tsx">
              <h4 className="font-semibold mb-4" data-id="1w81jqzop" data-path="src/pages/HomePage.tsx">Quick Links</h4>
              <div className="space-y-2 text-gray-400" data-id="otjr9gnnz" data-path="src/pages/HomePage.tsx">
                <div data-id="wkhmxkeyh" data-path="src/pages/HomePage.tsx">Home</div>
                <div data-id="dogj30w2j" data-path="src/pages/HomePage.tsx">Search</div>
                <div data-id="0bxfxutij" data-path="src/pages/HomePage.tsx">About</div>
                <div data-id="p3wd7vf84" data-path="src/pages/HomePage.tsx">Contact</div>
              </div>
            </div>
            <div data-id="wnbj2gtn8" data-path="src/pages/HomePage.tsx">
              <h4 className="font-semibold mb-4" data-id="1uranfeko" data-path="src/pages/HomePage.tsx">Categories</h4>
              <div className="space-y-2 text-gray-400" data-id="46e00sjpd" data-path="src/pages/HomePage.tsx">
                <div data-id="ak44w9jpi" data-path="src/pages/HomePage.tsx">Attractions</div>
                <div data-id="gyvwzi4cu" data-path="src/pages/HomePage.tsx">Hotels</div>
                <div data-id="36xvuazcb" data-path="src/pages/HomePage.tsx">Restaurants</div>
                <div data-id="mdfybscl6" data-path="src/pages/HomePage.tsx">Experiences</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400" data-id="uc9io1aey" data-path="src/pages/HomePage.tsx">
            <p data-id="x0gl4sz25" data-path="src/pages/HomePage.tsx">&copy; 2024 Explore Sri Lanka. Made with ❤️ for travelers.</p>
          </div>
        </div>
      </footer>
    </div>);

};

export default HomePage;