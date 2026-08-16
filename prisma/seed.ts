import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Classic Cappuccino",
        description: "Rich espresso balanced with smooth steamed milk.",
        price: 180,
        category: "Coffee",
        icon: "☕",
      },
      {
        name: "Caramel Latte",
        description: "Creamy espresso with steamed milk and caramel.",
        price: 220,
        category: "Coffee",
        icon: "🥛",
      },
      {
        name: "Butter Croissant",
        description: "Flaky, buttery layers baked fresh every morning.",
        price: 150,
        category: "Bakery",
        icon: "🥐",
      },
      {
        name: "Chocolate Cake",
        description: "Rich chocolate cake finished with a smooth glaze.",
        price: 240,
        category: "Desserts",
        icon: "🍰",
      },
    ],
  });

  console.log("CAFE-!N products seeded successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
