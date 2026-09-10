import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const PORT = process.env.PORT || 4000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const SMTP_FROM = process.env.SMTP_FROM;

const app = express();
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json({ limit: "20kb" }));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587/25 (STARTTLS)
  auth: process.env.SMTP_USER
    ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    : undefined,
});

transporter.verify().then(
  () => console.log("[smtp] connection verified, ready to send"),
  (err) => console.error("[smtp] connection failed — forms will not send until fixed:", err.message)
);

// Very small in-memory rate limiter: N submissions per IP per window.
// Fine for a single contact form on a low-traffic site; swap for a real
// store (Redis) if this ever needs to survive multiple server instances.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = (hits.get(ip) || []).filter((t) => t > windowStart);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post("/api/contact", async (req, res) => {
  if (isRateLimited(req.ip)) {
    return res.status(429).json({ ok: false, error: "Too many requests. Please try again later." });
  }

  const { name, email, phone, message } = req.body || {};

  if (typeof name !== "string" || name.trim().length < 1 || name.length > 200) {
    return res.status(400).json({ ok: false, error: "Please enter your name." });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 200) {
    return res.status(400).json({ ok: false, error: "Please enter a valid email address." });
  }
  if (typeof message !== "string" || message.trim().length < 1 || message.length > 5000) {
    return res.status(400).json({ ok: false, error: "Please enter a message." });
  }
  if (phone !== undefined && (typeof phone !== "string" || phone.length > 40)) {
    return res.status(400).json({ ok: false, error: "Please enter a valid phone number." });
  }

  try {
    await transporter.sendMail({
      from: SMTP_FROM,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err.message);
    res.status(500).json({ ok: false, error: "Couldn't send your message right now. Please try again shortly." });
  }
});

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`[api] listening on :${PORT}`));
