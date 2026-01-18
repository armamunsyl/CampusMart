"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../../components/Footer";
import { getAuthStatus } from "../../utils/auth";

export default function AddItemPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { loggedIn } = await getAuthStatus();
      if (!loggedIn) {
        router.replace("/login");
        return;
      }
      setChecking(false);
    };

    checkAuth();
  }, [router]);

  if (checking) {
    return (
      <div className="min-h-screen bg-[#f7f7fb]">
        <main className="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-6 pb-16 pt-24">
          <div className="rounded-2xl border border-zinc-200 bg-white px-6 py-4 text-sm font-semibold text-zinc-600 shadow-sm">
            Checking access...
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-zinc-900">
      <main className="mx-auto w-full max-w-4xl px-6 pb-16 pt-24">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_22px_50px_rgba(15,23,42,0.14)]">
          <h1 className="text-2xl font-semibold text-zinc-900">Add a new item</h1>
          <p className="mt-2 text-sm text-zinc-500">
            This page is protected by the mock authentication middleware.
          </p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-700" htmlFor="title">
                Item name
              </label>
              <input
                id="title"
                className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-700 outline-none transition focus:border-[#ff7a2f] focus:ring-2 focus:ring-[#ff7a2f]/30"
                placeholder="Wireless mouse"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-700" htmlFor="price">
                Price
              </label>
              <input
                id="price"
                className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-700 outline-none transition focus:border-[#ff7a2f] focus:ring-2 focus:ring-[#ff7a2f]/30"
                placeholder="৳499"
                type="text"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-semibold text-zinc-700" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                className="min-h-[120px] w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 outline-none transition focus:border-[#ff7a2f] focus:ring-2 focus:ring-[#ff7a2f]/30"
                placeholder="Share condition, pickup point, and any details."
              />
            </div>
            <button
              className="h-11 w-full rounded-full bg-gradient-to-r from-[#ff8a3d] to-[#ff6a00] text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.2)] transition hover:brightness-110 sm:col-span-2"
              type="button"
            >
              Save item (mock)
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
