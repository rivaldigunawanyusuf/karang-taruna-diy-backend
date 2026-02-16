# Karang Taruna DIY — Backend API

> **Tugas Akhir**
> **Nama:** Rivaldi Gunawan Yusuf
> **NIM:** 2802520053
> **Mata Kuliah:** Specialized Platform Development

---

## Tentang Project

Backend REST API untuk platform tutorial Karang Taruna DIY. Menyediakan endpoint autentikasi pengguna dan manajemen konten tutorial berbasis Express.js dan MongoDB.

## Akses

| Environment | URL |
|---|---|
| **Production (Live)** | https://karang-taruna-diy-backend-056u.onrender.com/api |
| Development | http://localhost:5000/api |

---

## Tech Stack

| Teknologi | Versi | Fungsi |
|---|---|---|
| Node.js | ≥18 | Runtime |
| Express.js | 4.21.2 | Web framework |
| MongoDB + Mongoose | 8.9.5 | Database & ODM |
| JWT (jsonwebtoken) | 9.0.2 | Autentikasi token |
| bcryptjs | 2.4.3 | Hash password |
| CORS | enabled | Cross-origin requests |

---

## Struktur Project

```
backend/
├── server.js           # Entry point — Express app & DB connection
├── seed.js             # Script seeder data tutorial
├── .env.example        # Template environment variables
├── routes/
│   ├── auth.js         # Endpoint register & login
│   └── tutorials.js    # Endpoint daftar & detail tutorial
├── models/
│   ├── User.js         # Schema pengguna
│   └── Tutorial.js     # Schema tutorial
└── middleware/
    └── auth.js         # Verifikasi JWT Bearer token
```

---

## API Endpoints

### Auth

| Method | Endpoint | Body | Deskripsi |
|---|---|---|---|
| `POST` | `/api/auth/register` | `{ name, email, password }` | Daftar akun baru |
| `POST` | `/api/auth/login` | `{ email, password }` | Login, returns JWT token |

**Response login/register:**
```json
{
  "message": "Login berhasil",
  "token": "<jwt_token>",
  "user": {
    "id": "...",
    "name": "Rivaldi",
    "email": "rivaldi@example.com"
  }
}
```

### Tutorials

> Semua endpoint tutorial membutuhkan header `Authorization: Bearer <token>`

| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/tutorials` | Ambil semua tutorial (terbaru dulu) |
| `GET` | `/api/tutorials/:id` | Ambil detail satu tutorial |

**Response tutorial:**
```json
{
  "_id": "...",
  "title": "Membuat Kerajinan Tangan",
  "description": "...",
  "content": "...",
  "type": "video",
  "videoUrl": "https://...",
  "imageUrl": "https://...",
  "category": "Kerajinan",
  "createdAt": "2026-01-01T00:00:00.000Z"
}
```

---

## Setup Lokal

### 1. Clone & Install

```bash
git clone <repo-url>
cd backend
npm install
```

### 2. Konfigurasi Environment

```bash
cp .env.example .env
```

Isi file `.env`:
```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/karangtaruna
JWT_SECRET=karangtaruna_secret_jwt_2026
PORT=5000
```

### 3. Jalankan Server

```bash
# Development (dengan nodemon)
npm run dev

# Production
npm start
```

### 4. Seed Data (Opsional)

```bash
node seed.js
```

---

## Model Data

### User
```
name       String  (required)
email      String  (required, unique)
password   String  (hashed with bcrypt, min 6 karakter)
createdAt  Date
updatedAt  Date
```

### Tutorial
```
title       String  (required)
description String  (required)
content     String
type        String  ("video" | "text")
videoUrl    String
imageUrl    String
category    String
createdAt   Date
updatedAt   Date
```

---

## Deployment

Backend di-deploy ke **Render** dengan konfigurasi:
- Build Command: `npm install`
- Start Command: `node server.js`
- Environment: Node.js
- Auto-deploy dari branch `main`
