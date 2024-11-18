import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent text-white z-20">
      <div className="flex flex-col md:flex-row items-center p-4 md:justify-start md:gap-[10vw]">
        <h1 className="flex flex-col items-center text-center md:items-start md:text-left">
          <Link to="/">
            <p className="damion-regular mb-0 text-3xl">Clark's</p>
            <p className="font-[Blanch-Caps] mt-[-0.75rem] text-2xl">
              BOWLING CLUB
            </p>
          </Link>
        </h1>
        <Navbar />
      </div>
    </header>
  );
}
