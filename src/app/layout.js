import { Poppins, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../../components/navbar.jsx";
import SmoothScroll from "../../components/smooth-scroll.jsx";
import Footer from "../../components/footer.jsx";

// Import Space Grotesk sebagai font default
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Import Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

// Import CMU Serif lokal
const cmuSerif = localFont({
  src: [
    {
      path: "../../public/fonts/cmu-serif/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/cmu-serif/italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-cmu-serif",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${spaceGrotesk.variable}
        ${poppins.variable}
        ${cmuSerif.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col bg-primary text-white">
        <Navbar></Navbar>
        {/* 'overflow-x-hidden' is set on main to prevent horizontal overflow without breaking window scroll */}
        <main className="flex-1  z-0">
          <SmoothScroll>{children}</SmoothScroll>
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
