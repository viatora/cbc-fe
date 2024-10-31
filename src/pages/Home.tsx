import jumpCropped from "../assets/images/cbc-jump-cropped.jpg";
import blackLogo from "../assets/images/cbc-black-logo.png";
import bandWindow from "../assets/images/cbc-band-window-pic.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  return (
    <main>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0.2} speed={2.5}>
          <img src={jumpCropped} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={5}>
          <img className="max-w-2xl m-auto top-3/4" src={blackLogo} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.95} speed={2}>
          <img src={bandWindow}></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={1}>
          <h1 className="text-9xl text-center text-[#febc12]">
            Welcome to our website
          </h1>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
