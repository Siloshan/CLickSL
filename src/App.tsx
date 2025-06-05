import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import ListingDetail from "./pages/ListingDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import WishlistPage from "./pages/WishlistPage"; // Import WishlistPage

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="4mwuxn7ry" data-path="src/App.tsx">
    <TooltipProvider data-id="m9jrm4rd3" data-path="src/App.tsx">
      <AuthProvider data-id="jqlvjzkkr" data-path="src/App.tsx">
        <Toaster data-id="yz4dh69m6" data-path="src/App.tsx" />
        <BrowserRouter data-id="wu1w5v71b" data-path="src/App.tsx">
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-orange-50" data-id="ewu0egjv8" data-path="src/App.tsx">
            <Routes data-id="szw9cpez8" data-path="src/App.tsx">
              <Route path="/" element={<HomePage data-id="rgtne1u3q" data-path="src/App.tsx" />} data-id="y6egdpqwu" data-path="src/App.tsx" />
              <Route path="/search" element={<SearchResults data-id="czsp52nc7" data-path="src/App.tsx" />} data-id="4nxywgfb0" data-path="src/App.tsx" />
              <Route path="/listing/:id" element={<ListingDetail data-id="12fya4m8q" data-path="src/App.tsx" />} data-id="63lt2kei7" data-path="src/App.tsx" />
              <Route path="/login" element={<Login data-id="gvh69vbfm" data-path="src/App.tsx" />} data-id="z42e36l16" data-path="src/App.tsx" />
              <Route path="/register" element={<Register data-id="g2xpa5uas" data-path="src/App.tsx" />} data-id="5sruatty8" data-path="src/App.tsx" />
              {/* Protected Routes */}
              <Route element={<ProtectedRoute data-id="uenc03227" data-path="src/App.tsx" />}>
                <Route path="/dashboard" element={<UserDashboard data-id="hwap4wpmy" data-path="src/App.tsx" />} data-id="p90y4qigm" data-path="src/App.tsx" />
                <Route path="/admin" element={<AdminDashboard data-id="34jimsmv3" data-path="src/App.tsx" />} data-id="snj684ui7" data-path="src/App.tsx" />
                <Route path="/profile" element={<Profile data-id="a0icdb5dt" data-path="src/App.tsx" />} data-id="bl26qpahu" data-path="src/App.tsx" />
                <Route path="/wishlist" element={<WishlistPage data-id="wishlistpage01" data-path="src/App.tsx" />} data-id="wishlistroute01" data-path="src/App.tsx" />
              </Route>
              <Route path="*" element={<NotFound data-id="mixa8420k" data-path="src/App.tsx" />} data-id="q3eea670y" data-path="src/App.tsx" />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>;

export default App;