import {
  ArrowUpRight,
  BookLock,
  BriefcaseBusiness,
  UserStar,
} from "lucide-react";
import { RiUserCommunityLine } from "react-icons/ri";

import React from "react";

const reasons = [
  {
    icon: BriefcaseBusiness,
    tag: "LOG-01",
    title: "Multi-Industry Experience",
    desc: "From healthcare and legal to retail and real estate, we've seen the IT challenges your industry faces — and we know exactly how to solve them. Every solution we deliver is tailored to your workflows, your compliance requirements, and your risk profile.",
    span: true,
  },
  {
    icon: UserStar,
    tag: "LOG-02",
    title: "Proactive, Not Break-Fix",
    desc: "We don't wait for things to break. Around-the-clock monitoring, automated patching, and scheduled maintenance mean most issues are resolved before they ever affect your team or your customers.",
  },
  {
    icon: BookLock,
    tag: "LOG-03",
    title: "Security Built In",
    desc: "Cybersecurity isn't a product we upsell — it's embedded in every service we deliver. From endpoint protection to compliance readiness, your security posture is always part of the conversation.",
  },
  {
    icon: RiUserCommunityLine,
    tag: "LOG-04",
    title: "Clear, Honest Communication",
    desc: "No jargon. No finger-pointing. No surprises. You get plain-language updates, realistic timelines, and full visibility into your IT roadmap — so leadership always knows where things stand.",
    span: true,
  },
];

const WhyGeekin = () => {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* left Column */}
          <div>
            <p className="hud-label uppercase text-(--brand-color) text-xs tracking-widest">
              // Access Log
            </p>
            <h2>
              Why Businesses Choose
              <span className="text-(--brand-color)"> Geekin</span>
            </h2>
            <h5>
              We design and manage IT environments that help your team move faster, stay secure, and grow with confidence.
            </h5>
            <button className="btn cta-brand-btn flex gap-2 items-center mt-6">
              Schedule a Consultation <ArrowUpRight />
            </button>
          </div>

          {/* right Column */}
          <div className="hud-panel rounded-sm p-4">
            <div className="grid md:grid-cols-2 gap-4">
              {reasons.map(({ icon: Icon, tag, title, desc, span }) => (
                <div
                  key={tag}
                  className={`relative flex flex-col gap-2 bg-(--card-gray) border border-(--brand-color)/15 p-4 rounded-sm hover:border-(--brand-color)/50 ${
                    span ? "md:col-span-2" : ""
                  }`}>
                  <span className="absolute top-3 right-4 hud-label text-[10px] tracking-widest text-(--brand-color)/50">
                    {tag}
                  </span>
                  <div className="bg-black/60 border border-(--brand-color)/20 p-3 w-fit rounded-sm">
                    <Icon className="text-(--brand-color) w-5 h-5" />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGeekin;
