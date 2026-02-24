import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/ui/PageTransition';
import ProtectedRoute from './components/ui/ProtectedRoute';

// Lazy load all pages for performance (code splitting)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/Services'));
const Experience = lazy(() => import('./pages/Experience'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Resources = lazy(() => import('./pages/Resources'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminBlogEditor = lazy(() => import('./pages/admin/AdminBlogEditor'));
const AdminResourceEditor = lazy(() => import('./pages/admin/AdminResourceEditor'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy load GEO Landing Pages
const Bahrain = lazy(() => import('./pages/locations/Bahrain'));
const India = lazy(() => import('./pages/locations/India'));
const USA = lazy(() => import('./pages/locations/USA'));
const UK = lazy(() => import('./pages/locations/UK'));
const Europe = lazy(() => import('./pages/locations/Europe'));
const UAE = lazy(() => import('./pages/locations/UAE'));
const SaudiArabia = lazy(() => import('./pages/locations/SaudiArabia'));
const GCC = lazy(() => import('./pages/locations/GCC'));
const APAC = lazy(() => import('./pages/locations/APAC'));

// Simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-[#050506] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#d4af37]/30 border-t-[#d4af37] rounded-full animate-spin"></div>
  </div>
);

import WhatsAppWidget from './components/ui/WhatsAppWidget';
import ScrollToTopButton from './components/ui/ScrollToTop';
import AIChatWidget from './components/ui/AIChatWidget';

// Scroll to top on route change (Internal helper)
const RouteScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MainAppLayout = () => {
  const location = useLocation();

  return (
    <>
      {/* Global Background Glow Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[rgba(212,175,55,0.08)] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[rgba(212,175,55,0.05)] rounded-full blur-[120px]"></div>
      </div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoader />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
                <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
                <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
                <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
                <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
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

                {/* 404 Catch All inside main site */}
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
        <WhatsAppWidget />
        <AIChatWidget />
        <ScrollToTopButton />
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        {/* ─── Admin Routes (no Navbar/Footer) ─── */}
        <Route path="/admin" element={<Suspense fallback={<PageLoader />}><AdminLogin /></Suspense>} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><AdminDashboard /></Suspense></ProtectedRoute>} />
        <Route path="/admin/blog/new" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><AdminBlogEditor /></Suspense></ProtectedRoute>} />
        <Route path="/admin/blog/edit/:id" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><AdminBlogEditor /></Suspense></ProtectedRoute>} />
        <Route path="/admin/resources/new" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><AdminResourceEditor /></Suspense></ProtectedRoute>} />
        <Route path="/admin/resources/edit/:id" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><AdminResourceEditor /></Suspense></ProtectedRoute>} />

        {/* ─── Main Site Routes (with Navbar/Footer) ─── */}
        <Route path="/*" element={<MainAppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

