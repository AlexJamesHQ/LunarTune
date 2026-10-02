import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { playButterflyFlutter } from '../utils/audio';

interface ButterflyData {
  id: number;
  top: number; // percentage
  left: number; // percentage
  size: number;
  duration: number; // seconds
  delay: number;
  color: string;
  wingColor: string;
}

const BUTTERFLIES: ButterflyData[] = [
  { id: 1, top: 18, left: 8, size: 36, duration: 18, delay: 0, color: '#C084FC', wingColor: '#E9D5FF' },
  { id: 2, top: 42, left: 88, size: 32, duration: 22, delay: 2, color: '#F472B6', wingColor: '#FCE7F3' },
  { id: 3, top: 68, left: 12, size: 28, duration: 20, delay: 4, color: '#60A5FA', wingColor: '#DBEAFE' },
  { id: 4, top: 82, left: 82, size: 34, duration: 24, delay: 1, color: '#FBBF24', wingColor: '#FEF3C7' },
  { id: 5, top: 28, left: 92, size: 30, duration: 19, delay: 3, color: '#34D399', wingColor: '#D1FAE5' }
];

export const FlyingButterflies: React.FC = () => {
  const { retroSound } = useTheme();
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleButterflyClick = (id: number) => {
    setActiveId(id);
    playButterflyFlutter(retroSound);
    setTimeout(() => {
      setActiveId(null);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[15] overflow-hidden">
      {BUTTERFLIES.map((b) => {
        const isSpun = activeId === b.id;
        return (
          <div
            key={b.id}
            onClick={() => handleButterflyClick(b.id)}
            style={{
              top: `${b.top}%`,
              left: `${b.left}%`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`
            }}
            className="absolute pointer-events-auto cursor-pointer animate-float-drift hover:scale-125 transition-transform duration-200 select-none group"
            title="Click the butterfly!"
          >
            <div className={`relative ${isSpun ? 'animate-spin' : ''}`}>
              <svg
                width={b.size}
                height={b.size}
                viewBox="0 0 64 64"
                className="filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]"
              >
                {/* Left Wing with flutter animation */}
                <path
                  d="M32 32 C20 10, 2 16, 6 36 C10 46, 26 44, 32 34 Z"
                  fill={b.color}
                  stroke="#000000"
                  strokeWidth="2.5"
                  className="origin-right animate-wing-left"
                />
                <circle cx="18" cy="28" r="4" fill={b.wingColor} />

                {/* Right Wing with flutter animation */}
                <path
                  d="M32 32 C44 10, 62 16, 58 36 C54 46, 38 44, 32 34 Z"
                  fill={b.color}
                  stroke="#000000"
                  strokeWidth="2.5"
                  className="origin-left animate-wing-right"
                />
                <circle cx="46" cy="28" r="4" fill={b.wingColor} />

                {/* Butterfly Body */}
                <ellipse cx="32" cy="33" rx="3.5" ry="12" fill="#000000" />
                {/* Antennae */}
                <path d="M30 22 Q24 14 20 15" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M34 22 Q40 14 44 15" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>

              {/* Sparkle badge on click */}
              {isSpun && (
                <span className="absolute -top-3 -right-2 text-xs font-black animate-ping">
                  ✨
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
