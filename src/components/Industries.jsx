import {
  BadgeCheck,
  CircleCheckBig,
  Server,
  Network,
  Cloud,
  ShieldCheck,
  DatabaseBackup,
  PhoneCall,
  Briefcase,
  HeartPulse,
  ArrowRight,
  Scale,
  ScanBarcode,
  Building2,
  Rocket,
} from "lucide-react";
import { LiaHeadsetSolid } from "react-icons/lia";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

import React from "react";
import { NavLink } from "react-router";

const Industries = () => {
  const industries = [
    {
      title: "Medical and healthcare practices",
      desc: "Secure and complete IT systems for hospitals, clinics, and healthcare providers.",
      icon: HeartPulse,
      img: "/industry-medical.webp",
      path: "/managed-it-services",
    },
    {
      title: "Professional services (law, accounting, consulting)",
      desc: "Reliable IT infrastructure, document security, and compliance support for law firms, accounting practices, and consulting organizations.",
      icon: Scale,
      img: "/industry-law.webp",
      path: "/network-and-infrastructure-management",
    },
    {
      title: "Retail and hospitality",
      desc: "Scalable IT solutions to streamline operations, enhance the customer experience, and protect your business data.",
      icon: ScanBarcode,
      img: "/industry-retial.webp",
      path: "/cloud-and-hybrid-cloud-services",
    },
    {
      title: "Real estate and property management",
      desc: "Technology solutions for property managers, brokerages, and real estate teams — from secure document handling to reliable communications.",
      icon: Building2,
      img: "/industriy-realestate.webp",
      path: "/cybersecurity-and-compliance-readiness",
    },
    {
      title: "Small manufacturers and logistics firms",
      desc: "Practical IT support for small manufacturers and logistics operations, including network infrastructure, endpoint management, and operational continuity.",
      icon: MdOutlinePrecisionManufacturing,
      img: "/industry-manufacture.webp",
      path: "/backup-disaster-recovery-and-business-continuity",
    },
    {
      title: "Startups and distributed teams",
      desc: "Flexible, cloud-first IT environments for startups and distributed teams that need to move fast without sacrificing security or reliability.",
      icon: Rocket,
      img: "/industry-startup.webp",
      path: "/voip-telecom-and-Collaboration",
    },
  ];
  return (
    <section className="pt-32.5 relative overflow-hidden">
      <div className="hud-grid-bg"></div>
      <div className="hud-scanline"></div>
      <div className="container my-5 grid md:grid-cols-3 items-around">
        <div className="md:col-span-2">
          <div className="flex border border-white/35 rounded-full w-fit px-3 py-2 gap-2 items-center">
            <div className="p-1 rounded-full bg-(--brand-color)">
              <BadgeCheck size={18} className="text-black" />
            </div>
            <p>Industries</p>
          </div>
          <div className="flex flex-col ">
            <h1>Industries We Serve</h1>
            <p>
              We empower businesses across industries with secure, scalable, and innovative IT solutions tailored to their unique challenges.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <img src="/industry-hero.png" className="text-center" alt="" />
        </div>
      </div>

      <div className="container ">
        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {industries.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border border-white/25 bg-white/5 backdrop-blur transition-all duration-300 hover:scale-[1.03] hover:border-yellow-400/40">
                {/* Image */}
                <div className="h-62  overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full  object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="relative p-5 ">
                  {/* Icon */}
                  <div className="absolute -top-6 w-12 h-12 flex items-center justify-center rounded-full bg-black/90 border-2 border-white/30 mb-4">
                    <Icon size={24} className="text-yellow-400" />
                  </div>

                  <h3 className="text-lg font-semibold my-3 text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
