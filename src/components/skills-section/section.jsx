import Image from "next/image.js";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

function SkillImage({
  src,
  alt,
  position,
  active,
  delay,
  topAnimation,
  leftAnimation,
  imageHover,
  isMobile,
}) {
  const wrapperRef = useRef(null);
  const floatingRef = useRef(null);
  const animationRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  // =========================
  // ANIMASI MASUK / KELUAR (skip di mobile)
  // =========================
  useEffect(() => {
    if (isMobile || !wrapperRef.current) return;

    gsap.to(wrapperRef.current, {
      x: active ? position.x : "0vw",
      y: active ? position.y : "0vh",
      opacity: active ? 1 : 0,
      duration: 0.8,
      delay,
      ease: "power3.inOut",
    });
  }, [active, position, delay, isMobile]);

  // =========================
  // ANIMASI FLOATING (skip di mobile)
  // =========================
  useEffect(() => {
    if (isMobile || !floatingRef.current) return;
    animationRef.current?.kill();
    if (!active) {
      gsap.set(floatingRef.current, { x: 0, y: 0, rotation: 0 });
      return;
    }
    animationRef.current = gsap.to(floatingRef.current, {
      x: leftAnimation,
      y: topAnimation,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: delay * 2,
    });
    return () => {
      animationRef.current?.kill();
    };
  }, [active, topAnimation, leftAnimation, delay, isMobile]);

  // =========================
  // PAUSE / RESUME (skip di mobile)
  // =========================
  useEffect(() => {
    if (isMobile || !animationRef.current) return;
    if (isHover) animationRef.current.pause();
    else animationRef.current.resume();
  }, [isHover, isMobile]);

  // =========================
  // VERSI MOBILE: statis di grid, tap toggle hover
  // =========================
  if (isMobile) {
    return (
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => setIsHover((prev) => !prev)}
      >
        <div className="grid w-[100px] h-[100px]">
          <Image
            alt={alt}
            src={src}
            width={90}
            height={90}
            className={`col-start-1 row-start-1 w-full h-full transition-opacity duration-150 ${
              isHover ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            alt={`${alt}-hover`}
            src={imageHover || src}
            width={90}
            height={90}
            className={`col-start-1 row-start-1 w-full h-full transition-opacity duration-150 ${
              isHover ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    );
  }

  // =========================
  // VERSI DESKTOP (asli, tidak berubah)
  // =========================
  return (
    <div
      ref={wrapperRef}
      className="col-start-2 row-start-2 place-self-center pointer-events-none z-0"
    >
      <div ref={floatingRef} className="grid w-[120px] h-[120px]">
        <Image
          alt={alt}
          src={src}
          width={100}
          height={100}
          className={`col-start-1 row-start-1 w-full h-full pointer-events-auto cursor-pointer ${
            isHover ? "opacity-0" : "opacity-100"
          }`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />
        <Image
          alt={`${alt}-hover`}
          src={imageHover || src}
          width={100}
          height={100}
          className={`col-start-1 row-start-1 w-full h-full pointer-events-none transition-opacity duration-150 ${
            isHover ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [isHover, setIsHover] = useState(false);
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const skills = [
    {
      alt: "Photoshop",
      src: "/assets/skills section/photoshop.svg",
      imageHover: "/assets/skills section/photoshop-hover.svg",
      position: { x: "-25vw", y: "-25vh" },
      delay: 0,
      topAnimation: 50,
      leftAnimation: 50,
    },
    {
      alt: "Node",
      src: "/assets/skills section/node.svg",
      imageHover: "/assets/skills section/node-hover.svg",
      position: { x: "-35vw", y: "-5vh" },
      delay: 0.1,
      topAnimation: 30,
      leftAnimation: 50,
    },
    {
      alt: "Express",
      src: "/assets/skills section/express.svg",
      imageHover: "/assets/skills section/express-hover.svg",
      position: { x: "-20vw", y: "25vh" },
      delay: 0.2,
      topAnimation: -30,
      leftAnimation: 50,
    },
    {
      alt: "JavaScript",
      src: "/assets/skills section/javascript.svg",
      imageHover: "/assets/skills section/javascript-hover.svg",
      position: { x: "20vw", y: "-20vh" },
      delay: 0.6,
      topAnimation: 30,
      leftAnimation: -30,
    },
    {
      alt: "React",
      src: "/assets/skills section/react.svg",
      imageHover: "/assets/skills section/react-hover.svg",
      position: { x: "35vw", y: "0vh" },
      delay: 0.5,
      topAnimation: 10,
      leftAnimation: -70,
    },
    {
      alt: "Canva",
      src: "/assets/skills section/canva.svg",
      imageHover: "/assets/skills section/canva-hover.svg",
      position: { x: "20vw", y: "30vh" },
      delay: 0.4,
      topAnimation: -50,
      leftAnimation: -50,
    },
    {
      alt: "Figma",
      src: "/assets/skills section/figma.svg",
      imageHover: "/assets/skills section/figma-hover.svg",
      position: { x: "0vw", y: "40vh" },
      delay: 0.3,
      topAnimation: -50,
      leftAnimation: -10,
    },
  ];

  // =========================
  // VERSI MOBILE: grid 2 kolom, langsung tampil, tanpa otak
  // =========================
  if (isMobile) {
    return (
      <div className="grid grid-cols-1 grid-rows-1 min-h-[100dvh]  w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
          className="col-start-1 row-start-1 h-full w-full"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              alt="Crown"
              src="/assets/skills section/crown.svg"
              width={50}
              height={50}
              className="h-[30%] w-[30%] -translate-y-[100%] translate-x-[270%]"
            />
          </motion.div>
        </motion.div>
        <div className="col-start-1 row-start-1">
          <p className="text-center px-8 text-5xl text-[#4105F7]">
            What I Build With
          </p>
          <div className="grid grid-cols-2 gap-y-10 gap-x-8 justify-items-center py-8">
            {skills.map((skill) => (
              <SkillImage
                key={skill.alt}
                src={skill.src}
                alt={skill.alt}
                imageHover={skill.imageHover}
                isMobile
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // =========================
  // VERSI DESKTOP (asli, tidak berubah)
  // =========================
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 grid-rows-3  h-[100dvh] w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
        className="col-start-1 lg:col-start-3  row-start-1 h-full w-full"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        >
          <Image
            alt="Crown"
            src="/assets/skills section/crown.svg"
            width={50}
            height={50}
            className="h-[30%] w-[30%] -translate-y-[70%]"
          />
        </motion.div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        className="col-start-1 lg:col-start-2 row-start-1 text-center text-5xl lg:text-6xl text-[#4105F7]"
      >
        What I Build With
      </motion.p>

      <div className="col-start-1 lg:col-end-4 row-start-1 row-end-4 h-full w-full grid grid-cols-3 grid-rows-3">
        <div className="h-full w-full  col-start-2 col-end-3 row-start-2 row-end-3 grid grid-cols-1 grid-rows-1">
          {skills.map((skill) => (
            <div
              className="w-full h-full col-start-1 col-end-2 row-start-1"
              key={skill.alt}
            >
              <SkillImage
                key={skill.alt}
                src={skill.src}
                alt={skill.alt}
                imageHover={skill.imageHover}
                position={skill.position}
                delay={skill.delay}
                topAnimation={skill.topAnimation}
                leftAnimation={skill.leftAnimation}
                active={active}
              />
            </div>
          ))}
        </div>
        <div className="col-start-1 md:col-start-2 lg:col-start-2  lg:col-end-3  row-start-2 row-end-3 flex flex-col justify-center items-center pointer-events-none inset-0 w-full h-full">
          <motion.div
            animate={{ y: [10, 0, 10], x: [15, 0, 15] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeOut" }}
            className="relative w-[150px] h-[150px] pointer-events-auto"
          >
            <div
              className="grid grid-cols-1   grid-rows-1 items-center justify-center cursor-pointer"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => setActive((prev) => !prev)}
            >
              <motion.div
                initial={{ clipPath: "circle(0% at 50% 50%)" }}
                animate={{
                  clipPath: isHover
                    ? "circle(100% at 50% 50%)"
                    : "circle(0% at 50% 50%)",
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="col-start-1 row-start-1 z-10 w-full h-full pointer-events-none"
              >
                <Image
                  alt="Brain Hover"
                  src="/assets/skills section/brain-hover.svg"
                  width={150}
                  height={150}
                />
              </motion.div>

              <Image
                alt="Brain Normal"
                src="/assets/skills section/brain.svg"
                width={150}
                height={150}
                className="col-start-1 row-start-1 z-0 pointer-events-none"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-[#000000]  text-center text-2xl"
          >
            Click my brain
          </motion.p>
        </div>
      </div>
    </div>
  );
}
