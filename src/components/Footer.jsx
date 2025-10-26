import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-neutral-950/80">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm text-neutral-400">
              © {new Date().getFullYear()} powerfulwebsite.com · Curated directory of powerful websites, tools, apps, and AI.
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <a className="hover:text-white transition" href="#">About</a>
            <a className="hover:text-white transition" href="#">Submit a tool</a>
            <a className="hover:text-white transition" href="#">Privacy</a>
            <a className="hover:text-white transition" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
