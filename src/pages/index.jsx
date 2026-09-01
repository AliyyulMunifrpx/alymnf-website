import MainLayout from "../layouts/main-layouts.jsx";
import MainSection from "./../components/main-section/section";
import AboutSection from "../components/about-section/section.jsx";
import WorkSection from "../components/work-section/section.jsx";
import SkillsSection from "../components/skills-section/section.jsx";
import CtaSection from "../components/cta-section/section.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {
  return (
    <MainLayout>
      <section id="main">
        <MainSection />
      </section>{" "}
      <section id="about">
        <AboutSection />
      </section>{" "}
      <section id="work">
        <WorkSection></WorkSection>{" "}
      </section>{" "}
      <section id="skills">
        <SkillsSection></SkillsSection>{" "}
      </section>{" "}
      <section id="cta">
        <CtaSection></CtaSection>{" "}
      </section>{" "}
      <Footer></Footer>
    </MainLayout>
  );
}
