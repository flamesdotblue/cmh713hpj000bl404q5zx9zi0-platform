import React, { useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';

function classNames(...arr) {
  return arr.filter(Boolean).join(' ');
}

export default function CategoryRow({ title, items = [] }) {
  const scrollRef = useRef(null);

  const scrollByAmount = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.min(800, el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  const cards = useMemo(() => items, [items]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h2 className="text-lg md:text-2xl font-bold tracking-tight">{title}</h2>
        <a href="#" className="text-xs md:text-sm text-neutral-400 hover:text-white transition">See all</a>
      </div>

      <div className="relative group">
        <button
          aria-label="Scroll left"
          onClick={() => scrollByAmount(-1)}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-neutral-900/80 border border-white/10 hover:border-white/20 shadow-lg opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="relative overflow-x-auto scrollbar-none snap-x snap-mandatory"
        >
          <div className="flex gap-3 md:gap-4 pr-4">
            {cards.map((item) => (
              <ToolCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <button
          aria-label="Scroll right"
          onClick={() => scrollByAmount(1)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-neutral-900/80 border border-white/10 hover:border-white/20 shadow-lg opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function ToolCard({ item }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const onEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  };

  const onLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  const onTogglePlayMobile = () => {
    // Simple tap-to-toggle play/pause for mobile
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.muted = true;
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group/card w-[72vw] xs:w-[60vw] sm:w-[46vw] md:w-[320px] lg:w-[360px] snap-start shrink-0"
    >
      <div
        ref={containerRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={onTogglePlayMobile}
        className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900 border border-white/10"
      >
        <img
          src={item.thumbnail}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover/card:opacity-0 transition-opacity duration-300"
          loading="lazy"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
          src={item.video}
          playsInline
          preload="none"
          muted
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

        <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 text-[10px] uppercase tracking-wide">
              <Play className="w-3 h-3" />
              Demo
            </div>
          </div>
          <div className="inline-flex items-center gap-1 text-yellow-400 text-xs bg-black/40 rounded px-1.5 py-0.5">
            <Star className="w-3.5 h-3.5 fill-yellow-400" />
            <span className="font-medium">{item.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="px-0.5 mt-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold leading-tight truncate">{item.name}</h3>
          <div className="hidden md:block text-xs text-neutral-400 truncate max-w-[40%]">{new URL(item.url).hostname}</div>
        </div>
        <p className="mt-1 text-sm text-neutral-400 line-clamp-2 min-h-[2.5rem]">{item.description}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.tags?.map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
