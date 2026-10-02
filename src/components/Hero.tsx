import React from 'react';
import {
  Download,
  ShieldCheck,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { Language } from '../types';
import {
  LUNARTUNE_LOGO_URL,
  LUNARTUNE_GITHUB_URL,
  LUNARTUNE_TELEGRAM_URL,
  LUNARTUNE_VIRUSTOTAL_URL
} from '../data/kodaData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  lang: Language;
}

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

        {/* Hero Title & Subtitle with dynamic accent text shadow (Restored to original design) */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 
            style={{ textShadow: `4px 4px 0px ${accentColor.hex}` }}
            className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black uppercase text-black tracking-tighter leading-[1] transition-all duration-300"
          >
            Revamped YouTube Music <br />
            Experience on Android
          </h1>

          <p className="text-sm sm:text-base font-mono text-neutral-800 font-bold max-w-2xl mx-auto">
            High-performance, privacy-focused, and packed with features for people who really care about their music listening experience.
          </p>

          {/* GitHub Status & Verification Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <a 
              href={LUNARTUNE_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border-2 border-black font-mono text-[11px] font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GPL-3.0 OPEN SOURCE</span>
            </a>

            <a 
              href={LUNARTUNE_VIRUSTOTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#DCFCE7] border-2 border-black font-mono text-[11px] font-black text-[#15803D] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>VIRUSTOTAL SAFE</span>
            </a>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#F3E8FF] border-2 border-black font-mono text-[11px] font-black text-[#6B21A8] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-3.5 h-3.5 text-[#7E22CE]" />
              <span>JETPACK COMPOSE &amp; KOTLIN</span>
            </div>
          </div>

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
              <GithubIcon className="w-4 h-4 text-black" />
              <span>Star on GitHub</span>
              <ExternalLink className="w-3 h-3 text-neutral-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
