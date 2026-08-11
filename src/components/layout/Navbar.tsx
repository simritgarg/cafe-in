import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-border bg-warm-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-coffee-dark"
        >
          CAFE-!N
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-coffee hover:text-caramel"
          >
            Home
          </Link>

          <Link
            href="/menu"
            className="text-sm font-medium text-coffee hover:text-caramel"
          >
            Menu
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-coffee hover:text-caramel"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
