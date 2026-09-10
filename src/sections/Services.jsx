import {
  Cloud,
  Headset,
  MonitorCog,
  Network,
  ShieldCog,
  ArrowRight,
} from "lucide-react";
import { MdBackup } from "react-icons/md";
import { RiTeamFill, RiHealthBookFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import React from "react";

const services = [
  {
    title: "Managed IT Services",
    desc: "Ongoing management and support for your entire IT environment at a predictable monthly rate.",
    icon: MonitorCog,
    img: "/it-services.webp",
    path: "/managed-it-services",
    tag: "CORE",
  },
  {
    title: "Network & Infrastructure Management",
    desc: "Design, deployment, and management of the secure, resilient networks your business depends on.",
    icon: Network,
    img: "/services-network.webp",
    path: "/network-and-infrastructure-management",
    tag: "NET-02",
  },
  {
    title: "Cloud & Hybrid Cloud Services",
    desc: "Planning, migration, and optimization for public and hybrid cloud platforms.",
    icon: Cloud,
    img: "/services-cloud.webp",
    path: "/cloud-and-hybrid-cloud-services",
    tag: "CLD-03",
  },
  {
    title: "Cybersecurity & Compliance Readiness",
    desc: "Layered security and practical compliance support for modern threats and regulations.",
    icon: ShieldCog,
    img: "/services-cybersecurity.webp",
    path: "/cybersecurity-and-compliance-readiness",
    tag: "SEC-04",
  },
  {
    title: "Backup, Disaster Recovery & Business Continuity",
    desc: "Data protection and a clear, tested path to recovery.",
    icon: MdBackup,
    img: "/services-backup.webp",
    path: "/backup-disaster-recovery-and-business-continuity",
    tag: "BKP-05",
  },
  {
    title: "VoIP, Telecom & Collaboration",
    desc: "Modern phone and communication systems that keep your team and customers connected.",
    icon: Headset,
    img: "/services-voip.webp",
    path: "/voip-telecom-and-Collaboration",
    tag: "COM-06",
  },
  {
    title: "IT Strategy, Consulting & Projects",
    desc: "Virtual CIO/CTO‑level guidance and structured delivery for key initiatives.",
    icon: RiTeamFill,
    img: "/services-it-managed.webp",
    path: "/it-strategy-consulting-projects",
    tag: "STR-07",
  },
  {
    title: "Specialized IT for Medical & Healthcare",
    desc: "Healthcare‑aware IT that supports clinical workflows and protects patient data.",
    icon: RiHealthBookFill,
    img: "/services-medical.webp",
    path: "/specialized-it-for-medical-and-healthcare",
    tag: "MED-08",
  },
];

const Services = () => {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="container mx-auto">
        <p className="hud-label uppercase text-(--brand-color) text-xs tracking-widest text-center">
          // Service Modules
        </p>
        <h2 className="text-center">
          Our <span className="text-(--brand-color)">Services</span>
        </h2>
        <h4 className="text-center text-[18px]">
          Geekin is built for businesses that depend on technology but don't need — or want — a large in-house IT team.
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-8 gap-4">
          {services.map(({ title, desc, icon: Icon, img, path, tag }) => (
            <NavLink
              to={path}
              key={path}
              className="group relative hud-panel rounded-sm overflow-hidden flex flex-col hover:border-(--brand-color)/70 hover:-translate-y-1">
              <div className="hud-photo h-32">
                <img src={img} alt="" />
              </div>
              <span className="absolute top-3 right-4 hud-label text-[10px] tracking-widest text-(--brand-color)/70 z-10">
                {tag}
              </span>
              <div className="absolute top-24 left-4 bg-black border border-(--brand-color)/30 p-2.5 rounded-sm z-10">
                <Icon className="text-(--brand-color)" size={20} />
              </div>
              <div className="flex flex-col p-5 pt-6 grow">
                <h6 className="text-left py-0">{title}</h6>
                <p className="text-left text-gray-400 grow mt-1">{desc}</p>
                <span className="flex items-center gap-2 text-(--brand-color) text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={16} />
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
