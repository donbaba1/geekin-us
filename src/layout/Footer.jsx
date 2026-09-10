import { Mail, MapPin, Phone, Server } from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full ">
      <section className="container p-4">
        <div className="grid md:grid-cols-3 gap-4 ">
          <div className=" md:col-span-1 rounded-[10px] border border-(--brand-color)/20  p-2 ">
            <div className="flex flex-col justify-between h-full">
              <div className="p-2">
                <a className="flex  gap-2 items-center">
                  <span className="hud-live-dot"></span>
                  <Server size={20} color="var(--brand-color)" />
                  <span className="brandLogo pt-1">Geekin</span>
                </a>
                <p>Reliable IT. Stronger Security. Confident Growth.</p>
              </div>
              <NavLink
                className="bg-(--card-gray) border border-(--brand-color)/30 text-center rounded-full py-3 px-4 cursor-pointer hover:border-(--brand-color)"
                to="/contact">
                Get Started
              </NavLink>
            </div>
          </div>
          <div className=" md:col-span-2 rounded-[10px] border border-(--brand-color)/20 justify-between p-6">
            <div className="grid grid-rows justify-between gap-4 w-full h-full ">
              <div className="grid md:grid-cols-3 ">
                <div>
                  <h4>Menu</h4>
                  <ul className="footer-nav">
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/industries">Industries</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact us</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-2">
                  <h4>Contact us</h4>
                  <ul className="footer-contact" style={{ fontFamily: "var(--font-mono)" }}>
                    <li>
                      <Phone size={18} color="var(--brand-color)" />
                      <a href="tel:+12266009100">+1 (226) 600-9100</a>
                    </li>
                    <li>
                      <MapPin size={18} color="var(--brand-color)" />
                      Gristmill St. Waterloo Ontario Canada
                    </li>
                    <li>
                      <Mail size={18} color="var(--brand-color)" />
                      <a href="mailto:info@geekin.ca">info@geekin.ca</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-between w-full ">
              <div>
                <p className="text-[13px] text-white/30">
                  © 2026 Geekin Inc. All rights reserved. Terms of Use · Privacy Policy
                </p>
              </div>
              <div className="flex gap-3 text-white/40">
                <a href="#" className="hover:text-(--brand-color)">
                  <RiTwitterXFill />
                </a>
                <a href="#" className="hover:text-(--brand-color)">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-(--brand-color)">
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
