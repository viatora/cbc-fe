import jumpCropped from "../assets/images/cbc-jump-cropped.jpg";
import blackLogo from "../assets/images/cbc-black-logo.png";

export default function Home() {
  return (
    <main>
      <div className="wrapper relative">
        <img src={jumpCropped} alt="" />
        <img
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl "
          src={blackLogo}
          alt=""
        />
      </div>
    </main>
  );
}
