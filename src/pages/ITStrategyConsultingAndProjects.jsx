import { BadgeCheck, CircleCheckBig } from "lucide-react";
import React from "react";
import Benefits from "./Benefits";

const ITStrategyConsultingAndProjects = () => {
  const features = [
    "IT roadmaps aligned with growth plans, risk appetite, and budget, updated regularly as your situation changes.",
    "Architecture and design for complex environments, including multi‑site, hybrid cloud, and security‑sensitive workloads.",
    "Project planning and delivery for infrastructure refreshes, office moves, application rollouts, and mergers or consolidations.",
    "Cost optimization and license management to eliminate waste and improve return on your IT investments.",
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
              IT Strategy, Consulting &{" "}
              <span className="text-(--brand-color)">Projects</span>
            </h1>

            <p className="mt-3  max-w-2xl">
              Technology should follow your business strategy—not the other way
              around. Geekin provides advisory and project services that help
              leadership make confident decisions and execute complex
              initiatives smoothly.
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
        <div className="flex items-center justify-center h-full ">
          <img
            src="/services-it-managed.webp"
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

export default ITStrategyConsultingAndProjects;
