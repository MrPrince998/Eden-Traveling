import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import { Menu, X } from "lucide-react";
import edenLogo from '../assets/images/Vector.png'
import { useEffect, useState } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full text-white z-50 px-4 py-2 md:px-6 lg:px-24 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white/0 backdrop-blur-sm py-1 shadow-md" : ""
      }`}
    >

      <div className="flex justify-between items-center h-12 md:px-10 ">
        <div className='flex justify-center items-center h-[21px] md:h-[37px]'>
            <img src={edenLogo} alt="EdenTravel" className="w-[21px] aspect-square md:w-[38px] transition-all duration-500 ease-in-out"/>
            <h1 className='text-[#17C3B2] font-sans font-medium text-[20px] md:text-[37px] md:font-bold'>Eden<span className='text-white'>Travel</span></h1>
        </div>
        {/* Hamburger icon (visible on mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav items (hidden on mobile, shown on md+) */}
        <ul className="hidden md:flex gap-10 font-medium md:text-lg">
          {NavItem.map((items) => (
            <li key={items.id} className="hover:text-orange-500">
              <Link to={items.to} className="flex gap-2 items-center">
                {items.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu dropdown */}
      <ul className={`absolute left-0 flex flex-col w-full gap-4 px-4 pb-4 md:hidden font-medium bg-[rgba(0,0,0,0.7)] backdrop-blur-md shadow-lg rounded-md transition-[max-height, opacity] duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>     
          {NavItem.map((items) => (
            <li key={items.id} className="hover:text-orange-500">
              <Link
                to={items.to}
                className="flex gap-2 items-center"
                onClick={() => setMenuOpen(false)}
              >
                {items.title}
              </Link>
            </li>
          ))}
        </ul>
    </nav>
  );
};

export default NavBar;