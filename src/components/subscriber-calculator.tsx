"use client";

import { useState, useCallback } from "react";

// Per-sub economics (monthly, ex VAT, blended across mix)
const ARPU = 126.96;
const WHOLESALE_PER_SUB = 96.21;
const PLATFORM_FEE_PER_SUB = 7.50;
const PLATFORM_FEE_FLOOR = 75_000; // R75k/mo minimum

function fmt(n: number): string {
  if (n >= 1_000_000_000) return `R${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `R${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `R${(n / 1_000).toFixed(0)}k`;
  return `R${n.toFixed(0)}`;
}

function fmtSubs(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k`;
  return `${n}`;
}

// Fixed steps the slider snaps to — the slider has N discrete positions
const STEPS = [
  0, 5_000, 10_000, 25_000, 50_000, 75_000, 100_000, 150_000, 200_000,
  250_000, 300_000, 500_000, 750_000, 1_000_000, 2_000_000, 3_000_000,
  5_000_000, 7_500_000, 10_000_000,
];

// Scale labels with their step index so they position correctly
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

  const subs = STEPS[stepIndex];

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setStepIndex(Number(e.target.value));
  }, []);

  // Annual calculations
  const monthlyRevenue = subs * ARPU;
  const annualRevenue = monthlyRevenue * 12;
  const monthlyWholesale = subs * WHOLESALE_PER_SUB;
  const annualWholesale = monthlyWholesale * 12;
  const annualGrossProfit = annualRevenue - annualWholesale;
  const monthlyPlatformFee = Math.max(subs * PLATFORM_FEE_PER_SUB, PLATFORM_FEE_FLOOR);
  const annualPlatformFee = monthlyPlatformFee * 12;
  const annualNetProfit = annualGrossProfit - annualPlatformFee;
  const annualPerParty = annualNetProfit / 2;

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
      <div className="bg-[#0A0E1A] px-6 py-4">
        <h3 className="text-sm font-semibold tracking-tight text-white">
          Interactive P&L Calculator
        </h3>
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
          {/* Labels positioned to match their snap-point positions */}
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
        </p>
      </div>
    </div>
  );
}
