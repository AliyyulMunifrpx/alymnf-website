
export default function AnimatedBorder({ children, className = "" }) {
  return (
    <div
      className={`animated-border relative isolate rounded-xl p-px ${className}`}
    >
      <div className="relative z-10 h-full rounded-[11px] bg-[#06050b] p-8">
        {children}
      </div>
    </div>
  );
}
