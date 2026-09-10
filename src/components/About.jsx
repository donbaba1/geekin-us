import {
  BadgeCheck,
  Users,
  Settings,
  LineChart,
  Target,
  Server,
  ShieldCheck,
  Trophy,
  ChartLine,
} from "lucide-react";
import { PiUsersThreeFill } from "react-icons/pi";

import React from "react";

const About = () => {
  return (
    <section className="pt-32.5 relative overflow-hidden">
      <div className="hud-grid-bg"></div>
      <div className="hud-scanline"></div>
      <div className="container my-5">
        <div className="flex border border-white/35 rounded-full w-fit px-3 py-2 gap-2 items-center">
          <div className="p-1 rounded-full bg-(--brand-color)">
            <BadgeCheck size={18} className="text-black" />
          </div>
          <p>About Geekin</p>
        </div>
        <div className="flex flex-col ">
          <h1>Who we are</h1>
          <p>
            Geekin is a managed IT services provider dedicated to giving small and mid-sized businesses access to enterprise-grade technology, security, and support — without the enterprise-grade complexity. We combine experienced engineers, proven processes, and a business-first approach to keep your systems available, secure, and ready for what's next.
          </p>
        </div>
      </div>

      {/* section2 */}
      <section className=" py-20 px-6 md:px-16">
        <div className="container">
          {/* Top Heading */}

          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side */}
            <div className="flex flex-col gap-6">
              {/* How we work */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
                <h1 className="text-white text-4xl leading-snug font-light">
                  How We Work
                </h1>

                <p className="text-sm">
                  We take the time to understand your business before recommending any technology. That means learning how your team operates, where the friction is, and what success looks like for your organization — then building an IT environment that supports those goals.
                </p>

                <div className="space-y-5 mt-3">
                  <div className="flex gap-4">
                    <div className="bg-yellow-400/10 w-22 h-12 flex items-center justify-center rounded-lg">
                      <Users className="text-yellow-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Business Outcomes First</h4>
                      <p className="text-sm">
                        We start by learning how your business operates, where the pain points are, and what results matter most — then we align technology to support those goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-yellow-400/10 w-16 h-12 flex items-center justify-center rounded-lg">
                      <Settings className="text-yellow-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Standardized, But Never Cookie-Cutter
                      </h4>
                      <p className="text-sm">
                        We use proven tools and processes, then tune them to
                        your industry, size, and compliance needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-yellow-400/10 w-18 h-12 flex items-center justify-center rounded-lg">
                      <LineChart className="text-yellow-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">A True Proactive Partnership</h4>
                      <p className="text-sm">
                        Regular business reviews, forward-looking roadmaps, and transparent reporting keep your leadership informed and your IT strategy aligned with where you're headed.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm mt-3">
                    Whether you run a clinic, a law firm, a retail operation, or a distributed team, you get a partner who treats your IT environment with the same care we'd give our own. We measure our success by your uptime, your staff's experience, and the strength of your security posture.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-linear-to-br from-yellow-400/30 to-black border border-yellow-400/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="text-yellow-400" />
                  <h2 className="text-xl font-semibold">Our Mission</h2>
                </div>

                <p className="text-gray-300 text-sm">
                  Our mission is to make technology a genuine advantage for every client we serve. That means building IT environments that are secure by design, easy for your team to use, and flexible enough to grow with your business.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src="/about-img.webp"
                alt="About"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur rounded-xl p-4 flex gap-3">
                <Users className="text-yellow-400" size={36} />
                <p className="text-sm text-gray-200">
                  Geekin serves organizations across North America, with a strong focus on US and Canadian clients who need dependable, responsive IT support from a team that understands local regulations, compliance requirements, and business expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <PiUsersThreeFill className="mx-auto text-yellow-400 mb-3 text-3xl" />

              <h3 className="text-2xl font-bold">250+</h3>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Server className="mx-auto text-yellow-400 mb-3" />
              <h3 className="text-2xl font-bold">99.9%</h3>
              <p className="text-gray-400 text-sm">System Uptime</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <ShieldCheck className="mx-auto text-yellow-400 mb-3" />
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-gray-400 text-sm">Support</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Trophy className="mx-auto text-yellow-400 mb-3" />
              <h3 className="text-2xl font-bold">10+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
