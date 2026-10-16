"use client";

import Image from "next/image.js";
import { motion } from "framer-motion";
import Button1 from "./button-1.jsx";
import Button2 from "./button-2.jsx";

export default function MainSection() {
  // Pecah teks utama jadi per huruf buat animasi ngalir
  const titleLine1 = "web, but better";
  const titleLine2 = "Websites built for your business.";

  // Konfigurasi animasi untuk container dan huruf
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Kecepatan ngalirnya antar huruf (semakin kecil semakin cepat)
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <div className="relative h-[100dvh] w-full grid grid-cols-1  lg:grid-cols-3 grid-rows-3 overflow-hidden">
      {/* Background Blur Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none flex justify-center items-start">
        <div className="w-[600px] h-[700px] bg-[#000000] rounded-full blur-[100px] opacity-70 -translate-y-20"></div>
        <div className="w-[600px] h-[700px] bg-[#000000] rounded-full blur-[100px] opacity-70 translate-y-60"></div>
      </div>

      {/* BACKGROUND MOTIF KOTAK-KOTAK */}
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

      {/* MAIN HEADINGS - EFEK NGALIR PER HURUF DARI KIRI KE KANAN */}
      <div className="row-start-2 row-end-3 col-start-1 col-end-2 lg:col-end-4 flex flex-col z-10 justify-center items-center">
        {/* Baris 1: web, but better */}
        <motion.h2
          className="text-4xl lg:text-8xl text-center text-second3 flex flex-wrap font-semibold justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleLine1.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={char === " " ? "w-5" : ""} // Kasih spasi lebar kalau ketemu karakter spasi
            >
              {/* Warnain kata "better" pake gradasi lu */}
              {index >= 9 ? <span className="text-grad1">{char}</span> : char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Baris 2: Websites built for your business. */}
        <motion.h1
          className="text-base lg:text-3xl text-second3 text-center mt-4 flex flex-wrap justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleLine2.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={char === " " ? "w-2" : ""}
            >
              {/* Warnain kata "business." pake gradasi */}
              {index >= 21 ? <span className="text-grad1">{char}</span> : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* BUTTONS MUNCUL SETELAH TEKS SELESAI NGALIR */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="row-start-3 row-end-4 col-start-1 col-end-2 lg:col-end-4 gap-8 justify-center flex my-auto z-20"
      >
        <Button1 href="#contact" text="discuss your project"></Button1>
        <Button2 href="#selected-work" text="view my work"></Button2>
      </motion.div>

      {/* DECORATIONS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="contents hidden lg:block"
      >
        <Image
          alt="decoration"
          src="/assets/decoration/plus.webp"
          width={30}
          height={30}
          className="col-start-3 row-start-1 mt-auto translate-x-100 rotate-130 z-10"
        />
        <Image
          alt="decoration"
          src="/assets/decoration/plus.webp"
          width={30}
          height={30}
          className="col-start-2 row-start-2 mt-auto -translate-x-70 z-10"
        />
      </motion.div>
    </div>
  );
}
