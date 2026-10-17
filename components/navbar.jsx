"use client";

import { useRef, useState } from "react";
import Image from "next/image.js";
import Link from "next/link.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button3 from "./button-3.jsx";
import { handleSmoothScroll } from "../utils/scroll-to.js";
import { createPortal } from "react-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = [
    { name: "Services", href: "#services" },
    { name: "Selected Work", href: "#selected-work" },
    { name: "About Me", href: "#about-me" },
    { name: "Pricing", href: "#pricing" },
  ];

  const handleNavigation = (e, href) => {
    setMenuOpen(false);
    handleSmoothScroll(e, href);
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Animasi navbar panjang hanya untuk desktop.
    mm.add("(min-width: 1024px)", () => {
      const nav = navRef.current;
      const trigger = ScrollTrigger.create({
        trigger: document.body,
        start: `${window.innerHeight * 3 + 800}px top`,

        onEnter: () => {
          gsap.to(nav, {
            width: "75%",
            y: 12,
            borderRadius: "15px",
            duration: 0.4,
            ease: "power2.out",
          });

          nav.classList.add(
            "border",
            "border-white/15",
            "backdrop-blur-md",
            "lg:bg-primary/50",
          );
          // FIX: harus pakai prefix lg:, sesuai class di className awal
          nav.classList.remove("lg:mix-blend-difference", "lg:bg-primary/0");
        },

        onLeaveBack: () => {
          gsap.to(nav, {
            width: "100%",
            y: 0,
            borderRadius: "0px",
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
              // FIX: pakai prefix lg: biar nggak aktif di mobile
              nav.classList.add("lg:mix-blend-difference");
            },
          });

          nav.classList.remove(
            "border",
            "border-white/15",
            "backdrop-blur-md",
            "lg:bg-primary/50",
          );
          nav.classList.add("lg:bg-primary/0");
        },
      });

      return () => trigger.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0  lg:mix-blend-difference  right-0 z-50 mx-auto flex h-16 w-full  bg-second3 lg:bg-primary/0 items-center border-b border-primary lg:border-none justify-between px-4 font-extralight font-poppins text-sm text-second3 lg:px-8"
    >
      {/* Logo */}
      <Link
        href="/"
        aria-label="Home"
        onClick={(e) => handleNavigation(e, "/")}
      >
        <Image
          alt="logo"
          src="/assets/logo.svg"
          width={30}
          height={30}
          className="brightness-0 lg:invert "
        />
      </Link>

      {/* Desktop navigation */}
      <nav className="hidden text-second3 items-center gap-8 lg:flex">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className=" font-normal"
            onClick={(e) => handleNavigation(e, item.href)}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Desktop CTA */}
      <div className="ml-auto lg:ml-0 mr-4 lg:mr-0 invert lg:invert-0">
        <Button3 href="#contact" text="Let's Connect" />
      </div>

      {/* Mobile / small tablet burger */}
      <button
        type="button"
        className="flex size-12 items-center justify-center rounded-lg border border-white/15 lg:hidden text-primary"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          // Close icon: no morph animation
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          // Burger icon
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 8h16" />
            <path d="M4 16h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu: appears instantly, without morph animation */}
      {menuOpen &&
        createPortal(
          <nav
            id="mobile-navigation"
            className="fixed top-[4rem] left-0 right-0 z-50 flex flex-col gap-2 border border-white/15 bg-second3 p-4 font-poppins text-sm text-primary shadow-2xl backdrop-blur-sm lg:hidden"
          >
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-4  hover:bg-white/5"
                onClick={(e) => handleNavigation(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>,
          document.body,
        )}
    </div>
  );
}
