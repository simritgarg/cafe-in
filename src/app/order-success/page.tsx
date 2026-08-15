import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-warm-white text-4xl shadow-sm">
          ✓
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
          Order Confirmed
        </p>

        <h1 className="mt-4 text-4xl font-bold text-coffee-dark md:text-5xl">
          Your coffee is on its way.
        </h1>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-muted">
          Thank you for ordering from CAFE-!N. We've received your order and
          will start preparing it shortly.
        </p>

        <div className="mt-10 rounded-3xl border border-border bg-warm-white p-8">
          <p className="text-sm text-muted">Order ID</p>

          <p className="mt-2 text-xl font-bold tracking-wider text-coffee-dark">
            CAFE-ORDER-001
          </p>

          <div className="mt-6 border-t border-border pt-6">
            <p className="text-sm text-muted">Estimated preparation time</p>

            <p className="mt-2 font-semibold text-coffee-dark">15–20 minutes</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/menu"
            className="rounded-full bg-coffee-dark px-6 py-3 font-semibold text-white transition hover:bg-coffee"
          >
            Order More
          </Link>

          <Link
            href="/"
            className="rounded-full border border-coffee/20 px-6 py-3 font-semibold text-coffee-dark transition hover:bg-white"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
