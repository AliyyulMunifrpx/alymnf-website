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
}) {
  const wrapperRef = useRef(null);
  const floatingRef = useRef(null);
  const animationRef = useRef(null);

  const [isHover, setIsHover] = useState(false);

  // =========================
  // ANIMASI MASUK / KELUAR
  // =========================
  useEffect(() => {
    if (!wrapperRef.current) return;

    gsap.to(wrapperRef.current, {
      top: active ? position.top : "50%",
      left: active ? position.left : "50%",
      opacity: active ? 1 : 0,
      xPercent: -50,
      yPercent: -50,
      duration: 0.8,
      delay,
      ease: "power3.inOut",
    });
  }, [active, position, delay]);

  // =========================
  // ANIMASI FLOATING
  // =========================
  useEffect(() => {
    if (!floatingRef.current) return;

    animationRef.current?.kill();

    if (!active) {
      gsap.set(floatingRef.current, {
        x: 0,
        y: 0,
        rotation: 0,
      });

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
  }, [active, topAnimation, leftAnimation, delay]);

  // =========================
  // PAUSE / RESUME
  // =========================
  useEffect(() => {
    if (!animationRef.current) return;

    if (isHover) {
      animationRef.current.pause();
    } else {
      animationRef.current.resume();
    }
  }, [isHover]);

  return (
    <div ref={wrapperRef} className="absolute pointer-events-none">
      {/* CONTAINER YANG IKUT FLOATING */}
      <div ref={floatingRef} className="relative w-[150px] h-[150px]">
        {/* IMAGE NORMAL */}
        <Image
          alt={alt}
          src={src}
          width={100}
          height={100}
          className={`absolute inset-0 pointer-events-auto cursor-pointer ${
            isHover ? "opacity-0" : "opacity-100"
          }`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />

        {/* IMAGE HOVER */}
        <Image
          alt={`${alt}-hover`}
          src={imageHover}
          width={100}
          height={100}
          className={`absolute inset-0 pointer-events-none transition-opacity duration-150 ${
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

  const skills = [
    {
      alt: "Photoshop",
      src: "/assets/skills section/photoshop.svg",
      position: {
        top: "15%",
        left: "40%",
      },
      delay: 0,
      topAnimation: 50,
      leftAnimation: 50,
    },
    {
      alt: "Node",
      src: "/assets/skills section/node.svg",
      position: {
        top: "40%",
        left: "20%",
      },
      delay: 0.1,
      topAnimation: 30,
      leftAnimation: 50,
    },
    {
      alt: "Express",
      src: "/assets/skills section/express.svg",
      position: {
        top: "75%",
        left: "25%",
      },
      delay: 0.2,
      topAnimation: -30,
      leftAnimation: 50,
    },
    {
      alt: "JavaScript",
      src: "/assets/skills section/javascript.svg",
      position: {
        top: "20%",
        left: "70%",
      },
      delay: 0.6,
      topAnimation: 30,
      leftAnimation: -30,
    },
    {
      alt: "React",
      src: "/assets/skills section/react.svg",
      position: {
        top: "50%",
        left: "80%",
      },
      delay: 0.5,
      topAnimation: 10,
      leftAnimation: -70,
    },
    {
      alt: "Canva",
      src: "/assets/skills section/canva.svg",
      position: {
        top: "80%",
        left: "70%",
      },
      delay: 0.4,
      topAnimation: -50,
      leftAnimation: -50,
    },
    {
      alt: "Figma",
      src: "/assets/skills section/figma.svg",
      position: {
        top: "90%",
        left: "50%",
      },
      delay: 0.3,
      topAnimation: -50,
      leftAnimation: -10,
    },
  ];

  return (
    <div className="relative min-h-[140dvh] w-full">
      {/* Crown */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0,
        }}
        className="absolute left-1/2 top-[5%] h-[15%] w-[15%] -translate-x-1/2"
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            alt="Crown"
            src="/assets/skills section/crown.svg"
            width={50}
            height={50}
            className="h-full w-full"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 h-full w-full">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="mt-72 text-center text-6xl text-[#4105F7]"
        >
          What I Build With
        </motion.p>

        <div className="relative h-[60%] w-full">
          {/* SKILLS */}
          <div className="absolute inset-0 h-full w-full">
            {skills.map((skill) => (
              <SkillImage
                key={skill.alt}
                alt={skill.alt}
                src={skill.src}
                position={skill.position}
                active={active}
                delay={skill.delay}
                topAnimation={skill.topAnimation}
                leftAnimation={skill.leftAnimation}
                imageHover={`/assets/skills section/${skill.alt.toLowerCase()}-hover.svg`}
              />
            ))}
          </div>
          <div className="absolute flex flex-col justify-center items-center pointer-events-none inset-0 w-full h-full">
            <motion.div
              animate={{ y: [10, 0, 10], x: [15, 0, 15] }}
              transition={{
                repeat: Infinity,
                duration: 10,

                ease: "easeOut",
              }}
              className="relative w-[150px] h-[150px] pointer-events-auto cursor-pointer"
            >
              {" "}
              {/* BRAIN HOVER */}
              <div
                className="relative w-[150px] h-[150px] cursor-pointer"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => setActive((prev) => !prev)}
              >
                {/* BRAIN HOVER (ANIMASI MEKAR) */}
                <motion.div
                  initial={{ clipPath: "circle(0% at 50% 50%)" }}
                  animate={{
                    clipPath: isHover
                      ? "circle(100% at 50% 50%)"
                      : "circle(0% at 50% 50%)",
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 z-10 w-full h-full pointer-events-none"
                >
                  <Image
                    alt="Brain Hover"
                    src="/assets/skills section/brain-hover.svg"
                    width={150}
                    height={150}
                  />
                </motion.div>

                {/* BRAIN NORMAL */}
                <Image
                  alt="Brain Normal"
                  src="/assets/skills section/brain.svg"
                  width={150}
                  height={150}
                  className="absolute inset-0 z-0 pointer-events-none"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              className="text-[#000000] text-center text-2xl"
            >
              Click my brain
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
