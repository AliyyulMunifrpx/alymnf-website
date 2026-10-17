import { work } from "../data/work.js";
import GradientWaves from "../src/components/GradientWaves.jsx";
import RubberCard from "./rubber-card.jsx";

export default function SelectedWorkSection() {
  return (
    <div className="relative w-full flex flex-col px-4 lg:px-8 xl:px-24">
      <h2 className="text-4xl lg:text-9xl text-center z-10 font-semibold text-second3 pt-40">
        Selected Work
      </h2>
      <div className="relative z-10 col-span-3 row-start-2 grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8 mt-8 lg:-mt-8">
        {work.map((item, i) => (
          <RubberCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
