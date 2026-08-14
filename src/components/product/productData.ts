export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  icon: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Cappuccino",
    description: "Rich espresso balanced with smooth steamed milk.",
    price: 180,
    category: "Coffee",
    icon: "☕",
  },
  {
    id: 2,
    name: "Caramel Latte",
    description: "Creamy espresso with steamed milk and caramel.",
    price: 220,
    category: "Coffee",
    icon: "🥛",
  },
  {
    id: 3,
    name: "Butter Croissant",
    description: "Flaky, buttery layers baked fresh every morning.",
    price: 150,
    category: "Bakery",
    icon: "🥐",
  },
  {
    id: 4,
    name: "Chocolate Cake",
    description: "Rich chocolate cake finished with a smooth glaze.",
    price: 240,
    category: "Desserts",
    icon: "🍰",
  },
];
