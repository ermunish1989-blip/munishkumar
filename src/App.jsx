import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import Experience from './pages/Experience';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PageTransition from './components/ui/PageTransition';
import ProtectedRoute from './components/ui/ProtectedRoute';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBlogEditor from './pages/admin/AdminBlogEditor';

// GEO Landing Pages
import Bahrain from './pages/locations/Bahrain';
import India from './pages/locations/India';
import USA from './pages/locations/USA';
import UK from './pages/locations/UK';
import Europe from './pages/locations/Europe';
import UAE from './pages/locations/UAE';
import SaudiArabia from './pages/locations/SaudiArabia';
import GCC from './pages/locations/GCC';
import APAC from './pages/locations/APAC';

import WhatsAppWidget from './components/ui/WhatsAppWidget';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />

        {/* GEO Landing Routes */}
        <Route path="/locations/bahrain" element={<PageTransition><Bahrain /></PageTransition>} />
        <Route path="/locations/india" element={<PageTransition><India /></PageTransition>} />
        <Route path="/locations/usa" element={<PageTransition><USA /></PageTransition>} />
        <Route path="/locations/uk" element={<PageTransition><UK /></PageTransition>} />
        <Route path="/locations/europe" element={<PageTransition><Europe /></PageTransition>} />
        <Route path="/locations/uae" element={<PageTransition><UAE /></PageTransition>} />
        <Route path="/locations/saudi-arabia" element={<PageTransition><SaudiArabia /></PageTransition>} />
        <Route path="/locations/gcc" element={<PageTransition><GCC /></PageTransition>} />
        <Route path="/locations/apac" element={<PageTransition><APAC /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* ─── Admin Routes (no Navbar/Footer) ─── */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/blog/new" element={<ProtectedRoute><AdminBlogEditor /></ProtectedRoute>} />
        <Route path="/admin/blog/edit/:id" element={<ProtectedRoute><AdminBlogEditor /></ProtectedRoute>} />

        {/* ─── Main Site Routes (with Navbar/Footer) ─── */}
        <Route path="/*" element={
          <>
            {/* Global Background Glow Elements */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[rgba(212,175,55,0.08)] rounded-full blur-[100px]"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[rgba(212,175,55,0.05)] rounded-full blur-[120px]"></div>
            </div>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <AnimatedRoutes />
              </main>
              <Footer />
              <WhatsAppWidget />
            </div>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

