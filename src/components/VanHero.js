import React from "react";

/**
 * VanHero - a scalable SVG delivery van illustration with subtle shine and float animation.
 * Place this under the Header so it appears at the top of the page.
 */
export default function VanHero({ height = 220 }) {
  return (
    <div className="van-hero">
      <svg
        viewBox="0 0 1200 320"
        preserveAspectRatio="xMidYMid slice"
        className="van-hero-svg"
        height={height}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#1f2937" />
            <stop offset="1" stopColor="#0b1220" />
          </linearGradient>
          <linearGradient id="goldShine" x1="0" x2="1">
            <stop offset="0" stopColor="#ffd97d" stopOpacity="0.95" />
            <stop offset="1" stopColor="#d4af37" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="accGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#6ee7b7" />
            <stop offset="1" stopColor="#60a5fa" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="12" stdDeviation="22" floodColor="#000" floodOpacity="0.45"/>
          </filter>
        </defs>

        <rect x="0" y="0" width="1200" height="320" fill="transparent" />

        <g transform="translate(0,120)">
          <path d="M0 160 L1200 80 L1200 200 L0 280 Z" fill="rgba(3,7,18,0.6)"/>
          <rect x="0" y="140" width="1200" height="40" fill="rgba(255,255,255,0.03)"/>
        </g>

        <g className="van" transform="translate(120,40)" filter="url(#softShadow)">
          <rect x="0" y="40" rx="18" ry="18" width="560" height="90" fill="url(#bodyGrad)" />
          <rect x="420" y="10" rx="12" ry="12" width="140" height="90" fill="#101827" />
          <rect x="16" y="60" rx="6" ry="6" width="260" height="14" fill="url(#goldShine)" opacity="0.95" />
          <rect x="280" y="72" rx="4" ry="4" width="220" height="8" fill="url(#accGrad)" opacity="0.9"/>
          <rect x="440" y="22" rx="6" ry="6" width="80" height="34" fill="#cfeffd" opacity="0.12" />
          <rect x="460" y="28" rx="3" ry="3" width="36" height="20" fill="#e6f7ff" opacity="0.06" />
          <g>
            <circle cx="130" cy="140" r="30" fill="#0b1220" />
            <circle cx="430" cy="140" r="30" fill="#0b1220" />
            <circle cx="130" cy="140" r="12" fill="#d4af37" />
            <circle cx="430" cy="140" r="12" fill="#d4af37" />
          </g>
          <g transform="translate(80,60)">
            <rect x="-20" y="-18" width="120" height="36" rx="8" fill="rgba(255,255,255,0.04)"/>
            <text x="10" y="6" fontFamily="Inter, Arial" fontSize="18" fill="#ffd97d" fontWeight="700">deliverz</text>
          </g>
        </g>

        <g className="neon" opacity="0.7">
          <circle cx="980" cy="60" r="40" fill="rgba(96,165,250,0.06)"/>
          <circle cx="60" cy="40" r="24" fill="rgba(110,231,183,0.04)"/>
        </g>
      </svg>
    </div>
  );
}