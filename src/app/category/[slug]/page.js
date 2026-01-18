import Link from "next/link";
import Footer from "../../../components/Footer";
import itemsData from "../../../data/items.json";

const CATEGORY_MAP = {
  tech: "Tech & Gadgets",
  books: "Books & Notes",
  stationery: "Stationery",
  essentials: "Accessories & Essentials",
};

const renderStars = (rating) =>
  Array.from({ length: 5 }).map((_, index) => (
    <span
      key={`star-${index}`}
      className={index < Math.round(rating) ? "text-[#ffb54d]" : "text-zinc-300"}
    >
      ★
    </span>
  ));

export default function CategoryPage({ params }) {
  const categoryLabel = CATEGORY_MAP[params.slug];
  const items = categoryLabel
    ? itemsData.filter((item) => item.category === categoryLabel)
    : [];

  return (
    <div className="min-h-screen bg-[#f7f7fb]">
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-24">
        <div className="mb-6 flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Category</p>
          <h1 className="text-2xl font-semibold text-zinc-900">
            {categoryLabel || "Items"}
          </h1>
        </div>
        {items.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 bg-white px-6 py-5 text-center text-sm text-zinc-500">
            No items found for this category.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {items.map((item) => (
              <Link
                key={item.id}
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
        )}
      </main>
      <Footer />
    </div>
  );
}
