import { pricingPlans, projectExclusions } from "../data/pricing.js";
import PricingCard from "./pricing-card.jsx";

export default function PricingSection() {
  return (
    <div className="relative w-full flex flex-col px-4 lg:px-24 font-poppins">
      <h2 className="text-4xl lg:text-9xl text-center z-10 font-semibold text-second3 pt-40">
        Pricing{" "}
      </h2>

      <div className="relative z-10 col-span-3 row-start-2 grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8 mt-8 lg:-mt-8">
        {pricingPlans.map((item) => (
          <PricingCard key={item.id} item={item}></PricingCard>
        ))}
      </div>
      <p className="text-sm text-center mt-8 px-4 lg:px-32">
        {projectExclusions}
      </p>
      <p className="mt-8 text-center text-sm text-second3/80">
        Based in Indonesia? Prices are different for local clients,{" "}
        <a
          href="#contact"
          className="underline underline-offset-4 hover:text-second3"
        >
          contact us
        </a>{" "}
        for a quote.
      </p>
    </div>
  );
}
