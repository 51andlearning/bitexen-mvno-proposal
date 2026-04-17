"use client";

import { useState, useCallback, useEffect } from "react";

// Per-sub economics (monthly, ex VAT, blended across mix)
const ARPU = 126.96;
const WHOLESALE_PER_SUB = 96.21;
const PLATFORM_FEE_PER_SUB = 7.50;
const PLATFORM_FEE_FLOOR = 75_000; // R75k/mo minimum

// Fallback rate used if the live API is unreachable
const FALLBACK_ZAR_TO_USD = 0.053;

type Currency = "ZAR" | "USD";

function fmtZAR(n: number): string {
  if (n >= 1_000_000_000) return `R${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `R${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `R${(n / 1_000).toFixed(0)}k`;
  return `R${n.toFixed(0)}`;
}

function fmtUSD(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}k`;
  return `$${n.toFixed(0)}`;
}

function fmtSubs(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k`;
  return `${n}`;
}

const STEPS = [
  0, 5_000, 10_000, 25_000, 50_000, 75_000, 100_000, 150_000, 200_000,
  250_000, 300_000, 500_000, 750_000, 1_000_000, 2_000_000, 3_000_000,
  5_000_000, 7_500_000, 10_000_000,
];

const LABELS: { text: string; index: number }[] = [
  { text: "0", index: 0 },
  { text: "100k", index: 6 },
  { text: "500k", index: 11 },
  { text: "1M", index: 13 },
  { text: "5M", index: 16 },
  { text: "10M", index: 18 },
];

const MAX_INDEX = STEPS.length - 1;

export default function SubscriberCalculator() {
  const [stepIndex, setStepIndex] = useState(6); // default 100k
  const [currency, setCurrency] = useState<Currency>("ZAR");
  const [rate, setRate] = useState<number>(FALLBACK_ZAR_TO_USD);
  const [rateFetchedAt, setRateFetchedAt] = useState<string | null>(null);
  const [rateError, setRateError] = useState<boolean>(false);

  // Fetch live ZAR -> USD rate on mount
  useEffect(() => {
    let cancelled = false;
    async function fetchRate() {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/ZAR", {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Rate fetch failed");
        const data = await res.json();
        const usd = data?.rates?.USD;
        if (typeof usd !== "number" || !cancelled) {
          if (typeof usd === "number" && !cancelled) {
            setRate(usd);
            setRateFetchedAt(
              new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            );
            setRateError(false);
          }
        }
      } catch {
        if (!cancelled) setRateError(true);
      }
    }
    fetchRate();
    return () => {
      cancelled = true;
    };
  }, []);

  const subs = STEPS[stepIndex];

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setStepIndex(Number(e.target.value));
  }, []);

  // Annual calculations (ZAR)
  const monthlyRevenue = subs * ARPU;
  const annualRevenue = monthlyRevenue * 12;
  const monthlyWholesale = subs * WHOLESALE_PER_SUB;
  const annualWholesale = monthlyWholesale * 12;
  const annualGrossProfit = annualRevenue - annualWholesale;
  const monthlyPlatformFee = Math.max(subs * PLATFORM_FEE_PER_SUB, PLATFORM_FEE_FLOOR);
  const annualPlatformFee = monthlyPlatformFee * 12;
  const annualNetProfit = annualGrossProfit - annualPlatformFee;
  const annualPerParty = annualNetProfit / 2;

  const conv = (zar: number) => (currency === "USD" ? zar * rate : zar);
  const fmt = (zar: number) => (currency === "USD" ? fmtUSD(conv(zar)) : fmtZAR(zar));

  const metrics = [
    { label: "Annual Revenue", value: fmt(annualRevenue), color: "text-[#0EA5E9]" },
    { label: "Wholesale Cost", value: fmt(annualWholesale), color: "text-slate-500" },
    { label: "Gross Profit", value: fmt(annualGrossProfit), color: "text-[#0F172A]" },
    { label: "Platform Fee", value: fmt(annualPlatformFee), color: "text-slate-500" },
    { label: "Net Profit", value: fmt(Math.max(annualNetProfit, 0)), color: "text-emerald-600" },
    { label: "Per Party (50/50)", value: fmt(Math.max(annualPerParty, 0)), color: "font-bold text-emerald-600" },
  ];

  const pct = (stepIndex / MAX_INDEX) * 100;

  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0A0E1A] px-6 py-4">
        <h3 className="text-sm font-semibold tracking-tight text-white">
          Interactive P&L Calculator
        </h3>

        {/* Currency toggle */}
        <div className="flex items-center gap-3">
          <div className="inline-flex overflow-hidden rounded-full border border-white/20 bg-white/5 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setCurrency("ZAR")}
              aria-pressed={currency === "ZAR"}
              className={
                currency === "ZAR"
                  ? "rounded-full bg-[#0EA5E9] px-3 py-1 text-white transition"
                  : "rounded-full px-3 py-1 text-slate-300 transition hover:text-white"
              }
            >
              ZAR (R)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              aria-pressed={currency === "USD"}
              className={
                currency === "USD"
                  ? "rounded-full bg-[#10B981] px-3 py-1 text-white transition"
                  : "rounded-full px-3 py-1 text-slate-300 transition hover:text-white"
              }
            >
              USD ($)
            </button>
          </div>
        </div>
      </div>

      {/* Live rate banner */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 bg-[#F8FAFC] px-6 py-2 text-[11px] text-slate-600">
        <div className="flex items-center gap-1.5">
          <span className={`inline-block h-2 w-2 rounded-full ${rateError ? "bg-amber-400" : "bg-emerald-500"} ${rateError ? "" : "animate-pulse"}`} />
          <span className="font-semibold">Live rate:</span>
          <span>R1 = ${rate.toFixed(4)} USD</span>
          <span className="text-slate-400">·</span>
          <span>$1 = R{(1 / rate).toFixed(2)}</span>
        </div>
        <div className="text-slate-400">
          {rateError
            ? "Using fallback rate — live feed unavailable"
            : rateFetchedAt
              ? `Updated ${rateFetchedAt} · source: open.er-api.com`
              : "Fetching live rate…"}
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Subscriber count display */}
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Active Subscribers
          </span>
          <span className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
            {fmtSubs(subs)}
          </span>
        </div>

        {/* Slider */}
        <div className="relative mt-4 mb-8">
          <div className="relative h-2 w-full rounded-full bg-slate-100">
            <div
              className="absolute left-0 top-0 h-2 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#10B981]"
              style={{ width: `${pct}%` }}
            />
          </div>
          <input
            type="range"
            min={0}
            max={MAX_INDEX}
            step={1}
            value={stepIndex}
            onChange={handleChange}
            className="absolute inset-0 h-2 w-full cursor-pointer appearance-none bg-transparent [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0EA5E9] [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(14,165,233,0.3)] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0EA5E9] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(14,165,233,0.3)]"
          />
          <div className="relative mt-2 h-4">
            {LABELS.map((l) => (
              <span
                key={l.text}
                className="absolute -translate-x-1/2 text-[10px] text-slate-400"
                style={{ left: `${(l.index / MAX_INDEX) * 100}%` }}
              >
                {l.text}
              </span>
            ))}
          </div>
        </div>

        {/* Metric cards */}
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-4 text-center transition hover:border-[#0EA5E9]/20"
            >
              <div className={`text-xl font-bold tracking-tight md:text-2xl ${m.color}`}>
                {m.value}
              </div>
              <div className="mt-1 text-[11px] font-medium text-slate-500">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
          Annualised figures based on blended ARPU R126.96 ex VAT, wholesale cost R96.21/sub, platform fee R7.50/sub or R75k/mo (whichever higher). 50/50 net profit split. SIM cost excluded (once-off).
          {currency === "USD" && (
            <> All values converted at the live ZAR→USD rate shown above.</>
          )}
        </p>
      </div>
    </div>
  );
}
