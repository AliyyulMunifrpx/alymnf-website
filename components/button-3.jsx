import Link from "next/link";
import { handleSmoothScroll } from "../utils/scroll-to.js";

export default function Button3({ href, text, className = "" }) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        console.log("LINK DIKLIK:", href);
        handleSmoothScroll(e, href);
      }}
      className={`group flex justify-center items-center gap-4 h-fit px-2 py-1 bg-second3 text-primary transition-color duration-300 rounded-full w-fit font-normal ${className}`}
    >
      {/* Rolling text per character */}
      <span className="flex overflow-hidden h-5">
        {Array.from(text).map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="relative block h-5 overflow-hidden"
          >
            <span
              className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-5"
              style={{
                transitionDelay: `${i * 10}ms`,
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
    </Link>
  );
}
