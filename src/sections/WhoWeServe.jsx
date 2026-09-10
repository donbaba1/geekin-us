import {
  BadgeDollarSign,
  HeartPlus,
  House,
  Rocket,
  Scale,
  Truck,
} from "lucide-react";
import React from "react";

const industries = [
  {
    icon: HeartPlus,
    img: "/industry-medical.webp",
    tag: "SEC-01",
    title: "Medical and healthcare practices",
  },
  {
    icon: Scale,
    img: "/industry-law.webp",
    tag: "SEC-02",
    title: "Professional services (law, accounting, consulting)",
  },
  {
    icon: BadgeDollarSign,
    img: "/industry-retial.webp",
    tag: "SEC-03",
    title: "Retail and hospitality",
  },
  {
    icon: House,
    img: "/industriy-realestate.webp",
    tag: "SEC-04",
    title: "Real estate and property management",
  },
  {
    icon: Truck,
    img: "/industry-manufacture.webp",
    tag: "SEC-05",
    title: "Small manufacturers and logistics firms",
  },
  {
    icon: Rocket,
    img: "/industry-startup.webp",
    tag: "SEC-06",
    title: "Startups and distributed teams",
  },
];

const WhoWeServe = () => {
  return (
    <section className="relative overflow-hidden py-16 bg-(--card-gray)">
      <div className="container mx-auto">
        <p className="hud-label uppercase text-(--brand-color) text-xs tracking-widest text-center">
          // Coverage Map
        </p>
        <h2 className="text-center">
          Who We <span className="text-(--brand-color)">Serve</span>
        </h2>
        <h4 className="text-center text-[18px]">
          Geekin is built for organizations that rely on technology but don’t
          want to build a large internal IT department.
        </h4>
        <div className="grid md:grid-cols-3 mt-8 gap-4">
          {industries.map(({ icon: Icon, img, tag, title }) => (
            <div
              key={tag}
              className="relative hud-panel rounded-sm overflow-hidden hover:border-(--brand-color)/60">
              <div className="hud-photo h-32">
                <img src={img} alt="" />
              </div>
              <span className="absolute top-3 right-4 hud-label text-[10px] tracking-widest text-(--brand-color)/70 z-10">
                {tag}
              </span>
              <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-black border border-(--brand-color)/30 p-2.5 rounded-sm z-10">
                <Icon className="text-(--brand-color)" size={20} />
              </div>
              <h6 className="px-4 pt-6 pb-4">{title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
