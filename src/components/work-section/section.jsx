import Image from "next/image.js";
import { useEffect, useId, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useRouter } from "next/router.js";

const reveal = {
  initial: { y: 32 },
  whileInView: { y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

function DesignCard({ image, rotate = 0, imageHover, alt }) {
  const cardRef = useRef(null);
  const pathRef = useRef(null);
  const timelineRef = useRef(null);
  const maskId = useId().replace(/:/g, "");

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    // Awalnya coretan belum tergambar
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const tl = gsap.timeline({
      paused: true,
    });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    timelineRef.current?.play();
  };

  const handleMouseLeave = () => {
    timelineRef.current?.reverse();
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full aspect-square pointer-events-auto cursor-pointer overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* IMAGE NORMAL */}
      <Image
        alt={alt}
        src={`/assets/work section/${image}`}
        fill
        className="absolute inset-0 z-0 w-full p-[10%] pointer-events-none"
      />

      {/* SVG MASK & HOVER IMAGE */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 p-[10%]"
        viewBox="0 0 2671 2537"
      >
        <defs>
          <mask id={maskId}>
            {/* Hitam = tidak terlihat */}
            <rect width="2671" height="2537" fill="black" />

            {/* Coretan = area yang membuka image */}
            <path
              ref={pathRef}
              d="M228.116 1667.35C763.793 472.743 942.583 74.0263 1222.1 319.548C1501.61 565.069 428.54 1757.23 806.508 1926.71C1184.48 2096.2 1398.25 480.422 1742.21 552.773C2086.17 625.124 1131.99 2072.66 1386 2186.56C1640.01 2300.46 1912.06 710.821 2309.6 807.2C2707.15 903.578 1906.11 2419.79 1906.11 2419.79"
              fill="none"
              stroke="white"
              strokeWidth="800"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: "scale(1.5)",
                transformOrigin: "center",
              }}
            />
          </mask>
        </defs>

        {/* Gambar Hover dimasukkan langsung ke SVG dengan atribut mask */}
        <image
          alt={alt}
          href={`/assets/work section/${imageHover}`}
          width="2671"
          height="2537"
          mask={`url(#${maskId})`}
          preserveAspectRatio="none"
        />
      </svg>

      {/* BORDER */}
      <Image
        alt=""
        src="/assets/work section/border.svg"
        fill
        className="absolute inset-0 z-10 w-full p-[5%] pointer-events-none"
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    </div>
  );
}

function WebsiteCard({ image, imageHover, projectUrl, alt }) {
  const [isHover, setIsHover] = useState(false);
  const route = useRouter();
  return (
    <div
      className="grid grid-cols-1 grid-rows-1 w-full pointer-events-auto cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => route.push(projectUrl)}
    >
      {/* Website normal */}
      <Image
        alt={alt}
        src={`/assets/work section/${image}`}
        width={1518}
        height={870}
        className={`
          row-start-1 col-start-1 z-0 w-full h-auto p-[5%]
         
        `}
      />

      {/* Website hover */}
      <motion.div
        initial={{
          clipPath: "circle(0% at 50% 50%)",
        }}
        animate={{
          clipPath: isHover
            ? "circle(100% at 50% 50%)"
            : "circle(0% at 50% 50%)",
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className={` row-start-1 col-start-1 z-0 w-full h-auto `}
      >
        <Image
          alt=""
          src={`/assets/work section/${imageHover}`}
          width={1518}
          height={870}
          className={`
          z-0 w-full h-auto p-[5%]
       
        `}
        />
      </motion.div>

      {/* Border */}
      <Image
        alt={alt}
        src="/assets/work section/border-horizontal.webp"
        width={1518}
        height={870}
        className=" row-start-1 col-start-1 z-10 w-full -top-[1%] p-[5%]"
      />
    </div>
  );
}

export default function WorkSection() {
  const Design = [
    {
      name: "design-1",
      image: "design 1.webp",
      imageHover: "design-1-hover.svg",
      alt: "The Maxsten logo design is simple and elegant",
      rotate: "0",
    },
    {
      name: "design-2",
      image: "design 2.webp",
      imageHover: "design-2-hover.webp",
      alt: "Promotional poster design for a refreshing beverage",
      rotate: "90",
    },
    {
      name: "design-3",
      image: "design 3.webp",
      imageHover: "design-3-hover.webp",
      alt: "digital poster design, digital imaging, Photoshop manipulation, cool soccer player",
      rotate: "0",
    },
    {
      name: "design-4",
      image: "design 4.webp",
      imageHover: "design-4-hover.svg",
      alt: "Metavisi Nusantara Academy Logo Design: Elegant and Simple",
      rotate: "180",
    },
    {
      name: "design-5",
      image: "design 5.webp",
      imageHover: "design-5-hover.webp",
      alt: "Promotional poster design for expensive, luxurious purple shoes",
      rotate: "270",
    },
    {
      name: "design-6",
      image: "design 6.webp",
      imageHover: "design-6-hover.webp",
      alt: "digital poster design, digital imaging, Photoshop manipulation, cool soccer player",
      rotate: "0",
    },
  ];
  const Website = [
    {
      name: "Maxsten",
      image: "website 1.webp",
      imageHover: "website-1-hover.webp",
      alt: "Maxsten self-order and queue management website",
      projectUrl: "https://maxsten.vercel.app",
    },
    {
      name: "Rnee",
      image: "website-2.webp",
      imageHover: "website-2-hover.webp",
      alt: "Rnee premium parfume website",
      projectUrl: "https://rnee-demo.vercel.app",
    },
    {
      name: "Satnight",
      image: "website-3.webp",
      imageHover: "website-3-hover.webp",
      alt: "Satnight rental kamera website",
      projectUrl: "https://satnight-demo.vercel.app",
    },
    {
      name: "Munivy",
      image: "website-4.webp",
      imageHover: "website-4-hover.webp",
      alt: "Munivy rental iphone website",
      projectUrl: "https://munivy.vercel.app",
    },
  ];
  return (
    <div className="min-h-[100dvh] flex flex-col w-full mb-24 ">
      <motion.h2
        {...reveal}
        className="text-5xl lg:text-6xl text-[#4105F7] text-center mb-8 "
      >
        What I&apos;ve Built
      </motion.h2>
      <div className="flex flex-col px-4 lg:px-8 w-full h-full">
        <motion.h3
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.1 }}
          className="text-3xl pl-8 text-[#4105F7] text-start "
        >
          On Paper
        </motion.h3>
        <div className="grid w-full grid-cols-2 lg:grid-cols-3">
          {Design.map((item, index) => {
            return (
              <motion.div
                key={item.name}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.3 }}
              >
                <DesignCard
                  alt={item.alt}
                  imageHover={item.imageHover}
                  image={item.image}
                  rotate={item.rotate}
                ></DesignCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col px-4 lg:px-8 pt-4  w-full h-full">
        <motion.h3
          {...reveal}
          className="text-3xl pl-8 text-[#4105F7] text-start "
        >
          On Screen
        </motion.h3>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 h-full">
          {Website.map((item, index) => {
            return (
              <motion.div
                key={item.name}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.3 }}
              >
                <WebsiteCard
                  alt={item.alt}
                  imageHover={item.imageHover}
                  image={item.image}
                  projectUrl={item.projectUrl}
                ></WebsiteCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
