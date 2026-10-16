"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image.js";
import TextLoop from "../src/components/TextLoop.jsx";
import { information } from "../data/information.js";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const contentItems = [
  `${information.name} designs and develops modern, `,
  { type: "image", src: "/assets/work/1.webp", alt: "Work 1" },
  "responsive websites that help businesses showcase their services, ",
  { type: "image", src: "/assets/work/2.webp", alt: "Work 2" },
  " build credibility, and connect with more ",
  { type: "image", src: "/assets/work/3.webp", alt: "Work 3" },
  "customers.",
];

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
    // Fungsi buat ngecek ukuran layar saat load & resize
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Kalau di HP / Mobile, pakai ukuran yang lebih proporsional biar gak kepanjangan
        setLoopSize({ fontSize: 72, ribbonWidth: 96 });
      } else {
        // Kalau di Desktop/Laptop, pakai ukuran gede sesuai request (72 & 96)
        setLoopSize({ fontSize: 36, ribbonWidth: 48 });
      }
    };

    handleResize(); // Cek pas pertama render
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
      <div className="absolute inset-0 z-10 pointer-events-none flex justify-center items-start">
        <div className="w-[600px] h-[700px] bg-[#000000] rounded-full blur-[100px] opacity-70 translate-y-20"></div>
        <div className="w-[600px] h-[700px] bg-[#000000] rounded-full blur-[100px] opacity-70 translate-y-60"></div>
      </div>

      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 lg:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4105f7 1px, transparent 1px),
            linear-gradient(to bottom, #4105f7 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 40%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)",
        }}
      />
      <Image
        alt="decoration"
        src="/assets/decoration/plus.webp"
        width={30}
        height={30}
        className="hidden lg:block col-start-3 row-start-2 mt-auto translate-x-70"
      />

      <div
        ref={textRef}
        className="z-20 col-start-1 col-end-1 lg:col-end-4 row-start-1 row-end-3 px-4 lg:px-32 text-center text-3xl lg:text-5xl font-light text-second3 flex flex-wrap items-center justify-center gap-y-4 gap-x-3"
      >
        {contentItems.map((item, index) => {
          if (typeof item === "string") {
            return <span key={index}>{splitText(item)}</span>;
          } else {
            return (
              /* Dikasih kelas 'hidden lg:inline-flex' biar di mobile fotonya gak muncul */
              <span
                key={index}
                className="reveal-image hidden lg:inline-flex relative items-center justify-center w-32 h-12 align-middle overflow-visible rounded-full border border-white/20 shadow-lg mx-2 cursor-pointer group"
              >
                <span className="relative w-full h-full overflow-hidden rounded-full block">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </span>

                <span className="absolute left-1/2 -top-4 transform -translate-x-1/2 -translate-y-full w-64 h-36 bg-primary border border-white/20 rounded-2xl shadow-2xl overflow-hidden opacity-0 scale-95 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto z-50 block">
                  <Image
                    src={item.src}
                    alt={`${item.alt} preview`}
                    fill
                    className="object-cover"
                  />
                </span>
              </span>
            );
          }
        })}
      </div>

      {/* TEXT LOOP DENGAN UKURAN FONT & RIBBON YANG DIPERBESAR */}
      <div className="reveal-loop z-10 col-start-1 col-end-4 row-start-3 row-end-4 overflow-hidden">
        <TextLoop
          text="alymnf"
          shape="wave"
          speed={40}
          direction="forward"
          separator="✦"
          curviness={50}
          fontSize={loopSize.fontSize} // Ukuran otomatis (36 di HP, 72 di Desktop)
          fontWeight={800}
          letterSpacing={2}
          uppercase={false}
          color="#ffffff"
          ribbon
          ribbonColor="#4105f7"
          ribbonWidth={loopSize.ribbonWidth} // Lebar ribbon otomatis (48 di HP, 96 di Desktop)
          pauseOnHover={false}
        />
      </div>
    </div>
  );
}
