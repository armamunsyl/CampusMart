"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

const renderStars = (rating) =>
  Array.from({ length: 5 }).map((_, index) => (
    <span
      key={`star-${index}`}
      className={index < Math.round(rating) ? "text-[#ffb54d]" : "text-zinc-300"}
    >
      ★
    </span>
  ));

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const response = await fetch("/api/items", { cache: "no-store" });
        const data = await response.json();
        setItems(Array.isArray(data) ? data : []);
      } catch (error) {
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);
  return (
    <div className="min-h-screen bg-[#f7f7fb]">
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-24">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <label className="text-sm font-semibold text-zinc-700" htmlFor="search">
              Search Items
            </label>
            <div className="mt-2 flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-2 text-zinc-700 shadow-sm">
              <span className="text-zinc-400">🔍</span>
              <input
                id="search"
                className="w-full bg-transparent text-sm text-zinc-700 outline-none placeholder:text-zinc-400"
                placeholder="Search by name, category, or keyword"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-zinc-700">Sort</span>
              <select className="mt-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
              </select>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-zinc-700">Filter</span>
              <select className="mt-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm">
                <option>All Categories</option>
                <option>Tech & Gadgets</option>
                <option>Books & Notes</option>
                <option>Stationery</option>
                <option>Essentials</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {loading ? (
            <div className="col-span-full rounded-2xl border border-zinc-200 bg-white px-6 py-5 text-center text-sm text-zinc-500">
              Loading items...
            </div>
          ) : null}
          {!loading && items.length === 0 ? (
            <div className="col-span-full rounded-2xl border border-zinc-200 bg-white px-6 py-5 text-center text-sm text-zinc-500">
              No items found.
            </div>
          ) : null}
          {items.map((item) => (
            <Link
              key={item.name}
              className="block overflow-hidden rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300"
              href={`/items/${item.id}`}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-xs font-semibold text-zinc-900 line-clamp-2">
                  {item.name}
                </h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm font-semibold text-[#ff7a2f]">
                    {item.price}
                  </span>
                  <span className="text-[11px] text-zinc-500">{item.discount}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-zinc-500">
                  <div className="flex items-center gap-0.5">
                    {renderStars(item.rating)}
                  </div>
                  <span>({item.reviews})</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
