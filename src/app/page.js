import AboutSection from "../../components/about-section.jsx";
import ContactSection from "../../components/contact-section.jsx";
import DescriptionSection from "../../components/description-section.jsx";
import MainSection from "../../components/main-section.jsx";
import PricingSection from "../../components/pricing-section.jsx";
import SelectedWorkSection from "../../components/selected-work.jsx";
import ServicesSection from "../../components/service-section.jsx";

export default function Home() {
  return (
    <main className="relative w-full bg-primary">
      {/* 1. Hero & Description */}
      <section className="relative z-20 bg-primary">
        <MainSection />
        <DescriptionSection />
      </section>

      <section
        id="services"
        className="relative z-20 min-h-screen bg-primary shadow-2xl mb-[-100vh]"
      >
        <ServicesSection />
      </section>

      <div className="sticky top-0 z-10 min-h-screen">
        <section id="selected-work">
          <SelectedWorkSection />
        </section>

        <section id="about-me">
          <AboutSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </div>

      <div className="h-[100vh]" aria-hidden="true" />
    </main>
  );
}
