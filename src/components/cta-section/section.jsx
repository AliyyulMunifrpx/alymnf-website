import Image from "next/image.js";
import Link from "next/link.js";
import { motion } from "framer-motion";
export default function CtaSection() {
  return (
    <div className="grid grid-rows-3 grid-cols-1 lg:grid-cols-3 h-[100dvh] w-full">
      <motion.div
        initial={{ opacity: 0, y: 10, x: -30, rotate: -30 }}
        whileInView={{ opacity: 1, y: 0, x: 0, rotate: -10 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 1,
        }}
        className="row-start-1 col-start-1 w-[40%] -translate-y-[65%] -translate-x-[30%] lg:w-full lg:h-full lg:-translate-y-[30%] lg:-translate-x-[15%]"
      >
        <motion.div
          animate={{
            rotate: [-10, -5, -10],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            alt="monalisa"
            src="/assets/skills section/monalisa.svg"
            width={350}
            height={350}
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="col-start-1 lg:col-start-3 row-start-1 translate-x-[70%] lg:translate-x-0 lg:row-start-2 w-full h-full rotate-5 -translate-y-[40%]"
      >
        <motion.div
          animate={{
            x: [-1, 10, -1],
            y: [5, -10, 5],
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            alt="scribble"
            src="/assets/skills section/scribble.svg"
            width={170}
            height={170}
          />
        </motion.div>
      </motion.div>

      <div className="col-start-1 lg:col-end-4 row-start-1 lg:row-start-2 flex flex-col justify-center px-8 lg:px-72 items-center w-full h-full">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="text-5xl lg:text-6xl text-[#4105F7] text-center lg:whitespace-nowrap"
        >
          Got Something in Mind?{" "}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="text-lg lg:text-2xl text-[#000000] mt-8 text-center"
        >
          Currently open to Frontend/Full-Stack opportunities, always happy to
          hear about interesting projects too.{" "}
        </motion.p>
        <div className="row-start-3 col-start-2 flex gap-4 mt-16 lg:px-[30%] w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
            className="relative w-full absolute"
          >
            <div className="absolute w-full top-1/2 left-1/2 px-4 py-2 rounded-full -translate-y-2 hover:-translate-y-0 border-4 z-10 border-black -translate-x-[47%] hover:-translate-x-[50%]   transition-all duration-200 ease-in-out">
              <Link
                href="mailto:aliyyulmunif780@gmail.com"
                className="text-md lg:text-xl text-white/0"
              >
                Let&apos;s Talk!
              </Link>{" "}
            </div>
            <div className="absolute flex items-center justify-center w-full top-1/2 left-1/2 px-4 py-2 border-4 border-[#4105f7] rounded-full bg-[#4105f7] z-0 -translate-x-1/2">
              {" "}
              <Link href="mailto:aliyyulmunif780@gmail.com" className="text-md lg:text-xl">
                Let&apos;s Talk!
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
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
      <div className="col-start-1 row-start-3 bg-black flex items-end  justify-center lg:hidden">
        <div className="flex flex-col items-center gap-4 text-center p-16">
          <p className="text-base text-white">
            © 2026 Aliyyul. All rights reserved.
          </p>
         <Link
  href="https://github.com/aliyyulmunifrpx"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    alt="github"
    src="/assets/github.svg"
    width={35}
    height={35}
    className="invert cursor-pointer"
  />
</Link>
          <p className="text-base text-white">
            Made With ♥ by{" "}
            <Link
              href="https://instagram.com/itsaliyyul"
              className="text-[#C0FE04]"
              onClick={() => setIsOpen(false)}
            >
              @itsaliyyul
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
