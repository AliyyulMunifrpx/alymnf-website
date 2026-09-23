import Head from "next/head";
import Image from "next/image.js";
import Link from "next/link.js";
import { useRouter } from "next/router.js";
import { motion } from "framer-motion";
import { Website } from "../../../data/website.js";
import MainLayout from "../../layouts/main-layouts.jsx";

const reveal = {
  initial: { y: 24 },
  whileInView: { y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function ProjectDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const project = Website.find((p) => p.slug === slug);

  if (!project) {
    return null;
  }

  const projectUrl = `https://alymnf.my.id/projects/${project.slug}`;
  const projectImage = `https://alymnf.my.id/assets/work%20section/${project.imageHover}`;

  return (
    <>
      <Head>
        <title>
          {project.name} — {project.category} | Aliyyul Munif
        </title>
        {/* ... Meta tags lainnya tetap sama ... */}
        <meta name="description" content={project.shortDescription} />
        <meta
          name="keywords"
          content={[
            project.name,
            project.category,
            project.type,
            project.role,
            ...(project.techStack || []),
            "Aliyyul Munif",
            "Full-Stack Web Developer",
            "Web Developer Indonesia",
            "Web Development Portfolio",
          ].join(", ")}
        />
        <meta name="author" content="Aliyyul Munif" />
        <meta name="creator" content="Aliyyul Munif" />
        <meta name="publisher" content="Aliyyul Munif" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href={projectUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Aliyyul Munif" />
        <meta
          property="og:title"
          content={`${project.name} — ${project.category} | Aliyyul Munif`}
        />
        <meta property="og:description" content={project.shortDescription} />
        <meta property="og:url" content={projectUrl} />
        <meta property="og:image" content={projectImage} />
        <meta
          property="og:image:alt"
          content={`${project.name} project preview`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${project.name} — ${project.category}`}
        />
        <meta name="twitter:description" content={project.shortDescription} />
        <meta name="twitter:image" content={projectImage} />
        <meta
          name="twitter:image:alt"
          content={`${project.name} project preview`}
        />
        {/* JSON-LD omitted for brevity but remains intact in your codebase */}
      </Head>

      <MainLayout>
        <main className="min-h-[100dvh] w-full px-8 py-12 lg:px-16 bg-white lg:py-16 mt-16">
          {/* MOBILE / TABLET HEADER */}
          <div className="mb-12 flex flex-col gap-4 lg:hidden">
            <div className="font-poppins flex flex-wrap gap-2 text-xs uppercase text-black/50">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.type}</span>
              <span>•</span>
              <span>{project.role}</span>
            </div>
            <h1 className="text-4xl text-[#4105F7]">{project.name}</h1>
            <p className="font-poppins max-w-2xl text-lg text-black/60">
              {project.shortDescription}
            </p>
          </div>

          {/* DESKTOP LAYOUT - Perbaikan ada di baris ini (menghapus lg:items-start) */}
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            {/* LEFT - STICKY */}
            <aside className="hidden lg:block">
              {/* Perbaikan jarak aman navbar: top-8 diubah jadi top-28 */}
              <div className="sticky top-28 flex h-fit flex-col gap-6">
                <motion.div
                  {...reveal}
                  className="relative aspect-[2/1] w-full overflow-hidden"
                >
                  <Image
                    src={`/assets/work section/${project.imageHover}`}
                    alt={project.alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="50vw"
                  />
                </motion.div>

                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins inline-flex w-full items-center justify-center gap-4 rounded-full bg-[#4105F7] px-4 py-4 text-base text-white transition-all hover:brightness-110"
                >
                  View Live Project
                  <span>↗</span>
                </Link>
              </div>
            </aside>

            {/* RIGHT - SCROLLABLE CONTENT */}
            <div className="flex flex-col gap-16">
              {/* ... Isi konten kanan sama persis seperti kodemu sebelumnya ... */}
              <motion.div {...reveal} className="hidden flex-col gap-4 lg:flex">
                <div className="font-poppins flex flex-wrap gap-2 text-xs uppercase text-black/50">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.type}</span>
                  <span>•</span>
                  <span>{project.role}</span>
                </div>
                <h1 className="text-5xl text-[#4105F7] xl:text-6xl">
                  {project.name}
                </h1>
                <p className="font-poppins max-w-2xl text-xl text-black/60 xl:text-2xl">
                  {project.shortDescription}
                </p>
              </motion.div>

              {/* MOBILE / TABLET IMAGE */}
              <motion.div
                {...reveal}
                transition={{
                  ...reveal.transition,
                  delay: 0.1,
                }}
                className="relative aspect-video w-full overflow-hidden lg:hidden"
              >
                <Image
                  src={`/assets/work section/${project.image}`}
                  alt={project.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* MOBILE / TABLET LIVE PROJECT */}
              <motion.div
                {...reveal}
                transition={{
                  ...reveal.transition,
                  delay: 0.15,
                }}
                className="lg:hidden"
              >
                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins inline-flex w-full items-center gap-4 justify-center rounded-full bg-[#4105F7] px-4 py-4 text-base text-white transition-all hover:brightness-110"
                >
                  View Live Project
                  <span>↗</span>
                </Link>
              </motion.div>

              {/* DESCRIPTION */}
              <motion.div
                {...reveal}
                transition={{
                  ...reveal.transition,
                  delay: 0.15,
                }}
              >
                <p className="font-poppins max-w-2xl text-base leading-relaxed text-black lg:text-lg">
                  {project.description}
                </p>
              </motion.div>

              {/* PROBLEM */}
              <motion.div
                {...reveal}
                transition={{
                  ...reveal.transition,
                  delay: 0.2,
                }}
                className="flex flex-col gap-4"
              >
                <h2 className="text-2xl text-[#4105F7]">The Problem</h2>

                <ul className="flex flex-col gap-3">
                  {project.problem.map((point, index) => (
                    <li
                      key={index}
                      className="font-poppins flex gap-4 text-base text-black/80 lg:text-lg"
                    >
                      <span className="font-poppins font-bold text-[#4105F7]">
                        —
                      </span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* SOLUTION */}
              <motion.div
                {...reveal}
                transition={{
                  ...reveal.transition,
                  delay: 0.25,
                }}
                className="flex flex-col gap-4"
              >
                <h2 className="text-2xl text-[#4105F7]">The Solution</h2>

                <p className="font-poppins max-w-2xl text-base leading-relaxed text-black/80 lg:text-lg">
                  {project.solution}
                </p>
              </motion.div>

              {/* FEATURES */}
              <motion.div
                {...reveal}
                transition={{
                  ...reveal.transition,
                  delay: 0.3,
                }}
                className="flex flex-col gap-6"
              >
                <h2 className="text-2xl text-[#4105F7]">Key Features</h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div key={feature.number} className="flex flex-col gap-1">
                      <span className="font-poppins text-sm font-bold text-[#4105F7]">
                        {feature.number}
                      </span>

                      <h3 className="text-lg font-semibold text-black">
                        {feature.title}
                      </h3>

                      <p className="font-poppins text-sm leading-relaxed text-black/70">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* TECH STACK */}
              <motion.div
                {...reveal}
                transition={{
                  ...reveal.transition,
                  delay: 0.35,
                }}
                className="flex flex-col gap-4"
              >
                <h2 className="text-2xl text-[#4105F7]">Tech Stack</h2>

                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-poppins rounded-full border border-black/20 px-4 py-2 text-sm text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CHALLENGES */}
              <motion.div
                {...reveal}
                transition={{
                  ...reveal.transition,
                  delay: 0.4,
                }}
                className="flex flex-col gap-6"
              >
                <h2 className="text-2xl text-[#4105F7]">
                  Technical Challenges
                </h2>

                {project.challenges.map((challenge) => (
                  <div
                    key={challenge.number}
                    className="flex flex-col gap-2 border-l-2 border-[#4105F7] pl-6"
                  >
                    <span className="font-poppins text-sm font-bold text-[#4105F7]">
                      {challenge.number}
                    </span>

                    <h3 className="text-lg font-semibold text-black">
                      {challenge.title}
                    </h3>

                    <p className="font-poppins leading-relaxed text-black/70">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* LEARNING */}
              <motion.div
                {...reveal}
                transition={{
                  ...reveal.transition,
                  delay: 0.45,
                }}
                className="flex flex-col gap-4"
              >
                <h2 className="text-2xl text-[#4105F7]">What I Learned</h2>

                <p className="font-poppins max-w-2xl text-base leading-relaxed text-black/80 lg:text-lg">
                  {project.learning}
                </p>
              </motion.div>

              {/* MOBILE CTA */}
              <motion.div
                {...reveal}
                transition={{
                  ...reveal.transition,
                  delay: 0.5,
                }}
                className="lg:hidden"
              >
                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins inline-flex items-center gap-4 w-full justify-center rounded-full bg-[#4105F7] px-4 py-4 text-base text-white transition-all hover:brightness-110"
                >
                  View Live Project
                  <span>↗</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
}
