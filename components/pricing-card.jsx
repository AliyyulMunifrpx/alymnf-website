"use client";

import Button3 from "./button-3.jsx";

export default function PricingCard({ item }) {
  return (
    <div
      key={item.id}
      className="w-full font-poppins gap-8 min-h-[520px] font-poppins bg-primary/20 backdrop-blur-sm border-[1px] border-second3/20 rounded-2xl flex flex-col justify-between p-8 shadow-xl transition-colors duration-300 hover:border-second3/20"
    >
      {/* BAGIAN ATAS: Header, Price & Description */}
      <div className="flex flex-col gap-4">
        {/* Title */}
        <h3 className="text-2xl font-medium text-center text-second3">
          {item.title}
        </h3>

        {/* Price Tag */}
        <div className="text-center">
          <span className="text-sm uppercase font-mono tracking-wider text-second3/50 block mb-1">
            Starting at
          </span>

          <span className="text-4xl font-bold text-second3">{item.price}</span>
        </div>

        {/* Description */}
        <p className="text-sm font-light text-second3/70 text-justify">
          {item.description}
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-second3/10 my-2" />

        {/* Features List */}
        <div className="flex flex-col gap-2.5">
          <span className="text-sm font-mono uppercase tracking-wider text-second3/40">
            What&apos;s included:
          </span>
          <ul className="flex flex-col gap-2">
            {item.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex items-start gap-2.5 text-sm font-light text-second3/80"
              >
                <span className="text-sm leading-none text-second3/60">●</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button CTA */}
      <Button3
        href={item.ctaHref || "#contact"}
        text={item.ctaText || "get started"}
        className="w-full grayscale mt-auto"
      />
    </div>
  );
}
