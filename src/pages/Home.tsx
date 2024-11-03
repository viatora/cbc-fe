import jumpCropped from "../assets/images/cbc-jump-cropped.jpg";
import blackLogo from "../assets/images/cbc-black-logo.png";
import bandWindow from "../assets/images/cbc-band-window-pic.jpg";
import yesDay from "../assets/images/cbc-yes-day-cover.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  return (
    <main className="bg-[#FEBC12] ">
      <Parallax
        className="bg-[#FEBC12] "
        pages={5}
        style={{ top: "0", left: "0" }}
      >
        {/* Background Image */}
        <ParallaxLayer offset={0} speed={1}>
          <img className="min-h-full" src={jumpCropped} alt="" />
        </ParallaxLayer>

        {/* Logo */}
        <ParallaxLayer offset={0.5} speed={1.5}>
          <img className="max-w-2xl m-auto top-3/4" src={blackLogo} alt="" />
        </ParallaxLayer>

        {/* Band Image */}
        <ParallaxLayer offset={1} speed={1}>
          <img src={bandWindow} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={1.2}>
          <div className="flex justify-center items-center h-screen">
            <h2 className="text-5xl text-blue-500">This is a new section!</h2>
          </div>
        </ParallaxLayer>

        {/* Heading */}
        <ParallaxLayer offset={1.1} speed={0.8}>
          <h1 className="text-9xl text-center text-[#febc12]">
            Welcome to our website
          </h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={2}>
          <div className="ml-auto mr-5 w-2/3 py-10 flex justify-center items-center gap-10 bg-[#c14627] shadow-xl ">
            <a className=" w-1/2 pl-10 text-6xl text-white cursor-pointer hover:text-gray-300">
              buy the latest single
            </a>
            <img className="max-w-sm" src={yesDay} alt="" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
