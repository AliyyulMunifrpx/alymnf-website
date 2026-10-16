"use client";

import Image from "next/image";

export default function RubberCard({ item }) {
  return (
    <div
      className={[
        "group relative flex w-full flex-col",
        "overflow-hidden rounded-xl border border-second3/20",
        "bg-primary/20 backdrop-blur-md",
        "aspect-auto sm:aspect-square",
      ].join(" ")}
    >
      {/* Background tetap memenuhi seluruh card */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={item.src2}
          alt=""
          fill
          sizes="(max-width: 639px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out sm:group-hover:translate-x-4"
        />
      </div>

      {/* Desktop (md+): foto overlay */}
      <div className="relative z-10 hidden h-56 w-full shrink-0 overflow-hidden md:block sm:absolute sm:inset-0 sm:h-auto">
        <Image
          src={item.src}
          alt={item.name}
          fill
          sizes="(max-width: 639px) 100vw, 50vw"
          className={[
            "object-cover",
            "sm:scale-110 sm:translate-x-8",
            "sm:transition-transform sm:duration-500 sm:ease-out",
            "sm:group-hover:translate-x-0 sm:group-hover:translate-y-0",
          ].join(" ")}
        />
      </div>

      {/* Teks */}
      <div
        className={[
          "relative z-10 flex flex-col justify-start p-4 font-poppins",
          "sm:absolute sm:inset-0 sm:justify-between sm:pointer-events-none",
        ].join(" ")}
      >
        <div
          className={[
            "flex flex-col gap-3 rounded-xl border border-second3/10",
            "bg-primary/60 p-4 backdrop-blur-md",
            "sm:bg-primary/20 sm:pointer-events-auto",
          ].join(" ")}
        >
          <h3 className="w-fit text-2xl font-bold text-second3 sm:text-3xl">
            {item.name}
          </h3>

          <p className="text-justify text-sm font-light text-second3/80 sm:text-base sm:text-second3/70">
            {item.description}
          </p>
        </div>
      </div>

      {/* Mobile (di bawah md): foto */}
      <div className="relative z-10 aspect-[2/1.2] w-full shrink-0 overflow-hidden md:hidden sm:absolute sm:inset-0 sm:h-auto">
        <Image
          src={item.src}
          alt={item.name}
          fill
          sizes="(max-width: 639px) 100vw, 50vw"
          className={[
            "object-cover object-bottom",
            "sm:scale-110 sm:translate-x-8",
            "sm:transition-transform sm:duration-500 sm:ease-out",
            "sm:group-hover:translate-x-0 sm:group-hover:translate-y-0",
          ].join(" ")}
        />
      </div>
    </div>
  );
}
