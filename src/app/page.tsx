//Bring something from another module/file/package into this file so I can use it.
// Next.js provides: Link for navigation between pages.
import Link from "next/link";
import Categories from "@/components/home/Categories"; //@/ ->epresents the project's source/root path
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
              Welcome to CAFE-!N
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-coffee-dark sm:text-6xl lg:text-7xl">
              Your perfect cup,
              <br />
              your perfect moment.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Discover coffee, food, and experiences crafted around you. CAFE-!N
              brings everything you love about a great café into one modern
              experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="rounded-full bg-coffee-dark px-7 py-3.5 text-sm font-semibold text-warm-white transition hover:bg-coffee"
              >
                Explore Menu
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-border bg-warm-white px-7 py-3.5 text-sm font-semibold text-coffee-dark transition hover:border-caramel hover:text-caramel"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Categories />
    </main>
  );
}
