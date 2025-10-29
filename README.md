# Post‑Ticket — deliverz

A starter full‑stack web app (Next.js + Prisma + Tailwind) that lets delivery companies register routes and customers book them like flight tickets.

Run locally:
1. npm install
2. npx prisma migrate dev --name init
3. npm run prisma:seed
4. npm run dev

Environment variables:
NEXTAUTH_SECRET, NEXTAUTH_URL, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_FROM
