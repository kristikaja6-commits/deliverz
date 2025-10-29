import React from "react";

/**
 * Animated car that drives across the bottom of the page.
 * Uses CSS keyframe animation defined in luxury CSS file.
 */
export default function AnimatedCar({ height = 80 }) {
  return (
    <div className="car-wrapper pointer-events-none" aria-hidden="true">
      <div className="car-track">
        <svg className="car" viewBox="0 0 200 60" preserveAspectRatio="xMinYMid meet" height={height}>
          <defs>
            <linearGradient id="gold" x1="0" x2="1">
              <stop offset="0" stopColor="#f7d08a" />
              <stop offset="1" stopColor="#d4af37" />
            </linearGradient>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.25"/>
            </filter>
          </defs>

          <g filter="url(#shadow)">
            <rect x="10" y="16" rx="8" ry="8" width="140" height="30" fill="url(#gold)" />
            <rect x="30" y="6" rx="6" ry="6" width="80" height="24" fill="#0b1220" />
            <circle cx="40" cy="48" r="6" fill="#0b1220" />
            <circle cx="110" cy="48" r="6" fill="#0b1220" />
            <g fill="#fff" opacity="0.9">
              <rect x="36" y="10" width="32" height="8" rx="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}