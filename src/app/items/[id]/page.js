import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function ItemDetailsPage() {
  return (
    <div className="min-h-screen bg-[#f7f7fb]">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-6 pb-14 pt-24">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_18px_30px_rgba(15,23,42,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80"
                alt="Product"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
              ].map((src, index) => (
                <button
                  key={src}
                  type="button"
                  className={`aspect-square overflow-hidden rounded-xl border ${
                    index === 0 ? "border-[#ff7a2f]" : "border-zinc-200"
                  } bg-white shadow-sm`}
                >
                  <img src={src} alt="Thumbnail" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_18px_30px_rgba(15,23,42,0.12)]">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#ff7a2f]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff7a2f]">
                Featured
              </span>
              <span className="text-sm text-zinc-500">Item ID: CM-1042</span>
            </div>
            <h1 className="mt-4 text-2xl font-semibold text-zinc-900">MacBook Air M1</h1>
            <p className="mt-3 text-sm text-zinc-600">
              Lightweight laptop with long battery life, perfect for assignments, coding,
              and content creation.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-3xl font-semibold text-[#ff7a2f]">৳79,000</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                15% off
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
              <div className="flex items-center gap-0.5 text-[#ffb54d]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={`star-${index}`}>★</span>
                ))}
              </div>
              <span>(128 reviews)</span>
              <span className="h-1 w-1 rounded-full bg-zinc-300" />
              <span>In stock</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-[#ff8a3d] to-[#ff6a00] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(0,0,0,0.15)] transition hover:brightness-110"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="rounded-full border border-[#ff7a2f] px-5 py-3 text-sm font-semibold text-[#ff7a2f] transition hover:bg-[#ff7a2f]/10"
              >
                Contact Seller
              </button>
            </div>
            <div className="mt-6 space-y-3 text-sm text-zinc-600">
              <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                <span>Condition</span>
                <span className="font-semibold text-zinc-900">Like New</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                <span>Location</span>
                <span className="font-semibold text-zinc-900">North Campus</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                <span>Posted</span>
                <span className="font-semibold text-zinc-900">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_18px_30px_rgba(15,23,42,0.12)]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="flex items-end gap-2 text-zinc-900">
                <span className="text-4xl font-semibold">5.0</span>
                <span className="text-lg text-zinc-400">/5</span>
              </div>
              <div className="mt-3 flex items-center gap-1 text-[#ffb54d]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={`rating-star-${index}`} className="text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-2 text-sm text-zinc-500">1 Ratings</p>
            </div>
            <div className="space-y-3">
              {[
                { label: "5", count: 1, percent: 100 },
                { label: "4", count: 0, percent: 0 },
                { label: "3", count: 0, percent: 0 },
                { label: "2", count: 0, percent: 0 },
                { label: "1", count: 0, percent: 0 },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <div className="flex w-24 items-center gap-1 text-[#ffb54d]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={`${row.label}-star-${index}`}
                        className={index < Number(row.label) ? "" : "text-zinc-200"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-100">
                    <div
                      className="h-full rounded-full bg-[#ffb54d]"
                      style={{ width: `${row.percent}%` }}
                    />
                  </div>
                  <span className="w-6 text-right text-sm text-zinc-500">{row.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_18px_30px_rgba(15,23,42,0.12)]">
          <div className="flex h-48 items-center justify-center text-lg font-semibold text-zinc-500">
            user review
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
