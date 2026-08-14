import ProductCard from "./ProductCard";
import { products } from "./productData";

export default function Products() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
            Featured Menu
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-coffee-dark sm:text-4xl">
            Customer favorites.
          </h2>

          <p className="mt-4 text-lg leading-8 text-muted">
            Start with some of the drinks and treats our customers love most.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
