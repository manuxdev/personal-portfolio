import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import ViewTransition from "./utils/viewTransition";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="absolute top-0 z-[-2] h-screen w-[100%] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <Navbar />

        <main className="flex flex-col min-h-screen justify-center items-center">
          {/* <ViewTransition /> */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
