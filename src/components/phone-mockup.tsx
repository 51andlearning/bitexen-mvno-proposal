export default function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 300 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Bitexen Mobile app preview"
        className="h-full w-full drop-shadow-[0_40px_60px_rgba(14,165,233,0.35)]"
      >
        {/* Phone body */}
        <rect x="0" y="0" width="300" height="600" rx="40" fill="#0F172A" />
        <rect x="6" y="6" width="288" height="588" rx="36" fill="#0A0E1A" />
        <rect x="10" y="10" width="280" height="580" rx="32" fill="#0F172A" />

        {/* Notch */}
        <rect x="110" y="18" width="80" height="22" rx="11" fill="#000" />

        {/* Status bar */}
        <text x="30" y="60" fill="#fff" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">9:41</text>
        <circle cx="250" cy="55" r="3" fill="#10B981" />
        <circle cx="262" cy="55" r="3" fill="#fff" opacity="0.6" />
        <circle cx="274" cy="55" r="3" fill="#fff" opacity="0.6" />

        {/* App header */}
        <text x="30" y="98" fill="#94A3B8" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="2">BITEXEN MOBILE</text>
        <text x="30" y="120" fill="#fff" fontSize="18" fontFamily="Inter, sans-serif" fontWeight="700">Welcome back</text>

        {/* Balance card */}
        <rect x="20" y="140" width="260" height="110" rx="16" fill="url(#balanceGrad)" />
        <text x="36" y="168" fill="#fff" fontSize="10" opacity="0.8" fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="1.5">MOBILE BALANCE</text>
        <text x="36" y="200" fill="#fff" fontSize="28" fontFamily="Inter, sans-serif" fontWeight="700">4.2 GB</text>
        <text x="36" y="220" fill="#fff" opacity="0.8" fontSize="11" fontFamily="Inter, sans-serif">of 5 GB · Pro plan</text>
        <rect x="36" y="230" width="228" height="4" rx="2" fill="#ffffff33" />
        <rect x="36" y="230" width="190" height="4" rx="2" fill="#fff" />

        {/* Crypto rewards card */}
        <rect x="20" y="270" width="260" height="100" rx="16" fill="#111827" stroke="#1E293B" />
        <circle cx="42" cy="298" r="14" fill="#10B98122" />
        <text x="42" y="303" fill="#10B981" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="700" textAnchor="middle">₿</text>
        <text x="66" y="295" fill="#fff" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600">Trading rewards</text>
        <text x="66" y="311" fill="#94A3B8" fontSize="10" fontFamily="Inter, sans-serif">This month</text>
        <text x="265" y="303" fill="#10B981" fontSize="16" fontFamily="Inter, sans-serif" fontWeight="700" textAnchor="end">+750 MB</text>

        <rect x="36" y="335" width="228" height="1" fill="#1E293B" />
        <text x="36" y="355" fill="#94A3B8" fontSize="10" fontFamily="Inter, sans-serif">BTXN balance</text>
        <text x="265" y="355" fill="#fff" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="600" textAnchor="end">45 BTXN</text>

        {/* Mini chart */}
        <rect x="20" y="390" width="260" height="120" rx="16" fill="#111827" stroke="#1E293B" />
        <text x="36" y="414" fill="#fff" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">Rewards trend</text>
        <text x="265" y="414" fill="#10B981" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600" textAnchor="end">+32%</text>
        <polyline
          points="40,490 70,475 100,480 130,460 160,450 190,435 220,420 250,400 260,395"
          stroke="url(#lineGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          points="40,490 70,475 100,480 130,460 160,450 190,435 220,420 250,400 260,395 260,500 40,500"
          fill="url(#areaGrad)"
          opacity="0.3"
        />

        {/* Bottom tabs */}
        <rect x="20" y="530" width="260" height="50" rx="16" fill="#111827" />
        <circle cx="55" cy="555" r="8" fill="#0EA5E9" />
        <circle cx="115" cy="555" r="4" fill="#64748B" />
        <circle cx="175" cy="555" r="4" fill="#64748B" />
        <circle cx="235" cy="555" r="4" fill="#64748B" />

        <defs>
          <linearGradient id="balanceGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
