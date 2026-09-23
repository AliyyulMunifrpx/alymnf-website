import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins, Schoolbell } from "next/font/google";

const schoolbell = Schoolbell({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${schoolbell.className} ${poppins.variable}`}>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
