import type { Product } from "./productData";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-warm-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-52 items-center justify-center bg-cream text-7xl">
        {product.icon}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-caramel">
              {product.category}
            </p>

            <h3 className="mt-2 text-xl font-semibold text-coffee-dark">
              {product.name}
            </h3>
          </div>

          <span className="whitespace-nowrap font-semibold text-coffee">
            ₹{product.price}
          </span>
        </div>

        <p className="mt-3 leading-7 text-muted">{product.description}</p>

        <button
          type="button"
          className="mt-5 w-full rounded-full bg-coffee-dark px-5 py-3 text-sm font-semibold text-warm-white transition hover:bg-coffee"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
