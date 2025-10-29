generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  password  String
  company   Company?
  bookings  Booking[] // optional: bookings made by user
  createdAt DateTime @default(now())
}

model Company {
  id          Int       @id @default(autoincrement())
  name        String
  email       String
  description String?
  coverages   Coverage[]
  owner       User?     @relation(fields: [ownerId], references: [id])
  ownerId     Int?      @unique
  bookings    Booking[] // bookings for this company
  createdAt   DateTime  @default(now())
}

model Coverage {
  id         Int       @id @default(autoincrement())
  company    Company   @relation(fields: [companyId], references: [id])
  companyId  Int
  fromCity   String
  toCity     String
  // store weekdays as JSON array (0-6 => Sunday-Saturday)
  days       Json
  bookings   Booking[]
  createdAt  DateTime  @default(now())
}

model Booking {
  id               Int      @id @default(autoincrement())
  coverage         Coverage @relation(fields: [coverageId], references: [id])
  coverageId       Int
  company          Company  @relation(fields: [companyId], references: [id])
  companyId        Int
  user             User?    @relation(fields: [userId], references: [id])
  userId           Int?
  senderName       String
  senderEmail      String
  recipientName    String
  recipientAddress String
  weightKg         Float?
  pickupDate       DateTime?
  notes            String?
  status           String   @default("pending") // pending, confirmed, completed, canceled
  createdAt        DateTime @default(now())
}
