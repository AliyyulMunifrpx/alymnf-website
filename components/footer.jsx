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
    <footer
      className="
        mt-24 grid w-full grid-cols-1
        border-t border-second3/20
        bg-primary/50 font-poppins font-light backdrop-blur-sm
        sm:mt-32
        lg:mt-40
        lg:grid-cols-[0.4fr_repeat(7,minmax(0,1fr))_0.4fr]
        lg:grid-rows-[minmax(0,1fr)_auto]
      "
    >
      {/* CTA */}
      <div
        className="
          flex flex-col justify-center gap-6
          border-b border-second3/20 p-6
          sm:p-8
          lg:col-start-2 lg:col-end-5 lg:row-start-1
          lg:border-b-0 lg:border-r lg:p-8
        "
      >
        <p className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Let’s build something great together
        </p>

        <Button3 href="#contact" text="Start a Project" className="grayscale" />
      </div>

      {/* Navigation & Connect */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:col-start-5 lg:col-end-9 lg:row-start-1
        "
      >
        {/* Navigation */}
        <div className="flex min-w-0 flex-col border-b border-second3/20 sm:border-r lg:border-b-0">
          <div className="flex min-h-12 items-center border-b border-second3/20 px-5">
            <p className="font-normal text-second3/60">Navigation</p>
          </div>

          <nav className="flex flex-col gap-4 p-5 sm:p-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="
                  group flex min-h-8 items-center gap-2
                  text-second3/80 transition-colors duration-300
                  hover:text-second3
                "
              >
                <span className="break-words transition-transform duration-300 group-hover:translate-x-1">
                  {item.name}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    hidden -translate-x-2 text-xs opacity-0
                    transition-all duration-300
                    group-hover:translate-x-0 group-hover:opacity-100
                    sm:inline
                  "
                >
                  →
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Connect */}
        <div className="flex min-w-0 flex-col">
          <div className="flex min-h-12 items-center border-b border-second3/20 px-5">
            <p className="font-normal text-second3/60">Connect</p>
          </div>

          <div className="flex flex-col gap-4 p-5 sm:p-6">
            {connect.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex min-h-8 min-w-0 items-start gap-2
                  text-second3/80 transition-colors duration-300
                  hover:text-second3
                "
              >
                <span className="min-w-0 break-words">
                  <span className="font-normal text-second3/90">
                    {item.name}:
                  </span>{" "}
                  <span className="break-all text-second3/60 transition-colors group-hover:text-second3">
                    {item.value}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="
                    hidden shrink-0 -translate-x-2 text-xs opacity-0
                    transition-all duration-300
                    group-hover:translate-x-0 group-hover:opacity-100
                    sm:inline
                  "
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="
          flex min-h-16 items-center justify-center
          border-t border-second3/20 px-4 py-4 text-center
          transition-colors duration-300 hover:bg-second3/[0.01]
          lg:col-span-10 lg:row-start-2
        "
      >
        <p className="text-xs text-second3/60 transition-colors duration-200 hover:text-second3 sm:text-sm">
          © 2026 {information.name} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
