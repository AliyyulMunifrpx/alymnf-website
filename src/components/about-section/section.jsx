import Image from "next/image.js";
import { useState } from "react";
import { motion } from "framer-motion";
export default function AboutSection() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="min-h-full lg:h-[100dvh] grid grid-cols-1 lg:grid-cols-3 grid-rows-2 lg:grid-rows-3 w-full mb-24">
      {/* gambar bagian atas */}

      {/* SPRINKLE */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
        }}
        className="row-start-2 lg:row-start-3 flex translate-x-[7%] lg:translate-x-0 justify-end w-full col-start-1 lg:col-start-3 w-[50%]"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            alt="star"
            src="/assets/about section/sprinkle.svg"
            width={100}
            height={100}
            className=" w-24 lg:w-56"
          />
        </motion.div>
      </motion.div>

      {/* SWING */}
      <motion.div
        initial={{
          scale: 0.7,
          x: -100,
          rotate: -10,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          x: 0,
          rotate: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className="row-start-2 lg:row-start-3 col-start-1 col-end-2 w-[60%] lg:w-[110%] translate-y-[80%] lg:translate-y-[10%] -translate-x-[30%] lg:translate-x-[-10%] h-full"
      >
        <motion.div
          animate={{
            scale: [1, 1.03, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            scale: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            },
            rotate: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
        >
          <Image
            alt=""
            src="/assets/about section/swing.svg"
            width={100}
            height={100}
            className="w-136"
          />
        </motion.div>
      </motion.div>
      {/* SIGNATURE */}
      <motion.div
        initial={{
          clipPath: "inset(0 100% 0 0)",
        }}
        whileInView={{
          clipPath: "inset(0 0% 0 0)",
        }}
        viewport={{ once: true }}
        animate={{
          rotate: [0, 5, 0],
        }}
        transition={{
          clipPath: {
            duration: 1.5,
            ease: "easeInOut",
          },
          rotate: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        className="row-start-1 col-start-1 flex items-center justify-center w-[25%] z-10 -translate-y-[20%] lg:translate-y-[60%] translate-x-[20%]"
      >
        <Image
          alt="signature"
          src="/assets/about section/signature.svg"
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </motion.div>
      <div className="col-start-1 lg:col-end-2 z-0 row-start-1 row-end-2 lg:row-end-4 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="relative col-start-1 w-full h-full"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Image
            alt="Photo"
            src="/assets/about section/photo.svg"
            width={1000}
            height={1000}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-auto"
          />
          <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{
              clipPath: isHover
                ? "circle(100% at 50% 0%)"
                : "circle(0% at 50% 100%)",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[90%] h-auto"
          >
            {" "}
            <Image
              alt="Photo hover"
              src="/assets/about section/photo-hover.png"
              width={3840}
              height={2160}
              quality={75}
              className={` w-full h-full`}
            />
          </motion.div>

          <Image
            alt="Border"
            src="/assets/about section/border.svg"
            width={1000}
            height={1000}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] z-10"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
        className="col-start-1 lg:col-start-2 lg:col-end-4 row-start-2 lg:row-start-1 lg:row-end-4 w-full h-full flex flex-col gap-4 mt-4 lg:mt-0 lg:gap-8 px-8 lg:pr-16 lg:pl-0 justify-center"
      >
        <p className="text-3xl lg:text-5xl text-start w-full mt-8 lg:mt-0 text-[#4105f7]">About Me</p>
        <p className="text-lg lg:text-2xl text-[#000000] text-justify w-full">
          It started with graphic design, playing with layouts, typography,
          colors that felt right. Somewhere along the way, curiosity got the
          better of me, and I wanted to know what happens when a design actually
          comes to life on screen. So I picked up React, then Node.js, then a
          whole stack of things I didn&apos;t know I&apos;d need. I&apos;m still
          learning, honestly, right now it&apos;s Next.js. Give me something new
          and I&apos;ll probably stay up too late figuring it out, just because
          finally getting it feels really, really good.
        </p>
      </motion.div>
    </div>
  );
}
