import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { processNaturalLanguageQuery } from '@/data/mockData';
import { Search, Sparkles } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  defaultValue?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search destinations, hotels, restaurants...",
  defaultValue = "",
  onSearch,
  className = ""
}) => {
  const [query, setQuery] = useState(defaultValue);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (searchQuery: string = query) => {
    if (!searchQuery.trim()) return;

    setIsProcessing(true);

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Process natural language query
    const { category, location, processedQuery } = processNaturalLanguageQuery(searchQuery);

    // Build search URL with parameters
    const params = new URLSearchParams();
    params.set('q', searchQuery);
    if (category) params.set('category', category);
    if (location) params.set('location', location);

    if (onSearch) {
      onSearch(searchQuery);
    } else {
      navigate(`/search?${params.toString()}`);
    }

    setIsProcessing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const suggestions = [
  "Best beaches in Mirissa",
  "Luxury hotels near Sigiriya",
  "Temples in Kandy",
  "Wildlife safari in Yala",
  "Restaurants in Galle Fort",
  "Tea plantations in Ella"];


  return (
    <div className={`relative ${className}`} data-id="wqlyhubut" data-path="src/components/SearchBar.tsx">
      <div className="relative" data-id="pf9975rcp" data-path="src/components/SearchBar.tsx">
        <div className="flex items-center space-x-2 bg-white rounded-xl shadow-lg p-2 border-2 border-gray-100 hover:border-emerald-200 transition-all duration-300" data-id="8pn3j9ugm" data-path="src/components/SearchBar.tsx">
          <div className="flex-1 flex items-center space-x-3 px-2" data-id="shih9w677" data-path="src/components/SearchBar.tsx">
            <div className="relative" data-id="7p98farnn" data-path="src/components/SearchBar.tsx">
              <Search className={`w-5 h-5 text-gray-400 transition-colors ${isProcessing ? 'text-emerald-500' : ''}`} data-id="qxo4g3qpt" data-path="src/components/SearchBar.tsx" />
              {isProcessing &&
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }} data-id="ub30qq4t7" data-path="src/components/SearchBar.tsx">

                  <Sparkles className="w-5 h-5 text-emerald-500" data-id="18uomybg9" data-path="src/components/SearchBar.tsx" />
                </motion.div>
              }
            </div>
            <Input
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="border-0 bg-transparent text-lg placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              disabled={isProcessing} data-id="zi368ttkb" data-path="src/components/SearchBar.tsx" />

          </div>
          <Button
            onClick={() => handleSearch()}
            disabled={!query.trim() || isProcessing}
            className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 disabled:opacity-50" data-id="be578z25v" data-path="src/components/SearchBar.tsx">

            {isProcessing ?
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }} data-id="8hi09s6g0" data-path="src/components/SearchBar.tsx">

                <Sparkles className="w-5 h-5" data-id="ij2bgbkbu" data-path="src/components/SearchBar.tsx" />
              </motion.div> :

            <>
                <Search className="w-5 h-5 mr-2" data-id="hux24ffzb" data-path="src/components/SearchBar.tsx" />
                Search
              </>
            }
          </Button>
        </div>

        {/* AI Processing Indicator */}
        {isProcessing &&
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-full left-0 right-0 mt-2 bg-emerald-50 border border-emerald-200 rounded-lg p-3 shadow-lg" data-id="l7bu2aixn" data-path="src/components/SearchBar.tsx">

            <div className="flex items-center space-x-2 text-emerald-700" data-id="ek2kyntnx" data-path="src/components/SearchBar.tsx">
              <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }} data-id="4svogvho0" data-path="src/components/SearchBar.tsx">

                <Sparkles className="w-4 h-4" data-id="ww1i2y9h1" data-path="src/components/SearchBar.tsx" />
              </motion.div>
              <span className="text-sm font-medium" data-id="fuvglwxk6" data-path="src/components/SearchBar.tsx">AI is analyzing your request...</span>
            </div>
          </motion.div>
        }

        {/* Search Suggestions */}
        {!isProcessing && query.length === 0 &&
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10" data-id="fioemmvx5" data-path="src/components/SearchBar.tsx">

            <div className="text-sm text-gray-600 mb-3 flex items-center space-x-2" data-id="5npl0g01q" data-path="src/components/SearchBar.tsx">
              <Sparkles className="w-4 h-4 text-emerald-500" data-id="qyk1hh5lr" data-path="src/components/SearchBar.tsx" />
              <span data-id="dkmpfs7z9" data-path="src/components/SearchBar.tsx">Try these AI-powered searches:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2" data-id="kokkf4z2m" data-path="src/components/SearchBar.tsx">
              {suggestions.map((suggestion, index) =>
            <button
              key={index}
              onClick={() => {
                setQuery(suggestion);
                handleSearch(suggestion);
              }}
              className="text-left p-2 hover:bg-gray-50 rounded text-sm text-gray-700 hover:text-emerald-600 transition-colors" data-id="ansxyln42" data-path="src/components/SearchBar.tsx">

                  {suggestion}
                </button>
            )}
            </div>
          </motion.div>
        }
      </div>
    </div>);

};

export default SearchBar;