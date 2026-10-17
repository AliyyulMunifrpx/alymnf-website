import Link from "next/link";
import { FiArrowDownRight } from "react-icons/fi";
import { handleSmoothScroll } from "../utils/scroll-to.js";

export default function Button2({ href, text, className = "" }) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        console.log("LINK DIKLIK:", href);
        handleSmoothScroll(e, href);
      }}
      className={`group flex justify-center text-sm lg:text-base items-center gap-4 font-light bg-second3 h-fit px-2 py-2 rounded-full w-fit font-normal ${className}`}
    >
      {/* Rolling text per character */}
      <span className="flex overflow-hidden h-5 text-primary">
        {Array.from(text).map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="relative block h-5 overflow-hidden"
          >
            <span
              className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-5"
              style={{
                transitionDelay: `${i * 30}ms`,
              }}
            >
              <span className="block h-5 leading-5 whitespace-pre">
                {char === " " ? "\u00A0" : char}
              </span>

              <span
                aria-hidden="true"
                className="block h-5 leading-5 whitespace-pre"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          </span>
        ))}
      </span>

      {/* Animated icon */}
      <FiArrowDownRight
        size={20}
        className="shrink-0 bg-primary text-second3 rounded-full transition-transform duration-300 group-hover:rotate-50"
      />
    </Link>
  );
}
