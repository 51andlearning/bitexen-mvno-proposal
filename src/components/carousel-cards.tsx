"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface CarouselCardsProps {
  children: React.ReactNode;
  desktopPerView?: 3 | 4;
}

export default function CarouselCards({
  children,
  desktopPerView = 3,
}: CarouselCardsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const checkBounds = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkBounds();
    el.addEventListener("scroll", checkBounds, { passive: true });
    window.addEventListener("resize", checkBounds);
    return () => {
      el.removeEventListener("scroll", checkBounds);
      window.removeEventListener("resize", checkBounds);
    };
  }, [checkBounds]);

  function scroll(direction: "prev" | "next") {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  }

  const gridCols =
    desktopPerView === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="relative">
      {/* Navigation arrows */}
      <div className="pointer-events-none absolute -top-14 right-0 z-10 flex items-center gap-2 md:-top-16">
        <button
          type="button"
          onClick={() => scroll("prev")}
          disabled={!canPrev}
          className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-white"
          aria-label="Previous"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll("next")}
          disabled={!canNext}
          className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-white"
          aria-label="Next"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className={`grid auto-cols-[85%] grid-flow-col gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 md:auto-cols-auto md:grid-flow-row md:overflow-visible md:snap-none ${gridCols}`}
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </div>
    </div>
  );
}
