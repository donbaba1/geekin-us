# Geekin US

Marketing site for Geekin's US brand (`geekin.us`) — a React + Vite
single-page app (the "Holographic Ops HUD" design, amber accent) plus a small
Express + Nodemailer API that sends the contact form over SMTP.

This is the USA-only counterpart of [geekin-ca](https://github.com/donbaba1/geekin-ca) —
same codebase, forked apart so each region can be deployed, edited, and
color-themed independently. There's no runtime region switch here; amber is
simply the only palette.

## Project layout

```
.
├── src/            React app (pages, sections, layout, HUD design system)
├── public/         Static assets (images, favicon, robots.txt, sitemap.xml)
├── server/         Contact-form API (Express + Nodemailer)
├── Dockerfile      Builds the frontend and serves it via nginx
├── nginx.conf      Static file serving + reverse-proxies /api/ to the API
└── docker-compose.yml   Runs the frontend and API together
```

## Prerequisites

- **Node.js 20.19+ or 22.12+** (required by Vite 8 — older Node versions will
  fail to build with a confusing native-binding error, not just a warning)
- **npm**
- **Docker + Docker Compose**, if deploying that way

## Local development

```bash
npm install
npm run dev
```

Runs the Vite dev server (default `http://localhost:5173`). The dev server
proxies `/api/*` to `http://localhost:4000` (see `vite.config.js`), so run the
API alongside it if you're testing the contact form — see below.

### Running the contact-form API locally

```bash
cd server
cp .env.example .env   # fill in real SMTP credentials
npm install
npm run dev             # listens on :4000
```

See `server/.env.example` for every variable it needs (SMTP host/port/user/
pass, the "from" address, and where submissions get emailed to). Without a
real SMTP account configured, the API will start but log an SMTP verification
failure and the contact form will error on submit — that's expected until you
add real credentials.

### Production build (static files only)

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally, for a final check
```

## Deploying with Docker (recommended)

The repo ships a `Dockerfile` (frontend, built and served via nginx) and a
`server/Dockerfile` (the API), wired together by `docker-compose.yml`.

```bash
cp server/.env.example server/.env    # fill in real SMTP credentials
docker compose up --build -d
```

This starts:
- `web` — nginx serving the built frontend on port 80, proxying `/api/*` to `api`
- `api` — the Node/Express contact-form service, internal-only (not exposed
  directly; nginx is the only thing that talks to it)

Point your domain's DNS at the host running this, and terminate TLS in front
of it (a reverse proxy like Caddy, Cloudflare, or nginx itself with certbot) —
the container only serves plain HTTP on port 80.

To rebuild after a code change: `docker compose up --build -d` again.

## Deploying on bare metal (no Docker)

You'll run two things: nginx serving static files, and the API as a
long-running process.

**1. Build the frontend:**
```bash
npm install
npm run build
```
Copy the contents of `dist/` to wherever nginx (or your web server of choice)
serves static files from, e.g. `/var/www/geekin-us`.

**2. Configure your web server** using `nginx.conf` as a reference — in
particular, keep the `try_files $uri $uri/ /index.html;` fallback (this is a
client-side-routed React app; without it, refreshing on `/about` or
`/services` will 404) and the `/api/` proxy block pointing at wherever you run
the API process (step 3).

**3. Run the API as a persistent service.** It's a plain Node process — use
whatever process manager your infrastructure already uses. With systemd, for
example:

```ini
# /etc/systemd/system/geekin-us-api.service
[Unit]
Description=Geekin US contact-form API
After=network.target

[Service]
WorkingDirectory=/opt/geekin-us/server
ExecStart=/usr/bin/node index.js
EnvironmentFile=/opt/geekin-us/server/.env
Restart=on-failure
User=www-data

[Install]
WantedBy=multi-user.target
```

```bash
cd server && npm install --omit=dev   # install once, on the target machine
cp .env.example .env                  # fill in real SMTP credentials
sudo systemctl enable --now geekin-us-api
```

(`pm2 start index.js --name geekin-us-api` works just as well if that's what
you'd rather use.)

**4. TLS.** Neither nginx.conf nor the Node API terminate HTTPS themselves —
put a TLS-terminating reverse proxy or load balancer in front (certbot +
nginx, Caddy, or your cloud provider's load balancer) for both the frontend
and wherever the API is reachable.

## Environment variables (API)

All in `server/.env` (see `server/.env.example` for the full list with
comments):

| Variable | Purpose |
|---|---|
| `PORT` | Port the API listens on (default 4000) |
| `CORS_ORIGIN` | Origin(s) allowed to POST to the API |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` / `SMTP_USER` / `SMTP_PASS` | Your SMTP provider's credentials |
| `SMTP_FROM` | The "from" address forms are sent as |
| `CONTACT_TO_EMAIL` | Where contact form submissions are delivered |

The contact form is rate-limited to 5 submissions per IP per 10 minutes
(in-memory — fine for a single-instance deployment, not durable across
restarts or multiple instances).
