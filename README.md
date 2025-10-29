```markdown
# Post‑Ticket — country-to-country delivery booking (starter)

A starter full‑stack web app that lets delivery companies register routes (which cities they cover and which days per week) and lets customers search and "book" delivery services in the same UX pattern as buying a plane ticket.

Tech stack
- Next.js (TypeScript) for frontend + serverless API routes
- Tailwind CSS for quick UI styled like a flight-booking form
- Prisma + SQLite for simple local data store (easy to replace with Postgres)
- Simple booking flow stub (no payment)

What this repo contains
- Public pages:
  - / (search page: "From → To" route search)
  - /register (company registration page to declare coverages)
- API:
  - GET /api/companies?from=City&to=City — search companies covering that route
  - POST /api/companies — register company + coverages

Get started (local)
1. Install
   - Node.js 18+
   - npm / pnpm / yarn

2. Clone and install dependencies
   - npm install

3. Setup Prisma and DB
   - npx prisma migrate dev --name init
   - npm run prisma:seed

4. Run dev server
   - npm run dev
   - Open http://localhost:3000

How the data model works (Prisma)
- Company: name, contact email, description
- Coverage: fromCity, toCity, days JSON (array of 0–6 representing weekdays, 0=Sunday)

API examples
- Register:
  POST /api/companies
  {
    "name":"QuickShip Ltd",
    "email":"ops@quickship.com",
    "description":"Fast weekly routes",
    "coverages":[
      {"fromCity":"London","toCity":"Tirana","days":[1,3,5]},
      {"fromCity":"London","toCity":"Pristina","days":[2,4]}
    ]
  }

- Search:
  GET /api/companies?from=London&to=Tirana

Notes & next steps
- Add authentication (e.g., NextAuth) for company accounts and bookings.
- Add bookings table and booking flow (with confirmation emails / payments).
- Add city/country validation or integrate an autocomplete (IATA-like) for better UX.
- Replace SQLite with Postgres for production and add migrations/seeding strategy.
```
