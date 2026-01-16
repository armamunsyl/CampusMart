import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const items = [
  {
    id: "kemei-6330",
    name: "Kemei km 6330 hair cutting saving kit",
    price: "৳879",
    discount: "-30%",
    rating: 4.6,
    reviews: 131,
    image:
      "https://images.unsplash.com/photo-1511771726700-4cd04c136d24?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "yonex-mavis-10",
    name: "Yonex Mavis 10 Nylon Shuttlecock (6 pcs)",
    price: "৳255",
    discount: "-57%",
    rating: 4.1,
    reviews: 46,
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "counting-grips",
    name: "Adjustable Heavy Counting Grips 10-100Kg",
    price: "৳390",
    discount: "-61%",
    rating: 4.8,
    reviews: 1,
    image:
      "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "quran-stand",
    name: "Qur'an Sharif stand & Jainamaz stand",
    price: "৳260",
    discount: "-48%",
    rating: 4.3,
    reviews: 86,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tono-hime",
    name: "TONO Hime Fruit Flavor Water Based Lubricant",
    price: "৳99",
    discount: "-67%",
    rating: 4.4,
    reviews: 1336,
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "portable-scale",
    name: "Electric Portable Scale - Black Measuring Tool",
    price: "৳349",
    discount: "-46%",
    rating: 4.7,
    reviews: 84,
    image:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "wireless-mouse",
    name: "Wireless Mouse Pro",
    price: "৳299",
    discount: "-22%",
    rating: 4.5,
    reviews: 212,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "notebook-bundle",
    name: "Notebook Bundle (5 Pack)",
    price: "৳120",
    discount: "-35%",
    rating: 4.2,
    reviews: 64,
    image:
      "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "water-bottle",
    name: "Stainless Water Bottle 1L",
    price: "৳199",
    discount: "-28%",
    rating: 4.1,
    reviews: 97,
    image:
      "https://images.unsplash.com/photo-1526401485004-2fda9f6aafeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "campus-backpack",
    name: "Campus Backpack 25L",
    price: "৳899",
    discount: "-18%",
    rating: 4.6,
    reviews: 143,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "usb-c-charger",
    name: "USB-C Charger 65W",
    price: "৳549",
    discount: "-24%",
    rating: 4.7,
    reviews: 52,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "graphing-calculator",
    name: "Graphing Calculator FX-991",
    price: "৳479",
    discount: "-33%",
    rating: 4.4,
    reviews: 88,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
];

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
  return (
    <div className="min-h-screen bg-[#f7f7fb]">
      <Navbar />
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
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
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
                <h3 className="text-sm font-semibold text-zinc-900 line-clamp-2">
                  {item.name}
                </h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-semibold text-[#ff7a2f]">
                    {item.price}
                  </span>
                  <span className="text-sm text-zinc-500">{item.discount}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
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
