'use client';

import React, { useEffect, useState } from 'react';

const slides = [
    {
        badge: 'Curated weekly drops',
        title: 'Up to 200 taka cashback',
        description:
            'Grab limited-time campus deals with instant cashback on essentials and gadgets.',
        primaryCta: 'Explore Deals',
        secondaryCta: 'View Dashboard',
        image:
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80',
    },
    {
        badge: 'Campus tech week',
        title: 'Build Your Elite Setup',
        description:
            'From laptops to accessories, discover bundles that keep your semester on track.',
        primaryCta: 'Shop Tech',
        secondaryCta: 'See Bundles',
        image:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
    },
    {
        badge: 'Student picks',
        title: 'Fresh Deals on Gadgets',
        description:
            'New listings every day. Save big on headphones, calculators, and more.',
        primaryCta: 'Browse Items',
        secondaryCta: 'Sell Item',
        image:
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    },
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-[#f7f7fb]">
            <div className="mx-auto w-full max-w-6xl px-6 pb-8 pt-4">
                <div className="relative h-[240px] overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_24px_40px_rgba(15,23,42,0.16)] md:h-[320px]">
                    {slides.map((slide, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={slide.title}
                                className={`absolute inset-0 transition-opacity duration-700 ${
                                    isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
                                }`}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
                                <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-6 py-6 text-white md:max-w-xl md:px-10">
                                    <span className="w-fit rounded-full border border-white/30 bg-white/15 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/90">
                                        {slide.badge}
                                    </span>
                                    <h2 className="text-2xl font-semibold leading-tight md:text-4xl">
                                        {slide.title}
                                    </h2>
                                    <p className="text-sm leading-6 text-white/75 md:text-base">
                                        {slide.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        <button
                                            className="rounded-full bg-gradient-to-r from-[#ff8a3d] to-[#ff6a00] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(0,0,0,0.35)] transition hover:brightness-110"
                                            type="button"
                                        >
                                            {slide.primaryCta}
                                        </button>
                                        <button
                                            className="rounded-full border border-white/35 px-5 py-2 text-sm font-semibold text-white/90 transition hover:border-white"
                                            type="button"
                                        >
                                            {slide.secondaryCta}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.title}
                                className={`h-2.5 w-7 rounded-full transition-all ${
                                    activeIndex === index ? 'bg-white/90' : 'bg-white/40'
                                }`}
                                type="button"
                                aria-label={`Go to slide ${index + 1}`}
                                onClick={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
