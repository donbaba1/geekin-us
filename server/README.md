# Geekin contact-form API

A small Express service that sends the site's contact form via SMTP
(`nodemailer`). The frontend is a static SPA and can't send SMTP directly, so
this runs alongside it.

## Local development

```bash
cd server
cp .env.example .env   # fill in real SMTP credentials
npm install
npm run dev             # listens on :4000
```

With the API running, `npm run dev` in the project root (Vite) proxies
`/api/*` to `http://localhost:4000` automatically — see `vite.config.js`.

## Production

`docker-compose.yml` in the project root builds and runs this alongside the
existing nginx container; `nginx.conf` proxies `/api/` to it. Copy
`server/.env.example` to `server/.env` with real values before running
`docker compose up --build`.

## Endpoints

- `POST /api/contact` — body `{ name, email, phone?, message }`, returns
  `{ ok: true }` or `{ ok: false, error }`.
- `GET /api/health` — liveness check.

Submissions are rate-limited per IP (5 per 10 minutes, in-memory) as basic
spam protection.
