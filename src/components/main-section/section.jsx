import Image from "next/image.js";
import Link from "next/link.js";
import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <div className="grid w-full h-[100dvh] grid-cols-3 grid-rows-3">
      <div className="row-start-2 flex flex-col items-center justify-center gap-8 col-start-1 col-end-4">
        <motion.h1
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl lg:text-8xl text-[#4105f7]"
        >
          Design{" "}
          <motion.span
            initial={{ y: -30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-5xl lg:text-8xl text-[#4105f7]"
          >
            x
          </motion.span>{" "}
          Code
        </motion.h1>
        <motion.p
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg lg:text-2xl text-center font-poppins text-[#000000] "
        >
          {"Hey, I'm Aliyyul Munif, welcome to my"} <br />{" "}
          <span> little corner of the internet</span>
        </motion.p>
      </div>

      <div className="hidden lg:block row-start-1 row-end-2 col-start-1">
        <Image
          width={100}
          height={100}
          className="w-full h-full translate-y-20"
          alt="lightning"
          src="/assets/main section/lightning.svg"
        />
      </div>

      <div className="hidden lg:block row-start-2 row-end-4 p-24 col-start-3">
        <Image
          width={100}
          height={100}
          className="w-full ml-auto h-full "
          alt="scribble"
          src="/assets/main section/scribble.svg"
        />
      </div>

      <div className="row-start-3 col-start-1 col-end-4 lg:col-start-2 lg:col-end-3 flex gap-4 -mt-8 px-8 md:px-32 lg:px-16 w-full">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut"}}
          className="relative w-full absolute"
        >
          <div className="absolute w-full top-1/2 left-1/2 px-4 py-2 rounded-full -translate-y-2 hover:-translate-y-0 border-4 z-10 border-black -translate-x-[47%] hover:-translate-x-[50%]   transition-all duration-200 ease-in-out">
            <Link href="#work" className="text-md lg:text-xl text-white/0">
              View My Work
            </Link>{" "}
          </div>
          <div className="absolute flex items-center justify-center w-full top-1/2 left-1/2 px-4 py-2 border-4 border-[#4105f7] rounded-full bg-[#4105f7] z-0 -translate-x-1/2">
            {" "}
            <Link href="#work" className="text-md text-white lg:text-xl">
              View My Work
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut"}}
          className="relative w-full absolute"
        >
          <div className="absolute w-full flex items-center justify-center top-1/2 left-1/2 px-4 py-2 rounded-full z-0 -translate-x-1/2">
            {" "}
            <Link
              href="/assets/aliyyul munif resume en.pdf"
              className="text-md lg:text-xl text-black"
              target="_blank"
            >
              My Resume{" "}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
