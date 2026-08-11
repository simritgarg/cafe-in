type CategoryCardProps = {
  name: string;
  description: string;
  icon: string;
};

export default function CategoryCard({
  name,
  description,
  icon,
}: CategoryCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-warm-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cream text-2xl">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-coffee-dark">{name}</h3>

      <p className="mt-2 leading-7 text-muted">{description}</p>
    </article>
  );
}
