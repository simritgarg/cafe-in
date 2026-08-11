import CategoryCard from "./CategoryCard";
import { categories } from "./categoryData";
export default function Categories() {
  return (
    <section className="bg-warm-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
            Explore CAFE-!N
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-coffee-dark sm:text-4xl">
            Something for every craving.
          </h2>

          <p className="mt-4 text-lg leading-8 text-muted">
            From your morning coffee to an evening dessert, discover something
            made for your moment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              description={category.description}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
