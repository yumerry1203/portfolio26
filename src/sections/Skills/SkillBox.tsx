import { useEffect, useRef, type ReactNode } from "react";
import { ArcElement, Chart, DoughnutController, Tooltip } from "chart.js";
import toolIcon from "@/assets/images/img-tool.svg";
import peopleIcon from "@/assets/images/People outline.svg";
import figmaIcon from "@/assets/images/img-figma.svg";
import githubIcon from "@/assets/images/img-github.svg";
import gitlabIcon from "@/assets/images/img-gitlab.svg";

Chart.register(ArcElement, DoughnutController, Tooltip);

interface SkillBoxTitleProps {
  icon: ReactNode;
  title: string;
}

const SkillBoxTitle = ({ icon, title }: SkillBoxTitleProps) => (
  <div className="border-b-4 border-black pb-16">
    <h3 className="flex items-center gap-16 font-heading text-2xl font-bold text-black sm:text-3xl xl:text-4xl">
      <span aria-hidden="true" className="flex items-center justify-center text-2xl leading-none sm:text-3xl xl:text-4xl">{icon}</span>
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
      data: { labels: ["React", "HTML", "Vue3"], datasets: [{ data: [1, 1, 1], backgroundColor: ["#F25338", "#A9C3D4", "#C9A1DD"], borderWidth: 0 }] },
      options: { responsive: true, maintainAspectRatio: false, cutout: "57%", rotation: -90, plugins: { legend: { display: false }, tooltip: { enabled: false } } },
    });
    return () => chart.destroy();
  }, []);

  return (
    <div className="relative mt-24 h-210 sm:h-250 lg:max-xl:h-210" aria-label="React, HTML, Vue3로 구성된 프론트엔드 기술 그래프">
      <div className="absolute left-1/2 top-0 h-190 w-190 -translate-x-1/2 sm:h-250 sm:w-250 lg:max-xl:h-210 lg:max-xl:w-210">
        <canvas ref={canvasRef} className="h-full w-full" />
        <span className="absolute right-[calc(100%-0.8rem)] top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#fff] px-12 py-6 font-heading text-sm font-bold text-black shadow-[0_0.2rem_0.8rem_rgba(0,0,0,0.12)] sm:right-[calc(100%-1.6rem)] sm:px-20 sm:py-8 sm:text-lg xl:text-xl">vue3</span>
        <span className="absolute left-[calc(100%-1.2rem)] top-[10%] z-10 rounded-full bg-[#fff] px-12 py-6 font-heading text-sm font-bold text-black shadow-[0_0.2rem_0.8rem_rgba(0,0,0,0.12)] sm:left-[calc(100%-2rem)] sm:px-20 sm:py-8 sm:text-lg xl:text-xl">react</span>
        <span className="absolute bottom-[10%] left-[calc(100%-1.2rem)] z-10 rounded-full bg-[#fff] px-12 py-6 font-heading text-sm font-bold text-black shadow-[0_0.2rem_0.8rem_rgba(0,0,0,0.12)] sm:left-[calc(100%-2rem)] sm:px-20 sm:py-8 sm:text-lg xl:text-xl">html</span>
      </div>
    </div>
  );
};

const SkillBox = () => {
  return (
    <div className="w-full rounded-lg bg-white p-22 sm:p-38">
      <div className="grid grid-cols-1 gap-50 sm:gap-80 lg:grid-cols-3 lg:gap-24 xl:grid-cols-1 xl:gap-80">
        <div>
        <SkillBoxTitle icon={"</>"} title="Core Stack" />
        <DonutChart />
        </div>

        <div>
        <SkillBoxTitle icon={<img src={toolIcon} alt="" className="h-28 w-28 sm:h-36 sm:w-36" />} title="Tools" />
        <div className="mt-20 flex flex-wrap gap-8 text-sm sm:mt-26 sm:gap-12 sm:text-lg xl:text-xl">
          <span className="rounded-sm bg-gray-dark px-8 py-3 text-gray sm:px-12 sm:py-4">TailWind CSS</span><span>·</span><span className="rounded-sm bg-gray-dark px-8 py-3 text-white sm:px-12 sm:py-4">Bootstrap</span>
          <span className="rounded-sm bg-gray-dark px-8 py-3 text-white sm:px-12 sm:py-4">Shadcn/ui</span><span className="rounded-sm bg-gray px-8 py-3 text-white sm:px-12 sm:py-4">GSAP</span><span className="rounded-sm bg-black px-8 py-3 text-accent sm:px-12 sm:py-4">JavaScript</span>
          <span className="rounded-sm border-2 border-gray-dark px-8 py-3 text-gray-dark sm:px-12 sm:py-4">illustrator</span><span className="rounded-sm bg-gray-dark px-8 py-3 text-white sm:px-12 sm:py-4">Photoshop</span>
        </div>
        </div>

        <div>
        <SkillBoxTitle icon={<img src={peopleIcon} alt="" className="h-28 w-28 sm:h-36 sm:w-36" />} title="Collaboration" />
        <div className="mt-28 flex gap-14">
          {[figmaIcon, githubIcon, gitlabIcon].map((icon) => <div key={icon} className="flex h-60 w-60 items-center justify-center rounded-md bg-gray-dark p-8 sm:h-75 sm:w-75 sm:p-10"><img src={icon} alt="" className="h-full w-full object-contain" /></div>)}
        </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
