import Link from "next/link";

export default function AccessDeniedPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-warm-white text-4xl shadow-sm">
          🔒
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
          Access Denied
        </p>

        <h1 className="mt-4 text-4xl font-bold text-coffee-dark">
          You don't have permission to access this page.
        </h1>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-muted">
          The admin dashboard is only available to authorized CAFE-!N
          administrators.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-coffee-dark px-6 py-3 font-semibold text-white transition hover:bg-coffee"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
