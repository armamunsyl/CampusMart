import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0c0a13] text-white">
            <div className="mx-auto w-full max-w-6xl px-6 pb-10 pt-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="text-xl font-semibold text-[#ff7a2f]">CampusMart</h3>
                        <p className="mt-3 text-sm text-white/70">
                            Buy and sell campus essentials with trusted students nearby.
                        </p>
                        <div className="mt-4 text-sm text-white/60">
                            <p>Dhaka, Bangladesh</p>
                            <p>support@campusmart.com</p>
                            <p>+880 1XXX-XXXXXX</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
                            Quick Links
                        </h4>
                        <ul className="mt-4 space-y-2 text-sm text-white/70">
                            <li>
                                <a className="transition hover:text-white" href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="transition hover:text-white" href="#">
                                    Items
                                </a>
                            </li>
                            <li>
                                <a className="transition hover:text-white" href="#">
                                    Add Item
                                </a>
                            </li>
                            <li>
                                <a className="transition hover:text-white" href="#">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
                            Categories
                        </h4>
                        <ul className="mt-4 space-y-2 text-sm text-white/70">
                            <li>Laptops</li>
                            <li>Accessories</li>
                            <li>Calculators</li>
                            <li>Stationery</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
                            Stay Updated
                        </h4>
                        <p className="mt-4 text-sm text-white/70">
                            Get campus deals and seller tips delivered to your inbox.
                        </p>
                        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <input
                                className="h-11 w-full rounded-full border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff7a2f]/60 sm:flex-1"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <button
                                className="h-11 shrink-0 rounded-full bg-gradient-to-r from-[#ff8a3d] to-[#ff6a00] px-6 text-sm font-semibold text-white"
                                type="button"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
                    <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                        <span>© 2025 CampusMart. All rights reserved.</span>
                        <div className="flex gap-4">
                            <a className="transition hover:text-white" href="#">
                                Privacy
                            </a>
                            <a className="transition hover:text-white" href="#">
                                Terms
                            </a>
                            <a className="transition hover:text-white" href="#">
                                Help
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
