"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";

export default function LoginPage() {
  //   const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed");
        return;
      }

      window.location.href = "/";
    } catch (error) {
      console.error("Login failed:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-16">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl border border-border bg-warm-white p-8 shadow-sm">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-caramel">
              CAFE-!N
            </p>

            <h1 className="mt-3 text-3xl font-bold text-coffee-dark">
              Welcome Back
            </h1>

            <p className="mt-3 text-muted">Login to your CAFE-!N account.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-coffee-dark">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full rounded-xl border border-border bg-white px-4 py-3 outline-none focus:border-caramel"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-coffee-dark">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="w-full rounded-xl border border-border bg-white px-4 py-3 outline-none focus:border-caramel"
                placeholder="Your password"
              />
            </div>

            {error && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-full bg-coffee-dark px-6 py-3 font-semibold text-white transition hover:bg-coffee disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-caramel hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
