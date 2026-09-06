import MainLayout from "../layouts/main-layouts.jsx";
import MainSection from "./../components/main-section/section";
import AboutSection from "../components/about-section/section.jsx";
import WorkSection from "../components/work-section/section.jsx";
import SkillsSection from "../components/skills-section/section.jsx";
import CtaSection from "../components/cta-section/section.jsx";
import Head from "next/head.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aliyyul Munif — Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Portofolio Aliyyul Munif, pengembang web full-stack — React, Next.js."
        />{" "}
        <link rel="canonical" href="https://alymnf.my.id" />
        <meta
          property="og:title"
          content="Aliyyul Munif — Full-Stack Web Developer"
        />
        <meta
          property="og:description"
          content="Portfolio & Web Development Services."
        />
        <meta property="og:image" content="https://alymnf.my.id/og-image.png" />
        <meta property="og:url" content="https://alymnf.my.id" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aliyyul Munif",
              jobTitle: "Full-Stack Web Developer",
              url: "https://namadomainmu.com",
            }),
          }}
        />
      </Head>{" "}
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
      </MainLayout>
    </>
  );
}
