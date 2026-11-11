import { useState } from "react";

import Intro from "@/sections/Intro/Intro";
import Home from "@/sections/Home/Home";
import AboutMe from "@/sections/AboutMe/AboutMe";
import Skills from "@/sections/Skills/Skills";
import HowIWork from "@/sections/Skills/HowIWork";
import Projects from "@/sections/Projects/Projects";
import ProjectArchive from "@/sections/ProjectArchive/ProjectArchive";
import SideProjects from "@/sections/SideProjects/SideProjects";
import Contact from "@/sections/Contact/Contact";

const INTRO_SESSION_KEY = "portfolio-intro-viewed";

const hasViewedIntro = () => {
  try {
    return sessionStorage.getItem(INTRO_SESSION_KEY) === "true";
  } catch {
    return false;
  }
};

const HomePage = () => {
  const [isIntroComplete, setIsIntroComplete] = useState(hasViewedIntro);

  const handleIntroComplete = () => {
    try {
      sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    } catch {
      // 저장소 접근이 제한된 환경에서도 화면 전환은 정상적으로 완료합니다.
    }

    setIsIntroComplete(true);
  };

  return (
    <>
      {!isIntroComplete && (
        <Intro onComplete={handleIntroComplete} />
      )}

      {isIntroComplete && (
        <>
          <Home />
          <div id="about">
            <AboutMe />
            <Skills />
            <HowIWork />
          </div>
          <Projects />
          <ProjectArchive />
          <SideProjects />
          <Contact />
        </>
      )}
    </>
  );
};

export default HomePage;
