"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
};

type OrderItem = {
  id: number;
  quantity: number;
  price: number;
  product: {
    name: string;
    icon: string;
  };
};

type Order = {
  id: string;
  total: number;
  status: string;
  createdAt: string;
  items: OrderItem[];
};

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAccount() {
      try {
        const userResponse = await fetch("/api/auth/me");

        if (!userResponse.ok) {
          window.location.href = "/login";
          return;
        }

        const userData = await userResponse.json();
        setUser(userData);

        const ordersResponse = await fetch("/api/auth/my-orders");

        if (!ordersResponse.ok) {
          throw new Error("Failed to load orders");
        }

        const ordersData = await ordersResponse.json();
        setOrders(ordersData);
      } catch (error) {
        console.error("Failed to load account:", error);
        setError("Unable to load your account.");
      } finally {
        setIsLoading(false);
      }
    }

    loadAccount();
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-cream px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-muted">Loading account...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-cream px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-red-600">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
            CAFE-!N
          </p>

          <h1 className="mt-2 text-4xl font-bold text-coffee-dark">
            My Account
          </h1>

          <p className="mt-2 text-muted">Welcome back, {user?.name}.</p>
        </div>

        <section className="rounded-3xl border border-border bg-warm-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-coffee-dark">Profile</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm text-muted">Name</p>
              <p className="mt-1 font-medium text-coffee-dark">{user?.name}</p>
            </div>

            <div>
              <p className="text-sm text-muted">Email</p>
              <p className="mt-1 font-medium text-coffee-dark">{user?.email}</p>
            </div>

            <div>
              <p className="text-sm text-muted">Phone</p>
              <p className="mt-1 font-medium text-coffee-dark">
                {user?.phone || "Not provided"}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-coffee-dark">My Orders</h2>

            <Link
              href="/menu"
              className="rounded-full bg-coffee-dark px-5 py-2 text-sm font-semibold text-white hover:bg-coffee"
            >
              Order Again
            </Link>
          </div>

          {orders.length === 0 ? (
            <div className="rounded-3xl border border-border bg-warm-white p-8 text-center">
              <p className="text-muted">You haven't placed any orders yet.</p>

              <Link
                href="/menu"
                className="mt-4 inline-block font-semibold text-caramel hover:underline"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-3xl border border-border bg-warm-white p-6 shadow-sm"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <p className="font-semibold text-coffee-dark">
                        {order.id}
                      </p>

                      <p className="mt-1 text-sm text-muted">
                        {new Date(order.createdAt).toLocaleString()}
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-caramel/10 px-4 py-2 text-sm font-semibold capitalize text-caramel">
                      {order.status.toLowerCase()}
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{item.product.icon}</span>

                          <div>
                            <p className="font-medium text-coffee-dark">
                              {item.product.name}
                            </p>

                            <p className="text-sm text-muted">
                              Qty: {item.quantity}
                            </p>
                          </div>
                        </div>

                        <p className="font-medium text-coffee-dark">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex justify-between border-t border-border pt-4">
                    <span className="font-semibold text-coffee-dark">
                      Total
                    </span>

                    <span className="font-bold text-coffee-dark">
                      ₹{order.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
