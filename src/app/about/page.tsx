export default function AboutPage() {
  return (
    <main className="bg-cream">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
              About CAFE-!N
            </p>

            <h1 className="mt-4 text-4xl font-bold text-coffee-dark md:text-6xl">
              More than coffee. A place to connect.
            </h1>

            <p className="mt-6 text-base leading-8 text-muted md:text-lg">
              CAFE-!N was created around a simple idea: great coffee, good food,
              and meaningful moments should come together in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <article className="rounded-3xl border border-border bg-warm-white p-8">
            <div className="text-4xl">☕</div>

            <h2 className="mt-6 text-2xl font-semibold text-coffee-dark">
              Crafted with care
            </h2>

            <p className="mt-4 leading-7 text-muted">
              Every cup starts with carefully selected ingredients and a focus
              on quality.
            </p>
          </article>

          <article className="rounded-3xl border border-border bg-warm-white p-8">
            <div className="text-4xl">🤝</div>

            <h2 className="mt-6 text-2xl font-semibold text-coffee-dark">
              Made for people
            </h2>

            <p className="mt-4 leading-7 text-muted">
              Whether you're catching up with friends or getting some work done,
              CAFE-!N is designed to feel welcoming.
            </p>
          </article>

          <article className="rounded-3xl border border-border bg-warm-white p-8">
            <div className="text-4xl">✨</div>

            <h2 className="mt-6 text-2xl font-semibold text-coffee-dark">
              Always evolving
            </h2>

            <p className="mt-4 leading-7 text-muted">
              We're building a modern cafe experience where technology and
              hospitality work together.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
