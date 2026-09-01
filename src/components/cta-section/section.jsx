import Image from "next/image.js";
import Link from "next/link.js";
import { motion } from "framer-motion";
export default function CtaSection() {
  return (
    <div className="relative min-h-[100dvh] w-full">
      <motion.div
        initial={{ opacity: 0, y: 10, x: -30, rotate: -30 }}
        whileInView={{ opacity: 1, y: 0, x: 0, rotate: -15 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -top-[10%] -left-[5%]"
      >
        <motion.div
          animate={{
            rotate: [-15, -10, -15],
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
        viewport={{ once: false }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-[15%] right-[20%] rotate-5"
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

      <div className="absolute flex flex-col justify-center items-center translate-x-1/2 right-1/2 -translate-y-1/2 top-1/2">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="text-6xl text-[#4105F7] text-center whitespace-nowrap"
        >
          Got Something in Mind?{" "}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="text-2xl text-[#000000] mt-8 text-center"
        >
          Currently open to Frontend/Full-Stack opportunities, always happy to
          hear about interesting projects too.{" "}
        </motion.p>
        <div className="row-start-3 col-start-2 flex gap-4 mt-16 px-[25%] w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
            className="relative w-full absolute"
          >
            <div className="absolute w-full top-1/2 left-1/2 px-4 py-2 rounded-full -translate-y-2 hover:-translate-y-0 border-4 z-10 border-black -translate-x-[47%] hover:-translate-x-[50%]   transition-all duration-200 ease-in-out">
              <Link
                href="mailto:aliyyulmunif780@gmail.com"
                className="text-xl text-white/0"
              >
                Let&apos;s Talk!
              </Link>{" "}
            </div>
            <div className="absolute flex items-center justify-center w-full top-1/2 left-1/2 px-4 py-2 border-4 border-[#4105f7] rounded-full bg-[#4105f7] z-0 -translate-x-1/2">
              {" "}
              <Link href="mailto:aliyyulmunif780@gmail.com" className="text-xl">
                Let&apos;s Talk!
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
            className="relative w-full absolute"
          >
            <div className="absolute w-full flex items-center justify-center top-1/2 left-1/2 px-4 py-2 rounded-full z-0 -translate-x-1/2">
              {" "}
              <Link
                href="/assets/aliyyul munif resume en.pdf"
                className="text-xl text-black"
                target="_blank"
              >
                My Resume{" "}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
