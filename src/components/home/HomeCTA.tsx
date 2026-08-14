import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-coffee-dark py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
          Your next favorite is waiting
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-warm-white sm:text-4xl">
          Ready to discover your perfect café experience?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
          Explore our menu and discover the drinks, food, and experiences
          waiting for you at CAFE-!N.
        </p>

        <div className="mt-8">
          <Link
            href="/menu"
            className="inline-flex rounded-full bg-caramel px-7 py-3.5 text-sm font-semibold text-coffee-dark transition hover:opacity-90"
          >
            Explore the Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
