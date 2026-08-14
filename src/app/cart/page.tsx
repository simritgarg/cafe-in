"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <main className="min-h-screen bg-cream px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
          Your Cart
        </p>

        <h1 className="mt-4 text-4xl font-bold text-coffee-dark md:text-5xl">
          Your coffee is waiting.
        </h1>

        {cartItems.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-border bg-warm-white p-10 text-center">
            <p className="text-lg text-muted">Your cart is empty.</p>

            <Link
              href="/menu"
              className="mt-6 inline-block rounded-full bg-coffee-dark px-6 py-3 text-sm font-semibold text-warm-white transition hover:bg-coffee"
            >
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="flex items-center gap-5 rounded-2xl border border-border bg-warm-white p-5"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-cream text-4xl">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-caramel">
                      {item.category}
                    </p>

                    <h2 className="mt-1 text-lg font-semibold text-coffee-dark">
                      {item.name}
                    </h2>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-coffee-dark transition hover:bg-cream"
                      >
                        -
                      </button>

                      <span className="min-w-6 text-center text-sm font-semibold text-coffee-dark">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => increaseQuantity(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-coffee-dark transition hover:bg-cream"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-coffee-dark">
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="mt-2 text-sm font-medium text-caramel hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-3xl border border-border bg-warm-white p-6">
              <h2 className="text-xl font-semibold text-coffee-dark">
                Order Summary
              </h2>

              <div className="mt-6 flex items-center justify-between border-b border-border pb-4">
                <span className="text-muted">Items</span>
                <span className="font-medium text-coffee-dark">
                  {cartItems.reduce((count, item) => count + item.quantity, 0)}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-coffee-dark">Total</span>

                <span className="text-xl font-bold text-coffee-dark">
                  ₹{total}
                </span>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-full bg-coffee-dark px-5 py-3 text-sm font-semibold text-warm-white transition hover:bg-coffee"
              >
                Proceed to Checkout
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
