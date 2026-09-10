import { Menu, Server, X } from "lucide-react";
import { useState } from "react";
import Homepage from "../components/Homepage";
import About from "../components/About";
import ServicesPage from "../components/ServicesPage";
import Industries from "../components/Industries";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinks = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About us",
    },
    {
      path: "/services",
      label: "Services",
    },
    {
      path: "/industries",
      label: "Industries",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="glass-strong">
      <div className="hdglow"></div>
      <a className="flex gap-2 items-center justify-center ">
        <span className="hud-live-dot"></span>
        <Server size={20} color="var(--brand-color)" />
        <span className="brandLogo pt-1">Geekin</span>
      </a>
      <nav className="">
        {/* Destop Nav */}
        <div>
          <div className="mainNav">
            {navLinks.map((link, index) => (
              <NavLink
                to={link.path}
                key={index}
                className={({ isActive }) => (isActive ? "active" : "")}
                end={link.path === "/"}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      <NavLink className="contact-btn" to="/contact">
        Schedule a Call
      </NavLink>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute w-full left-0 px-6 top-14 mx-auto md:hidden bg-slate-900 backdrop-blur glass-strong animate-fade-in">
          <div className=" py-6 flex gap-4  flex-col  text-lg">
            {navLinks.map((link, index) => (
              <NavLink
                to={link.path}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <NavLink
              className="bg-(--brand-color) rounded-full px-4 py-2 text-black"
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}>
              Schedule a Call
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
