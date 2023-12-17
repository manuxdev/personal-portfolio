import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSecction from "./components/AboutSecction";
import ProjectsSection from "./components/ProjectsSection";
import EmailSecction from "./components/EmailSecction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-6">
        <HeroSection />
        <AboutSecction />
        <ProjectsSection />
        <EmailSecction />
      </div>
      <Footer />
    </main>
  );
}
