"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { Order } from "@/types/order";

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }
  function handlePlaceOrder() {
    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!formData.address.trim()) {
      setError("Please enter your delivery address.");
      return;
    }
    setIsSubmitting(true);

    const order: Order = {
      id: `CAFE-${Date.now()}`,
      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
      },
      items: cartItems.map((item) => ({
        product: item,
        quantity: item.quantity,
      })),
      total,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("cafe-in-last-order", JSON.stringify(order));

    clearCart();

    router.push(`/order-success?orderId=${order.id}`);
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-cream px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
            Checkout
          </p>

          <h1 className="mt-4 text-4xl font-bold text-coffee-dark">
            Your cart is empty.
          </h1>

          <p className="mt-4 text-muted">
            Add something delicious before continuing to checkout.
          </p>

          <Link
            href="/menu"
            className="mt-8 inline-block rounded-full bg-coffee-dark px-6 py-3 font-semibold text-white"
          >
            Explore Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
          Checkout
        </p>

        <h1 className="mt-4 text-4xl font-bold text-coffee-dark md:text-5xl">
          Almost there.
        </h1>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
          <section className="rounded-3xl border border-border bg-warm-white p-8">
            <h2 className="text-2xl font-semibold text-coffee-dark">
              Your Information
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-coffee-dark"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 outline-none transition focus:border-caramel"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-coffee-dark"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 outline-none transition focus:border-caramel"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-coffee-dark"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 outline-none transition focus:border-caramel"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="text-sm font-medium text-coffee-dark"
                >
                  Delivery Address
                </label>

                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your delivery address"
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-white px-4 py-3 outline-none transition focus:border-caramel"
                />
              </div>
            </div>
          </section>

          <aside className="h-fit rounded-3xl border border-border bg-warm-white p-8">
            <h2 className="text-2xl font-semibold text-coffee-dark">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-medium text-coffee-dark">{item.name}</p>

                    <p className="text-sm text-muted">
                      {item.quantity} × ₹{item.price}
                    </p>
                  </div>

                  <p className="font-semibold text-coffee-dark">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-coffee-dark">Total</span>

                <span className="text-2xl font-bold text-coffee-dark">
                  ₹{total}
                </span>
              </div>
            </div>
            {error && (
              <p className="mt-4 text-sm font-medium text-red-600">{error}</p>
            )}

            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={isSubmitting}
              className="mt-8 w-full rounded-full bg-coffee-dark px-5 py-3 font-semibold text-white transition hover:bg-coffee disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}
