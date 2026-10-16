"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image.js";
import Button1 from "./button-1.jsx";
import Button2 from "./button-2.jsx";
import AnimatedBorder from "./animated-border.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(
        ".reveal-services",
        sectionRef.current,
      );

      // Set kondisi awal: transparan, turun ke bawah, dan blur 12px
      gsap.set(targets, { opacity: 0, y: 30, filter: "blur(12px)" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });

      // Animasi saat di-scroll
      tl.to(targets, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.1,
        stagger: 0.1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const data = [
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

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[100dvh] lg:h-[100dvh] w-full grid grid-cols-1 lg:grid-cols-3 grid-rows-3 overflow-hidden py-8 lg:py-0"
    >
      {/* 1. BACKGROUND GAMBAR UTAMA */}
      <div className="absolute inset-0 z-10 pointer-events-none flex justify-center items-start">
        <div className="w-[600px] h-[700px] bg-[#000000] rounded-full blur-[100px] opacity-70 -translate-y-20"></div>
        <div className="w-[600px] h-[700px] bg-[#000000] rounded-full blur-[100px] opacity-70 translate-y-60"></div>
      </div>

      {/* 2. BACKGROUND MOTIF KOTAK-KOTAK */}
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

      {/* 3. KONTEN UTAMA */}
      <div className="row-start-1 row-end-4 col-start-1 col-end-2 lg:col-end-4 flex flex-col relative z-20">
        <h2 className="reveal-services text-4xl text-center font-semibold text-second3 py-24">
          What I <span className="text-grad1">Offer?</span>
        </h2>

        <div className="flex gap-16 flex-1 flex-col lg:flex-row justify-center px-4">
          {data.map((item, i) => {
            return (
              <div
                className="reveal-services flex flex-col gap-8 items-center hover:rotate-0 transition-transform duration-300 ease-out"
                key={item.name}
              >
                <AnimatedBorder className="h-full lg:h-[70%] w-full lg:w-120">
                  <div className="flex h-full flex-col gap-8">
                    <h3 className="text-3xl text-center">{item.name}</h3>
                    <p className="text-justify">{item.description}</p>
                    <p className="text-justify text-grad1">{item.includes}</p>
                  </div>
                </AnimatedBorder>

                {i === 0 ? (
                  <Button1
                    href="#contact"
                    text="discuss your project"
                    className="ml-auto"
                  />
                ) : (
                  <Button2
                    href="#selected-work"
                    text="view my work"
                    className="mr-auto"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
