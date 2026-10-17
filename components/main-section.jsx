"use client";

import Image from "next/image.js";
import { motion } from "framer-motion";
import Button1 from "./button-1.jsx";
import Button2 from "./button-2.jsx";

export default function MainSection() {
  const titleLine1 = "web but better";

  return (
    <div className="relative h-[100dvh] w-full grid grid-cols-1 bg-second3  lg:grid-cols-3 grid-rows-3 overflow-hidden">
      {/* MAIN HEADING - 1 BARIS, RUNNING TEXT */}
      <div className="row-start-2 row-end-4 col-start-1 col-end-2 lg:col-end-4 flex flex-col z-10 justify-center items-center w-full ">
        <motion.h2
          className="self-start flex w-max whitespace-nowrap text-[55rem] lg:text-[50rem] text-primary font-bold uppercase font-poppins"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              key={index}
              aria-hidden={index > 0 ? "true" : undefined}
              className="pr-[0.25em]"
            >
              {titleLine1}
            </span>
          ))}
        </motion.h2>
      </div>
      <div className="row-start-1 row-end-2 col-start-1 col-end-2 lg:col-end-4 flex z-20 mix-blend-difference justify-between items-center p-8 w-full gap-16 ">
        <h1 className="text-3xl lg:text-6xl text-second3 text-start  font-bold">
          Websites built <br />
          for your business.
        </h1>
        <div className="hidden md:flex gap-8 items-center">
          {" "}
          <Button1 href="#contact" text="discuss your project"></Button1>
          <Button2 href="#selected-work" text="view my work"></Button2>
        </div>
      </div>
      <div className="row-start-3 row-end-4 col-start-1 col-end-2 md:hidden z-20 flex my-auto gap-4 mx-auto mix-blend-difference">
          {" "}
          <Button1 href="#contact" text="discuss your project"></Button1>
          <Button2 href="#selected-work" text="view my work"></Button2>
      </div>
    </div>
  );
}
