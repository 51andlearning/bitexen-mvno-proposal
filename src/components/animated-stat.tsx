"use client";

import { useEffect, useRef, useState } from "react";

// Animates a numeric stat when it enters the viewport.
// Handles: plain numbers, $505M, 4.3M, R127, 2M+, 50/50, 24.2%, Pan African (pass-through for non-numeric)
export default function AnimatedStat({ value, className = "" }: { value: string; className?: string }) {
  const [display, setDisplay] = useState(value);
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasRun) return;
    const el = ref.current;
    if (!el) return;

    // Parse numeric part: extract prefix (R, $), number, and suffix (M, B, k, %, +)
    const match = value.match(/^(R|\$)?([\d.]+)([A-Za-z%+]*)$/);
    if (!match) {
      // Non-numeric stat — just show and mark done
      setHasRun(true);
      return;
    }
    const prefix = match[1] ?? "";
    const target = parseFloat(match[2]);
    const suffix = match[3] ?? "";
    if (isNaN(target)) {
      setHasRun(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasRun) {
            setHasRun(true);
            const duration = 1400;
            const start = performance.now();
            const isInt = Number.isInteger(target);

            function step(now: number) {
              const elapsed = now - start;
              const t = Math.min(elapsed / duration, 1);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - t, 3);
              const current = target * eased;
              const str = isInt ? String(Math.round(current)) : current.toFixed(1);
              setDisplay(`${prefix}${str}${suffix}`);
              if (t < 1) requestAnimationFrame(step);
              else setDisplay(value);
            }
            requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasRun]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
