'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
    FaCartShopping,
    FaHeart,
    FaMoon,
    FaSun,
    FaCircleUser,
    FaPlus,
    FaBars,
    FaXmark,
    FaChevronDown,
} from 'react-icons/fa6';
import { getAuthStatus } from '../utils/auth';

const Navbar = () => {
    const pathname = usePathname();
    const [theme, setTheme] = useState('light');
    const [authChecked, setAuthChecked] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [avatarOpen, setAvatarOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropdowns, setMobileDropdowns] = useState({
        tech: false,
        books: false,
        stationery: false,
        essentials: false,
    });
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

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const data = await getAuthStatus();
                setIsLoggedIn(Boolean(data.loggedIn));
                setUserEmail(data.email || '');
            } finally {
                setAuthChecked(true);
            }
        };

        checkAuth();
    }, []);

    return (
        <nav className="fixed left-0 right-0 top-0 z-50 w-full bg-gradient-to-r from-[#1c1a26] via-[#191723] to-[#14111b] text-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            <div className="mx-auto flex max-w-6xl items-center px-6 py-3">
                <div className="text-2xl font-semibold tracking-wide text-[#ff7a2f] drop-shadow-[0_1px_0_rgba(0,0,0,0.6)]">
                    CampusMart
                </div>
                <div className="ml-auto flex items-center gap-4">
                    <button
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-200 transition hover:border-white/30 hover:text-white lg:hidden"
                        type="button"
                        aria-label="Open menu"
                        onClick={() => setMobileOpen(true)}
                    >
                        <FaBars className="h-5 w-5" />
                    </button>
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
                        <a
                            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-zinc-200 transition hover:border-white/30 hover:text-white"
                            href="/add-item"
                            aria-label="Add item"
                        >
                            <FaPlus className="h-4 w-4" />
                        </a>
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
                        {authChecked && !isLoggedIn ? (
                            <a
                                className="rounded-md bg-gradient-to-r from-[#ff8a3d] to-[#ff6a00] px-4 py-1.5 text-sm font-semibold text-white shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.02]"
                                href="/login"
                            >
                                Login
                            </a>
                        ) : null}
                        {authChecked && isLoggedIn ? (
                            <div className="relative">
                                <button
                                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-zinc-100 transition hover:border-white/30"
                                    type="button"
                                    aria-label="Account menu"
                                    onClick={() => setAvatarOpen((prev) => !prev)}
                                >
                                    <FaCircleUser className="h-5 w-5" />
                                    <span className="hidden sm:inline">Account</span>
                                </button>
                                {avatarOpen ? (
                                    <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-[#1b1824] p-4 text-sm text-zinc-200 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
                                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                                            Signed in
                                        </p>
                                        <p className="mt-2 break-all font-semibold text-white">
                                            {userEmail || 'admin@campusmart.com'}
                                        </p>
                                        <a
                                            className="mt-4 block w-full rounded-xl bg-gradient-to-r from-[#ff8a3d] to-[#ff6a00] px-4 py-2 text-center text-xs font-semibold text-white shadow-[0_8px_16px_rgba(0,0,0,0.35)] transition hover:brightness-110"
                                            href="/logout"
                                        >
                                            Log out
                                        </a>
                                    </div>
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <div
                className={`fixed inset-0 z-50 bg-black/70 transition-opacity lg:hidden ${
                    mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
                onClick={() => setMobileOpen(false)}
            />
            <aside
                className={`fixed right-0 top-0 z-[60] h-full w-72 transform bg-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-transform lg:hidden ${
                    mobileOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">Account</p>
                        <p className="mt-2 text-sm font-semibold">
                            {isLoggedIn ? userEmail || 'admin@campusmart.com' : 'Not signed in'}
                        </p>
                    </div>
                    <button
                        className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-white/30 hover:text-white"
                        type="button"
                        aria-label="Close menu"
                        onClick={() => setMobileOpen(false)}
                    >
                        <FaXmark className="h-5 w-5" />
                    </button>
                </div>
                <div className="px-5 py-4">
                    <div className="grid gap-2">
                        <a
                            className="rounded-xl bg-gradient-to-r from-[#ff8a3d] to-[#ff6a00] px-4 py-2 text-center text-xs font-semibold text-white"
                            href={isLoggedIn ? '/logout' : '/login'}
                            onClick={() => setMobileOpen(false)}
                        >
                            {isLoggedIn ? 'Log out' : 'Login'}
                        </a>
                    </div>
                    <nav className="mt-6 space-y-2 text-sm text-white/80">
                        <a
                            className="block rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white"
                            href="/"
                            onClick={() => setMobileOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            className="block rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white"
                            href="/items"
                            onClick={() => setMobileOpen(false)}
                        >
                            Items
                        </a>
                        <a
                            className="flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white"
                            href="/add-item"
                            onClick={() => setMobileOpen(false)}
                        >
                            <FaPlus className="h-4 w-4 text-[#ff7a2f]" />
                            Add Item
                        </a>
                        <div className="rounded-lg">
                            <button
                                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium text-white/90"
                                type="button"
                                onClick={() =>
                                    setMobileDropdowns((prev) => ({
                                        ...prev,
                                        tech: !prev.tech,
                                    }))
                                }
                            >
                                Tech &amp; Gadgets
                                <FaChevronDown
                                    className={`h-3.5 w-3.5 transition ${
                                        mobileDropdowns.tech ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {mobileDropdowns.tech ? (
                                <div className="space-y-1 px-3 pb-3 text-[12px] text-white/70">
                                    {['Laptop', 'Headphone', 'Calculator', 'Mouse', 'Charger'].map((item) => (
                                        <a
                                            key={item}
                                            className="block rounded-md px-2 py-1 transition hover:bg-white/10 hover:text-white"
                                            href="/category/tech"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                        <div className="rounded-lg">
                            <button
                                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium text-white/90"
                                type="button"
                                onClick={() =>
                                    setMobileDropdowns((prev) => ({
                                        ...prev,
                                        books: !prev.books,
                                    }))
                                }
                            >
                                Books &amp; Notes
                                <FaChevronDown
                                    className={`h-3.5 w-3.5 transition ${
                                        mobileDropdowns.books ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {mobileDropdowns.books ? (
                                <div className="space-y-1 px-3 pb-3 text-[12px] text-white/70">
                                    {[
                                        'Academic books',
                                        'Reference books',
                                        'Handwritten notes',
                                        'Guide books',
                                    ].map((item) => (
                                        <a
                                            key={item}
                                            className="block rounded-md px-2 py-1 transition hover:bg-white/10 hover:text-white"
                                            href="/category/books"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                        <div className="rounded-lg">
                            <button
                                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium text-white/90"
                                type="button"
                                onClick={() =>
                                    setMobileDropdowns((prev) => ({
                                        ...prev,
                                        stationery: !prev.stationery,
                                    }))
                                }
                            >
                                Stationery
                                <FaChevronDown
                                    className={`h-3.5 w-3.5 transition ${
                                        mobileDropdowns.stationery ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {mobileDropdowns.stationery ? (
                                <div className="space-y-1 px-3 pb-3 text-[12px] text-white/70">
                                    {[
                                        'Notebook',
                                        'Pen',
                                        'File',
                                        'Drawing tools',
                                        'Exam accessories',
                                    ].map((item) => (
                                        <a
                                            key={item}
                                            className="block rounded-md px-2 py-1 transition hover:bg-white/10 hover:text-white"
                                            href="/category/stationery"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                        <div className="rounded-lg">
                            <button
                                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium text-white/90"
                                type="button"
                                onClick={() =>
                                    setMobileDropdowns((prev) => ({
                                        ...prev,
                                        essentials: !prev.essentials,
                                    }))
                                }
                            >
                                Accessories &amp; Essentials
                                <FaChevronDown
                                    className={`h-3.5 w-3.5 transition ${
                                        mobileDropdowns.essentials ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {mobileDropdowns.essentials ? (
                                <div className="space-y-1 px-3 pb-3 text-[12px] text-white/70">
                                    {[
                                        'Backpack',
                                        'Water bottle',
                                        'ID holder',
                                        'Power bank',
                                        'Desk accessories',
                                    ].map((item) => (
                                        <a
                                            key={item}
                                            className="block rounded-md px-2 py-1 transition hover:bg-white/10 hover:text-white"
                                            href="/category/essentials"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </nav>
                </div>
            </aside>
        </nav>
    );
};

export default Navbar;
