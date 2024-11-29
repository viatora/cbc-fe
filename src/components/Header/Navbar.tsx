import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const menuLinks = [
  { linkAddress: "/", linkText: "Home" },
  { linkAddress: "/about", linkText: "About" },
  { linkAddress: "/news", linkText: "News" },
  { linkAddress: "/tour", linkText: "Tour" },
  { linkAddress: "/music", linkText: "Music" },
  { linkAddress: "/store", linkText: "Store" },
  { linkAddress: "/contact", linkText: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="md:relative ">
      {/* Hamburger button (visible on small screens) */}
      <div className="md:hidden absolute right-6 top-5">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Menu items */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute h-full left-0 w-full bg-transparent md:justify-center md:flex md:gap-[10vw] list-none md:static text-center mt-10 md:mt-0`}
      >
        {menuLinks.map((menuLink) => (
          <li
            key={menuLink.linkAddress}
            className="p-2 md:p-0 text-6xl md:text-2xl"
          >
            <Link
              to={menuLink.linkAddress}
              className="hover:text-[#FEBC12] font-[Blanch-Caps] text-center"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click (for mobile)
            >
              {menuLink.linkText}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
