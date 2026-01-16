import React from 'react';
import { FaCalculator, FaHeadphones, FaLaptop, FaPenNib, FaStar } from 'react-icons/fa6';
import { FiEye } from 'react-icons/fi';
import { MdOutlineAddBox } from 'react-icons/md';
import { TbSearch } from 'react-icons/tb';
import Navbar from './Navbar';
import Hero from '../pages/Hero';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="bg-[#0f0d16] pb-14">
                <div className="mx-auto w-full max-w-6xl px-6">
                    <div className="mb-6 flex items-end justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Browse by</p>
                            <h3 className="mt-2 text-2xl font-semibold text-white">Popular Categories</h3>
                        </div>
                        <span className="hidden text-sm text-white/60 md:inline">Find what you need fast</span>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { name: 'Laptops', Icon: FaLaptop },
                            { name: 'Accessories', Icon: FaHeadphones },
                            { name: 'Calculators', Icon: FaCalculator },
                            { name: 'Stationery', Icon: FaPenNib },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-white/20"
                            >
                                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/5 blur-2xl transition group-hover:bg-white/10" />
                                <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-4xl">
                                    <item.Icon className="h-10 w-10 text-white/80" aria-hidden="true" />
                                </div>
                                <h4 className="mt-5 text-lg font-semibold pr-16">{item.name}</h4>
                                <p className="mt-2 text-xs text-white/60 pr-16">Handpicked essentials for students</p>
                                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-white/80">
                                    Explore
                                    <span className="inline-block translate-x-0 transition group-hover:translate-x-1">→</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-[#0f0d16] pb-16">
                <div className="mx-auto w-full max-w-6xl px-6">
                    <div className="mb-6 flex items-end justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Featured</p>
                            <h3 className="mt-2 text-2xl font-semibold text-white">Featured Items</h3>
                        </div>
                        <span className="hidden text-sm text-white/60 md:inline">Top picks from students</span>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {[
                            {
                                name: 'MacBook Air M1',
                                description: 'Lightweight laptop with long battery life.',
                                price: '$799',
                                image:
                                    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
                                badge: 'Featured',
                                category: 'Tech',
                            },
                            {
                                name: 'Noise Cancelling Headphones',
                                description: 'Block distractions and focus in lectures.',
                                price: '$199',
                                image:
                                    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
                                badge: 'New',
                                category: 'Audio',
                            },
                            {
                                name: 'Graphing Calculator',
                                description: 'Exam-ready calculator with crisp display.',
                                price: '$129',
                                image:
                                    'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=800&q=80',
                                category: 'Tools',
                            },
                            {
                                name: 'Desk Organizer Set',
                                description: 'Keep notes, pens, and cards tidy.',
                                price: '$29',
                                image:
                                    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80',
                                category: 'Stationery',
                            },
                            {
                                name: 'Backpack Pro 25L',
                                description: 'Water-resistant backpack for daily campus use.',
                                price: '$69',
                                image:
                                    'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80',
                                badge: 'Hot',
                                category: 'Bags',
                            },
                            {
                                name: 'USB-C Dock',
                                description: 'Connect monitors, storage, and peripherals.',
                                price: '$59',
                                image:
                                    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
                                category: 'Accessories',
                            },
                            {
                                name: 'Study Lamp',
                                description: 'Warm light with adjustable brightness.',
                                price: '$24',
                                image:
                                    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
                                category: 'Dorm',
                            },
                            {
                                name: 'Wireless Mouse',
                                description: 'Smooth tracking with silent clicks.',
                                price: '$19',
                                image:
                                    'https://images.unsplash.com/photo-1519885277449-12eee5564d0e?auto=format&fit=crop&w=800&q=80',
                                category: 'Tech',
                            },
                            {
                                name: 'Notebook Bundle',
                                description: 'Set of 5 ruled notebooks for classes.',
                                price: '$12',
                                image:
                                    'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=80',
                                badge: 'Deal',
                                category: 'Notes',
                            },
                            {
                                name: 'Portable SSD 1TB',
                                description: 'Fast storage for projects and backups.',
                                price: '$109',
                                image:
                                    'https://images.unsplash.com/photo-1508873699372-7ae8f25b6d6a?auto=format&fit=crop&w=800&q=80',
                                category: 'Storage',
                            },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-white/20"
                            >
                                <div className="relative -mx-4 -mt-4 overflow-hidden rounded-t-2xl">
                                    {item.badge && (
                                        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                                            {item.badge}
                                        </span>
                                    )}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-36 w-full object-cover md:h-40"
                                    />
                                </div>
                                <div className="mt-4 flex items-start justify-between gap-2">
                                    <h4 className="text-sm font-semibold leading-snug line-clamp-2">
                                        {item.name}
                                    </h4>
                                    {item.category && (
                                        <span className="shrink-0 rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70">
                                            {item.category}
                                        </span>
                                    )}
                                </div>
                                <p className="mt-2 text-xs text-white/60 line-clamp-2">
                                    {item.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                                    <span className="text-lg font-semibold text-[#ff7a2f]">{item.price}</span>
                                    <button
                                        className="rounded-full bg-gradient-to-r from-[#ff8a3d] to-[#ff6a00] px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_25px_rgba(0,0,0,0.35)] transition hover:brightness-110"
                                        type="button"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-[#0f0d16] pb-16">
                <div className="mx-auto w-full max-w-6xl px-6">
                    <h3 className="mb-8 text-2xl font-semibold text-white">How CampusMart Works</h3>
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            {
                                title: 'Browse Items',
                                description: 'Explore campus listings in seconds.',
                                Icon: TbSearch,
                            },
                            {
                                title: 'View Details',
                                description: 'Check price, condition, and seller.',
                                Icon: FiEye,
                            },
                            {
                                title: 'Add Item',
                                description: 'Post your product with photos.',
                                Icon: MdOutlineAddBox,
                            },
                        ].map((item) => (
                            <div key={item.title} className="text-white">
                                <div className="text-[#ff7a2f]">
                                    <item.Icon className="h-7 w-7" aria-hidden="true" />
                                </div>
                                <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
                                <p className="mt-3 text-sm text-white/65">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-[#0f0d16] pb-16">
                <div className="mx-auto w-full max-w-6xl px-6">
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Why Choose</p>
                            <h3 className="mt-2 text-2xl font-semibold text-white">Why Choose CampusMart</h3>
                        </div>
                        <span className="hidden text-sm text-white/60 md:inline">Built for student communities</span>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            {
                                title: 'Verified Student Network',
                                description: 'Trade with real students and keep transactions trusted.',
                            },
                            {
                                title: 'Best Campus Deals',
                                description: 'Save more with listings tailored to student budgets.',
                            },
                            {
                                title: 'Fast & Secure Meetups',
                                description: 'On-campus pickup points make exchange quick and safe.',
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                            >
                                <h4 className="text-lg font-semibold">{item.title}</h4>
                                <p className="mt-3 text-sm text-white/70">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-[#0f0d16] py-12">
                <div className="mx-auto w-full max-w-6xl px-6">
                    <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold text-white">New Arrivals</h3>
                            <p className="mt-2 text-sm text-white/60">Recently added campus essentials</p>
                        </div>
                        <a className="text-sm font-semibold text-[#ff7a2f] transition hover:text-[#ff6a00]" href="#">
                            View All
                        </a>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {[
                            {
                                name: 'Dell XPS 13',
                                description: 'Compact ultrabook for everyday study tasks.',
                                price: '$899',
                                rating: 4.8,
                                reviews: 55,
                                image:
                                    'https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=900&q=80',
                            },
                            {
                                name: 'Smart Pen Set',
                                description: 'Smooth writing pens with refill pack.',
                                price: '$18',
                                rating: 4.6,
                                reviews: 41,
                                image:
                                    'https://images.unsplash.com/photo-1457694716743-eb419114c894?auto=format&fit=crop&w=900&q=80',
                            },
                            {
                                name: 'Noise Isolation Earbuds',
                                description: 'Clear sound for studying in noisy spaces.',
                                price: '$49',
                                rating: 4.7,
                                reviews: 63,
                                image:
                                    'https://images.unsplash.com/photo-1518441983039-8b2cb24de996?auto=format&fit=crop&w=900&q=80',
                            },
                            {
                                name: 'Study Desk Chair',
                                description: 'Ergonomic chair with breathable back support.',
                                price: '$129',
                                rating: 4.5,
                                reviews: 28,
                                image:
                                    'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=900&q=80',
                            },
                            {
                                name: 'Portable Printer',
                                description: 'Print notes and assignments on the go.',
                                price: '$79',
                                rating: 4.4,
                                reviews: 19,
                                image:
                                    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
                            },
                            {
                                name: 'USB Study Light',
                                description: 'Warm light with adjustable brightness.',
                                price: '$22',
                                rating: 4.9,
                                reviews: 72,
                                image:
                                    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
                            },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
                            >
                                <div className="relative">
                                    <span className="absolute left-3 top-3 rounded-full bg-[#ff7a2f] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                        New
                                    </span>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-40 w-full object-cover"
                                    />
                                </div>
                                <div className="flex h-full flex-col p-4">
                                    <h4 className="text-sm font-semibold text-white line-clamp-1">{item.name}</h4>
                                    <p className="mt-2 text-xs text-white/60 line-clamp-2">{item.description}</p>
                                    <div className="mt-auto flex items-center justify-between pt-4">
                                        <span className="text-base font-semibold text-[#ff7a2f]">{item.price}</span>
                                        <div className="flex items-center gap-1 text-xs text-zinc-500">
                                            <div className="flex items-center gap-0.5 text-[#ffb54d]">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <FaStar key={`${item.name}-star-${index}`} className="h-3 w-3" />
                                                ))}
                                            </div>
                                            <span>({item.reviews})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-[#fff3ec] py-16">
                <div className="mx-auto w-full max-w-5xl px-6 text-center">
                    <h3 className="text-3xl font-semibold text-zinc-900">
                        Start exploring campus essentials today
                    </h3>
                    <p className="mt-3 text-sm text-zinc-600">
                        Find the items you need, right from your campus
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            className="rounded-full bg-[#ff7a2f] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#ff6a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a2f]"
                            href="/items"
                        >
                            View Items
                        </a>
                        <a
                            className="rounded-full border border-[#ff7a2f] px-8 py-3 text-sm font-semibold text-[#ff7a2f] transition hover:bg-[#ff7a2f]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a2f]"
                            href="/login"
                        >
                            Login
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
