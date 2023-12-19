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
    <div className="container mx-auto mt-24 px-12 py-6">
      <Navbar />
      <HeroSection />
      <Achivement />
      <AboutSecction />
      <ProjectsSection />
      <EmailSecction />
    </div>
  );
}
