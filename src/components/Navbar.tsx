import React, { useState } from 'react';
import {
  Menu,
  X,
  Sparkles,
  Send
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { Language } from '../types';
import { LUNARTUNE_LOGO_URL, LUNARTUNE_GITHUB_URL, LUNARTUNE_TELEGRAM_URL } from '../data/kodaData';
import { useTheme } from '../context/ThemeContext';
import { ThemeCustomizerCard } from './ThemeCustomizerCard';
import { PWAInstallButton } from './PWAInstallButton';
import { SocialShareBar } from './SocialShareBar';

interface NavbarProps {
  lang: Language;
}

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="p-1 bg-white border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center">
              <img 
                src={LUNARTUNE_LOGO_URL} 
                width="50" 
                height="50" 
                alt="LunarTune Logo" 
                className="w-11 h-11 object-contain rounded-xl" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/icon.svg';
                }} 
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-black text-2xl uppercase tracking-tight text-black">LunarTune</span>
              </div>
              <div className="text-[10px] text-black font-mono uppercase font-bold tracking-wider">
                Revamped YouTube Music
              </div>
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

          {/* Action Controls: PWA Install + GitHub + Telegram + Menu */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* PWA Install Button */}
            <PWAInstallButton />

            {/* GitHub Link */}
            <a
              href={LUNARTUNE_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white border-[3px] border-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center"
              title="LunarTune GitHub Repository"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            {/* Telegram Chat - ALWAYS visible */}
            <a
              href={LUNARTUNE_TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white border-[3px] border-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center"
              title="LunarTune Telegram Community"
            >
              <Send className="w-5 h-5 text-black" />
            </a>

            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 px-3 rounded-xl bg-white border-[3px] border-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex items-center gap-1.5"
              title="Open Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="hidden sm:inline font-mono font-black text-xs uppercase">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Menu Drawer (Holds Links + PWA + Social Share + Theme Customizer inside) */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-[10030] bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
          onClick={() => setMenuOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-[#FAF6EE] h-full border-l-[4px] border-black shadow-[-8px_0px_0px_0px_rgba(0,0,0,1)] p-5 sm:p-6 overflow-y-auto space-y-6 animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b-[3px] border-black">
              <div>
                <h2 className="text-base font-sans font-black uppercase tracking-tight text-black">
                  Menu &amp; Preferences
                </h2>
                <p className="text-[10px] font-mono text-neutral-600 uppercase font-bold">
                  LunarTune Web &amp; App Hub
                </p>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-xl bg-white border-[2.5px] border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center cursor-pointer transition-all"
                title="Close Menu"
              >
                <X className="w-5 h-5 font-black" />
              </button>
            </div>

            {/* Navigation Quick Links inside Menu - only Screenshots & Features */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-black uppercase text-neutral-700">// QUICK NAVIGATION</div>
              <div className="grid grid-cols-2 gap-2.5">
                {navLinks.filter(l => l.href !== '#download').map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-center text-xs uppercase font-black tracking-wider text-black bg-white border-[2.5px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Share & Community Hub inside Menu */}
            <div className="space-y-2">
              <SocialShareBar />
            </div>

            {/* Customizer Cards */}
            <div className="space-y-2 pt-2 border-t-2 border-black/10">
              <div className="text-[11px] font-mono font-black uppercase text-neutral-700">// THEME &amp; AUDIO CONTROLS</div>
              <ThemeCustomizerCard onClose={() => setMenuOpen(false)} />
            </div>

            {/* In-Menu PWA Install */}
            <div className="space-y-2 pt-2 border-t-2 border-black/10">
              <div className="text-[11px] font-mono font-black uppercase text-neutral-700">// WEB APP (PWA)</div>
              <PWAInstallButton variant="menu" />
            </div>

            {/* SINGLE Download Button inside Menu */}
            <div className="pt-2">
              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                style={{ backgroundColor: accentColor.hex }}
                className="block w-full py-3.5 rounded-xl text-black text-center text-xs uppercase font-black tracking-wider border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Download LunarTune APK
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
