import { DollarSign, Clock, Users } from "lucide-react";
import React from "react";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Predictable Costs",
      desc: "Flat-rate pricing and clear scopes eliminate surprises.",
    },
    {
      icon: Clock,
      title: "Reduced Downtime",
      desc: "Proactive management keeps your business running smoothly.",
    },
    {
      icon: Users,
      title: "Single Accountable Team",
      desc: "One team accountable for your entire IT environment.",
    },
  ];

  return (
    <section className="w-full px-6 py-6">
      <div className="max-w-6xl mx-auto">
        <div className="hud-panel hud-corners rounded-sm p-6">
          <span className="bl"></span>
          <span className="br"></span>
          <div className="grid md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-(--brand-color)/15">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 px-2 md:px-6 py-4">
                  {/* Icon */}
                  <div className="p-5 flex items-center justify-center rounded-sm border border-(--brand-color)/40 bg-(--brand-color)/10">
                    <Icon className="text-(--brand-color)" size={32} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-white font-semibold text-sm md:text-base">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
