import React from 'react';
import { Rocket, Search, Menu } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-rose-400" />
            <a href="/" className="font-semibold tracking-tight">powerfulwebsite.com</a>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-5 text-sm text-neutral-300">
              <a className="hover:text-white transition" href="#">Home</a>
              <a className="hover:text-white transition" href="#">Categories</a>
              <a className="hover:text-white transition" href="#">Top Rated</a>
              <a className="hover:text-white transition" href="#">Submit</a>
            </nav>
            <div className="relative">
              <input
                type="text"
                placeholder="Search tools, apps, AI..."
                className="w-64 bg-neutral-900/80 border border-white/10 rounded-md py-2 pl-9 pr-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-rose-500/60 focus:border-rose-400/40"
              />
              <Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500" />
            </div>
          </div>
          <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 bg-neutral-900/60">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
