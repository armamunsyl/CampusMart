"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../../components/Footer";
import { login } from "../../utils/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await login(email, password);
      router.push("/items");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-zinc-900">
      <main className="relative overflow-hidden pb-16 pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-[#ff7a2f]/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#ffd7c2]/60 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-[#fff0e6] blur-3xl" />
        </div>
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <section className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ff7a2f]/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff7a2f] shadow-sm">
              Campus Access
            </span>
            <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
              Sign in to manage your campus marketplace
            </h1>
            <p className="max-w-xl text-sm text-zinc-600 sm:text-base">
              Keep track of your listings, chat with verified students, and grab the best
              deals before they are gone.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Trusted students",
                  description: "Verified community listings for safer exchanges.",
                },
                {
                  title: "Fast meetups",
                  description: "Coordinate pickup spots across your campus.",
                },
                {
                  title: "Saved items",
                  description: "Wishlist your must-have essentials.",
                },
                {
                  title: "Deal alerts",
                  description: "Get notified when new items drop.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_14px_28px_rgba(15,23,42,0.1)]"
                >
                  <h3 className="text-sm font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-xs text-zinc-500">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_22px_50px_rgba(15,23,42,0.16)] sm:p-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-zinc-900">Welcome back</h2>
              <p className="text-sm text-zinc-500">
                Log in with your university email to continue.
              </p>
            </div>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-700 outline-none transition focus:border-[#ff7a2f] focus:ring-2 focus:ring-[#ff7a2f]/30"
                  placeholder="you@university.edu"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-700 outline-none transition focus:border-[#ff7a2f] focus:ring-2 focus:ring-[#ff7a2f]/30"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              {error ? (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-red-600">
                  {error}
                </div>
              ) : null}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500">
                <label className="flex items-center gap-2">
                  <input
                    className="h-4 w-4 rounded border-zinc-300 text-[#ff7a2f] focus:ring-[#ff7a2f]"
                    type="checkbox"
                  />
                  Keep me signed in
                </label>
                <a className="font-semibold text-[#ff7a2f] hover:text-[#ff6a00]" href="#">
                  Forgot password?
                </a>
              </div>
              <button
                className="h-11 w-full rounded-full bg-gradient-to-r from-[#ff8a3d] to-[#ff6a00] text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.2)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </button>
            </form>
            <div className="mt-6 grid gap-3">
              <button
                className="h-11 w-full rounded-full border border-zinc-200 bg-white text-sm font-semibold text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
                type="button"
              >
                Continue with Google
              </button>
              <button
                className="h-11 w-full rounded-full border border-zinc-200 bg-white text-sm font-semibold text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
                type="button"
              >
                Continue with Facebook
              </button>
            </div>
            <p className="mt-6 text-center text-xs text-zinc-500">
              New to CampusMart?{" "}
              <a className="font-semibold text-[#ff7a2f] hover:text-[#ff6a00]" href="/signup">
                Create an account
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
