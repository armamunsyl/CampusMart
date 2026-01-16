'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaCartShopping, FaHeart, FaMoon, FaSun } from 'react-icons/fa6';

const Navbar = () => {
    const pathname = usePathname();
    const [theme, setTheme] = useState('light');
    const linkClass = (isActive) =>
        `pb-1 transition-colors ${
            isActive ? 'border-b-2 border-[#ff7a2f] text-white' : 'text-zinc-300 hover:text-white'
        }`;

    useEffect(() => {
        const stored = typeof window !== 'undefined' ? localStorage.getItem('cm-theme') : null;
        if (stored === 'light' || stored === 'dark') {
            setTheme(stored);
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('theme-dark', 'theme-light');
        root.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark');
        localStorage.setItem('cm-theme', theme);
    }, [theme]);

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
                        <button
                            className="relative flex h-9 w-16 items-center rounded-full border border-white/10 bg-white/5 px-1 text-zinc-200 transition hover:border-white/30"
                            type="button"
                            aria-label="Toggle theme"
                            onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
                        >
                            <span className="flex w-full items-center justify-between text-[11px]">
                                <FaSun />
                                <FaMoon />
                            </span>
                            <span
                                className={`absolute top-1 h-7 w-7 rounded-full bg-white text-[#ff7a2f] shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-transform ${
                                    theme === 'dark' ? 'translate-x-0' : 'translate-x-7'
                                }`}
                            >
                                <span className="flex h-full w-full items-center justify-center text-sm">
                                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                                </span>
                            </span>
                        </button>
                        <a
                            className="rounded-md bg-gradient-to-r from-[#ff8a3d] to-[#ff6a00] px-4 py-1.5 text-sm font-semibold text-white shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.02]"
                            href="/login"
                        >
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
