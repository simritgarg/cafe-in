// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import type { Order } from "@/types/order";

// export default function OrderSuccessPage() {
//   const searchParams = useSearchParams();
//   const orderId = searchParams.get("orderId");

//   const [order, setOrder] = useState<Order | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const savedOrder = localStorage.getItem("cafe-in-last-order");

//     if (!savedOrder || !orderId) {
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const parsedOrder: Order = JSON.parse(savedOrder);

//       if (parsedOrder.id === orderId) {
//         setOrder(parsedOrder);
//       }
//     } catch {
//       setOrder(null);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [orderId]);
//   if (isLoading) {
//     return (
//       <main className="min-h-screen bg-cream px-6 py-20">
//         <div className="mx-auto max-w-2xl text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
//             Order
//           </p>

//           <h1 className="mt-4 text-4xl font-bold text-coffee-dark">
//             Loading your order...
//           </h1>

//           <p className="mt-4 text-muted">
//             Just a moment while we retrieve your order details.
//           </p>
//         </div>
//       </main>
//     );
//   }
//   if (!order) {
//     return (
//       <main className="min-h-screen bg-cream px-6 py-20">
//         <div className="mx-auto max-w-2xl text-center">
//           <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-warm-white text-4xl shadow-sm">
//             ?
//           </div>

//           <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
//             Order Not Found
//           </p>

//           <h1 className="mt-4 text-4xl font-bold text-coffee-dark">
//             We couldn't find that order.
//           </h1>

//           <p className="mx-auto mt-6 max-w-xl leading-7 text-muted">
//             This order may no longer be available in this browser. You can
//             return to the menu and place a new order.
//           </p>

//           <Link
//             href="/menu"
//             className="mt-8 inline-block rounded-full bg-coffee-dark px-6 py-3 font-semibold text-white transition hover:bg-coffee"
//           >
//             Back to Menu
//           </Link>
//         </div>
//       </main>
//     );
//   }
//   return (
//     <main className="min-h-screen bg-cream px-6 py-20">
//       <div className="mx-auto max-w-2xl text-center">
//         <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-warm-white text-4xl shadow-sm">
//           ✓
//         </div>

//         <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
//           Order Confirmed
//         </p>

//         <h1 className="mt-4 text-4xl font-bold text-coffee-dark md:text-5xl">
//           Your coffee is on its way.
//         </h1>

//         <p className="mx-auto mt-6 max-w-xl leading-7 text-muted">
//           Thank you for ordering from CAFE-!N. We've received your order and
//           will start preparing it shortly.
//         </p>

//         <div className="mt-10 rounded-3xl border border-border bg-warm-white p-8 text-left">
//           <div className="text-center">
//             <p className="text-sm text-muted">Order ID</p>

//             <p className="mt-2 text-xl font-bold tracking-wider text-coffee-dark">
//               {order?.id ?? orderId ?? "Order ID unavailable"}
//             </p>
//           </div>

//           {order && (
//             <>
//               <div className="mt-8 border-t border-border pt-6">
//                 <p className="text-sm text-muted">Customer</p>

//                 <p className="mt-1 font-semibold text-coffee-dark">
//                   {order.customer.name}
//                 </p>
//               </div>

//               <div className="mt-6 border-t border-border pt-6">
//                 <p className="text-sm text-muted">Items</p>

//                 <div className="mt-3 space-y-3">
//                   {order.items.map((item) => (
//                     <div
//                       key={item.product.id}
//                       className="flex items-center justify-between gap-4"
//                     >
//                       <div>
//                         <p className="font-medium text-coffee-dark">
//                           {item.product.name}
//                         </p>

//                         <p className="text-sm text-muted">
//                           {item.quantity} × ₹{item.product.price}
//                         </p>
//                       </div>

//                       <p className="font-semibold text-coffee-dark">
//                         ₹{item.product.price * item.quantity}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
//                 <span className="font-semibold text-coffee-dark">Total</span>

//                 <span className="text-2xl font-bold text-coffee-dark">
//                   ₹{order.total}
//                 </span>
//               </div>
//             </>
//           )}

//           <div className="mt-6 border-t border-border pt-6 text-center">
//             <p className="text-sm text-muted">Estimated preparation time</p>

//             <p className="mt-2 font-semibold text-coffee-dark">15–20 minutes</p>
//           </div>
//         </div>

//         <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
//           <Link
//             href="/menu"
//             className="rounded-full bg-coffee-dark px-6 py-3 font-semibold text-white transition hover:bg-coffee"
//           >
//             Order More
//           </Link>

//           <Link
//             href="/"
//             className="rounded-full border border-coffee/20 px-6 py-3 font-semibold text-coffee-dark transition hover:bg-white"
//           >
//             Back Home
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Order } from "@/types/order";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchOrder() {
      if (!orderId) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/orders/${orderId}`);

        if (!response.ok) {
          setOrder(null);
          return;
        }

        const data = await response.json();

        const safeOrder: Order = {
          id: data.id,
          customer: {
            name: data.user?.name || "Guest Customer",
            email: data.user?.email || "",
            phone: data.user?.phone || "",
            address: "",
          },
          items: data.items.map((item: any) => ({
            product: item.product,
            quantity: item.quantity,
          })),
          total: data.total,
          status: data.status.toLowerCase(),
          createdAt: data.createdAt,
        };

        setOrder(safeOrder);
      } catch (error) {
        console.error("Failed to load order:", error);
        setOrder(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchOrder();
  }, [orderId]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-cream px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
            Order
          </p>

          <h1 className="mt-4 text-4xl font-bold text-coffee-dark">
            Loading your order...
          </h1>

          <p className="mt-4 text-muted">
            Just a moment while we retrieve your order details.
          </p>
        </div>
      </main>
    );
  }

  if (!order) {
    return (
      <main className="min-h-screen bg-cream px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-warm-white text-4xl shadow-sm">
            ?
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
            Order Not Found
          </p>

          <h1 className="mt-4 text-4xl font-bold text-coffee-dark">
            We couldn't find that order.
          </h1>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-muted">
            This order may no longer be available in this browser. You can
            return to the menu and place a new order.
          </p>

          <Link
            href="/menu"
            className="mt-8 inline-block rounded-full bg-coffee-dark px-6 py-3 font-semibold text-white transition hover:bg-coffee"
          >
            Back to Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-warm-white text-4xl shadow-sm">
          ✓
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
          Order Confirmed
        </p>

        <h1 className="mt-4 text-4xl font-bold text-coffee-dark md:text-5xl">
          Your coffee is on its way.
        </h1>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-muted">
          Thank you for ordering from CAFE-!N. We've received your order and
          will start preparing it shortly.
        </p>

        <div className="mt-10 rounded-3xl border border-border bg-warm-white p-8 text-left">
          <div className="text-center">
            <p className="text-sm text-muted">Order ID</p>

            <p className="mt-2 text-xl font-bold tracking-wider text-coffee-dark">
              {order.id}
            </p>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-sm text-muted">Customer</p>

            <p className="mt-1 font-semibold text-coffee-dark">
              {order.customer.name}
            </p>
          </div>

          <div className="mt-6 border-t border-border pt-6">
            <p className="text-sm text-muted">Items</p>

            <div className="mt-3 space-y-3">
              {order.items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-medium text-coffee-dark">
                      {item.product.name}
                    </p>

                    <p className="text-sm text-muted">
                      {item.quantity} × ₹{item.product.price}
                    </p>
                  </div>

                  <p className="font-semibold text-coffee-dark">
                    ₹{item.product.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
            <span className="font-semibold text-coffee-dark">Total</span>

            <span className="text-2xl font-bold text-coffee-dark">
              ₹{order.total}
            </span>
          </div>

          <div className="mt-6 border-t border-border pt-6 text-center">
            <p className="text-sm text-muted">Estimated preparation time</p>

            <p className="mt-2 font-semibold text-coffee-dark">15–20 minutes</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/menu"
            className="rounded-full bg-coffee-dark px-6 py-3 font-semibold text-white transition hover:bg-coffee"
          >
            Order More
          </Link>

          <Link
            href="/"
            className="rounded-full border border-coffee/20 px-6 py-3 font-semibold text-coffee-dark transition hover:bg-white"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
