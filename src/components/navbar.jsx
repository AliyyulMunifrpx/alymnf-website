import Image from "next/image.js";
import Link from "next/link.js";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router.js";

export default function Navbar() {
  const menu = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
  ];
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const updateActive = () => {
      setActive(window.location.hash);
    };

    updateActive();

    window.addEventListener("hashchange", updateActive);

    return () => {
      window.removeEventListener("hashchange", updateActive);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-[100dvh] w-full pointer-events-none">
      <div className="relative z-50 absolute backdrop-blur-md top-0 left-0 w-full h-16">
        {/* Menu Desktop (Asli) */}
        <div className="absolute inset-0 w-full hidden md:flex justify-center pointer-events-auto items-center  gap-24 h-16">
          {menu.map((item) => {
            const isActive = active === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.href)}
                className="relative text-xl text-black"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-cursor"
                    className="absolute -left-7 top-1/2 -translate-y-1/2"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  >
                    <Image
                      alt="kursor"
                      width={24}
                      height={24}
                      src="/assets/cursor.svg"
                    />
                  </motion.div>
                )}

                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Logo (Asli) */}
        <Link
          href="#main"
          className="absolute top-1/2 -translate-y-1/2 left-8 pointer-events-auto text-black text-xl z-20"
        >
          alymnf
        </Link>

        {/* Tombol Burger (Khusus Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-1/2 -translate-y-1/2 right-8 pointer-events-auto md:hidden z-20 text-black text-2xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Dekorasi Navbar SVG (Asli) */}
        <Image
          src="/assets/navbar.svg"
          alt="Navbar decoration"
          width={1920}
          height={64}
          className="absolute -bottom-[15%] left-0 w-full h-auto z-0"
        />
      </div>

      {/* Menu Burger Drawer (Khusus Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-10 pointer-events-auto flex flex-col justify-between p-8 pt-24 md:hidden"
          >
            {/* Navigasi Mobile */}
            <div className="flex flex-col gap-6 items-center">
              {menu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActive(item.href);
                    setIsOpen(false);
                  }}
                  className="text-2xl text-black font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Footer di dalam Burger Mobile */}
            <div className="flex flex-col items-center gap-4 text-center border-t pt-6">
              <p className="text-base text-black">
                © 2026 Aliyyul. All rights reserved.
              </p>
              <Image
                alt="github"
                src="/assets/github.svg"
                width={35}
                height={35}
                onClick={() => {
                  setIsOpen(false);
                  router.push("https://github.com/aliyyulmunifrpx");
                }}
                className="cursor-pointer"
              />
              <p className="text-base text-black">
                Made With ♥ by{" "}
                <Link
                  href="https://instagram.com/itsaliyyul"
                  className="text-[#4105F7]"
                  onClick={() => setIsOpen(false)}
                >
                  @itsaliyyul
                </Link>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Desktop (Asli) */}
      <div className="absolute bottom-0 left-0 w-full hidden md:flex pointer-events-auto py-4 px-8 justify-between items-center">
        <p className="text-xl text-[#000000]">
          © 2026 Aliyyul. All rights reserved.
        </p>
        <Image
          alt="github"
          src="/assets/github.svg"
          width={35}
          height={35}
          onClick={() => router.push("https://github.com/aliyyulmunifrpx")}
          className="cursor-pointer"
        />
        <p className="text-xl text-[#000000]">
          Made With ♥ by{" "}
          <Link
            href="https://instagram.com/itsaliyyul"
            className="text-[#4105F7]"
          >
            @itsaliyyul
          </Link>
        </p>
      </div>
    </div>
  );
}
