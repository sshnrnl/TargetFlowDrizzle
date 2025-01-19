# 🌟 Drizzle ORM + MySQL Integration

Drizzle ORM is a lightweight, type-safe SQL ORM designed for modern JavaScript and TypeScript projects. This guide will help you integrate Drizzle with MySQL in your application.

---

## 🚀 Features

- **Type-safe queries**: Fully typed SQL with autocompletion.
- **Lightweight**: Minimal overhead and fast execution.
- **Flexible**: Works seamlessly with JavaScript and TypeScript.

---

## 📦 Installation

Install the required packages:

```bash
npm install drizzle-orm drizzle-kit mysql2
```

---

## 🔧 Setup

### 1. **Database Configuration**

Create a `.env` file to store your MySQL connection details:

```dotenv
DATABASE_URL=mysql://<user>:<password>@<host>:<port>/<database>
```

Replace `<user>`, `<password>`, `<host>`, `<port>`, and `<database>` with your actual MySQL credentials.

---

### 2. **Drizzle Initialization**

Create a `db.ts` file to initialize Drizzle with your MySQL database:

```typescript
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
```

---

### 3. **Define Your Schema**

Create a `schema.ts` file to define your database tables:

```typescript
import { mysqlTable, serial, varchar, int } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  age: int('age').notNull(),
});
```

---

### 4. **Run Queries**

Use Drizzle ORM to interact with your database:

```typescript
import { db } from './db';
import { users } from './schema';

async function fetchUsers() {
  const allUsers = await db.select().from(users);
  console.log(allUsers);
}

fetchUsers();
```

---

## 📜 Drizzle-Kit (Migrations)

### 1. **Setup Drizzle-Kit**

Add the following to your `package.json`:

```json
"scripts": {
  "drizzle:generate": "drizzle-kit generate:sql --out migrations",
  "drizzle:push": "drizzle-kit push"
}
```

---

### 2. **Generate SQL Schema**

Run this command to generate your SQL migrations:

```bash
npm run drizzle:generate
```

---

### 3. **Push to Database**

Apply your migrations to the database:

```bash
npm run drizzle:push
```

---

## 🛠️ Example Project Structure

```
📁 src
 ├── 📄 db.ts         // Drizzle configuration
 ├── 📄 schema.ts     // Database schema
 ├── 📄 index.ts      // Application entry point
📁 migrations         // Drizzle-Kit migrations
```

---

## 🌐 Resources

- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [MySQL Documentation](https://dev.mysql.com/doc/)

---

## 💡 Tips

- Always validate your `.env` configuration.
- Use TypeScript for better type safety with Drizzle.
- Consider version-controlling your migrations for team collaboration.

---

With Drizzle ORM, building scalable, type-safe applications with MySQL has never been easier. Happy coding! 🎉
