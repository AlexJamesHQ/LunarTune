import React from 'react';
import {
  Download,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import {
  LUNARTUNE_LOGO_URL,
  LUNARTUNE_GITHUB_URL
} from '../data/kodaData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  lang: Language;
}

const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const { accentColor } = useTheme();

  return (
    <section className="relative pt-6 pb-6 lg:pt-8 lg:pb-8 overflow-hidden bg-[#FAF6EE]">
      {/* Dynamic Grid Overlay Pattern for Brutalist look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        {/* Animated App Icon in brutalist box - Readme.md first image */}
        <div className="flex flex-col items-center gap-4">
          <div className="inline-block p-3 bg-white border-4 border-black rounded-[36px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <img 
              src={LUNARTUNE_LOGO_URL} 
              width="180" 
              height="180" 
              alt="LunarTune Logo" 
              className="w-40 h-40 sm:w-44 sm:h-44 object-contain rounded-2xl" 
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/icon.svg';
              }}
            />
          </div>
        </div>

        {/* Hero Title & Subtitle with dynamic accent text shadow */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 
            style={{ textShadow: `3px 3px 0px ${accentColor.hex}` }}
            className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black uppercase text-black tracking-tight leading-[1.1] transition-all duration-300"
          >
            Revamped YouTube Music Experience on Android
          </h1>

          <p className="text-sm sm:text-base font-mono text-neutral-800 font-bold max-w-2xl mx-auto">
            High-performance, privacy-focused, and packed with features for people who really care about their music listening experience.
          </p>

          {/* Technical Highlights Box */}
          <div className="max-w-2xl mx-auto p-5 sm:p-6 bg-white border-[3px] border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left space-y-2">
            <div className="text-[10px] uppercase font-mono font-black text-purple-600 tracking-wider">
              // Core Highlights
            </div>
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-mono">
              Built on Material 3 with up to 9 player styles, album-art powered dynamic colors, ad-free background listening, live syllable-synced lyrics with translation &amp; romanization, Dolby/Dirac equalizer presets, Spotify playlist import, and optional Monochrome lossless FLAC audio streaming.
            </p>
          </div>

          {/* CTA Buttons with dynamic accent color */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#download"
              style={{ backgroundColor: accentColor.hex }}
              className="px-6 py-3.5 rounded-xl text-black border-[3px] border-black font-sans font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-black" />
              <span>Get APK Downloads</span>
            </a>

            <a
              href={LUNARTUNE_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white text-black border-[3px] border-black font-sans font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <GitHubIcon className="w-4 h-4 text-black" />
              <span>Star on GitHub</span>
              <ExternalLink className="w-3 h-3 text-neutral-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
