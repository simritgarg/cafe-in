import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-warm-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-coffee-dark"
          >
            CAFE-!N
          </Link>

          <p className="mt-2 text-sm text-muted">
            Where every cup tells a story.
          </p>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm text-muted">
          <Link href="/" className="transition hover:text-coffee">
            Home
          </Link>

          <Link href="/menu" className="transition hover:text-coffee">
            Menu
          </Link>

          <Link href="/about" className="transition hover:text-coffee">
            About
          </Link>
        </nav>

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} CAFE-!N
        </p>
      </div>
    </footer>
  );
}
