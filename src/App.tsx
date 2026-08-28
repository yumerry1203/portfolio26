import { useState } from "react";
import Home from "./sections/Home/Home"
import AboutMe from "./sections/AboutMe/AboutMe"
import Projects from "./sections/Projects/Projects"
import ProjectArchive from "./sections/ProjectArchive/ProjectArchive"
import SideProjects from "./sections/SideProjects/SideProjects"
import Skills from "./sections/Skills/Skills"
import Contact from "./sections/Contact/Contact"
import Intro from "./sections/Intro/Intro"

const App = () => {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  return (
    <>
      {!isIntroComplete && <Intro onComplete={() => setIsIntroComplete(true)} />}
      {isIntroComplete && (
        <>
          <Home />
          <AboutMe />
          <Projects />
          <ProjectArchive />
          <SideProjects />
          <Skills />
          <Contact />
        </>
      )}
    </>
  )
}

export default App
