import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[58vh] md:h-[72vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/10 via-neutral-950/40 to-neutral-950 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-5xl px-4 md:px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Discover powerful websites, apps, and AI tools
            </h1>
            <p className="mt-3 md:mt-4 text-neutral-300 md:text-lg">
              A curated directory with Netflix-style browsing. Watch quick demos, explore categories, and find your next favorite tool.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex-1 max-w-xl relative">
                <input
                  type="text"
                  placeholder="Search by name, category, or feature..."
                  className="w-full bg-neutral-900/80 border border-white/10 rounded-lg py-3 pl-4 pr-4 text-sm md:text-base placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-rose-500/60 focus:border-rose-400/40"
                />
              </div>
              <button className="hidden md:inline-flex px-4 py-3 rounded-lg bg-rose-500 hover:bg-rose-400 text-white font-medium transition">
                Explore Trending
              </button>
            </div>
            <div className="mt-3 text-xs md:text-sm text-neutral-400">
              Interactive background: tap or hover to ripple the grid.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
