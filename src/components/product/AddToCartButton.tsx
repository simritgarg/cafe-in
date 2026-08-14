"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "./productData";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="rounded-full bg-coffee-dark px-6 py-3 font-semibold text-white transition hover:bg-coffee"
    >
      Add to Cart
    </button>
  );
}
