import Hero from '../components/home/Hero';
import StatsBar from '../components/home/StatsBar';
import ProblemSection from '../components/home/ProblemSection';
import PhilosophySection from '../components/home/PhilosophySection';
import Services from '../components/home/Services';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BottomCTA from '../components/home/BottomCTA';
import SEO from '../components/ui/SEO';

const Home = () => {
    return (
        <div className="w-full bg-[#050506]">
            <SEO canonicalUrl="https://munishkumar.com/" />
            <Hero />
            <StatsBar />
            <ProblemSection />
            <PhilosophySection />
            <Services />
            <TestimonialsSection />
            <BottomCTA />
        </div>
    );
};

export default Home;
