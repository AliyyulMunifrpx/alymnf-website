import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Schoolbell } from "next/font/google";

const schoolbell = Schoolbell({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={schoolbell.className}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
