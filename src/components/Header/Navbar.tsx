import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

interface MenuRoute {
  path: string;
  textEN: string;
  textFR: string;
}

const menuRoutes: MenuRoute[] = [
  { path: "/", textEN: "Home", textFR: "Accueil" },
  { path: "/about", textEN: "About", textFR: "Bio" },
  { path: "/tour", textEN: "Tour", textFR: "Tournée" },
  { path: "/music", textEN: "Music", textFR: "Musique" },
  { path: "/merch", textEN: "Merch", textFR: "Boutique" },
  { path: "/contact", textEN: "Contact", textFR: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isFrench } = useLanguage();

  console.log("Navbar rendering, language:", isFrench ? "French" : "English");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="md:relative">
      {/* Hamburger button (visible on small screens) */}
      <div className="md:hidden absolute right-6 top-5">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none focus:ring-2 focus:ring-clarks-orange focus:ring-offset-2 focus:ring-offset-transparent rounded-md p-1"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Menu items */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute h-full left-0 w-full bg-transparent md:justify-between md:flex md:gap-[8vw] list-none md:static text-center mt-10 md:mt-0`}
      >
        {menuRoutes.map((route) => (
          <li key={route.path} className="p-2 md:p-0 text-6xl md:text-2xl">
            <Link
              to={route.path}
              className="hover:text-clarks-orange font-blanch text-center px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-clarks-orange focus:ring-offset-2 focus:ring-offset-transparent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {isFrench ? route.textFR : route.textEN}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
