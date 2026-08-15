import type { Product } from "@/components/product/productData";

export type OrderItem = {
  product: Product;
  quantity: number;
};

export type OrderCustomer = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type Order = {
  id: string;
  customer: OrderCustomer;
  items: OrderItem[];
  total: number;
  status: "pending" | "preparing" | "ready" | "completed" | "cancelled";
  createdAt: string;
};
