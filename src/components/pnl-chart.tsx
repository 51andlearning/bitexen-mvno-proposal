"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// In millions of Rand
const DATA = [
  { year: "Year 1", subs: 25, revenue: 38.1, wholesale: 28.9, netProfit: 6.9, perParty: 3.5 },
  { year: "Year 2", subs: 75, revenue: 114.3, wholesale: 86.6, netProfit: 20.9, perParty: 10.5 },
  { year: "Year 3", subs: 150, revenue: 228.5, wholesale: 173.2, netProfit: 41.8, perParty: 20.9 },
  { year: "Year 4", subs: 225, revenue: 342.8, wholesale: 259.9, netProfit: 62.7, perParty: 31.4 },
  { year: "Year 5", subs: 300, revenue: 457.0, wholesale: 346.5, netProfit: 83.6, perParty: 41.8 },
];

function fmtR(v: number) {
  return `R${v.toFixed(0)}M`;
}

export default function PnLChart() {
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="bg-[#0A0E1A] px-6 py-4">
        <h3 className="text-sm font-semibold tracking-tight text-white">
          5-Year Growth Trajectory
        </h3>
      </div>
      <div className="p-6 md:p-8">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.95} />
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.6} />
                </linearGradient>
                <linearGradient id="profGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.95} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.6} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
              <XAxis dataKey="year" stroke="#64748B" fontSize={12} />
              <YAxis
                stroke="#64748B"
                fontSize={12}
                tickFormatter={(v) => `R${v}M`}
              />
              <Tooltip
                formatter={(value, name) => {
                  const labels: Record<string, string> = {
                    revenue: "Revenue",
                    wholesale: "Wholesale cost",
                    netProfit: "Net profit",
                    perParty: "Per party",
                    subs: "Subscribers",
                  };
                  const n = Number(value);
                  const key = String(name);
                  if (key === "subs") return [`${n}k`, labels[key]];
                  return [fmtR(n), labels[key] ?? key];
                }}
                contentStyle={{
                  backgroundColor: "#0A0E1A",
                  border: "1px solid #1E293B",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "12px",
                }}
                labelStyle={{ color: "#94A3B8", fontWeight: 600 }}
              />
              <Legend
                wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
                iconType="circle"
              />
              <Bar dataKey="revenue" name="Revenue" fill="url(#revGrad)" radius={[6, 6, 0, 0]} />
              <Bar dataKey="netProfit" name="Net profit" fill="url(#profGrad)" radius={[6, 6, 0, 0]} />
              <Line
                type="monotone"
                dataKey="perParty"
                name="Per party (50/50)"
                stroke="#F59E0B"
                strokeWidth={3}
                dot={{ fill: "#F59E0B", r: 5 }}
                activeDot={{ r: 7 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
          Revenue scales to <span className="font-semibold text-[#0EA5E9]">R457M</span> by Year 5 at 300k subscribers. Net profit reaches <span className="font-semibold text-emerald-600">R83.6M</span> — <span className="font-semibold text-amber-600">R41.8M</span> per party under the 50/50 split.
        </p>
      </div>
    </div>
  );
}
