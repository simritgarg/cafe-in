# CAFE-!N Development Journal

## Day 2 — Frontend Foundation & Homepage

### Date

August 14, 2026

---

## What We Built

- Established the CAFE-!N visual foundation.
- Created custom coffee-themed design tokens.
- Created the reusable Navbar component.
- Updated the root layout and application metadata.
- Built the homepage Hero section.
- Created the Categories section.
- Created reusable CategoryCard component.
- Created product data model using TypeScript.
- Created reusable ProductCard component.
- Created Featured Products section.
- Created the Why CAFE-!N section.
- Created the homepage CTA.
- Created the reusable Footer component.
- Established the initial feature-oriented component structure.

---

## What We Learned

### Next.js

- App Router
- `page.tsx`
- `layout.tsx`
- File-system routing
- `Link`
- Metadata
- `next/font`

### React

- Components
- JSX
- Props
- Component composition
- Rendering lists
- `.map()`
- `key`

### TypeScript

- `.ts` vs `.tsx`
- Type definitions
- Component prop types
- Arrays of typed objects
- `Product` type
- `Product[]`
- `React.ReactNode`

### Tailwind CSS

- Utility classes
- Responsive breakpoints
- Custom theme colors
- Design tokens
- Hover states
- Layout utilities

### Architecture

- Separation of concerns
- Reusable components
- Data/UI separation
- Feature-oriented folders
- Keeping route files separate from reusable components

---

## Challenges

### 1. TypeScript casing/module issue

We encountered an issue involving:

- `categories.ts`
- `Categories.tsx`

TypeScript reported a casing/module resolution conflict.

### Solution

We renamed the data file to:

`categoryData.ts`

This made the responsibilities and imports clearer:

- `categoryData.ts` → category data
- `Categories.tsx` → category section
- `CategoryCard.tsx` → individual category UI

### Lesson

Clear and consistent naming is important, especially in projects that may eventually run across different operating systems and build environments.

---

## Architecture After Day 2

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
└── components/
    ├── layout/
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    │
    ├── home/
    │   ├── categoryData.ts
    │   ├── Categories.tsx
    │   ├── CategoryCard.tsx
    │   ├── WhyCafeIn.tsx
    │   └── HomeCTA.tsx
    │
    └── product/
        ├── productData.ts
        ├── Products.tsx
        └── ProductCard.tsx
```

Navbar
↓
Hero
↓
Categories
↓
Featured Products
↓
Why CAFE-!N
↓
CTA
↓
Footer

DAY3
DAY 3
│
├── /menu
│ ├── Menu page
│ ├── Category filtering
│ └── Product grid
│
├── /menu/[id]
│ └── Dynamic product details
│
├── /about
│ └── About page
│
├── Cart System
│ ├── CartContext
│ ├── Add to Cart
│ ├── Remove
│ ├── Increase quantity
│ ├── Decrease quantity
│ └── localStorage persistence
│
├── /cart
│ └── Cart + Order Summary
│
├── /checkout
│ ├── Customer information
│ ├── Order summary
│ ├── Form state
│ └── Frontend validation
│
├── /order-success
│ └── Order confirmation UI
│
└── Order Type
└── Prepared frontend order structure

HOME
↓
MENU
↓
PRODUCT DETAILS
↓
ADD TO CART
↓
CART
↓
QUANTITY / REMOVE
↓
CHECKOUT
↓
VALIDATION
↓
ORDER OBJECT
DAY 3 IMPLEMENTATION

Feature 1
Menu Page

- File:
- Components used:
- Data used:
- Functionality:
- Dependencies:

Feature 2
Product Details

- Route:
- Dynamic parameter:
- Data lookup:
- Error handling:

Feature 3
Cart

- Context:
- State:
- Actions:
- Persistence:

Feature 4
Checkout

- Form state:
- Validation:
- Order object:

Feature 5
Order Success

- Route:
- Current purpose:
- Future backend connection:

src/
│
├── app/
│ ├── page.tsx
│ ├── layout.tsx
│ │
│ ├── about/
│ │ └── page.tsx
│ │
│ ├── menu/
│ │ ├── page.tsx
│ │ └── [id]/
│ │ └── page.tsx
│ │
│ ├── cart/
│ │ └── page.tsx
│ │
│ ├── checkout/
│ │ └── page.tsx
│ │
│ └── order-success/
│ └── page.tsx
│
├── components/
│ ├── home/
│ ├── layout/
│ └── product/
│ ├── ProductCard.tsx
│ ├── ProductFilters.tsx
│ ├── AddToCartButton.tsx
│ └── productData.ts
│
├── context/
│ └── CartContext.tsx
│
└── types/
└── order.ts

# Day 4 — Database & Backend

## What We Built

- Connected the application to PostgreSQL.
- Added Prisma ORM.
- Created the database schema.
- Created User model.
- Created Product model.
- Created Order model.
- Created OrderItem model.
- Established relationships between database entities.
- Connected products from the database to the application.
- Created product API routes.
- Created order API routes.
- Connected checkout to the backend.
- Created real database orders instead of frontend-only order objects.
- Added support for registered users and guest orders.

## Database Structure

```text
User
 │
 └── Order
       │
       └── OrderItem
              │
              └── Produ
```

Main Entities
User

Stores customer account information and admin role information.

Product

Stores cafe products such as drinks and food items.

Order

Stores customer orders, totals, status, and creation time.

OrderItem

Stores the products and quantities belonging to an order.

What We Learned
Prisma
Prisma schema
Models
Relations
Prisma Client
Database queries
findUnique
findMany
create
update
Nested relations
Backend Development
API routes
GET requests
POST requests
PATCH requests
Request validation
JSON responses
Server-side database operations
Architecture

The project changed from a primarily frontend application into a full-stack application.

Frontend
↓
API Routes
↓
Prisma
↓
PostgreSQL
Day 5 — Authentication & Authorization
What We Built
User registration.
User login.
User logout.
Session-based authentication.
JWT-based sessions.
HTTP-only session cookie.
Protected account functionality.
Current-user API endpoint.
Customer order history.
Admin role support.
Admin-only access control.
Access-denied page.
Authentication Flow
User
↓
Login
↓
Server verifies credentials
↓
Password verification
↓
JWT session created
↓
HTTP-only cookie
↓
Protected API / Pages
↓
Server verifies session
↓
User access granted
Authorization

The application distinguishes between:

Customer
↓
Customer features

Admin
↓
Customer features

- Admin features

Admin routes verify that the authenticated user has the required admin role.

Unauthorized users are redirected to the access-denied page.

Security Concepts Learned
Password Hashing

Passwords are not stored as plain text.

Instead, passwords are securely hashed before being stored in the database.

HTTP-only Session Cookie

The authentication session is stored in an HTTP-only cookie.

This prevents client-side JavaScript from directly accessing the session cookie.

Server-side Verification

Protected functionality verifies the authenticated user on the server instead of trusting only frontend state.

What We Learned
Authentication vs authorization
Sessions
JWT
HTTP-only cookies
Password hashing
Protected routes
Role-based access control
Server-side authentication checks
Day 6 — Admin Order Management & Version 1
What We Built
Admin dashboard.
Protected admin area.
Admin orders page.
Individual admin order details page.
Customer information display.
Order item display.
Order totals.
Order status management.
Order status updates through the backend.
Guest customer support.
Registered customer support.
Access-denied page.
Production build verification.
Admin Order Flow
Admin Login
↓
Admin Access Check
↓
Admin Orders
↓
View All Orders
↓
Select Order
↓
Order Details
↓
Update Status
Order Statuses

Orders support the following statuses:

PENDING
↓
PREPARING
↓
READY
↓
COMPLETED

Orders can also be marked:

CANCELLED
Admin Capabilities

Administrators can:

View all orders.
View customer information.
View ordered products.
View quantities.
View order totals.
View order creation time.
Change order status.
Production Verification

The application was tested using:

npm run build

The production build completed successfully.

The application can also be started using:

npm run start
Version 1 Completed

CAFE-!N Version 1 now contains:

Frontend
↓
Menu
↓
Product Details
↓
Cart
↓
Checkout
↓
Order Creation
↓
PostgreSQL Database
↓
Authentication
↓
Customer Account
↓
Order History
↓
Admin Dashboard
↓
Order Management
Version 1 Final Feature Set
Customer
Homepage
Menu
Category filtering
Product details
Add to cart
Quantity controls
Persistent cart
Cart page
Checkout
Order creation
Order confirmation
Registration
Login
Logout
Account page
Order history
Backend
PostgreSQL
Prisma ORM
Product API
Order API
Authentication API
Database relationships
Server-side validation
Authentication
JWT sessions
HTTP-only cookies
Password hashing
Protected routes
Role-based authorization
Admin
Admin dashboard
Protected admin routes
Order management
Order details
Customer information
Order status updates
Access-denied page
Final Architecture
CAFE-!N
│
├── Frontend
│ ├── Next.js
│ ├── React
│ ├── TypeScript
│ └── Tailwind CSS
│
├── Backend
│ ├── Next.js API Routes
│ ├── Authentication
│ └── Authorization
│
├── Database
│ ├── PostgreSQL
│ └── Prisma
│
└── Application Features
├── Customer Ordering
├── Cart
├── Checkout
├── Authentication
├── Order History
└── Admin Order Management
