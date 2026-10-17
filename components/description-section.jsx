"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextLoop from "../src/components/TextLoop.jsx";
import { information } from "../data/information.js";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const contentItems = [
  `${information.name} designs and develops modern, `,
  { type: "shape", seed: 0 },
  " responsive websites that help businesses showcase their services, ",
  { type: "shape", seed: 1 },
  " build credibility, and connect with more ",
  { type: "shape", seed: 2 },
  " customers.",
];
// Bikin titik-titik polygon bergerigi (starburst / seal)
const burst = (points, outer, inner) =>
  Array.from({ length: points * 2 }, (_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI * i) / points - Math.PI / 2;
    return `${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

// Kumpulan bentuk retro (viewBox 0 0 100 100, warna ikut currentColor)
const SHAPES = [
  // Sparkle 4 titik
  <path
    key="sparkle"
    d="M50 0C54 30 70 46 100 50C70 54 54 70 50 100C46 70 30 54 0 50C30 46 46 30 50 0Z"
  />,
  // Lingkaran
  <circle key="circle" cx="50" cy="50" r="46" />,
  // Bunga
  <g key="flower">
    <circle cx="50" cy="24" r="22" />
    <circle cx="76" cy="50" r="22" />
    <circle cx="50" cy="76" r="22" />
    <circle cx="24" cy="50" r="22" />
    <circle cx="50" cy="50" r="20" />
  </g>,
  // Starburst tajam
  <polygon key="burst" points={burst(12, 48, 34)} />,
  // Seal bergelombang
  <polygon key="seal" points={burst(16, 48, 42)} />,
  // Plus tumpul
  <path key="plus" d="M35 0h30v35h35v30H65v35H35V65H0V35h35z" />,
  // Setengah lingkaran
  <path key="half" d="M2 75A48 48 0 0 1 98 75Z" />,
];

function RetroShape({ seed = 0 }) {
  const ref = useRef(null);
  const indexRef = useRef(seed % SHAPES.length);
  const [index, setIndex] = useState(indexRef.current);
  const [visible, setVisible] = useState(false);

  // Cuma animasi kalau lagi kelihatan di layar
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timeout;

    const tick = () => {
      let next;
      do {
        next = Math.floor(Math.random() * SHAPES.length);
      } while (next === indexRef.current);

      indexRef.current = next;
      setIndex(next);

      // Jeda acak biar 3 bentuk nggak ganti barengan
      timeout = setTimeout(tick, 1400 + Math.random() * 1200);
    };

    timeout = setTimeout(tick, 600 + seed * 400);

    return () => clearTimeout(timeout);
  }, [visible, seed]);

  return (
    <span
      ref={ref}
      className="reveal-image hidden lg:inline-flex items-center justify-center w-12 h-12  align-middle text-second3"
    >
      <motion.svg
        key={index}
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden="true"
        className="w-full h-full"
        initial={{ scale: 0.5, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        {SHAPES[index]}
      </motion.svg>
    </span>
  );
}

function splitText(text) {
  return text.split(/(\s+)/).map((word, index) => {
    if (/^\s+$/.test(word)) {
      return word;
    }

    return (
      <span key={index} className="inline-block whitespace-nowrap">
        {Array.from(word).map((char, charIndex) => (
          <span key={charIndex} className="reveal-char inline-block">
            {char}
          </span>
        ))}
      </span>
    );
  });
}

export default function DescriptionSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  // State buat ngatur ukuran text loop responsif (Mobile vs Desktop)
  const [loopSize, setLoopSize] = useState({ fontSize: 72, ribbonWidth: 96 });

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLoopSize({ fontSize: 72, ribbonWidth: 96 });
      } else {
        setLoopSize({ fontSize: 36, ribbonWidth: 56 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(
        ".reveal-char, .reveal-image, .reveal-loop",
        sectionRef.current,
      );

      gsap.set(targets, { opacity: 0, y: 20, filter: "blur(15px)" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: true,
        },
      });

      tl.to(targets, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.05,
        stagger: {
          each: 0.002,
        },
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative grid h-[100dvh] w-full grid-cols-1 lg:grid-cols-3 grid-rows-3 items-center overflow-hidden"
    >
      <div
        ref={textRef}
        className="z-20 col-start-1 col-end-1 lg:col-end-4 row-start-1 row-end-3 px-4 lg:px-32 flex items-center justify-center"
      >
        <p className="text-center text-3xl lg:text-5xl font-normal text-second3 leading-snug">
          {contentItems.map((item, index) => {
            if (typeof item === "string") {
              return <span key={index}>{splitText(item)}</span>;
            }

            return <RetroShape key={index} seed={item.seed} />;
          })}
        </p>
      </div>

      {/* TEXT LOOP */}
      <div className="reveal-loop z-10 col-start-1 col-end-4 row-start-3 row-end-4 overflow-hidden pb-24 font-poppins -rotate-0">
        <TextLoop
          text="alymnf"
          shape="wave"
          speed={40}
          direction="forward"
          separator="✦"
          curviness={20}
          fontSize={loopSize.fontSize}
          fontWeight={800}
          letterSpacing={2}
          uppercase={false}
          color="#000000"
          ribbon
          ribbonColor="#ffffff"
          ribbonWidth={loopSize.ribbonWidth}
          pauseOnHover={false}
        />
      </div>
    </div>
  );
}
