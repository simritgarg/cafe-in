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
