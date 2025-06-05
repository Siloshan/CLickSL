import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import { mockListings, Listing } from '@/data/mockData';
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Phone,
  Mail,
  Globe,
  Calendar,
  DollarSign,
  Share,
  Heart,
  Camera,
  Navigation as NavigationIcon } from
'lucide-react';

const ListingDetail: React.FC = () => {
  const { id } = useParams<{id: string;}>();
  const navigate = useNavigate();
  const [listing, setListing] = useState<Listing | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchListing = async () => {
      setIsLoading(true);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const foundListing = mockListings.find((l) => l.id === id);
      setListing(foundListing || null);
      setIsLoading(false);
    };

    if (id) {
      fetchListing();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50" data-id="2mfaymsod" data-path="src/pages/ListingDetail.tsx">
        <Navigation data-id="4nuyp77sc" data-path="src/pages/ListingDetail.tsx" />
        <div className="pt-20 p-8" data-id="mzy1cdqr5" data-path="src/pages/ListingDetail.tsx">
          <div className="max-w-6xl mx-auto" data-id="0s5vvfe2u" data-path="src/pages/ListingDetail.tsx">
            <div className="animate-pulse" data-id="q91pfauup" data-path="src/pages/ListingDetail.tsx">
              <div className="h-96 bg-gray-200 rounded-lg mb-8" data-id="kbzt7qcb9" data-path="src/pages/ListingDetail.tsx" />
              <div className="grid lg:grid-cols-3 gap-8" data-id="ir9e6nvgq" data-path="src/pages/ListingDetail.tsx">
                <div className="lg:col-span-2 space-y-4" data-id="nuvnzun0z" data-path="src/pages/ListingDetail.tsx">
                  <div className="h-8 bg-gray-200 rounded w-3/4" data-id="947ygcxlk" data-path="src/pages/ListingDetail.tsx" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" data-id="gt7z6z6i6" data-path="src/pages/ListingDetail.tsx" />
                  <div className="h-32 bg-gray-200 rounded" data-id="blfm953rg" data-path="src/pages/ListingDetail.tsx" />
                </div>
                <div className="space-y-4" data-id="2zq1at198" data-path="src/pages/ListingDetail.tsx">
                  <div className="h-64 bg-gray-200 rounded" data-id="qx5b0vhmm" data-path="src/pages/ListingDetail.tsx" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-50" data-id="kx9zc3bot" data-path="src/pages/ListingDetail.tsx">
        <Navigation data-id="6sh6s4rsn" data-path="src/pages/ListingDetail.tsx" />
        <div className="pt-20 p-8" data-id="d1h61hy8n" data-path="src/pages/ListingDetail.tsx">
          <div className="max-w-6xl mx-auto text-center" data-id="9u2pzss0f" data-path="src/pages/ListingDetail.tsx">
            <h1 className="text-2xl font-bold text-gray-900 mb-4" data-id="z70fszdqr" data-path="src/pages/ListingDetail.tsx">Listing Not Found</h1>
            <p className="text-gray-600 mb-8" data-id="ggxx2u2wj" data-path="src/pages/ListingDetail.tsx">The listing you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/')} data-id="s3upb6p4d" data-path="src/pages/ListingDetail.tsx">
              <ArrowLeft className="w-4 h-4 mr-2" data-id="0fbj4seqg" data-path="src/pages/ListingDetail.tsx" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>);

  }

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

  return (
    <div className="min-h-screen bg-gray-50" data-id="k05wjj0aw" data-path="src/pages/ListingDetail.tsx">
      <Navigation data-id="3mi7a2llu" data-path="src/pages/ListingDetail.tsx" />
      
      <div className="pt-20" data-id="heagunlfg" data-path="src/pages/ListingDetail.tsx">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-id="srqkwkmdh" data-path="src/pages/ListingDetail.tsx">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4" data-id="msjun1a49" data-path="src/pages/ListingDetail.tsx">

            <ArrowLeft className="w-4 h-4 mr-2" data-id="fqgn7qwo1" data-path="src/pages/ListingDetail.tsx" />
            Back to Results
          </Button>
        </div>

        {/* Image Gallery */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8" data-id="clumiszf2" data-path="src/pages/ListingDetail.tsx">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl" data-id="3yuj8kz4n" data-path="src/pages/ListingDetail.tsx">

            <img
              src={listing.images[selectedImageIndex]}
              alt={listing.title}
              className="w-full h-full object-cover" data-id="qdsxr4s9p" data-path="src/pages/ListingDetail.tsx" />

            
            {/* Image Navigation */}
            {listing.images.length > 1 &&
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" data-id="pehzkc99n" data-path="src/pages/ListingDetail.tsx">
                {listing.images.map((_, index) =>
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                index === selectedImageIndex ?
                'bg-white scale-125' :
                'bg-white/50 hover:bg-white/75'}`
                } data-id="3yiwqxmmy" data-path="src/pages/ListingDetail.tsx" />

              )}
              </div>
            }

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2" data-id="0i1x4f1yy" data-path="src/pages/ListingDetail.tsx">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/90 backdrop-blur-sm hover:bg-white" data-id="771khi4xe" data-path="src/pages/ListingDetail.tsx">

                <Heart className="w-4 h-4" data-id="1gu29ycy5" data-path="src/pages/ListingDetail.tsx" />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/90 backdrop-blur-sm hover:bg-white" data-id="8kmyy6jrd" data-path="src/pages/ListingDetail.tsx">

                <Share className="w-4 h-4" data-id="6ouh9sh1b" data-path="src/pages/ListingDetail.tsx" />
              </Button>
            </div>

            {/* Photo Count */}
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm" data-id="rreh0rx56" data-path="src/pages/ListingDetail.tsx">
              <Camera className="w-4 h-4 inline mr-1" data-id="t199ie2ht" data-path="src/pages/ListingDetail.tsx" />
              {selectedImageIndex + 1} / {listing.images.length}
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" data-id="7m6ftmg9i" data-path="src/pages/ListingDetail.tsx">
          <div className="grid lg:grid-cols-3 gap-8" data-id="4b3chfjpw" data-path="src/pages/ListingDetail.tsx">
            {/* Main Content */}
            <div className="lg:col-span-2" data-id="33psy59ca" data-path="src/pages/ListingDetail.tsx">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }} data-id="rprmfbe85" data-path="src/pages/ListingDetail.tsx">

                {/* Header */}
                <div className="mb-6" data-id="ec01zw4ev" data-path="src/pages/ListingDetail.tsx">
                  <div className="flex items-center space-x-3 mb-4" data-id="vhvd3zuog" data-path="src/pages/ListingDetail.tsx">
                    <Badge className={`${categoryColors[listing.category]} border-0 font-medium`} data-id="b161xy17v" data-path="src/pages/ListingDetail.tsx">
                      {categoryIcons[listing.category]} {listing.category.charAt(0).toUpperCase() + listing.category.slice(1)}
                    </Badge>
                    {listing.featured &&
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 font-medium" data-id="qjh7vv2ws" data-path="src/pages/ListingDetail.tsx">
                        ⭐ Featured
                      </Badge>
                    }
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-id="5c7kizh0l" data-path="src/pages/ListingDetail.tsx">
                    {listing.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-gray-600" data-id="y1u8xghvl" data-path="src/pages/ListingDetail.tsx">
                    <div className="flex items-center space-x-1" data-id="zba23luum" data-path="src/pages/ListingDetail.tsx">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" data-id="x4gr1cmci" data-path="src/pages/ListingDetail.tsx" />
                      <span className="font-semibold" data-id="szctvl9c6" data-path="src/pages/ListingDetail.tsx">{listing.rating}</span>
                      <span data-id="zy4b0sc0q" data-path="src/pages/ListingDetail.tsx">({listing.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1" data-id="7e3y6mnmg" data-path="src/pages/ListingDetail.tsx">
                      <MapPin className="w-5 h-5" data-id="z1r6568v2" data-path="src/pages/ListingDetail.tsx" />
                      <span data-id="rgx6dwavj" data-path="src/pages/ListingDetail.tsx">{listing.location.city}, {listing.location.district}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <Card className="mb-6" data-id="6yi1rulgj" data-path="src/pages/ListingDetail.tsx">
                  <CardHeader data-id="55qoo5j5v" data-path="src/pages/ListingDetail.tsx">
                    <CardTitle data-id="5ivoqxt2x" data-path="src/pages/ListingDetail.tsx">About This Place</CardTitle>
                  </CardHeader>
                  <CardContent data-id="etepdql93" data-path="src/pages/ListingDetail.tsx">
                    <p className="text-gray-700 leading-relaxed" data-id="wbq1s5ird" data-path="src/pages/ListingDetail.tsx">
                      {listing.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card className="mb-6" data-id="vegvaxdcq" data-path="src/pages/ListingDetail.tsx">
                  <CardHeader data-id="qrr5nfitd" data-path="src/pages/ListingDetail.tsx">
                    <CardTitle data-id="28b2oa59h" data-path="src/pages/ListingDetail.tsx">Features & Highlights</CardTitle>
                  </CardHeader>
                  <CardContent data-id="3qvwi0vzy" data-path="src/pages/ListingDetail.tsx">
                    <div className="grid grid-cols-2 gap-3" data-id="zj7on8cdy" data-path="src/pages/ListingDetail.tsx">
                      {listing.features.map((feature, index) =>
                      <div key={index} className="flex items-center space-x-2" data-id="pr27di47w" data-path="src/pages/ListingDetail.tsx">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full" data-id="v0olelnlz" data-path="src/pages/ListingDetail.tsx" />
                          <span className="text-gray-700" data-id="x5t8q9ke8" data-path="src/pages/ListingDetail.tsx">{feature}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Info */}
                {(listing.openingHours || listing.bestTimeToVisit) &&
                <Card data-id="3sby465ff" data-path="src/pages/ListingDetail.tsx">
                    <CardHeader data-id="cl60xtjzp" data-path="src/pages/ListingDetail.tsx">
                      <CardTitle data-id="f7y3dx7pn" data-path="src/pages/ListingDetail.tsx">Additional Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4" data-id="1z0p22ozs" data-path="src/pages/ListingDetail.tsx">
                      {listing.openingHours &&
                    <div className="flex items-start space-x-3" data-id="fp7hla9bk" data-path="src/pages/ListingDetail.tsx">
                          <Clock className="w-5 h-5 text-gray-400 mt-0.5" data-id="k0z9goshi" data-path="src/pages/ListingDetail.tsx" />
                          <div data-id="wlux9n1c2" data-path="src/pages/ListingDetail.tsx">
                            <div className="font-medium text-gray-900" data-id="qy8y0919y" data-path="src/pages/ListingDetail.tsx">Opening Hours</div>
                            <div className="text-gray-600" data-id="w0xx19c6g" data-path="src/pages/ListingDetail.tsx">{listing.openingHours}</div>
                          </div>
                        </div>
                    }
                      {listing.bestTimeToVisit &&
                    <div className="flex items-start space-x-3" data-id="2i3fr7os4" data-path="src/pages/ListingDetail.tsx">
                          <Calendar className="w-5 h-5 text-gray-400 mt-0.5" data-id="n5pxc90v2" data-path="src/pages/ListingDetail.tsx" />
                          <div data-id="wg6lmr8o3" data-path="src/pages/ListingDetail.tsx">
                            <div className="font-medium text-gray-900" data-id="5a5dttatd" data-path="src/pages/ListingDetail.tsx">Best Time to Visit</div>
                            <div className="text-gray-600" data-id="etk8utols" data-path="src/pages/ListingDetail.tsx">{listing.bestTimeToVisit}</div>
                          </div>
                        </div>
                    }
                    </CardContent>
                  </Card>
                }
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6" data-id="kiqelm3ug" data-path="src/pages/ListingDetail.tsx">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }} data-id="7ydvrnf74" data-path="src/pages/ListingDetail.tsx">

                {/* Pricing Card */}
                {listing.price &&
                <Card className="sticky top-24" data-id="opx98ctcu" data-path="src/pages/ListingDetail.tsx">
                    <CardContent className="p-6" data-id="92b6qukiy" data-path="src/pages/ListingDetail.tsx">
                      <div className="text-center mb-6" data-id="e2m7n8p3g" data-path="src/pages/ListingDetail.tsx">
                        <div className="flex items-center justify-center space-x-2 text-3xl font-bold text-gray-900" data-id="lb7cs97yl" data-path="src/pages/ListingDetail.tsx">
                          <DollarSign className="w-6 h-6" data-id="tpc4azlrg" data-path="src/pages/ListingDetail.tsx" />
                          <span data-id="e6lwso8ne" data-path="src/pages/ListingDetail.tsx">{listing.price.amount}</span>
                        </div>
                        <div className="text-gray-600" data-id="uhyn0c080" data-path="src/pages/ListingDetail.tsx">per {listing.price.unit}</div>
                      </div>
                      
                      <Button className="w-full mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700" data-id="fyu9tlafr" data-path="src/pages/ListingDetail.tsx">
                        Book Now
                      </Button>
                      
                      <p className="text-xs text-gray-500 text-center" data-id="bkeuvmk6x" data-path="src/pages/ListingDetail.tsx">
                        You won't be charged yet
                      </p>
                    </CardContent>
                  </Card>
                }

                {/* Contact Information */}
                {listing.contact &&
                <Card data-id="akekxibu0" data-path="src/pages/ListingDetail.tsx">
                    <CardHeader data-id="09yc630qy" data-path="src/pages/ListingDetail.tsx">
                      <CardTitle data-id="bq3n7tttr" data-path="src/pages/ListingDetail.tsx">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3" data-id="6xnl7f4tx" data-path="src/pages/ListingDetail.tsx">
                      {listing.contact.phone &&
                    <div className="flex items-center space-x-3" data-id="8r2n81zq1" data-path="src/pages/ListingDetail.tsx">
                          <Phone className="w-5 h-5 text-gray-400" data-id="w5f7tl42d" data-path="src/pages/ListingDetail.tsx" />
                          <span className="text-gray-700" data-id="krv78gq9s" data-path="src/pages/ListingDetail.tsx">{listing.contact.phone}</span>
                        </div>
                    }
                      {listing.contact.email &&
                    <div className="flex items-center space-x-3" data-id="10q8rx5yk" data-path="src/pages/ListingDetail.tsx">
                          <Mail className="w-5 h-5 text-gray-400" data-id="x34zmcneg" data-path="src/pages/ListingDetail.tsx" />
                          <span className="text-gray-700" data-id="nnzr8hwok" data-path="src/pages/ListingDetail.tsx">{listing.contact.email}</span>
                        </div>
                    }
                      {listing.contact.website &&
                    <div className="flex items-center space-x-3" data-id="8fqsopetn" data-path="src/pages/ListingDetail.tsx">
                          <Globe className="w-5 h-5 text-gray-400" data-id="dfz2lji9w" data-path="src/pages/ListingDetail.tsx" />
                          <span className="text-gray-700" data-id="4es36u211" data-path="src/pages/ListingDetail.tsx">{listing.contact.website}</span>
                        </div>
                    }
                    </CardContent>
                  </Card>
                }

                {/* Location Card */}
                <Card data-id="lpflm3vus" data-path="src/pages/ListingDetail.tsx">
                  <CardHeader data-id="7kiz3jxte" data-path="src/pages/ListingDetail.tsx">
                    <CardTitle data-id="2tl21at3z" data-path="src/pages/ListingDetail.tsx">Location</CardTitle>
                  </CardHeader>
                  <CardContent data-id="yeg18jtoa" data-path="src/pages/ListingDetail.tsx">
                    <div className="space-y-4" data-id="gbgz8n94u" data-path="src/pages/ListingDetail.tsx">
                      <div className="flex items-center space-x-3" data-id="o3fxeduma" data-path="src/pages/ListingDetail.tsx">
                        <MapPin className="w-5 h-5 text-gray-400" data-id="gfteeqk6h" data-path="src/pages/ListingDetail.tsx" />
                        <div data-id="nba0ain6g" data-path="src/pages/ListingDetail.tsx">
                          <div className="font-medium text-gray-900" data-id="91k66zw7g" data-path="src/pages/ListingDetail.tsx">{listing.location.city}</div>
                          <div className="text-gray-600" data-id="ps75n0i7d" data-path="src/pages/ListingDetail.tsx">{listing.location.district} District</div>
                        </div>
                      </div>
                      
                      <Separator data-id="2863s3iwa" data-path="src/pages/ListingDetail.tsx" />
                      
                      <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center" data-id="2tic8zont" data-path="src/pages/ListingDetail.tsx">
                        <div className="text-center text-gray-500" data-id="dermd2hi8" data-path="src/pages/ListingDetail.tsx">
                          <NavigationIcon className="w-8 h-8 mx-auto mb-2" data-id="tc04b80w2" data-path="src/pages/ListingDetail.tsx" />
                          <div className="text-sm" data-id="t5tl064u4" data-path="src/pages/ListingDetail.tsx">Interactive Map</div>
                          <div className="text-xs" data-id="ocs7rcdjv" data-path="src/pages/ListingDetail.tsx">Coming Soon</div>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full" data-id="3ydq0rqz0" data-path="src/pages/ListingDetail.tsx">
                        <NavigationIcon className="w-4 h-4 mr-2" data-id="71amjudhf" data-path="src/pages/ListingDetail.tsx" />
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default ListingDetail;