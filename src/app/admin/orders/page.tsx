"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
type Product = {
  id: number;
  name: string;
  price: number;
};

type OrderItem = {
  id: number;
  quantity: number;
  price: number;
  product: Product;
};

type User = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
} | null;

type Order = {
  id: string;
  total: number;
  status: string;
  createdAt: string;
  user: User;
  items: OrderItem[];
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch("/api/orders");
        const data = await response.json();

        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen px-6 py-10">
        <p>Loading orders...</p>
      </main>
    );
  }
  function getStatusClasses(status: string) {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";

      case "PREPARING":
        return "bg-blue-100 text-blue-800";

      case "READY":
        return "bg-green-100 text-green-800";

      case "COMPLETED":
        return "bg-purple-100 text-purple-800";

      case "CANCELLED":
        return "bg-red-100 text-red-800";

      default:
        return "bg-gray-100 text-gray-800";
    }
  }
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold">Admin Orders</h1>

        <p className="mb-8 text-gray-600">Manage all customer orders.</p>

        {orders.length === 0 ? (
          <div className="rounded-xl bg-white p-8 text-center shadow">
            <p className="text-gray-500">No orders found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="rounded-xl bg-white p-6 shadow">
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <Link
                      href={`/admin/orders/${order.id}`}
                      className="text-lg font-semibold text-blue-600 hover:underline"
                    >
                      {order.id}
                    </Link>

                    <p className="text-sm text-gray-500">
                      {order.user?.name || "Guest Customer"}
                    </p>

                    {order.user?.email && (
                      <p className="text-sm text-gray-500">
                        {order.user.email}
                      </p>
                    )}
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-xl font-bold">₹{order.total}</p>

                    <span
                      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${getStatusClasses(
                        order.status,
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="my-4 border-t" />

                <div>
                  <h3 className="mb-2 font-semibold">Items</h3>

                  <div className="space-y-1">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm"
                      >
                        <span>
                          {item.product.name} × {item.quantity}
                        </span>

                        <span>₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 border-t pt-4 text-sm text-gray-500">
                  Created: {new Date(order.createdAt).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
