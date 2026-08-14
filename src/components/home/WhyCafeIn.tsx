const features = [
  {
    icon: "☕",
    title: "Quality First",
    description:
      "Every drink and dish is designed around quality ingredients and a great café experience.",
  },
  {
    icon: "✨",
    title: "Made for You",
    description:
      "Discover products and experiences that fit your preferences, mood, and moment.",
  },
  {
    icon: "🤖",
    title: "Smarter with AI",
    description:
      "Our future AI features will help you discover, choose, and enjoy your perfect café experience.",
  },
];

export default function WhyCafeIn() {
  return (
    <section className="bg-warm-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
            Why CAFE-!N
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-coffee-dark sm:text-4xl">
            More than just another café.
          </h2>

          <p className="mt-4 text-lg leading-8 text-muted">
            We are building a modern café experience where great food,
            technology, and personalization come together.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-border bg-cream p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-warm-white text-3xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-coffee-dark">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
