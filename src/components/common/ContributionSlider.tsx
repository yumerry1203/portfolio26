import { useEffect, useState } from "react";

interface ContributionSliderProps {
  contribution: number;
  className?: string;
}

const ContributionSlider = ({
  contribution,
  className = "",
}: ContributionSliderProps) => {
  const percentage = Math.min(100, Math.max(0, contribution));
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setFill(percentage));

    return () => cancelAnimationFrame(frame);
  }, [percentage]);

  return (
    <div className={`flex items-center gap-20 ${className}`}>
      <div
        className="h-8 flex-1 overflow-hidden rounded-full bg-white/35"
        role="progressbar"
        aria-label="기여도"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
      >
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-700 ease-out"
          style={{ width: `${fill}%` }}
        />
      </div>
      <span className="text-right text-sm text-white">{percentage}%</span>
    </div>
  );
};

export default ContributionSlider;
