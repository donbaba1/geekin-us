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
} from "lucide-react";
import { LiaHeadsetSolid } from "react-icons/lia";

import React from "react";
import { NavLink } from "react-router";

const ServicesPage = () => {
  const services = [
    {
      title: "Managed IT Services",
      desc: "Ongoing management and support for your entire IT environment at a predictable monthly rate.",
      icon: Server,
      img: "/it-services.webp",
      path: "/managed-it-services",
    },
    {
      title: "Network & Infrastructure Management ",
      desc: "Design, deployment, and management of the secure, resilient networks your business depends on.",
      icon: Network,
      img: "/services-network.webp",
      path: "/network-and-infrastructure-management",
    },
    {
      title: "Cloud & Hybrid Cloud Services ",
      desc: "Planning, migration, and optimization for public and hybrid cloud platforms.",
      icon: Cloud,
      img: "/services-cloud.webp",
      path: "/cloud-and-hybrid-cloud-services",
    },
    {
      title: "Cybersecurity & Compliance Readiness ",
      desc: "Layered security and practical compliance support for modern threats and regulations.",
      icon: ShieldCheck,
      img: "/services-cybersecurity.webp",
      path: "/cybersecurity-and-compliance-readiness",
    },
    {
      title: "Backup, Disaster Recovery & Business Continuity ",
      desc: "Data protection and a clear, tested path to recovery.",
      icon: DatabaseBackup,
      img: "/services-backup.webp",
      path: "/backup-disaster-recovery-and-business-continuity",
    },
    {
      title: "VoIP, Telecom & Collaboration ",
      desc: "Modern phone and communication systems that keep your team and customers connected.",
      icon: PhoneCall,
      img: "/services-voip.webp",
      path: "/voip-telecom-and-Collaboration",
    },
    {
      title: "IT Strategy, Consulting & Projects ",
      desc: "Virtual CIO/CTO‑level guidance and structured delivery for key initiatives.",
      icon: Briefcase,
      img: "/services-it-managed.webp",
      path: "/it-strategy-consulting-projects",
    },
    {
      title: "Specialized IT for Medical & Healthcare ",
      desc: "Healthcare‑aware IT that supports clinical workflows and protects patient data.",
      icon: HeartPulse,
      img: "/services-medical.webp",
      path: "/specialized-it-for-medical-and-healthcare",
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
            <p>Services</p>
          </div>
          <div className="flex flex-col ">
            <h1>Our Core Services</h1>
            <p>
              Geekin delivers a complete range of managed IT, cloud, security, and communications services across multiple industries, with deep expertise in medical and healthcare. Whether you need fully outsourced IT or a co-managed partnership with your internal team, we have a model that fits.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <img src="/services.png" className="text-center" alt="" />
        </div>
      </div>

      <div className="container  gap-5">
        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => {
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

                  <NavLink to={service.path}>
                    <span className="flex items-center gap-2 text-yellow-400 text-sm group-hover:gap-3 transition-all">
                      Learn more <ArrowRight size={16} />
                    </span>
                  </NavLink>
                </div>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="flex flex-col justify-center items-center text-center rounded-2xl border border-yellow-400/30 bg-linear-to-br from-yellow-400/10 to-transparent p-8 hover:scale-[1.03] transition">
            <LiaHeadsetSolid className="text-7xl font-normal text-(--brand-color)" />

            <h3 className="text-xl font-semibold mb-3">
              Need a Custom IT Solution?
            </h3>
            <p className="text-gray-400 mb-6">
              Every business is different. Let's build an IT solution that fits yours.
            </p>

            <NavLink
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-300 transition"
              to="/contact">
              Contact us today
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
