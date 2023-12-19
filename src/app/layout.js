import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
// import ViewTransition from "./utils/viewTransition";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <ViewTransition /> */}
      <body className={montserrat.className}>
        <main className="flex flex-col min-h-screen ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
