import HeroSection from "./components/HeroSection";
import AboutSecction from "./components/AboutSecction";
import ProjectsSection from "./components/ProjectsSection";
import EmailSecction from "./components/EmailSecction";

import Achivement from "./components/Achivement";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "ManuxDev",
  description: "Portfolio of Manuel Pantoja",
};

export default function Home() {
  return (
    <div className=" lg:px-72 px-4 py-2">
      <HeroSection />
      {/* <Achivement /> */}
      <AboutSecction />
      <ProjectsSection />
      <EmailSecction />
    </div>
  );
}
