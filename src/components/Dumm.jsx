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

const Dumm = () => {
  const services = [
    {
      title: "Managed IT Services",
      desc: "Ongoing management and support for your entire IT environment at a predictable monthly rate.",
      icon: Server,
      img: "/it-services.webp",
    },
    {
      title: "Network & Infrastructure Management ",
      desc: "Design, deployment, and management of the secure, resilient networks your business depends on.",
      icon: Network,
      img: "/services-network.webp",
    },
    {
      title: "Cloud & Hybrid Cloud Services ",
      desc: "Planning, migration, and optimization for public and hybrid cloud platforms.",
      icon: Cloud,
      img: "/services-cloud.webp",
    },
    {
      title: "Cybersecurity & Compliance Readiness ",
      desc: "Layered security and practical compliance support for modern threats and regulations.",
      icon: ShieldCheck,
      img: "/services-cybersecurity.webp",
    },
    {
      title: "Backup, Disaster Recovery & Business Continuity ",
      desc: "Data protection and a clear, tested path to recovery.",
      icon: DatabaseBackup,
      img: "/services-backup.webp",
    },
    {
      title: "VoIP, Telecom & Collaboration ",
      desc: "Modern phone and communication systems that keep your team and customers connected.",
      icon: PhoneCall,
      img: "/services-voip.webp",
    },
    {
      title: "IT Strategy, Consulting & Projects ",
      desc: "Virtual CIO/CTO‑level guidance and structured delivery for key initiatives.",
      icon: Briefcase,
      img: "/services-it-managed.webp",
    },
    {
      title: "Specialized IT for Medical & Healthcare ",
      desc: "Healthcare‑aware IT that supports clinical workflows and protects patient data.",
      icon: HeartPulse,
      img: "/services-medical.webp",
    },
  ];
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-12">
        <p className="text-yellow-400 mb-2">Our Services</p>
        <h2 className="text-4xl md:text-5xl font-bold">Our core services</h2>
        <p className="text-gray-400 mt-4 max-w-2xl">
          We deliver managed IT, cloud, security, and communication services
          tailored for modern businesses.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-white/25 bg-white/5 backdrop-blur transition-all duration-300 hover:scale-[1.03] hover:border-yellow-400/40">
              {/* Image */}
              <div className="w-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full object-cover group-hover:scale-110 transition duration-500"
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

                <span className="flex items-center gap-2 text-yellow-400 text-sm group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </span>
              </div>
            </div>
          );
        })}

        {/* CTA Card */}
        <div className="flex flex-col justify-center items-center text-center rounded-2xl border border-yellow-400/30 bg-linear-to-br from-yellow-400/10 to-transparent p-8 hover:scale-[1.03] transition">
          <LiaHeadsetSolid className="text-7xl font-normal text-(--brand-color)" />

          <h3 className="text-xl font-semibold mb-3">
            Need a custom IT Solution?
          </h3>
          <p className="text-gray-400 mb-6">
            Let's build a solution that fits your business perfectly.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-300 transition">
            Contact us today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dumm;
