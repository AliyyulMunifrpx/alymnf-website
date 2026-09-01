import Image from "next/image.js";
import { useEffect, useId, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useRouter } from "next/router.js";

function DesignCard({ image, rotate = 0, imageHover }) {
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
        alt=""
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
function WebsiteCard({ image, imageHover, projectUrl }) {
  const [isHover, setIsHover] = useState(false);
  const route = useRouter();
  return (
    <div
      className="relative w-full pointer-events-auto cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => route.push(projectUrl)}
    >
      {/* Website normal */}
      <Image
        alt="website thumbnail"
        src={`/assets/work section/${image}`}
        width={1518}
        height={870}
        className={`
          absolute inset-0 z-0 w-full h-auto p-[5%]
         
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
        className={`absolute inset-0 z-0 w-full h-full `}
      >
        <Image
          alt=""
          src={`/assets/work section/${imageHover}`}
          width={1518}
          height={870}
          className={`
          absolute inset-0 z-0 w-full h-auto p-[5%]
       
        `}
        />
      </motion.div>

      {/* Border */}
      <Image
        alt=""
        src="/assets/work section/horizontal border.svg"
        width={1518}
        height={870}
        className="absolute inset-0 z-10 w-full -top-[1%] p-[5%]"
      />
    </div>
  );
}
export default function WorkSection() {
  const Design = [
    {
      name: "design-1",
      image: "design 1.svg",
      imageHover: "design-1-hover.svg",
      rotate: "0",
    },
    {
      name: "design-2",
      image: "design 2.svg",
      imageHover: "design-2-hover.png",
      rotate: "90",
    },
    {
      name: "design-3",
      image: "design 3.svg",
      imageHover: "design-3-hover.png",
      rotate: "0",
    },
    {
      name: "design-4",
      image: "design 4.svg",
      imageHover: "design-4-hover.svg",
      rotate: "180",
    },
    {
      name: "design-5",
      image: "design 5.svg",
      imageHover: "design-5-hover.png",
      rotate: "270",
    },
    {
      name: "design-6",
      image: "design 6.svg",
      imageHover: "design-6-hover.png",
      rotate: "0",
    },
  ];
  const Website = [
    {
      name: "website-1",
      image: "website 1.svg",
      imageHover: "website-1-hover.png",
      projectUrl: "https://maxsten.vercel.app",
    },
  ];
  return (
    <div className="relative min-h-[200dvh] w-full ">
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 1.3 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute -right-[5%] bottom-[15%] w-72"
      >
        <motion.div
          animate={{
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            alt="Plaster"
            src="/assets/work section/plaster.svg"
            width={100}
            height={100}
            className="w-72"
          />
        </motion.div>
      </motion.div>
      <div className="absolute flex flex-col p-8 inset-0 w-full">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-7xl text-[#4105F7] text-center mb-8 "
        >
          What I&apos;ve Built
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          className="text-5xl pl-8 text-[#4105F7] text-start "
        >
          On Paper
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="grid w-full grid-cols-3 mb-8"
        >
          {Design.map((item) => {
            return (
              <DesignCard
                key={item.name}
                imageHover={item.imageHover}
                image={item.image}
                rotate={item.rotate}
              ></DesignCard>
            );
          })}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-5xl pl-8 text-[#4105F7] text-start "
        >
          On Screen
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="grid w-full grid-cols-2 mb-8"
        >
          {Website.map((item) => {
            return (
              <WebsiteCard
                key={item.name}
                imageHover={item.imageHover}
                image={item.image}
                projectUrl={item.projectUrl}
              ></WebsiteCard>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
