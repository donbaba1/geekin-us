import { ArrowDownToLine, ArrowUpRight, Sparkles } from "lucide-react";

import React from "react";

const GAUGE_R = 28;
const GAUGE_C = 2 * Math.PI * GAUGE_R;

const Gauge = ({ pct, color, value, label }) => (
  <div className="flex flex-col items-center gap-2">
    <svg viewBox="0 0 72 72" width="72" height="72">
      <circle className="hud-gauge-track" cx="36" cy="36" r={GAUGE_R} strokeWidth="6" />
      <circle
        className="hud-gauge-value"
        cx="36"
        cy="36"
        r={GAUGE_R}
        strokeWidth="6"
        stroke={color}
        strokeDasharray={`${(pct / 100) * GAUGE_C} ${GAUGE_C}`}
      />
      <text
        x="36"
        y="36"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="15"
        fontFamily="var(--font-mono)"
        fontWeight="600">
        {value}
      </text>
    </svg>
    <span className="text-[10px] uppercase tracking-wide text-gray-500 text-center leading-tight">
      {label}
    </span>
  </div>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      {/* Background photo, tinted to read as monitored infrastructure */}
      <div className="hud-photo absolute inset-0">
        <img src="/hero-img4.webp" alt="" />
      </div>
      {/* HUD grid + scanline */}
      <div className="hud-grid-bg"></div>
      <div className="hud-scanline"></div>

      {/* content */}
      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="flex w-fit items-center gap-2 px-5 py-2 border border-(--brand-color)/40 bg-(--brand-color)/8 rounded-full text-sm">
                <span className="hud-live-dot"></span>
                <Sparkles size={15} color="var(--brand-color)" />
                <span className="hud-label uppercase tracking-wider text-(--brand-color) text-xs">
                  Geekin Ops // Live Uplink
                </span>
              </span>
            </div>

            <div>
              <h1>
                See every threat.
                <br />
                <span
                  className="text-(--brand-color)"
                  style={{ textShadow: "0 0 24px rgba(56,224,255,0.5)" }}>
                  Before it sees you.
                </span>
              </h1>
              <p className="text-[18px] text-gray-300 max-w-xl">
                Full-spectrum visibility into every endpoint, patch, and packet —
                monitored around the clock by a Canada &amp; USA based team that
                never blinks.
              </p>
            </div>

            {/* CTA */}
            <div className="flex gap-4 flex-wrap">
              <button className="btn cta-brand-btn flex gap-2 items-center">
                Schedule a Consultation <ArrowUpRight size={18} />
              </button>
              <button className="btn flex gap-2 items-center">
                Download Checklist <ArrowDownToLine size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: system readout panel */}
          <div className="relative">
            <div className="hud-panel hud-corners rounded-sm">
              <span className="bl"></span>
              <span className="br"></span>
              <div className="flex items-center justify-between px-5 py-3 border-b border-(--brand-color)/20">
                <span className="hud-label uppercase text-[11px] tracking-wider text-white">
                  System Readout
                </span>
                <span className="flex items-center gap-2 text-[11px] hud-label uppercase text-(--brand-color)">
                  <span className="hud-live-dot"></span> Live
                </span>
              </div>
              {/* NOC-style network + security activity chart */}
              <div className="px-5 pt-4 pb-2 border-b border-(--brand-color)/10">
                <div className="flex items-center justify-between">
                  <span className="hud-label uppercase text-[10px] tracking-wider text-gray-500">
                    Live Activity — Last 60 Min
                  </span>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-wide">
                    <span className="flex items-center gap-1.5 text-(--brand-color)">
                      <span className="w-2 h-2 rounded-full inline-block bg-(--brand-color)"></span>
                      Network
                    </span>
                    <span className="flex items-center gap-1.5 text-(--chart-security)">
                      <span className="w-2 h-2 rounded-full inline-block bg-(--chart-security)"></span>
                      Threats
                    </span>
                  </div>
                </div>
                <svg
                  viewBox="0 0 400 90"
                  preserveAspectRatio="none"
                  className="w-full h-[74px] mt-2"
                  role="img"
                  aria-label="Live network throughput and threat-detection chart, steady with no anomalies">
                  <line x1="0" y1="22" x2="400" y2="22" stroke="white" strokeOpacity="0.06" />
                  <line x1="0" y1="45" x2="400" y2="45" stroke="white" strokeOpacity="0.06" />
                  <line x1="0" y1="68" x2="400" y2="68" stroke="white" strokeOpacity="0.06" />
                  <path
                    d="M0,60 L20,55 L40,58 L60,40 L80,50 L100,30 L120,45 L140,35 L160,52 L180,25 L200,48 L220,38 L240,55 L260,20 L280,42 L300,30 L320,50 L340,15 L360,40 L380,32 L400,45 L400,90 L0,90 Z"
                    fill="var(--brand-color)"
                    fillOpacity="0.08"
                    stroke="none"
                  />
                  <path
                    d="M0,60 L20,55 L40,58 L60,40 L80,50 L100,30 L120,45 L140,35 L160,52 L180,25 L200,48 L220,38 L240,55 L260,20 L280,42 L300,30 L320,50 L340,15 L360,40 L380,32 L400,45"
                    fill="none"
                    className="hud-edge live"
                  />
                  <path
                    d="M0,75 L30,72 L60,74 L90,68 L120,73 L150,65 L180,71 L210,62 L240,70 L270,60 L300,68 L330,58 L360,66 L400,63"
                    fill="none"
                    className="hud-edge security"
                  />
                  <circle cx="100" cy="30" r="3" fill="var(--brand-color)" className="hud-node" />
                  <circle
                    cx="260"
                    cy="20"
                    r="3"
                    fill="var(--brand-color)"
                    className="hud-node"
                    style={{ animationDelay: "0.6s" }}
                  />
                  <circle cx="210" cy="62" r="2.5" fill="var(--chart-security)" className="hud-node" />
                  <circle cx="340" cy="15" r="3.5" fill="var(--brand-warn)" />
                </svg>
              </div>

              {/* Gauge row — semantic colors, not just brand accent */}
              <div className="flex items-center justify-around px-5 py-4 border-b border-(--brand-color)/10">
                <Gauge pct={99.98} color="var(--chart-good)" value="99.98%" label="System Uptime" />
                <Gauge pct={100} color="var(--brand-color)" value="312/312" label="Endpoints Online" />
                <Gauge pct={78} color="var(--chart-security)" value="47" label="Threats Neutralized" />
              </div>

              <div className="px-5 py-2">
                {[
                  ["Avg. response time", "< 15 min"],
                  ["Coverage", "Canada / USA"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-3 border-b border-dashed border-white/10 last:border-none">
                    <span className="text-[13px] text-gray-400">{label}</span>
                    <span
                      className="text-[13px] text-(--brand-color)"
                      style={{ fontFamily: "var(--font-mono)" }}>
                      {value}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between py-3">
                  <span className="text-[13px] text-gray-400">
                    Perimeter status
                  </span>
                  <span
                    className="text-[13px] text-(--brand-warn)"
                    style={{ fontFamily: "var(--font-mono)" }}>
                    MONITORING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
