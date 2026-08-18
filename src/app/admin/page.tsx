"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Order = {
  id: string;
  total: number;
  status: string;
  createdAt: string;
  user: {
    name: string;
    email: string;
  } | null;
};

type CurrentUser = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  isAdmin: boolean;
};

export default function AdminDashboardPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const userResponse = await fetch("/api/auth/me");

        if (!userResponse.ok) {
          window.location.href = "/login";
          return;
        }

        const user: CurrentUser = await userResponse.json();

        if (!user.isAdmin) {
          window.location.href = "/";
          return;
        }

        const ordersResponse = await fetch("/api/orders");

        if (!ordersResponse.ok) {
          throw new Error("Failed to load orders");
        }

        const data = await ordersResponse.json();

        setOrders(data);
      } catch (error) {
        console.error("Failed to load dashboard:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-gray-500">Loading dashboard...</p>
        </div>
      </main>
    );
  }

  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) => order.status === "PENDING",
  ).length;

  const preparingOrders = orders.filter(
    (order) => order.status === "PREPARING",
  ).length;

  const completedOrders = orders.filter(
    (order) => order.status === "COMPLETED",
  ).length;

  const totalRevenue = orders
    .filter((order) => order.status !== "CANCELLED")
    .reduce((sum, order) => sum + order.total, 0);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
              CAFE-!N
            </p>

            <h1 className="mt-2 text-4xl font-bold text-coffee-dark">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-gray-600">
              Manage your cafe orders and activity.
            </p>
          </div>

          <Link
            href="/admin/orders"
            className="rounded-full bg-coffee-dark px-6 py-3 text-center font-semibold text-white hover:bg-coffee"
          >
            View All Orders
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Orders</p>
            <p className="mt-2 text-3xl font-bold text-coffee-dark">
              {totalOrders}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Pending</p>
            <p className="mt-2 text-3xl font-bold text-yellow-700">
              {pendingOrders}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Preparing</p>
            <p className="mt-2 text-3xl font-bold text-blue-700">
              {preparingOrders}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Revenue</p>
            <p className="mt-2 text-3xl font-bold text-green-700">
              ₹{totalRevenue}
            </p>
          </div>
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-coffee-dark">
                Recent Orders
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Latest customer orders
              </p>
            </div>

            <Link
              href="/admin/orders"
              className="text-sm font-semibold text-caramel hover:underline"
            >
              See all
            </Link>
          </div>

          {orders.length === 0 ? (
            <p className="py-8 text-center text-gray-500">No orders found.</p>
          ) : (
            <div className="space-y-3">
              {orders.slice(0, 5).map((order) => (
                <Link
                  key={order.id}
                  href={`/admin/orders/${order.id}`}
                  className="block rounded-xl border border-gray-100 p-4 transition hover:bg-gray-50"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div>
                      <p className="font-semibold text-coffee-dark">
                        {order.id}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {order.user?.name || "Guest Customer"}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="font-bold text-coffee-dark">
                        ₹{order.total}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {order.status}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-coffee-dark">
              Order Activity
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Pending</span>
                <span className="font-semibold">{pendingOrders}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Preparing</span>
                <span className="font-semibold">{preparingOrders}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Completed</span>
                <span className="font-semibold">{completedOrders}</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-coffee-dark">
              Quick Actions
            </h2>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/admin/orders"
                className="rounded-xl bg-coffee-dark px-4 py-3 text-center font-semibold text-white hover:bg-coffee"
              >
                Manage Orders
              </Link>

              <Link
                href="/menu"
                className="rounded-xl border border-gray-200 px-4 py-3 text-center font-semibold text-coffee-dark hover:bg-gray-50"
              >
                View Customer Menu
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
