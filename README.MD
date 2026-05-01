# Dokumentasi Project RESTful API Node.js

## 1. Tentang Project

Project ini adalah implementasi RESTful API untuk sistem manajemen pengguna, kontak, dan alamat. API ini dibangun menggunakan Node.js dengan Express sebagai framework web dan Prisma sebagai ORM untuk interaksi dengan database. Saya mengikut intruksi atau tutorial dari chanel Youtube Programmer Zaman Now berikut link video tutorial https://youtu.be/6v8JXecArqE?si=1kaebn3TPWnwm42t

### Fitur Utama

- **Manajemen User**: Registrasi, login, logout, dan update profil
- **Manajemen Kontak**: CRUD (Create, Read, Update, Delete) kontak
- **Manajemen Alamat**: CRUD alamat yang terkait dengan kontak
- **Authentication**: Menggunakan token UUID (bukan JWT)
- **Logging**: Pencatatan aktivitas aplikasi menggunakan Winston

---

## 2. Teknologi yang Digunakan

| Kategori     | Teknologi               |
| ------------ | ----------------------- |
| Runtime      | Node.js (ES Modules)    |
| Framework    | Express.js              |
| Database ORM | Prisma                  |
| Database     | PostgreSQL (via Prisma) |
| Validation   | Joi                     |
| Logging      | Winston                 |
| Testing      | Jest                    |
| Build Tool   | Babel                   |

---

## 3. Struktur Project

```
belajar-nodejs-restful-api/
├── babel.config.json          # Konfigurasi Babel
├── package.json                # Konfigurasi npm
├── prisma.config.ts           # Konfigurasi Prisma
├── tsconfig.json              # Konfigurasi 
├── dokumentasi.MD              # File dokumentasi ini
├── docs/                       # Dokumentasi API
│   ├── address.md
│   ├── contact.md
│   └── user.md
├── prisma/                     # Konfigurasi Prisma
│   ├── schema.prisma           # Schema database
│   └── migrations/             # Migration files
├── src/                        # Source code
│   ├── main.js                 # Entry point
│   ├── application/            # Konfigurasi aplikasi
│   ├── controller/             # Controller layer
│   ├── error/                  # Error handling
│   ├── middleware/             # Middleware
│   ├── route/                  # Route definitions
│   ├── service/                # Business logic
│   └── validation/             # Validation schemas
└── test/                       # Unit tests
```

---

## 4. Penjelasan Folder dan File

### 4.1 Folder `src/application/`

Berisi konfigurasi utama aplikasi.

#### `database.js`

- Mengkonfigurasi Prisma Client
- Menangani event database (error, warn, info, query)
- Export `prismaClient` untuk digunakan di seluruh aplikasi

#### `logging.js`

- Mengkonfigurasi Winston logger
- Mencatat log ke console dalam format JSON
- Dapat dikonfigurasi untuk mencatat ke file

#### `web.js`

- Mengkonfigurasi Express.js
- Menambahkan middleware express.json()
- Mendaftarkan publicRouter dan userRouter
- Menambahkan errorMiddleware

---

### 4.2 Folder `src/controller/`

Berisi controller yang menangani request dari client.

#### `userController.js`

- `register`: Mendaftarkan user baru
- `login`: Autentikasi user dan menghasilkan token
- `get`: Mendapatkan data user saat ini
- `update`: Mengupdate data user
- `logout`: Menghapus token user

#### `contactController.js`

- `create`: Membuat kontak baru
- `get`: Mendapatkan detail kontak
- `update`: Mengupdate kontak
- `remove`: Menghapus kontak
- `search`: Mencari kontak

#### `addressController.js`

- `create`: Membuat alamat baru
- `get`: Mendapatkan detail alamat
- `update`: Mengupdate alamat
- `remove`: Menghapus alamat
- `list`: Mendapatkan semua alamat kontak

---

### 4.3 Folder `src/service/`

Berisi logika bisnis aplikasi.

#### `userService.js`

- `register`: Validasi input, hash password, simpan ke database
- `login`: Validasi credentials, generate UUID token, simpan token
- `get`: Ambil data user berdasarkan username
- `update`: Update data user dengan validasi
- `logout`: Hapus token dari database

#### `contactService.js`

- `create`: Membuat kontak baru untuk user
- `get`: Ambil kontak berdasarkan ID
- `update`: Update kontak
- `remove`: Hapus kontak
- `search`: Cari kontak dengan filter

#### `addressService.js`

- `create`: Membuat alamat baru
- `get`: Ambil alamat berdasarkan ID
- `update`: Update alamat
- `remove`: Hapus alamat
- `list`: Ambil semua alamat untuk kontak tertentu

---

### 4.4 Folder `src/route/`

Berisi definisi route API.

#### `publicApi.js`

- Route yang tidak memerlukan autentikasi
- `POST /api/users` - Registrasi user
- `POST /api/users/login` - Login user

#### `api.js`

- Route yang memerlukan autentikasi (menggunakan authMiddleware)
- **User API**: `/api/users/current`, `/api/users/current` (PATCH), `/api/users/logout`
- **Contact API**: `/api/contacts` (CRUD)
- **Address API**: `/api/contacts/:contactId/addresses` (CRUD)

---

### 4.5 Folder `src/middleware/`

Berisi middleware Express.

#### `authMiddleware.js`

- Membaca token dari header `Authorization`
- Mencari user berdasarkan token di database
- Menambahkan data user ke `req.user` jika token valid
- Mengembalikan 401 jika token tidak valid

#### `errorMiddleware.js`

- Menangani error dari seluruh aplikasi
- Mengembalikan response JSON dengan status code yang sesuai
- Menangani ResponseError secara khusus

---

### 4.6 Folder `src/validation/`

Berisi schema validasi menggunakan Joi.

#### `validation.js`

- Fungsi `validate` untuk validasi input
- Menggunakan abortEarly: false untuk menampilkan semua error
- Melempar ResponseError jika validasi gagal

#### `userValidation.js`

- Schema untuk registrasi user
- Schema untuk login user
- Schema untuk update user

#### `contactValidation.js`

- Schema untuk membuat kontak
- Schema untuk update kontak

#### `addressValidation.js`

- Schema untuk membuat alamat
- Schema untuk update alamat

---

### 4.7 Folder `src/error/`

Berisi handling error khusus.

#### `responseError.js`

- Class `ResponseError` yang extends Error
- Menerima status code dan message
- Digunakan untuk melempar error terstruktur

---

### 4.8 Folder `prisma/`

Berisi konfigurasi database.

#### `schema.prisma`

- Mendefinisikan model: User, Contact, Address
- Menentukan relasi antar model
- Konfigurasi database connection

#### `migrations/`

- Berisi file migration untuk membuat tabel
- `20260420083511_create_table_users`
- `20260420121546_create_table_contacts`
- `20260420122523_create_table_address`

---

### 4.9 Folder `test/`

Berisi unit test menggunakan Jest.

#### `user.test.js`

- Test untuk fungsi user (register, login, dll)

#### `contact.test.js`

- Test untuk fungsi contact

#### `address.test.js`

- Test untuk fungsi address

#### `test-util.js`

- Utility functions untuk testing

---

## 5. Aliran Data (Data Flow)

### 5.1 Flow Umum

```
Client Request
      │
      ▼
┌─────────────────┐
│   Route (api.js) │ atau (publicApi.js)
└────────┬────────┘
         │ (jika protected, cek authMiddleware)
         ▼
┌─────────────────────┐
│  Controller         │
│  (xxxController.js)│
└────────┬────────────┘
         │
         ▼
┌─────────────────┐
│  Validation     │
│ (xxxValidation)│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Service        │
│  (xxxService.js)│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Prisma Client  │
│  (database.js)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  PostgreSQL     │
│  Database       │
└─────────────────┘
```

### 5.2 Flow Authentication

```
POST /api/users/login
      │
      ▼
publicApi.js (route)
      │
      ▼
userController.login
      │
      ▼
userValidation.login (validation)
      │
      ▼
userService.login
      │
      ├── Validasi username & password
      ├── Generate UUID token
      ├── Simpan token ke database
      │
      ▼
Response: { token: "uuid-string" }
```

### 5.3 Flow Protected Request

```
GET /api/users/current
      │
      ▼
api.js (route dengan authMiddleware)
      │
      ▼
authMiddleware
      ├── Ambil header Authorization
      ├── Cari user dengan token di database
      ├── Set req.user jika valid
      │
      ▼
userController.get
      │
      ▼
userService.get
      │
      ▼
Response: { data: userData }
```

---

## 6. Cara Penggunaan API

### 6.1 Registrasi User

```http
POST /api/users
Content-Type: application/json

{
  "username": "johndoe",
  "password": "secret123",
  "name": "John Doe"
}
```

### 6.2 Login

```http
POST /api/users/login
Content-Type: application/json

{
  "username": "johndoe",
  "password": "secret123"
}
```

Response:

```json
{
  "data": {
    "token": "550e8400-e29b-41d4-a716-446655440000"
  }
}
```

### 6.3 Menggunakan Token

Untuk route yang memerlukan autentikasi, tambahkan header:

```http
Authorization: 550e8400-e29b-41d4-a716-446655440000
```

**Catatan**: Token diletakkan langsung di header `Authorization`, bukan menggunakan format Bearer.

---

## 7. Endpoint Lengkap

### Public Endpoints

| Method | Endpoint         | Deskripsi            |
| ------ | ---------------- | -------------------- |
| POST   | /api/users       | Registrasi user baru |
| POST   | /api/users/login | Login user           |

### Protected Endpoints (User)

| Method | Endpoint           | Deskripsi        |
| ------ | ------------------ | ---------------- |
| GET    | /api/users/current | Get data user    |
| PATCH  | /api/users/current | Update data user |
| DELETE | /api/users/logout  | Logout user      |

### Protected Endpoints (Contact)

| Method | Endpoint                 | Deskripsi        |
| ------ | ------------------------ | ---------------- |
| POST   | /api/contacts            | Buat kontak baru |
| GET    | /api/contacts/:contactId | Get kontak       |
| PUT    | /api/contacts/:contactId | Update kontak    |
| DELETE | /api/contacts/:contactId | Hapus kontak     |
| GET    | /api/contacts            | Cari kontak      |

### Protected Endpoints (Address)

| Method | Endpoint                                      | Deskripsi         |
| ------ | --------------------------------------------- | ----------------- |
| POST   | /api/contacts/:contactId/addresses            | Buat alamat       |
| GET    | /api/contacts/:contactId/addresses/:addressId | Get alamat        |
| PUT    | /api/contacts/:contactId/addresses/:addressId | Update alamat     |
| DELETE | /api/contacts/:contactId/addresses/:addressId | Hapus alamat      |
| GET    | /api/contacts/:contactId/addresses            | List semua alamat |

---

## 8. Menjalankan Project

### Install Dependencies

```bash
npm install
```

### Menjalankan Migration

```bash
npx prisma migrate dev
```

### Menjalankan Server

```bash
node src/main.js
```

### Menjalankan Test

```bash
npm test
```

---

## 9. Catatan Penting

1. **Token**: Project ini menggunakan UUID untuk token authentication, bukan JWT
2. **Header**: Untuk mengakses protected endpoint, gunakan header `Authorization` dengan nilai token langsung (bukan format Bearer)
3. **Database**: Pastikan PostgreSQL sudah berjalan dan terkoneksi dengan benar
4. **Environment**: Konfigurasi database ada di file `prisma/schema.prisma`

---

_Document dibuat pada: Mei 2026_
_Author: Ahmad Haris_
