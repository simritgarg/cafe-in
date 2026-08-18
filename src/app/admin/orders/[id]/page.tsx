"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

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

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.id as string;

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  async function updateStatus(status: string) {
    try {
      setUpdatingStatus(true);

      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();

      if (response.ok) {
        setOrder(data);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    } finally {
      setUpdatingStatus(false);
    }
  }
  useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await fetch(`/api/orders/${orderId}`);
        const data = await response.json();

        if (response.ok) {
          setOrder(data);
        }
      } catch (error) {
        console.error("Failed to fetch order:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <main className="min-h-screen px-6 py-10">
        <p>Loading order...</p>
      </main>
    );
  }

  if (!order) {
    return (
      <main className="min-h-screen px-6 py-10">
        <h1 className="mb-4 text-2xl font-bold">Order not found</h1>

        <Link href="/admin/orders" className="text-blue-600 hover:underline">
          ← Back to Orders
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/orders"
          className="mb-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to Orders
        </Link>

        <div className="rounded-xl bg-white p-6 shadow">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <h1 className="text-2xl font-bold">Order {order.id}</h1>

              <p className="mt-1 text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 md:items-end">
              <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800">
                {order.status}
              </span>

              <select
                value={order.status}
                onChange={(event) => updateStatus(event.target.value)}
                disabled={updatingStatus}
                className="rounded-lg border px-3 py-2 text-sm"
              >
                <option value="PENDING">PENDING</option>
                <option value="PREPARING">PREPARING</option>
                <option value="READY">READY</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="CANCELLED">CANCELLED</option>
              </select>
            </div>
          </div>

          <div className="mb-8 rounded-lg bg-gray-50 p-4">
            <h2 className="mb-3 text-lg font-semibold">Customer</h2>

            <p>
              <strong>Name:</strong> {order.user?.name || "Guest Customer"}
            </p>

            <p>
              <strong>Email:</strong> {order.user?.email || "Not available"}
            </p>

            <p>
              <strong>Phone:</strong> {order.user?.phone || "Not available"}
            </p>
          </div>

          <h2 className="mb-4 text-lg font-semibold">Order Items</h2>

          <div className="space-y-3">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-3"
              >
                <div>
                  <p className="font-medium">{item.product.name}</p>

                  <p className="text-sm text-gray-500">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>

                <p className="font-semibold">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between border-t pt-4 text-xl font-bold">
            <span>Total</span>
            <span>₹{order.total}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
