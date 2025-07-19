import { useState } from "react";
import Button from "./UI/Button";
import { Menu, X } from "lucide-react"; // Optional icon library like lucide-react

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-white shadow-sm z-50 relative">
      <div className="w-full max-w-[1200px] h-[70px] mx-auto px-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-primary">Technewman</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 items-center">
          <li className="cursor-pointer hover:text-primary">
            <a href="#">Home</a>
          </li>
          <li className="cursor-pointer hover:text-primary">
            <a href="#">About us</a>
          </li>
          <li className="cursor-pointer hover:text-primary">
            <a href="#">Services</a>
          </li>
          <li className="cursor-pointer hover:text-primary">
            <a href="#">Blog</a>
          </li>
          <Button>Contact us</Button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-white shadow-md px-4 py-6 z-40">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#" className="block text-gray-800 hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 hover:text-primary">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 hover:text-primary">
                Blog
              </a>
            </li>
            <Button className="w-full">Contact us</Button>
          </ul>
        </div>
      )}

      <hr className="text-[#C4C4C4]" />
    </nav>
  );
}

export default Nav;
