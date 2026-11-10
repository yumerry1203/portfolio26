import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import DotLabel from "@/components/common/DotLabel";
import fluidGradientBackground from "@/assets/images/fluid-gradient-background.svg";
import HeroV2 from "./HeroV2";

const Home = () => {
  const [currentDate, setCurrentDate] = useState(() => new Date());

  const currentMonthYear = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(currentDate);

  useEffect(() => {
    const now = new Date();
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timer = window.setTimeout(() => setCurrentDate(new Date()), nextDay.getTime() - now.getTime());

    return () => window.clearTimeout(timer);
  }, [currentDate]);

  return (
    <section
      className="relative box-border h-[100svh] min-h-620 overflow-hidden bg-primary px-16 pb-16 pt-38 sm:px-20 sm:pb-20 sm:pt-42 lg:px-40 lg:pb-40 lg:pt-44"
      id="home"
    >
      <img
        src={fluidGradientBackground}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[2.4rem] border border-white/20 bg-black/45 shadow-[0_2.4rem_7rem_rgba(20,10,35,0.22),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-[1.6rem] backdrop-saturate-125 sm:rounded-[3.2rem]">
          <div className="px-20 pt-16 sm:px-42 sm:pt-24 lg:px-60 lg:pt-32">
            <Header />
          </div>

          <div className="absolute right-20 top-68 z-20 flex items-center gap-6 whitespace-nowrap rounded-full bg-white px-14 py-6 font-bricolage text-[1.1rem] text-gray-dark sm:right-42 sm:top-84 sm:px-16 sm:py-7 sm:text-xs lg:right-60 lg:top-128 lg:text-sm">
            <DotLabel variant="green" className="size-6" />
            {currentMonthYear}
          </div>

          <HeroV2 />
      </div>
    </section>
  )
};

export default Home;
