import AboutSection from "@/components/aboutSection";
import FeaturesSection from "@/components/featureSection";
import FormSection from "@/components/formSection";
import HeroSection from "@/components/heroSection";
import Footer from "@/components/layout/footer";
import TestimonialsSlider from "@/components/testimonialsSlider";


const LandingPage = () => {
  return (
    <main className="text-white mt-0">
      <HeroSection />
      <FeaturesSection />
      <AboutSection/>
      <TestimonialsSlider />
      <FormSection />
      <Footer />
    </main>
  );
};

export default LandingPage;