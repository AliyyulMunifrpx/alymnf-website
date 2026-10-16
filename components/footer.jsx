"use client";
import Link from "next/link.js";
import Button3 from "./button-3.jsx";
import { information } from "../data/information.js";
import { handleSmoothScroll } from "../utils/scroll-to.js";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Selected Work", href: "#selected-work" },
    { name: "About Me", href: "#about-me" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const connect = [
    {
      name: "Github",
      value: information.github,
      href: `https://github.com/${information.github}`,
    },
    {
      name: "Email",
      value: information.email,
      href: `mailto:${information.email}`,
    },
    {
      name: "Whatsapp",
      value: information.whatsapp,
      href: `https://wa.me/${information.whatsapp.replace(/[^0-9]/g, "")}`,
    },
    {
      name: "Instagram",
      value: information.instagram,
      href: `https://instagram.com/${information.instagram.replace("@", "")}`,
    },
  ];

  return (
    <footer className="w-full backdrop-blur-sm bg-primary/50 mt-40 font-poppins font-light">
      {/* 
        ====================================================
        VERSION MOBILE & TABLET (Tampil di layar < 1024px)
        ====================================================
      */}
      <div className="flex flex-col lg:hidden border-t border-second3/20">
        {/* Call to Action Section */}
        <div className="flex flex-col justify-center gap-6 p-8 border-b border-second3/20">
          <p className="text-3xl sm:text-4xl font-bold text-second3">
            Let’s build something great together
          </p>
          <Button3
            href="#contact"
            text="Start a Project"
            className="grayscale w-fit"
          />
        </div>

        {/* Navigation & Connect Split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-second3/20">
          {/* Navigation */}
          <div className="flex flex-col p-6 border-b sm:border-b-0 sm:border-r border-second3/20 gap-3">
            <p className="font-normal text-second3/60 mb-2">Navigation</p>
            {navigation.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="group flex items-center justify-between text-second3/80 hover:text-second3 transition-all duration-300 py-1"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {item.name}
                </span>
                <span className="opacity-0 -translate-x-2 text-xs transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div className="flex flex-col p-6 gap-3">
            <p className="font-normal text-second3/60 mb-2">Connect</p>
            {connect.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between text-second3/80 hover:text-second3 transition-all duration-300 py-1"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1 truncate pr-2">
                  <span className="font-normal text-second3/90">
                    {item.name}:
                  </span>{" "}
                  <span className="font-light text-second3/60">
                    {item.value}
                  </span>
                </span>
                <span className="opacity-0 -translate-x-2 text-xs transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shrink-0">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright Mobile */}
        <div className="p-6 text-center text-second3/60 text-sm">
          © 2026 {information.name} All rights reserved.
        </div>
      </div>

      {/* 
        ====================================================
        VERSION DESKTOP (Layout Grid Asli Lu - Tampil di layar >= 1024px)
        ====================================================
      */}
      <div className="hidden lg:grid h-100 w-full grid-cols-[0.4fr_repeat(7,_1fr)_0.4fr] grid-rows-6">
        {/* --- GRID KOSONG KIRI (BARIS 1 - 5) --- */}
        <div className="row-start-1 row-end-6 col-start-1 col-end-2 border-[1px] border-second3/20"></div>

        {/* --- KONTEN KIRI: CALL TO ACTION (BARIS 1 - 5) --- */}
        <div className="row-start-1 row-end-6 col-start-2 col-end-5 border-[1px] border-second3/20 flex flex-col justify-center gap-8 p-8">
          <p className="text-5xl font-bold">
            Let’s build something great together
          </p>
          <Button3
            href="#contact"
            text="Start a Project"
            className="grayscale"
          />
        </div>

        {/* --- HEADER NAV & CONNECT (BARIS 1) --- */}
        <div className="row-start-1 row-end-2 col-start-5 col-end-9 grid grid-cols-2">
          <div className="border-[1px] border-second3/20 pl-4 flex items-center">
            <p className="font-normal text-second3/60">Navigation</p>
          </div>
          <div className="border-[1px] border-second3/20 pl-4 flex items-center">
            <p className="font-normal text-second3/60">Connect</p>
          </div>
        </div>

        {/* --- LIST NAV & CONNECT (BARIS 2 - 5) --- */}
        <div className="row-start-2 row-end-6 col-start-5 col-end-9 grid grid-cols-2 w-full h-full">
          {/* Navigation List */}
          <div className="flex flex-col border-[1px] border-second3/20 justify-center p-4 gap-4">
            {navigation.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={(e) => {
                  console.log("LINK DIKLIK:", item.href);
                  handleSmoothScroll(e, item.href);
                }}
                className="group flex items-center gap-2 text-second3/80 hover:text-second3 transition-all duration-300"
              >
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  {item.name}
                </span>
                <span className="opacity-0 -translate-x-2 text-xs transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* Connect List */}
          <div className="flex flex-col border-[1px] border-second3/20 justify-center p-4 gap-4">
            {connect.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-second3/80 hover:text-second3 transition-all duration-300"
              >
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  <span className="font-normal text-second3/90">
                    {item.name}:
                  </span>{" "}
                  <span className="font-light text-second3/60 group-hover:text-second3 transition-colors">
                    {item.value}
                  </span>
                </span>
                <span className="opacity-0 -translate-x-2 text-xs transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* --- COPYRIGHT FOOTER (BARIS 6) --- */}
        <div className="w-full h-full row-start-6 col-start-1 col-end-10 border-[1px] border-second3/20 flex items-center justify-center transition-colors duration-300 hover:bg-second3/[0.01]">
          <p className="my-auto mx-auto text-second3/60 hover:text-second3 transition-colors duration-200">
            © 2026 {information.name} All rights reserved.
          </p>
        </div>

        {/* --- GRID KOSONG KANAN (BARIS 1 - 5) --- */}
        <div className="row-start-1 row-end-6 col-start-9 col-end-10 border-[1px] border-second3/20"></div>
      </div>
    </footer>
  );
}
