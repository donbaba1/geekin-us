import { BadgeCheck, CircleCheckBig } from "lucide-react";
import React from "react";
import Benefits from "./Benefits";

const ManagedITServices = () => {
  const features = [
    "24/7 monitoring of servers, workstations, and network devices to catch issues before they impact users.",
    "Proactive patching and maintenance to keep systems secure and up to date.",
    "Unlimited remote support and defined on‑site support options for fast issue resolution.",
    "Asset management for laptops, desktops, and mobile devices, including standard builds and lifecycle planning.",
    "Vendor coordination for internet, phone, and critical software so you have a single point of contact.",
  ];
  return (
    <section className="pt-32.5 relative overflow-hidden">
      <div className="hud-grid-bg"></div>
      <div className="hud-scanline"></div>
      <div className="container my-5 grid md:grid-cols-3 items-start gap-6">
        {/* Left Content */}
        <div className="md:col-span-2">
          {/* Badge */}
          <div className="flex border border-white/35 rounded-full w-fit px-3 py-2 gap-2 items-center">
            <div className="p-1 rounded-full bg-(--brand-color)">
              <BadgeCheck size={18} className="text-black" />
            </div>
            <p>Our Services</p>
          </div>

          {/* Title */}
          <div className="flex flex-col mt-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Managed IT
              <span className="text-(--brand-color)">Services</span>
            </h1>

            <p className="mt-3  max-w-2xl">
              Managed IT Services from Geekin give you a full IT department
              without the overhead. We monitor, maintain, and support your
              systems so your team can focus on serving customers instead of
              troubleshooting technology.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-1 mt-6">
            <p className="text-2xl font-bold">Key Features</p>

            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CircleCheckBig
                  size={18}
                  className="text-(--brand-color) mt-1"
                />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center h-full">
          <img
            src="/it-services.webp"
            className="rounded-2xl w-full max-w-md "
            alt="Network Infrastructure"
          />
        </div>
      </div>

      {/* <div className="container my-3 bg-white/5 border border-white/10 p-2 rounded-lg"></div> */}

      <Benefits />
    </section>
  );
};

export default ManagedITServices;
