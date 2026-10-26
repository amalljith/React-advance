
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Booking", path: "/booking" },
    { name: "Doctors", path: "/doctors" },
    { name: "Departments", path: "/departments" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="bg-linear-to-r from-teal-700 to-teal-500 text-white shadow-lg">
      <nav className="flex min-h-20 items-center justify-between gap-6 px-6 lg:px-10">

        {/* Logo */}
        <h1 className="cursor-pointer text-3xl font-bold">
          <NavLink to="/">MediCare</NavLink>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7  xl:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 font-semibold transition-colors duration-300
                after:absolute after:bottom-0 after:left-0
                after:h-0.5 after:bg-white
                after:transition-all after:duration-300
                ${isActive
                  ? "text-white after:w-full"
                  : "text-white/85 after:w-0 hover:text-white hover:after:w-full"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <span className="font-semibold">
            Hi, amal
          </span>

          <button className="cursor-pointer font-semibold transition-colors hover:text-red-200">
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-white/20 xl:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="flex flex-col gap-2 border-t border-white/20 px-6 py-4 xl:hidden">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 transition-colors
                ${isActive
                  ? "bg-white/20 font-semibold"
                  : "hover:bg-white/20"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <p className="px-4 py-3">Hi, amal</p>

          <button className="cursor-pointer rounded-lg px-4 py-3 text-left transition-colors hover:bg-white/20 hover:text-red-200">
            Logout
          </button>

        </div>
      )}
    </header>
  );
}
