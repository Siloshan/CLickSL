import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import SearchBar from '@/components/SearchBar';
import ListingCard from '@/components/ListingCard';
import { searchListings, categories, districts, Listing } from '@/data/mockData';
import { Filter, MapPin, Grid, List, SortAsc, Star, DollarSign } from 'lucide-react';

const SearchResults: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'relevance' | 'rating' | 'price'>('relevance');

  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';
  const location = searchParams.get('location') || '';

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      const searchResults = searchListings(query, category, location);

      // Sort results
      let sortedResults = [...searchResults];
      switch (sortBy) {
        case 'rating':
          sortedResults.sort((a, b) => b.rating - a.rating);
          break;
        case 'price':
          sortedResults.sort((a, b) => {
            if (!a.price && !b.price) return 0;
            if (!a.price) return 1;
            if (!b.price) return -1;
            return a.price.amount - b.price.amount;
          });
          break;
        default:
          // Keep relevance order (featured first, then by rating)
          sortedResults.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return b.rating - a.rating;
          });
      }

      setResults(sortedResults);
      setIsLoading(false);
    };

    fetchResults();
  }, [query, category, location, sortBy]);

  const handleFilterChange = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'all') {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    const newParams = new URLSearchParams();
    if (query) newParams.set('q', query);
    setSearchParams(newParams);
  };

  return (
    <div className="min-h-screen bg-gray-50" data-id="gp2ggh6dd" data-path="src/pages/SearchResults.tsx">
      <Navigation data-id="xcf46cnim" data-path="src/pages/SearchResults.tsx" />
      
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 pt-20 pb-6" data-id="rpkz9on6f" data-path="src/pages/SearchResults.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="9hqr0pdzw" data-path="src/pages/SearchResults.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} data-id="vvpfihb6b" data-path="src/pages/SearchResults.tsx">

            <h1 className="text-3xl font-bold text-gray-900 mb-4" data-id="abv7jsojj" data-path="src/pages/SearchResults.tsx">
              Search Results
              {query &&
              <span className="text-emerald-600" data-id="nek2efes8" data-path="src/pages/SearchResults.tsx"> for "{query}"</span>
              }
            </h1>
            
            <div className="max-w-2xl" data-id="7i8qzqg1x" data-path="src/pages/SearchResults.tsx">
              <SearchBar
                defaultValue={query}
                placeholder="Refine your search..." data-id="aaann4vhv" data-path="src/pages/SearchResults.tsx" />

            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-id="67xbzccp2" data-path="src/pages/SearchResults.tsx">
        <div className="flex flex-col lg:flex-row gap-8" data-id="c5ozfh6ll" data-path="src/pages/SearchResults.tsx">
          {/* Filters Sidebar */}
          <div className="lg:w-80" data-id="vxiplsprd" data-path="src/pages/SearchResults.tsx">
            <Card className="sticky top-24" data-id="ula2nnlbt" data-path="src/pages/SearchResults.tsx">
              <CardContent className="p-6" data-id="l4ajewvt5" data-path="src/pages/SearchResults.tsx">
                <div className="flex items-center justify-between mb-6" data-id="msuq9k2jm" data-path="src/pages/SearchResults.tsx">
                  <h3 className="text-lg font-semibold flex items-center space-x-2" data-id="j7ud18ptf" data-path="src/pages/SearchResults.tsx">
                    <Filter className="w-5 h-5" data-id="ptzppvdpe" data-path="src/pages/SearchResults.tsx" />
                    <span data-id="5n778ouue" data-path="src/pages/SearchResults.tsx">Filters</span>
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-emerald-600 hover:text-emerald-700" data-id="5y8bw1l3z" data-path="src/pages/SearchResults.tsx">

                    Clear All
                  </Button>
                </div>

                <div className="space-y-6" data-id="ht6air3ou" data-path="src/pages/SearchResults.tsx">
                  {/* Category Filter */}
                  <div data-id="7kykgwlpe" data-path="src/pages/SearchResults.tsx">
                    <label className="text-sm font-medium text-gray-700 mb-2 block" data-id="6r6d5kkm6" data-path="src/pages/SearchResults.tsx">
                      Category
                    </label>
                    <Select
                      value={category || 'all'}
                      onValueChange={(value) => handleFilterChange('category', value)} data-id="fhxb7wiqu" data-path="src/pages/SearchResults.tsx">

                      <SelectTrigger data-id="7cgguipkx" data-path="src/pages/SearchResults.tsx">
                        <SelectValue placeholder="All Categories" data-id="kn9t0oz8a" data-path="src/pages/SearchResults.tsx" />
                      </SelectTrigger>
                      <SelectContent data-id="fo6gfn3br" data-path="src/pages/SearchResults.tsx">
                        <SelectItem value="all" data-id="x9pyctlq9" data-path="src/pages/SearchResults.tsx">All Categories</SelectItem>
                        {categories.map((cat) =>
                        <SelectItem key={cat.id} value={cat.id} data-id="ypqenupgt" data-path="src/pages/SearchResults.tsx">
                            {cat.icon} {cat.name}
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location Filter */}
                  <div data-id="os3wr4py7" data-path="src/pages/SearchResults.tsx">
                    <label className="text-sm font-medium text-gray-700 mb-2 block" data-id="vdni5yxrt" data-path="src/pages/SearchResults.tsx">
                      Location
                    </label>
                    <Select
                      value={location || 'all'}
                      onValueChange={(value) => handleFilterChange('location', value)} data-id="67km1z4r2" data-path="src/pages/SearchResults.tsx">

                      <SelectTrigger data-id="4u6frkes8" data-path="src/pages/SearchResults.tsx">
                        <SelectValue placeholder="All Locations" data-id="otc45wjui" data-path="src/pages/SearchResults.tsx" />
                      </SelectTrigger>
                      <SelectContent data-id="4tj7lhgvv" data-path="src/pages/SearchResults.tsx">
                        <SelectItem value="all" data-id="s5x5qxbuh" data-path="src/pages/SearchResults.tsx">All Locations</SelectItem>
                        {districts.map((district) =>
                        <SelectItem key={district} value={district.toLowerCase()} data-id="00zhf95zo" data-path="src/pages/SearchResults.tsx">
                            {district}
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Active Filters */}
                  {(category || location) &&
                  <div data-id="63h7ztvo3" data-path="src/pages/SearchResults.tsx">
                      <label className="text-sm font-medium text-gray-700 mb-2 block" data-id="hv2yoe7lw" data-path="src/pages/SearchResults.tsx">
                        Active Filters
                      </label>
                      <div className="flex flex-wrap gap-2" data-id="wxxt9pf0n" data-path="src/pages/SearchResults.tsx">
                        {category &&
                      <Badge
                        variant="secondary"
                        className="flex items-center space-x-1 cursor-pointer hover:bg-red-100"
                        onClick={() => handleFilterChange('category', '')} data-id="fq0cqxwdt" data-path="src/pages/SearchResults.tsx">

                            <span data-id="luphz7j8z" data-path="src/pages/SearchResults.tsx">{categories.find((c) => c.id === category)?.name}</span>
                            <span data-id="8b8fk7lvy" data-path="src/pages/SearchResults.tsx">×</span>
                          </Badge>
                      }
                        {location &&
                      <Badge
                        variant="secondary"
                        className="flex items-center space-x-1 cursor-pointer hover:bg-red-100"
                        onClick={() => handleFilterChange('location', '')} data-id="9ksqzaijz" data-path="src/pages/SearchResults.tsx">

                            <span data-id="nphebulvp" data-path="src/pages/SearchResults.tsx">{location}</span>
                            <span data-id="50ja20930" data-path="src/pages/SearchResults.tsx">×</span>
                          </Badge>
                      }
                      </div>
                    </div>
                  }
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="flex-1" data-id="p8khxbmop" data-path="src/pages/SearchResults.tsx">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4" data-id="39jxc5d13" data-path="src/pages/SearchResults.tsx">
              <div data-id="36x8iy6le" data-path="src/pages/SearchResults.tsx">
                <p className="text-gray-600" data-id="jtndgznqh" data-path="src/pages/SearchResults.tsx">
                  {isLoading ? 'Searching...' : `${results.length} results found`}
                </p>
              </div>

              <div className="flex items-center space-x-4" data-id="vb83r11uw" data-path="src/pages/SearchResults.tsx">
                {/* Sort Options */}
                <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)} data-id="rc2yruwtn" data-path="src/pages/SearchResults.tsx">
                  <SelectTrigger className="w-40" data-id="vilxorwir" data-path="src/pages/SearchResults.tsx">
                    <SortAsc className="w-4 h-4 mr-2" data-id="45q5pjnp6" data-path="src/pages/SearchResults.tsx" />
                    <SelectValue data-id="puyev281n" data-path="src/pages/SearchResults.tsx" />
                  </SelectTrigger>
                  <SelectContent data-id="1xvhvafk8" data-path="src/pages/SearchResults.tsx">
                    <SelectItem value="relevance" data-id="7m43e0fvc" data-path="src/pages/SearchResults.tsx">Relevance</SelectItem>
                    <SelectItem value="rating" data-id="6ru00zeth" data-path="src/pages/SearchResults.tsx">
                      <div className="flex items-center space-x-2" data-id="yqcgnkkro" data-path="src/pages/SearchResults.tsx">
                        <Star className="w-4 h-4" data-id="t3yf192ov" data-path="src/pages/SearchResults.tsx" />
                        <span data-id="itfxdtgay" data-path="src/pages/SearchResults.tsx">Rating</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="price" data-id="0wjw1jk8j" data-path="src/pages/SearchResults.tsx">
                      <div className="flex items-center space-x-2" data-id="twgoyrg36" data-path="src/pages/SearchResults.tsx">
                        <DollarSign className="w-4 h-4" data-id="v759qvu8v" data-path="src/pages/SearchResults.tsx" />
                        <span data-id="35ouep7x1" data-path="src/pages/SearchResults.tsx">Price</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode Toggle */}
                <div className="flex items-center bg-gray-100 rounded-lg p-1" data-id="zrbqrhcbm" data-path="src/pages/SearchResults.tsx">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="p-2" data-id="p2clv05k9" data-path="src/pages/SearchResults.tsx">

                    <Grid className="w-4 h-4" data-id="x8xzbya6q" data-path="src/pages/SearchResults.tsx" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="p-2" data-id="aheih6gb7" data-path="src/pages/SearchResults.tsx">

                    <List className="w-4 h-4" data-id="jhbbysibb" data-path="src/pages/SearchResults.tsx" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {isLoading &&
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="usu38kcnc" data-path="src/pages/SearchResults.tsx">
                {[...Array(6)].map((_, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }} data-id="zuyfyq174" data-path="src/pages/SearchResults.tsx">

                    <Card className="overflow-hidden" data-id="59hbrrmaa" data-path="src/pages/SearchResults.tsx">
                      <div className="h-56 bg-gray-200 animate-pulse" data-id="dkdt124se" data-path="src/pages/SearchResults.tsx" />
                      <CardContent className="p-5" data-id="f7o66g438" data-path="src/pages/SearchResults.tsx">
                        <div className="space-y-3" data-id="leb3p479b" data-path="src/pages/SearchResults.tsx">
                          <div className="h-4 bg-gray-200 rounded animate-pulse" data-id="hlzcezoj8" data-path="src/pages/SearchResults.tsx" />
                          <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4" data-id="3lk7s4agq" data-path="src/pages/SearchResults.tsx" />
                          <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" data-id="3p809fvbt" data-path="src/pages/SearchResults.tsx" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
              )}
              </div>
            }

            {/* Results Grid */}
            {!isLoading && results.length > 0 &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={
              viewMode === 'grid' ?
              'grid md:grid-cols-2 lg:grid-cols-3 gap-6' :
              'space-y-6'
              } data-id="mu3qfp3cy" data-path="src/pages/SearchResults.tsx">

                {results.map((listing, index) =>
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }} data-id="y2g3e2ayw" data-path="src/pages/SearchResults.tsx">

                    <ListingCard listing={listing} data-id="9e04a7s86" data-path="src/pages/SearchResults.tsx" />
                  </motion.div>
              )}
              </motion.div>
            }

            {/* No Results */}
            {!isLoading && results.length === 0 &&
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16" data-id="s3p74gdk9" data-path="src/pages/SearchResults.tsx">

                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6" data-id="ijgk90u5o" data-path="src/pages/SearchResults.tsx">
                  <MapPin className="w-12 h-12 text-gray-400" data-id="hnl5wgq7j" data-path="src/pages/SearchResults.tsx" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" data-id="rn6s52r6p" data-path="src/pages/SearchResults.tsx">
                  No results found
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto" data-id="8796oob11" data-path="src/pages/SearchResults.tsx">
                  We couldn't find any listings matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <Button
                onClick={clearFilters}
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700" data-id="le56f6a60" data-path="src/pages/SearchResults.tsx">

                  Clear Filters
                </Button>
              </motion.div>
            }
          </div>
        </div>
      </div>
    </div>);

};

export default SearchResults;