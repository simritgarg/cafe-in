"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
};

export default function Navbar() {
  const { cartCount } = useCart();

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("/api/auth/me");

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to check authentication:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    checkAuth();
  }, []);

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      setUser(null);
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

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

          {!isLoading && user ? (
            <>
              <Link
                href="/account"
                className="text-sm font-semibold text-coffee hover:text-caramel"
              >
                Account
              </Link>

              <button
                onClick={handleLogout}
                className="text-sm font-semibold text-coffee hover:text-caramel"
              >
                Logout
              </button>
            </>
          ) : !isLoading ? (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-coffee hover:text-caramel"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="text-sm font-semibold text-caramel hover:text-coffee"
              >
                Register
              </Link>
            </>
          ) : null}

          <Link
            href="/cart"
            className="flex items-center gap-2 text-sm font-semibold text-caramel transition hover:text-coffee"
          >
            <span>🛒</span>
            <span>Cart ({cartCount})</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
