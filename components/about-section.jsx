import DitherVeil from "../src/components/DitherVeil.jsx";
import Image from "next/image";
import { IoLogoJavascript } from "react-icons/io5";
import { LuFigma } from "react-icons/lu";
import { FaNode, FaHtml5, FaReact } from "react-icons/fa";
import { SiFramer, SiGsap, SiMysql } from "react-icons/si";
import { RiTailwindCssFill, RiSupabaseFill } from "react-icons/ri";
import { TbBrandSocketIo } from "react-icons/tb";
import RubberWrapper from "./rubber-wrapper.jsx";

export default function AboutSection() {
  return (
    <div className="relative min-h-[100dvh] grid grid-rows-1 grid-cols-1">
      {/* 2. DIV TEKS DI ATAS (Dikasih pointer-events-none biar kliknya 'tembus' ke DitherVeil di bawahnya, kecuali kalau teksnya mau disorot) */}
      <div className="row-start-1 h-full z-10 row-end-2 col-start-1 col-end-2 flex flex-col pointer-events-none  justify-center ">
        <h2 className="text-4xl lg:text-9xl text-center font-semibold text-second3 pt-40">
          About Me{" "}
        </h2>
        <div className="w-full h-full lg:h-100 flex flex-col lg:flex-row gap-8 rounded-2xl pointer-events-none mt-8 lg:-mt-8 px-4 lg:px-8 xl:px-32">
          <div className="relative w-full aspect-square shrink-0 border-[1px] backdrop-blur-sm border-second3/20 rounded-xl overflow-hidden lg:w-72 lg:aspect-square">
            <Image
              alt="aliyyul munif web developers photo"
              src="/assets/about/photo.webp"
              fill
              sizes="(max-width: 1023px) 100vw, 256px"
              className="object-cover scale-135 lg:scale-100"
            />
          </div>
          <div className="w-full h-full border-[1px] backdrop-blur-sm bg-primary/20 border-second3/20 rounded-xl justify-center flex flex-col items-start gap-8 p-8">
            <p className="text-sm lg:text-2xl text-justify">
              I&apos;m an independent web developer who enjoys turning ideas
              into practical digital solutions. I work across design and
              development to create websites and web applications that are not
              only visually appealing, but also useful, intuitive, and built
              around real needs. My approach is simple: understand the problem,
              find the right solution, and build something that works.
            </p>
            <div className="h-[1px] w-full bg-second3/10"></div>
            <div className="grid grid-cols-6 lg:grid-cols-11 text-4xl gap-8">
              <IoLogoJavascript />
              <LuFigma />
              <FaNode />
              <SiMysql />
              <RiTailwindCssFill />
              <FaHtml5 />
              <TbBrandSocketIo />
              <FaReact />
              <RiSupabaseFill />
              <SiFramer />
              <SiGsap />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex">
        <div className="h-[100%] w-[100%] relative flex mt-128 lg:mt-72 mx-auto opacity-50 justify-center items-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-contain pointer-events-none grayscale"
          >
            <source src="/assets/about/cube.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  );
}
