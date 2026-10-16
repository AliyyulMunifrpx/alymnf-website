export default function ButtonSubmit({
  text,
  isSubmitting = false,
  type = "submit",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      disabled={isSubmitting}
      onClick={onClick}
      className={`group flex justify-center items-center gap-4 border border-second3 h-fit px-6 py-3 bg-second3 text-primary transition-all duration-300 rounded-xl w-full font-semibold cursor-pointer disabled:opacity-50 ${className}`}
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
    </button>
  );
}
