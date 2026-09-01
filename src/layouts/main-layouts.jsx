import Image from "next/image.js";
import Navbar from "../components/navbar.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="relative w-full min-h-[100dvh] bg-white overflow-x-hidden">
      <div className="absolute z-10 inset-0 h-full fixed bg-[linear-gradient(to_right,#00000033_1px,transparent_1px),linear-gradient(to_bottom,#00000033_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className=" absolute z-0 inset-0 h-[100dvh] fixed ">
        <Image
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          src="/assets/background.svg"
        ></Image>
      </div>{" "}
      {/* <div className=" absolute z-0 inset-0 h-[100dvh] fixed "> ... */}
      <div className="absolute z-30 top-0 left-0 fixed w-full pointer-events-none">
        {" "}
        <Navbar></Navbar>
      </div>
      <div className="relative z-20"> {children}</div>
    </div>
  );
}
