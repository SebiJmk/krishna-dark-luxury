import { useState, useCallback } from "react";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import SmartHeader from "@/components/SmartHeader";
import HeroSection from "@/components/HeroSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const onPreloaderComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <Preloader onComplete={onPreloaderComplete} />}
      <CustomCursor />
      {loaded && (
        <div className="min-h-screen bg-background">
          <SmartHeader />
          <HeroSection />
          <ExperiencesSection />
          <MenuSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
