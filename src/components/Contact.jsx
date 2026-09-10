import { BadgeCheck, Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <section className="pt-32.5 px-4 relative overflow-hidden">
      <div className="hud-grid-bg"></div>
      <div className="hud-scanline"></div>
      <div className="container my-5 grid md:grid-cols-3 items-around">
        <div className="md:col-span-2">
          <div className="flex border border-white/35 rounded-full w-fit px-3 py-2 gap-2 items-center">
            <div className="p-1 rounded-full bg-(--brand-color)">
              <BadgeCheck size={18} className="text-black" />
            </div>
            <p>Contact</p>
          </div>
          <div className="flex flex-col ">
            <h1>Contact Details</h1>
            <p>
              Ready to talk IT? Reach out to the Geekin team and we'll get back to you promptly. Whether you have a quick question or want to discuss a broader IT initiative, we're here to help.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <img src="/contact-hero.png" className="text-center" alt="" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8 pb-12">
          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
            <h2 className="text-xl font-semibold mb-6">Send a message</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-yellow-400 outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-yellow-400 outline-none"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-yellow-400 outline-none"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-yellow-400 outline-none"></textarea>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-300 transition disabled:opacity-60 disabled:cursor-not-allowed">
                {status === "sending" ? (
                  <>
                    Sending <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

              {status === "sent" && (
                <p className="text-sm text-(--brand-color)">
                  Thanks — your message is in. We'll get back to you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-(--brand-warn)">{error}</p>
              )}
            </form>
          </div>

          {/* Contact Info + Image */}
          <div className="flex flex-col gap-6">
            {/* Info Cards */}
            <div className="grid gap-4">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                <Phone className="text-yellow-400" />
                <a href="tel:+12266009100">+1 (226) 600-9100</a>
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                <Mail className="text-yellow-400" />
                <a href="mailto:info@geekin.ca">info@geekin.ca</a>
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                <MapPin className="text-yellow-400" />
                <span>Gristmill St. Waterloo Ontario Canada</span>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group h-full">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="Contact"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur p-4 rounded-xl text-sm text-gray-200">
                We respond quickly to all inquiries and support requests.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
