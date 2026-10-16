"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";

export default function RubberCard({ item }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 30,
    stiffness: 150,
  });

  // 1. Efek regangan vertikal untuk SELURUH CARD
  const scaleY = useTransform(
    smoothVelocity,
    [-1200, 0, 1200],
    [1.05, 1, 1.05],
  );

  // 2. Arah tarikan (transformOrigin) asimetris ngikutin arah scroll
  const transformOrigin = useTransform(smoothVelocity, (v) => {
    if (v > 0) return "bottom"; // Scroll ke bawah -> atas card ketarik
    if (v < 0) return "top"; // Scroll ke atas -> bawah card ketarik
    return "center";
  });

  return (
    // Bungkus card utama dengan motion.div supaya seluruh kotak ikut melar
    <motion.div
      style={{
        scaleY,
        transformOrigin,
      }}
      className="flex w-full h-full flex-col backdrop-blur-md rounded-xl border-[1px] border-second3/20 bg-primary/20 overflow-hidden justify-between"
    >
      {/* Bagian Teks (Dikasih flex-1 & min-h biar justify-between berfungsi mojok atas-bawah) */}
      <div className="flex flex-col justify-between flex-1 p-8 font-poppins gap-6 min-h-[220px]">
        {/* Grup ATAS: Mojok paling atas */}
        <div className="flex flex-col gap-3">
          <h3 className="w-fit text-3xl text-second3 font-bold">{item.name}</h3>
          <p className="text-justify text-second3/70 text-sm font-light">
            {item.description}
          </p>
        </div>

        {/* Grup BAWAH: Mojok paling bawah sebelum gambar */}
        <div className="flex flex-col gap-3">
          <div className="h-[1px] w-full bg-second3/10"></div>
          <p className="text-center text-xs text-second3/50 font-poppins tracking-[0.2rem] font-light uppercase">
            {item.type}
          </p>
        </div>
      </div>

      {/* Bagian Gambar (Nempel di paling bawah card) */}
      <div className="relative w-full aspect-[2/1] mt-auto">
        <Image src={item.src} alt={item.name} fill className="object-cover" />
      </div>
    </motion.div>
  );
}
