import Navbar from "./Navbar";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";
import bowlingBall from "../../assets/bowling-ball-toggle.svg";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent text-white z-20 h-[6.5rem]">
      <div className="flex flex-col gap-2 md:flex-row items-center p-4 md:justify-between">
        <h1 className="flex flex-col items-center text-center md:items-start md:text-left group">
          <Link to="/">
            <p className="font-damion mb-0 text-3xl transition-colors group-hover:text-clarks-orange">
              Clark's
            </p>
            <p className="font-blanch mt-[-0.75rem] text-2xl relative flex items-center justify-center">
              <span className="transition-transform duration-300 group-hover:translate-x-[-3px] ">
                BOWLING
              </span>
              <span className="relative w-[10px] h-[10px]">
                <img
                  src={bowlingBall}
                  alt="Clark's bowling ball"
                  className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-[3px] ">
                CLUB
              </span>
            </p>
          </Link>
        </h1>
        <Navbar />
        <Toggle />
      </div>
    </header>
  );
}
