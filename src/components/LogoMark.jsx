import React from 'react'

/**
 * A custom (non-copyrighted) logomark inspired by a "flame + gear" idea.
 * Replace with your official assets later.
 */
export default function LogoMark({ size = 44 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      {/* Gear ring */}
      <path
        d="M32 6.5l3 4.6 5.4-1.2 1.5 5.2 5 2.3-1.2 5.4 4.6 3-3.4 4.4 3.4 4.4-4.6 3 1.2 5.4-5 2.3-1.5 5.2-5.4-1.2-3 4.6-3-4.6-5.4 1.2-1.5-5.2-5-2.3 1.2-5.4-4.6-3 3.4-4.4-3.4-4.4 4.6-3-1.2-5.4 5-2.3 1.5-5.2 5.4 1.2 3-4.6Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.35"
      />
      {/* Inner circle */}
      <circle
        cx="32"
        cy="32"
        r="16"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />
      {/* Flame */}
      <path
        d="M34.4 18.2c2.2 4.7-.7 7.3-1.6 9.6-.7 1.7-.1 3.2 1 4.3 2.3 2.3 2.7 4.9 1.5 7.2-1.6 3.1-5.6 5.1-9.3 3.6-4.1-1.6-5.7-6.3-3.5-10.2 1.2-2.2 3.1-3.4 4.2-5.1 1.5-2.3 1.1-5.2-.9-7.2 3.4.4 6.1 2.2 8.6-2.2Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}
