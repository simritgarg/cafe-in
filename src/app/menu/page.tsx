// import MenuFilters from "@/components/product/MenuFilters";

// export default function MenuPage() {
//   return (
//     <main className="bg-cream">
//       <section className="px-6 pb-16 pt-20">
//         <div className="mx-auto max-w-7xl">
//           <div className="max-w-3xl">
//             <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
//               Explore CAFE-!N
//             </p>

//             <h1 className="mt-4 text-4xl font-bold text-coffee md:text-6xl">
//               Good coffee. Good food. Good moments.
//             </h1>

//             <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg">
//               From carefully brewed coffee to freshly baked treats, discover
//               something made for every craving and every moment.
//             </p>
//           </div>

//           <MenuFilters />
//         </div>
//       </section>
//     </main>
//   );
// }
// import ProductCard from "@/components/product/ProductCard";
import MenuFilters from "@/components/product/MenuFilters";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  icon: string;
};

async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export default async function MenuPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-cream px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
            Our Menu
          </p>

          <h1 className="mt-4 text-4xl font-bold text-coffee-dark md:text-5xl">
            Something for every coffee mood.
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted">
            Explore our coffee, bakery, and dessert favorites.
          </p>
        </div>

        <div className="mt-10">
          <MenuFilters products={products} />
        </div>

        {/* <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}
      </div>
    </main>
  );
}
