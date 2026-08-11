import { useEffect, useRef, type ReactNode } from "react";
import { ArcElement, Chart, DoughnutController, Tooltip } from "chart.js";

Chart.register(ArcElement, DoughnutController, Tooltip);

interface SkillBoxTitleProps {
  icon: ReactNode;
  title: string;
}

const SkillBoxTitle = ({ icon, title }: SkillBoxTitleProps) => (
  <div className="border-b-4 border-black pb-16">
    <h3 className="flex items-center gap-16 font-heading text-3xl font-bold text-black">
      <span aria-hidden="true" className="flex items-center justify-center text-4xl leading-none">
        {icon}
      </span>
      {title}
    </h3>
  </div>
);

const DonutChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const chart = new Chart(canvas, {
      type: "doughnut",
      data: {
        labels: ["React", "HTML", "Vue3"],
        datasets: [{
          data: [1, 1, 1],
          backgroundColor: ["#F25338", "#A9C3D4", "#C9A1DD"],
          borderWidth: 0,
          hoverOffset: 0,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "57%",
        rotation: -90,
        animation: {
          animateRotate: true,
          animateScale: false,
          duration: 900,
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <div className="relative mt-24 h-300" aria-label="React, HTML, Vue3로 구성된 프론트엔드 기술 그래프">
      <div className="absolute left-1/2 top-0 h-300 w-300 -translate-x-1/2">
        <canvas ref={canvasRef} />
      </div>
      <span className="absolute right-0 top-35 rounded-full bg-white px-24 py-10 font-heading text-2xl font-bold text-black">react</span>
      <span className="absolute right-19 bottom-48 rounded-full bg-white px-24 py-10 font-heading text-2xl font-bold text-black">html</span>
      <span className="absolute left-0 top-120 rounded-full bg-white px-24 py-10 font-heading text-2xl font-bold text-black">vue3</span>
    </div>
  );
};

const SkillBox = () => {
 
  return (
    <div className="w-408 rounded-lg bg-white p-38">
      <div>
        <SkillBoxTitle icon="</>" title="Frontend" />
        <DonutChart />
      </div>

      <div className="mt-80">
        <SkillBoxTitle icon="▣" title="Style" />
      </div>

      <div className="mt-80">
        <SkillBoxTitle icon="♧" title="Collaboration" />
      </div>
    </div>
  );
};

export default SkillBox;
