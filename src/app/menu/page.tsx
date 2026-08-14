import MenuFilters from "@/components/product/MenuFilters";

export default function MenuPage() {
  return (
    <main className="bg-cream">
      <section className="px-6 pb-16 pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
              Explore CAFE-!N
            </p>

            <h1 className="mt-4 text-4xl font-bold text-coffee md:text-6xl">
              Good coffee. Good food. Good moments.
            </h1>

            <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg">
              From carefully brewed coffee to freshly baked treats, discover
              something made for every craving and every moment.
            </p>
          </div>

          <MenuFilters />
        </div>
      </section>
    </main>
  );
}
