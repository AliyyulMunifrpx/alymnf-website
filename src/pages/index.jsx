import Head from "next/head";
import MainLayout from "../layouts/main-layouts.jsx";
import MainSection from "../components/main-section/section";
import AboutSection from "../components/about-section/section.jsx";
import WorkSection from "../components/work-section/section.jsx";
import SkillsSection from "../components/skills-section/section.jsx";
import CtaSection from "../components/cta-section/section.jsx";

const SITE_URL = "https://alymnf.my.id";

export default function Home() {
  const title = "Aliyyul Munif — Full-Stack Web Developer";
  const description =
    "Portfolio Aliyyul Munif, Full-Stack Web Developer yang membangun website modern, responsif, dan scalable menggunakan React, Next.js, dan teknologi web modern.";

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>{title}</title>

        <meta name="description" content={description} />

        <meta
          name="keywords"
          content="Aliyyul Munif, Full-Stack Web Developer, Web Developer Indonesia, React Developer, Next.js Developer, JavaScript Developer, Website Developer"
        />

        <meta name="author" content="Aliyyul Munif" />

        <meta name="robots" content="index, follow" />

        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href={SITE_URL} />

        {/* Language / region */}
        <meta httpEquiv="content-language" content="id-ID" />

        {/* Theme */}
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta property="og:locale" content="id_ID" />

        <meta property="og:site_name" content="Aliyyul Munif" />

        <meta property="og:title" content={title} />

        <meta property="og:description" content={description} />

        <meta property="og:url" content={SITE_URL} />

        <meta property="og:image" content={`${SITE_URL}/og-image.webp`} />

        <meta
          property="og:image:alt"
          content="Aliyyul Munif — Full-Stack Web Developer"
        />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={title} />

        <meta name="twitter:description" content={description} />

        <meta name="twitter:image" content={`${SITE_URL}/og-image.webp`} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aliyyul Munif",
              url: SITE_URL,
              jobTitle: "Full-Stack Web Developer",
              description,
              knowsAbout: [
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "Web Development",
                "Frontend Development",
                "Backend Development",
              ],
            }),
          }}
        />
      </Head>

      <MainLayout>
        <section id="main">
          <MainSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="work">
          <WorkSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="cta">
          <CtaSection />
        </section>
      </MainLayout>
    </>
  );
}
