import { BadgeCheck, CircleCheckBig } from "lucide-react";
import React from "react";
import Benefits from "./Benefits";

const BackupDisasterRecoveryAndBusinessContinuity = () => {
  const features = [
    "Automated, monitored backups for servers, workloads, and key cloud or SaaS data where supported.",
    "Secure off‑site and cloud backups with defined retention policies and protection against tampering.",
    "Disaster recovery plans with documented recovery time and recovery point objectives (RTO/RPO) so expectations are clear.",
    "Regular testing of restores and failover procedures to make sure recovery works when you need it.",
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
              Backup,{" "}
              <span className="text-(--brand-color)">
                Disaster Recovery & Business Continuity
              </span>
            </h1>

            <p className="mt-3  max-w-2xl">
              Data loss and extended downtime can be devastating. Our backup and
              disaster recovery solutions are designed to keep your critical
              systems and information available, even in the face of hardware
              failures, ransomware, or human error.
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
            src="/services-backup.webp"
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

export default BackupDisasterRecoveryAndBusinessContinuity;
