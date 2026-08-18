"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { Product } from "./productData";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity ?? 0;

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
              <Link
                href={`/menu/${product.id}`}
                className="transition hover:text-caramel"
              >
                {product.name}
              </Link>
            </h3>
          </div>

          <span className="whitespace-nowrap font-semibold text-coffee">
            ₹{product.price}
          </span>
        </div>

        <p className="mt-3 leading-7 text-muted">{product.description}</p>

        {quantity === 0 ? (
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="mt-5 w-full cursor-pointer rounded-full bg-coffee-dark px-5 py-3 text-sm font-semibold text-warm-white transition hover:-translate-y-0.5 hover:bg-coffee hover:shadow-md active:translate-y-0"
          >
            Add to Cart
          </button>
        ) : (
          <div className="mt-5 flex items-center justify-between rounded-full bg-coffee-dark px-3 py-2 text-warm-white">
            <button
              type="button"
              onClick={() => decreaseQuantity(product.id)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-xl font-bold transition hover:bg-white/10"
              aria-label={`Decrease ${product.name} quantity`}
            >
              −
            </button>

            <span className="text-sm font-semibold">{quantity}</span>

            <button
              type="button"
              onClick={() => increaseQuantity(product.id)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-xl font-bold transition hover:bg-white/10"
              aria-label={`Increase ${product.name} quantity`}
            >
              +
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
