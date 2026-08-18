// import Link from "next/link";
// import { products } from "@/components/product/productData";
// import AddToCartButton from "@/components/product/AddToCartButton";

// type ProductPageProps = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// export default async function ProductPage({ params }: ProductPageProps) {
//   const { id } = await params;

//   const product = products.find((product) => product.id === Number(id));

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-cream px-6 py-20">
//         <div className="mx-auto max-w-3xl text-center">
//           <h1 className="text-4xl font-bold text-coffee-dark">
//             Product not found
//           </h1>

//           <p className="mt-4 text-gray-600">
//             Sorry, we couldn't find that product.
//           </p>

//           <Link
//             href="/menu"
//             className="mt-8 inline-block rounded-full bg-coffee-dark px-6 py-3 font-semibold text-white"
//           >
//             Back to Menu
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-cream px-6 py-20">
//       <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
//         <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-warm-white text-8xl">
//           {product.icon}
//         </div>

//         <div className="flex flex-col justify-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
//             {product.category}
//           </p>

//           <h1 className="mt-4 text-4xl font-bold text-coffee-dark md:text-5xl">
//             {product.name}
//           </h1>

//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             {product.description}
//           </p>

//           <p className="mt-8 text-3xl font-bold text-coffee-dark">
//             ₹{product.price}
//           </p>

//           <div className="mt-8 flex gap-4">
//             <AddToCartButton product={product} />

//             <Link
//               href="/menu"
//               className="rounded-full border border-coffee/20 px-6 py-3 font-semibold text-coffee-dark transition hover:bg-white"
//             >
//               Back to Menu
//             </Link>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
import Link from "next/link";
import AddToCartButton from "@/components/product/AddToCartButton";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  icon: string;
};

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getProduct(id: string): Promise<Product | null> {
  const response = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return (
      <main className="min-h-screen bg-cream px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-coffee-dark">
            Product not found
          </h1>

          <p className="mt-4 text-muted">
            Sorry, we couldn't find that product.
          </p>

          <Link
            href="/menu"
            className="mt-8 inline-block rounded-full bg-coffee-dark px-6 py-3 font-semibold text-white"
          >
            Back to Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-warm-white text-8xl">
          {product.icon}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
            {product.category}
          </p>

          <h1 className="mt-4 text-4xl font-bold text-coffee-dark md:text-5xl">
            {product.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted">
            {product.description}
          </p>

          <p className="mt-8 text-3xl font-bold text-coffee-dark">
            ₹{product.price}
          </p>

          <div className="mt-8 flex gap-4">
            <AddToCartButton product={product} />

            <Link
              href="/menu"
              className="rounded-full border border-coffee/20 px-6 py-3 font-semibold text-coffee-dark transition hover:bg-white"
            >
              Back to Menu
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
