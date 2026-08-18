# CAFE-!N ☕

CAFE-!N is a full-stack cafe ordering web application built with Next.js, TypeScript, Prisma, and PostgreSQL.

The project provides a complete customer ordering flow along with authentication and an admin order-management system.

## Features

### Customer

- Browse cafe products and categories
- View individual product details
- Add products to cart
- Increase and decrease item quantities
- Persistent cart using localStorage
- Checkout and place orders
- Order confirmation page
- User registration and login
- Logout functionality
- Customer account page
- View previous orders

### Admin

- Protected admin area
- Admin-only order access
- View all customer orders
- View individual order details
- View customer information
- View order items and totals
- Update order status
- Support for guest and registered-customer orders
- Access-denied page for unauthorized users

### Authentication & Security

- Session-based authentication using JWT
- HTTP-only session cookie
- Protected API routes
- Admin role-based authorization
- Password hashing
- Server-side user verification

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- JWT
- JOSE
- Git & GitHub

## Application Flow

```text
Customer
   │
   ├── Browse Menu
   │      │
   │      └── Add to Cart
   │
   ├── Cart
   │      │
   │      └── Checkout
   │             │
   │             └── Create Order
   │
   ├── Order Success
   │
   └── Account
          │
          └── Order History


Admin
   │
   └── Admin Orders
          │
          ├── View Orders
          │
          ├── View Order Details
          │
          └── Update Order Status
```

## Database

The application uses PostgreSQL with Prisma ORM.

Main entities include:

- User
- Product
- Order
- OrderItem

Orders can be associated with registered users or remain as guest orders.

## Authentication

CAFE-!N uses session-based authentication.

After successful login:

1. The server verifies the user's credentials.
2. A signed JWT session is created.
3. The session is stored in an HTTP-only cookie.
4. Protected routes verify the session.
5. Admin routes additionally verify the user's admin role.

## Admin Order Status

Orders support the following statuses:

- PENDING
- PREPARING
- READY
- COMPLETED
- CANCELLED

Administrators can update the status from the order details page.

## Local Development

Install dependencies:

```bash
npm install
```

Configure the required environment variables in `.env`.

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

To verify the application can be built for production:

```bash
npm run build
```

The production server can be started with:

```bash
npm run start
```
