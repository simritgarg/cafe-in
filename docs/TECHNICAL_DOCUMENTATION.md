# CAFE-!N Technical Documentation

## 1. Project Overview

CAFE-!N is a modern full-stack café application being developed as a production-oriented portfolio and potential future product.

The application will progressively incorporate:

- Modern frontend development
- Backend services
- PostgreSQL database
- Authentication
- Customer functionality
- Admin functionality
- AI-powered features
- Analytics and dashboards
- Production deployment

---

# 2. Current Technology Stack

## Frontend

### Next.js

Used as the primary React framework.

Responsibilities include:

- Application routing
- Page rendering
- Layouts
- Server/client architecture
- SEO and metadata
- Production optimization

### React

Used to create reusable UI components.

Examples:

- Navbar
- ProductCard
- CategoryCard
- Footer

### TypeScript

Used for static typing and improved developer safety.

Examples:

- Product type
- Component prop types
- Structured application data

### Tailwind CSS

Used for utility-based styling and responsive UI development.

---

# 3. Current Application Architecture

```text
src/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
└── components/
    │
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

DAY3
Date

Day 3 — CAFE-!N

Goal

Transform the Day 2 homepage foundation into a functional multi-page frontend application with product browsing, dynamic product pages, cart functionality, checkout flow, and frontend validation.

What We Built

1. Menu system

Created:

/app/menu/page.tsx

Implemented:

Menu page
Product grid
Category filters
All / Coffee / Food / Bakery / Desserts
Reused existing ProductCard
Reused existing productData 2. Dynamic Product Details

Created:

/app/menu/[id]/page.tsx

Implemented dynamic routes:

/menu/1
/menu/2
/menu/3
/menu/4

Products are found using their ID.

Also implemented:

Product found → product details
Product not found → Product Not Found 3. About Page

Created:

/app/about/page.tsx 4. Cart System

Created:

/context/CartContext.tsx

Implemented:

Add product
Remove product
Increase quantity
Decrease quantity
Cart count
Cart state shared throughout application
localStorage persistence 5. Product Add-to-Cart

Created:

/components/product/AddToCartButton.tsx

This allowed us to keep the product page as a Server Component while putting the interactive cart logic inside a Client Component.

6. Cart Page

Created:

/app/cart/page.tsx

Implemented:

Cart items
Quantity controls
Remove
Item count
Order total
Empty-cart state
Checkout navigation 7. Checkout

Created:

/app/checkout/page.tsx

Implemented:

Name
Email
Phone
Address
React form state
Basic frontend validation
Order summary
Total calculation 8. Order Structure

Created:

/types/order.ts

Defined:

Order
OrderItem
OrderCustomer

with order statuses:

pending
preparing
ready
completed
cancelled 9. Order Success

Created:

/app/order-success/page.tsx

Created the future destination for successful orders.
