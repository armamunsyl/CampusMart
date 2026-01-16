'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { FaCartShopping, FaHeart } from 'react-icons/fa6';

const Navbar = () => {
    const pathname = usePathname();
    const linkClass = (isActive) =>
        `pb-1 transition-colors ${
            isActive ? 'border-b-2 border-[#ff7a2f] text-white' : 'text-zinc-300 hover:text-white'
        }`;

    return (
        <nav className="fixed left-0 right-0 top-0 z-50 w-full bg-gradient-to-r from-[#1c1a26] via-[#191723] to-[#14111b] text-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
                <div className="text-2xl font-semibold tracking-wide text-[#ff7a2f] drop-shadow-[0_1px_0_rgba(0,0,0,0.6)]">
                    CampusMart
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden items-center gap-4 text-sm font-medium lg:flex">
                        <a className={linkClass(pathname === '/')} href="/">
                            Home
                        </a>
                        <a className={linkClass(pathname === '/items')} href="/items">
                            Item
                        </a>
                        <div className="group relative">
                            <button
                                className={linkClass(pathname.startsWith('/category/tech'))}
                                type="button"
                            >
                                Tech &amp; Gadgets
                                <span className="text-xs text-zinc-400">▾</span>
                            </button>
                            <div className="absolute left-0 top-full z-20 hidden min-w-[200px] rounded-xl border border-white/10 bg-[#1b1824] p-2 shadow-[0_12px_30px_rgba(0,0,0,0.45)] group-hover:block">
                                {['Laptop', 'Headphone', 'Calculator', 'Mouse', 'Charger'].map((item) => (
                                    <a
                                        key={item}
                                        className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                                        href="/category/tech"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="group relative">
                            <button
                                className={linkClass(pathname.startsWith('/category/books'))}
                                type="button"
                            >
                                Books &amp; Notes
                                <span className="text-xs text-zinc-400">▾</span>
                            </button>
                            <div className="absolute left-0 top-full z-20 hidden min-w-[220px] rounded-xl border border-white/10 bg-[#1b1824] p-2 shadow-[0_12px_30px_rgba(0,0,0,0.45)] group-hover:block">
                                {['Academic books', 'Reference books', 'Handwritten notes', 'Guide books'].map(
                                    (item) => (
                                        <a
                                            key={item}
                                            className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                                            href="/category/books"
                                        >
                                            {item}
                                        </a>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="group relative">
                            <button
                                className={linkClass(pathname.startsWith('/category/stationery'))}
                                type="button"
                            >
                                Stationery
                                <span className="text-xs text-zinc-400">▾</span>
                            </button>
                            <div className="absolute left-0 top-full z-20 hidden min-w-[210px] rounded-xl border border-white/10 bg-[#1b1824] p-2 shadow-[0_12px_30px_rgba(0,0,0,0.45)] group-hover:block">
                                {['Notebook', 'Pen', 'File', 'Drawing tools', 'Exam accessories'].map((item) => (
                                    <a
                                        key={item}
                                        className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                                        href="/category/stationery"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="group relative">
                            <button
                                className={linkClass(pathname.startsWith('/category/essentials'))}
                                type="button"
                            >
                                Accessories &amp; Essentials
                                <span className="text-xs text-zinc-400">▾</span>
                            </button>
                            <div className="absolute left-0 top-full z-20 hidden min-w-[220px] rounded-xl border border-white/10 bg-[#1b1824] p-2 shadow-[0_12px_30px_rgba(0,0,0,0.45)] group-hover:block">
                                {['Backpack', 'Water bottle', 'ID holder', 'Power bank', 'Desk accessories'].map(
                                    (item) => (
                                        <a
                                            key={item}
                                            className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                                            href="/category/essentials"
                                        >
                                            {item}
                                        </a>
                                    )
                                )}
                            </div>
                        </div>
                        <a className={linkClass(pathname === '/login')} href="/login">
                            Login
                        </a>
                    </div>
                    <div className="hidden items-center gap-3 md:flex">
                        <button
                            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-zinc-200 transition hover:border-white/30 hover:text-white"
                            type="button"
                            aria-label="Wishlist"
                        >
                            <FaHeart className="h-4 w-4" />
                        </button>
                        <button
                            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-zinc-200 transition hover:border-white/30 hover:text-white"
                            type="button"
                            aria-label="Cart"
                        >
                            <FaCartShopping className="h-4 w-4" />
                        </button>
                    </div>
                    <button
                        className="rounded-md bg-gradient-to-r from-[#ff8a3d] to-[#ff6a00] px-4 py-1.5 text-sm font-semibold text-white shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.02]"
                        type="button"
                    >
                        Login
                    </button>
                    <button
                        className="grid h-9 w-9 place-items-center text-zinc-200 transition-colors hover:text-white"
                        type="button"
                        aria-label="Open menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="4" y1="7" x2="20" y2="7" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="17" x2="20" y2="17" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
