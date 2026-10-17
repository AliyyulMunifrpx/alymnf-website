"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Address bar HP yang naik-turun nggak ikut nge-refresh trigger
// (penting karena section pakai 100dvh + pin)
ScrollTrigger.config({ ignoreMobileResize: true });

// useLayoutEffect di client biar state awal (sembunyi) kepasang sebelum paint,
// useEffect di server biar nggak ada warning SSR
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Titik polygon bergerigi (starburst / seal)
const burst = (points, outer, inner) =>
  Array.from({ length: points * 2 }, (_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI * i) / points - Math.PI / 2;
    return `${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

// Bentuk retro (viewBox 0 0 100 100, warna ikut currentColor)
const SHAPES = [
  <path
    key="sparkle"
    d="M50 0C54 30 70 46 100 50C70 54 54 70 50 100C46 70 30 54 0 50C30 46 46 30 50 0Z"
  />,
  <circle key="circle" cx="50" cy="50" r="46" />,
  <g key="flower">
    <circle cx="50" cy="24" r="22" />
    <circle cx="76" cy="50" r="22" />
    <circle cx="50" cy="76" r="22" />
    <circle cx="24" cy="50" r="22" />
    <circle cx="50" cy="50" r="20" />
  </g>,
  <polygon key="burst" points={burst(12, 48, 34)} />,
  <polygon key="seal" points={burst(16, 48, 42)} />,
  <path key="plus" d="M35 0h30v35h35v30H65v35H35V65H0V35h35z" />,
  <path key="half" d="M2 75A48 48 0 0 1 98 75Z" />,
];

const MAX_SHAPES = 3;

// Jarak scroll selama section ke-pin (100% = satu tinggi viewport)
const PIN_DISTANCE = "+=100%";

// Reveal awal (scrub): mulai pas atas section nyentuh 50% viewport,
// selesai pas atas section nyampe 5% viewport (sebelum pin mulai)
const REVEAL_START = "top 50%";
const REVEAL_END = "top 5%";

const DATA = [
  {
    name: "Website Development",
    description:
      "A professional online presence for your business. I design and develop modern, responsive websites that showcase your business, communicate your value, and help potential customers discover your products and services.",
    includes:
      "Includes: Business websites, landing pages, product catalogs, and portfolio websites.",
    button: "Discuss Your Project",
  },
  {
    name: "Web Application Development",
    description:
      "Custom systems designed around your workflow. I build web applications that help businesses manage data, streamline operations, and handle everyday tasks through tailored digital solutions.",
    includes:
      "Includes: Admin dashboards, booking systems, management systems, and custom business applications.",
    button: "View My Work",
  },
];

// [tampil awal, tampil setelah scroll]
const SEQUENCE = [DATA[1], DATA[0]];

// Nomor ngikutin urutan SEQUENCE: Web Application = 1, Website = 2
const NUMBERS = ["1.", "2."];

// Mask pembungkus. Isinya (data-rise) dianimasikan GSAP naik dari bawah.
// `at` = posisi mulai di timeline reveal (0 - 1), buat atur urutan.
function Rise({ children, at = 0.4, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div data-rise data-at={at}>
        {children}
      </div>
    </div>
  );
}

function ShapeText({ text }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const chars = Array.from(text);

  // { [indexHuruf]: indexShape }
  const swappedRef = useRef({});
  const [swapped, setSwapped] = useState({});
  const [visible, setVisible] = useState(false);

  // Kelihatan di layar? (nyalain/matiin timer)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || reduce) return;

    const id = setInterval(() => {
      const prev = swappedRef.current;
      const active = Object.keys(prev);
      const next = { ...prev };

      const shouldRevert =
        active.length >= MAX_SHAPES ||
        (active.length > 0 && Math.random() < 0.5);

      if (shouldRevert) {
        const pick = active[Math.floor(Math.random() * active.length)];
        delete next[pick];
      } else {
        const free = chars
          .map((c, i) => i)
          .filter((i) => chars[i] !== " " && !(i in prev));

        if (free.length === 0) return;

        const pick = free[Math.floor(Math.random() * free.length)];
        next[pick] = Math.floor(Math.random() * SHAPES.length);
      }

      swappedRef.current = next;
      setSwapped(next);
    }, 700);

    return () => clearInterval(id);
  }, [visible, reduce, chars.length]);

  return (
    <span ref={ref} aria-hidden="true" className="inline-block">
      {chars.map((char, i) => {
        const shape = swapped[i];
        const isShape = shape !== undefined;

        return (
          // Wrapper per huruf: ini yang naik dari bawah mask (digerakkan GSAP)
          <span key={i} data-char className="relative inline-block">
            {/* Huruf tetap di DOM (cuma disembunyikan) biar lebarnya nggak berubah */}
            <motion.span
              className={`inline-block ${isShape ? "invisible" : ""}`}
              animate={{
                scale: isShape ? 0.6 : 1,
                rotate: isShape ? -20 : 0,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              {char}
            </motion.span>

            {isShape && (
              <motion.svg
                key={shape}
                viewBox="0 0 100 100"
                fill="currentColor"
                className="absolute inset-0 m-auto h-[0.75em] w-[0.75em]"
                initial={{ scale: 0.3, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
              >
                {SHAPES[shape]}
              </motion.svg>
            )}
          </span>
        );
      })}
    </span>
  );
}

export default function ServicesSection() {
  const [first, second] = SEQUENCE;

  const sectionRef = useRef(null);
  const nameOutRef = useRef(null);
  const nameInRef = useRef(null);
  const descOutRef = useRef(null);
  const descInRef = useRef(null);
  const numOutRef = useRef(null);
  const numInRef = useRef(null);

  useIsoLayoutEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      // ---------- 1) REVEAL AWAL (scrub) ----------
      // Dibikin duluan supaya urutan refresh ScrollTrigger-nya
      // sebelum trigger yang ada pin-nya.
      if (!reduce) {
        const section = sectionRef.current;
        const letters = section.querySelectorAll("[data-char]");
        const rises = section.querySelectorAll("[data-rise]");

        const reveal = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: REVEAL_START,
            end: REVEAL_END,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        // Huruf "services" naik satu-satu dari bawah mask
        reveal.fromTo(
          letters,
          { yPercent: 110 },
          { yPercent: 0, ease: "power3.out", duration: 0.5, stagger: 0.06 },
          0,
        );

        // Judul, nomor, deskripsi naik dari bawah mask
        rises.forEach((el) => {
          reveal.fromTo(
            el,
            { yPercent: 100 },
            { yPercent: 0, ease: "power3.out", duration: 0.5 },
            Number(el.dataset.at),
          );
        });
      }

      // ---------- 2) SWAP DATA (scrub + pin) ----------
      const exit = reduce ? { opacity: 0 } : { yPercent: -110 };
      const enterFrom = reduce ? { opacity: 0 } : { yPercent: 110 };
      const enterTo = reduce ? { opacity: 1 } : { yPercent: 0 };

      const tl = gsap.timeline({
        defaults: { overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom bottom",
          end: PIN_DISTANCE,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // Fase 1 (0 - 0.5): data lama naik keluar, nomor duluan, paragraf telat dikit
      tl.to(
        nameOutRef.current,
        { ...exit, ease: "power2.in", duration: 0.4 },
        0,
      )
        .to(
          numOutRef.current,
          { ...exit, ease: "power2.in", duration: 0.4 },
          0.05,
        )
        .to(
          descOutRef.current,
          { ...exit, ease: "power2.in", duration: 0.4 },
          0.1,
        )
        // Fase 2 (0.5 - 1): data baru naik masuk dari bawah mask
        .fromTo(
          nameInRef.current,
          enterFrom,
          { ...enterTo, ease: "power2.out", duration: 0.4 },
          0.55,
        )
        .fromTo(
          numInRef.current,
          enterFrom,
          { ...enterTo, ease: "power2.out", duration: 0.4 },
          0.6,
        )
        .fromTo(
          descInRef.current,
          enterFrom,
          { ...enterTo, ease: "power2.out", duration: 0.4 },
          0.65,
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // Mobile: 4 baris (nama / judul besar / nomor / deskripsi) ditumpuk 1 kolom.
    // lg ke atas: grid 3 kolom x 3 baris seperti sebelumnya.
    // Tinggi dikunci 100dvh di semua ukuran supaya pin nggak kepotong.
    <div
      ref={sectionRef}
      className="relative h-[100dvh] w-full grid grid-cols-1 lg:grid-cols-3 grid-rows-[auto_1fr_auto_auto] lg:grid-rows-3 overflow-hidden py-8 lg:py-0 bg-second3"
    >
      {/* KONTEN UTAMA */}
      <div className="row-start-1 row-end-5 lg:row-end-4 col-start-1 col-end-2 lg:col-end-4 flex flex-col items-center justify-center relative z-20 pointer-events-none">
        <h2
          aria-label="services"
          className="text-[15vw] sm:text-[16vw] lg:text-[12rem] xl:text-[15rem] text-center font-poppins font-bold text-primary py-8 lg:py-16 uppercase"
        >
          {/* overflow-hidden = mask buat reveal huruf */}
          <span className="block  leading-none">
            <ShapeText text="services" />
          </span>
        </h2>
      </div>

      {/* Baris atas: nama service (dua versi ditumpuk di cell yang sama) */}
      <Rise
        at={0.4}
        className="row-start-1 row-end-2 col-start-1 col-end-2 mt-24 lg:mt-auto"
      >
        <div className="grid">
          <h3
            ref={nameOutRef}
            className="[grid-area:1/1] self-end text-primary font-poppins  text-2xl sm:text-3xl lg:text-4xl font-bold text-start lg:text-end px-5 md:px-8 lg:px-0"
          >
            {first.name}
          </h3>
          <h3
            ref={nameInRef}
            aria-hidden="true"
            className="[grid-area:1/1] self-end text-primary font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-start lg:text-end px-5 md:px-8 lg:px-0 lg:pl-[20%]"
          >
            {second.name}
          </h3>
        </div>
      </Rise>

      {/* Nomor (self-start = mask nyusut ngikutin tinggi angka, biar
          angka yang diparkir di bawah nggak bocor) */}
      <Rise
        at={0.45}
        className="row-start-3 row-end-4 col-start-1 col-end-2 lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3 self-start"
      >
        <div className="grid">
          <p
            ref={numOutRef}
            className="[grid-area:1/1] text-primary font-poppins text-7xl sm:text-8xl lg:text-9xl font-bold leading-none px-5 md:px-8 lg:px-0"
          >
            {NUMBERS[0]}
          </p>
          <p
            ref={numInRef}
            aria-hidden="true"
            className="[grid-area:1/1] text-primary font-poppins text-7xl sm:text-8xl lg:text-9xl font-bold leading-none px-5 md:px-8 lg:px-0"
          >
            {NUMBERS[1]}
          </p>
        </div>
      </Rise>

      {/* Baris bawah: deskripsi
          self-start = mask nyusut ngikutin tinggi teks, bukan tinggi row,
          jadi teks kedua yang diparkir di bawah nggak bocor */}
      <Rise
        at={0.5}
        className="row-start-4 row-end-5 col-start-1 col-end-2 lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-4 self-start"
      >
        <div className="grid">
          <p
            ref={descOutRef}
            className="[grid-area:1/1] self-start text-primary font-poppins text-base sm:text-xl lg:text-2xl px-5 md:px-8 text-justify"
          >
            {first.description}
          </p>
          <p
            ref={descInRef}
            aria-hidden="true"
            className="[grid-area:1/1] self-start text-primary font-poppins text-base sm:text-xl lg:text-2xl px-5 md:px-8 lg:pl-0 text-justify"
          >
            {second.description}
          </p>
        </div>
      </Rise>
    </div>
  );
}
