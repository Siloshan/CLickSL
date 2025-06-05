import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Listing } from '@/data/mockData';
import { Star, MapPin, DollarSign, Eye, Heart } from 'lucide-react';

interface ListingCardProps {
  listing: Listing;
  className?: string;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing, className = "" }) => {
  const navigate = useNavigate();

  const categoryColors = {
    attraction: 'bg-blue-100 text-blue-800',
    hotel: 'bg-purple-100 text-purple-800',
    restaurant: 'bg-orange-100 text-orange-800',
    experience: 'bg-pink-100 text-pink-800',
    beach: 'bg-cyan-100 text-cyan-800',
    temple: 'bg-yellow-100 text-yellow-800',
    wildlife: 'bg-green-100 text-green-800'
  };

  const categoryIcons = {
    attraction: '🏛️',
    hotel: '🏨',
    restaurant: '🍽️',
    experience: '🎭',
    beach: '🏖️',
    temple: '🛕',
    wildlife: '🦁'
  };

  const handleCardClick = () => {
    navigate(`/listing/${listing.id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={className} data-id="i7anqgjg4" data-path="src/components/ListingCard.tsx">

      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group bg-white border-0" onClick={handleCardClick} data-id="naeflnccn" data-path="src/components/ListingCard.tsx">
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden" data-id="2ftgep7bo" data-path="src/components/ListingCard.tsx">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-id="4uqb4jsru" data-path="src/components/ListingCard.tsx" />

          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" data-id="q8g416whb" data-path="src/components/ListingCard.tsx" />
          
          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex items-center space-x-2" data-id="rvcpi45pu" data-path="src/components/ListingCard.tsx">
            <Badge className={`${categoryColors[listing.category]} border-0 font-medium`} data-id="b2snkjs6g" data-path="src/components/ListingCard.tsx">
              {categoryIcons[listing.category]} {listing.category.charAt(0).toUpperCase() + listing.category.slice(1)}
            </Badge>
            {listing.featured &&
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 font-medium" data-id="4qy27iwd8" data-path="src/components/ListingCard.tsx">
                ⭐ Featured
              </Badge>
            }
          </div>

          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
            onClick={(e) => {
              e.stopPropagation();
              // Handle favorite logic
            }} data-id="utjezhqmp" data-path="src/components/ListingCard.tsx">

            <Heart className="w-4 h-4" data-id="0mgu8nyp0" data-path="src/components/ListingCard.tsx" />
          </Button>

          {/* Price Tag */}
          {listing.price &&
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1" data-id="54qd93mky" data-path="src/components/ListingCard.tsx">
              <div className="flex items-center space-x-1 text-sm font-bold text-gray-900" data-id="a6fi5wjbv" data-path="src/components/ListingCard.tsx">
                <DollarSign className="w-4 h-4" data-id="et7b7a3rt" data-path="src/components/ListingCard.tsx" />
                <span data-id="wfopzvt22" data-path="src/components/ListingCard.tsx">{listing.price.amount}</span>
                <span className="text-xs text-gray-600" data-id="m35fwr3i0" data-path="src/components/ListingCard.tsx">/{listing.price.unit}</span>
              </div>
            </div>
          }
        </div>

        <CardContent className="p-5" data-id="j2dbvtjmc" data-path="src/components/ListingCard.tsx">
          {/* Title and Rating */}
          <div className="flex items-start justify-between mb-2" data-id="nk2t7gwji" data-path="src/components/ListingCard.tsx">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors" data-id="coddsbz0r" data-path="src/components/ListingCard.tsx">
              {listing.title}
            </h3>
            <div className="flex items-center space-x-1 text-sm text-gray-600 ml-2" data-id="mltj221p9" data-path="src/components/ListingCard.tsx">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" data-id="tt1vcc0nc" data-path="src/components/ListingCard.tsx" />
              <span className="font-medium" data-id="ibero0toz" data-path="src/components/ListingCard.tsx">{listing.rating}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-1 text-gray-600 mb-3" data-id="iaaztukra" data-path="src/components/ListingCard.tsx">
            <MapPin className="w-4 h-4" data-id="rb2t57ybl" data-path="src/components/ListingCard.tsx" />
            <span className="text-sm" data-id="8foztcljz" data-path="src/components/ListingCard.tsx">{listing.location.city}, {listing.location.district}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-2 mb-4" data-id="4xhntavow" data-path="src/components/ListingCard.tsx">
            {listing.shortDescription}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-4" data-id="oqdru9cg1" data-path="src/components/ListingCard.tsx">
            {listing.features.slice(0, 3).map((feature, index) =>
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors" data-id="gnic45r9z" data-path="src/components/ListingCard.tsx">

                {feature}
              </Badge>
            )}
            {listing.features.length > 3 &&
            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700" data-id="tllxu9uhk" data-path="src/components/ListingCard.tsx">
                +{listing.features.length - 3} more
              </Badge>
            }
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100" data-id="c5o9y7oww" data-path="src/components/ListingCard.tsx">
            <div className="flex items-center space-x-3 text-xs text-gray-500" data-id="be397gmeq" data-path="src/components/ListingCard.tsx">
              <div className="flex items-center space-x-1" data-id="c0cj1f77p" data-path="src/components/ListingCard.tsx">
                <Eye className="w-3 h-3" data-id="wwk9w8aa5" data-path="src/components/ListingCard.tsx" />
                <span data-id="32xyp97pf" data-path="src/components/ListingCard.tsx">{listing.reviewCount} reviews</span>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 h-auto font-medium"
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick();
              }} data-id="rf9dk0him" data-path="src/components/ListingCard.tsx">

              View Details →
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>);

};

export default ListingCard;