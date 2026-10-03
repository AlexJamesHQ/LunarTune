import React, { useState } from 'react';
import {
  Menu,
  X,
  Sparkles,
  Send,
  Smartphone,
  Download,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import { LUNARTUNE_LOGO_URL, LUNARTUNE_GITHUB_URL, LUNARTUNE_TELEGRAM_URL } from '../data/kodaData';
import { useTheme } from '../context/ThemeContext';
import { ThemeCustomizerCard } from './ThemeCustomizerCard';

interface NavbarProps {
  lang: Language;
}

const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
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

export const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { accentColor } = useTheme();

  const navLinks = [
    { href: '#screenshots', label: 'Screenshots', highlight: true },
    { href: '#features', label: 'Features' },
    { href: '#download', label: 'Download APK' }
  ];

  return (
    <>
      <header 
        style={{ backgroundColor: accentColor.hex }}
        className="fixed top-0 left-0 right-0 z-[10020] w-full border-b-[4px] border-black text-black shadow-md transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group flex-shrink min-w-0 mr-1 sm:mr-0">
            <div className="p-1 bg-white border-[2.5px] sm:border-[3px] border-black rounded-xl sm:rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center flex-shrink-0">
              <img 
                src={LUNARTUNE_LOGO_URL} 
                width="44" 
                height="44" 
                alt="LunarTune Logo" 
                className="w-8 h-8 sm:w-11 sm:h-11 object-contain rounded-lg sm:rounded-xl" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/icon.svg';
                }} 
              />
            </div>
            <div className="min-w-0">
              <span className="font-sans font-black text-lg sm:text-2xl uppercase tracking-tight text-black whitespace-nowrap">LunarTune</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-3">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={`text-xs uppercase font-black tracking-wider transition-all flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border-[2.5px] border-black ${
                  link.highlight
                    ? 'bg-[#CFFAFE] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#A5F3FC] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-50 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                {link.highlight && <Sparkles className="w-3.5 h-3.5 text-black" />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Controls: GitHub + Telegram + Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            {/* GitHub Link */}
            <a
              href={LUNARTUNE_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-white border-[2.5px] sm:border-[3px] border-black text-black shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center"
              title="LunarTune GitHub Repository"
            >
              <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            {/* Telegram Chat - ALWAYS visible */}
            <a
              href={LUNARTUNE_TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-white border-[2.5px] sm:border-[3px] border-black text-black shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center"
              title="LunarTune Telegram Community"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            </a>

            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 sm:p-2.5 px-2.5 sm:px-3 rounded-xl bg-white border-[2.5px] sm:border-[3px] border-black text-black shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex items-center gap-1.5"
              title="Open Menu"
            >
              {menuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              <span className="hidden sm:inline font-mono font-black text-xs uppercase">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Menu Drawer */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-[10030] bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
          onClick={() => setMenuOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-[#FAF6EE] h-full border-l-[4px] border-black shadow-[-8px_0px_0px_0px_rgba(0,0,0,1)] p-5 sm:p-6 overflow-y-auto space-y-6 animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header with colorful accent badge */}
            <div className="flex items-center justify-between pb-4 border-b-[3px] border-black">
              <div className="flex items-center gap-2.5">
                <div 
                  style={{ backgroundColor: accentColor.hex }}
                  className="w-10 h-10 rounded-xl border-[2.5px] border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex-shrink-0"
                >
                  <img 
                    src={LUNARTUNE_LOGO_URL} 
                    alt="Logo"
                    className="w-7 h-7 object-contain rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/icon.svg';
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-base font-sans font-black uppercase tracking-tight text-black flex items-center gap-1.5">
                    <span>Menu &amp; Preferences</span>
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-xl bg-[#FEE2E2] hover:bg-[#FECACA] border-[2.5px] border-black text-black shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center cursor-pointer transition-all"
                title="Close Menu"
              >
                <X className="w-5 h-5 font-black text-black" />
              </button>
            </div>

            {/* Quick Navigation Cards with lively colors */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-[11px] font-mono font-black uppercase text-neutral-700">
                <span>// QUICK NAVIGATION</span>
                <span className="text-[9px] bg-white px-2 py-0.5 rounded-full border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]">Jump to</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="#screenshots"
                  onClick={() => setMenuOpen(false)}
                  className="p-3 rounded-xl bg-[#DCFCE7] border-[2.5px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#BBF7D0] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Smartphone className="w-5 h-5 text-emerald-800" />
                    <span className="text-[9px] font-mono font-black bg-white px-1.5 py-0.5 rounded border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]">9 Screens</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase font-black tracking-tight text-black">Screenshots</div>
                    <div className="text-[10px] font-mono text-emerald-900 font-bold">App Showcase</div>
                  </div>
                </a>

                <a
                  href="#features"
                  onClick={() => setMenuOpen(false)}
                  className="p-3 rounded-xl bg-[#FEF08A] border-[2.5px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FDE047] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Sparkles className="w-5 h-5 text-amber-800 fill-amber-300" />
                    <span className="text-[9px] font-mono font-black bg-white px-1.5 py-0.5 rounded border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]">Bento</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase font-black tracking-tight text-black">Features</div>
                    <div className="text-[10px] font-mono text-amber-900 font-bold">M3 &amp; Lyrics</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Customizer Cards with Colorful Headers */}
            <div className="space-y-2 pt-2 border-t-2 border-black/10">
              <div className="flex items-center justify-between text-[11px] font-mono font-black uppercase text-neutral-700">
                <span>// THEME &amp; AUDIO CONTROLS</span>
                <span className="text-[9px] bg-white px-2 py-0.5 rounded-full border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]">Real-time</span>
              </div>
              <ThemeCustomizerCard onClose={() => setMenuOpen(false)} />
            </div>

            {/* Social & Community Quick Links with colorful buttons */}
            <div className="space-y-2 pt-2 border-t-2 border-black/10">
              <div className="text-[11px] font-mono font-black uppercase text-neutral-700">// COMMUNITY &amp; CODE</div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={LUNARTUNE_TELEGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 px-3 rounded-xl bg-[#E0F2FE] hover:bg-[#BAE6FD] border-[2.5px] border-black text-black shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4 text-[#0284C7]" />
                    <span className="text-xs font-mono font-black">Telegram</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-neutral-600" />
                </a>

                <a
                  href={LUNARTUNE_GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 px-3 rounded-xl bg-[#F3F4F6] hover:bg-[#E5E7EB] border-[2.5px] border-black text-black shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <GitHubIcon className="w-4 h-4 text-black" />
                    <span className="text-xs font-mono font-black">GitHub</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-neutral-600" />
                </a>
              </div>
            </div>

            {/* Colorful Download Button inside Menu */}
            <div className="pt-2">
              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                style={{ backgroundColor: accentColor.hex }}
                className="w-full py-3.5 px-4 rounded-xl text-black text-center text-xs uppercase font-black tracking-wider border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-black stroke-[3px]" />
                <span>Download LunarTune APK</span>
                <span className="text-[10px] font-mono font-black bg-white text-black px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                  Free
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
