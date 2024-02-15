import HeroSection from "./components/HeroSection";
import AboutSecction from "./components/AboutSecction";
import ProjectsSection from "./components/ProjectsSection";
import EmailSecction from "./components/EmailSecction";

export const metadata = {
  title: "Manuel Pantoja | ManuxDev",
  description: "Portfolio of Manuel Pantoja",
};

export default function Home() {
  return (
    <div className="max-w-[850px] py-2 flex flex-col px-4">
      <HeroSection />

      <AboutSecction />
      <ProjectsSection />
      <EmailSecction />
    </div>
  );
}
