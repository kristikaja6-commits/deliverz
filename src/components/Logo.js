import React from "react";

/**
 * Simple luxury-style SVG mark (scalable).
 */
export default function Logo({ size = 48 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo"
    >
      <rect x="0" y="0" width="64" height="64" rx="12" fill="#071226" />
      <g transform="translate(8,8)" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M6 28c6-12 20-12 26 0" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 28c6-6 20-6 26 0" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="19" cy="12" r="6" fill="#D4AF37" />
      </g>
    </svg>
  );
}