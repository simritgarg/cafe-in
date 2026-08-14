"use client";

import { useState } from "react";
import { products } from "@/components/product/productData";
import ProductCard from "@/components/product/ProductCard";

const categories = ["All", "Coffee", "Food", "Bakery", "Desserts"];

export default function MenuFilters() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? "bg-coffee text-white"
                : "border border-coffee/10 bg-white text-coffee hover:bg-coffee/5"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
