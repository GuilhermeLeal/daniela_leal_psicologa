import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AcademicSection from "@/components/AcademicSection";
import EssenceSection from "@/components/EssenceSection";
import MethodologySection from "@/components/MethodologySection";
import TreatmentsSection from "@/components/TreatmentsSection";
import OnlineSection from "@/components/OnlineSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicSection />
        <EssenceSection />
        <MethodologySection />
        <TreatmentsSection />
        <OnlineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
