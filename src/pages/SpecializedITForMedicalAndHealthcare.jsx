import { BadgeCheck, CircleCheckBig } from "lucide-react";
import React from "react";
import Benefits from "./Benefits";

const SpecializedITForMedicalAndHealthcare = () => {
  const features = [
    "Clinical‑grade network and Wi‑Fi design for exam rooms, diagnostic equipment, telehealth, and high‑availability access to EHR/EMR systems.",
    "Support and vendor coordination for EHR/EMR, practice management, imaging, and billing platforms so clinicians can focus on care, not tickets.",
    "Security controls and documentation that align with healthcare privacy and security expectations, including encryption, access control, audit logs, and incident response processes.",
    "Secure remote access for physicians and administrative staff, designed to protect electronic patient information.",
    "Ongoing staff security awareness training tailored to PHI handling, phishing risks, and real‑world healthcare threats.",
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
              Specialized IT for{" "}
              <span className="text-(--brand-color)">Medical & Healthcare</span>
            </h1>

            <p className="mt-3  max-w-2xl">
              Medical practices and healthcare organizations face unique
              operational and regulatory pressures. Geekin provides specialized
              IT services that keep clinical systems available, support staff
              productivity, and protect sensitive patient information.
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
            src="/services-medical.webp"
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

export default SpecializedITForMedicalAndHealthcare;
