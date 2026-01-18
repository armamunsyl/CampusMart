import Link from "next/link";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7f7fb] text-zinc-900">
      <main className="relative overflow-hidden pb-16 pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-[#ff7a2f]/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#ffd7c2]/60 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#fff0e6] blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff7a2f]">
            CampusMart Error
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-zinc-900 sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-3 text-sm text-zinc-600 sm:text-base">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              className="rounded-full bg-[#ff7a2f] px-7 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff6a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a2f]"
              href="/"
            >
              Back to Home
            </Link>
            <Link
              className="rounded-full border border-[#ff7a2f] px-7 py-2.5 text-sm font-semibold text-[#ff7a2f] transition hover:bg-[#ff7a2f]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a2f]"
              href="/items"
            >
              Browse Items
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
