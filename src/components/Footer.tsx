import React from 'react';
import {
  Send,
  ArrowUp,
  ExternalLink,
  Code,
  Download,
  AlertCircle,
  MessageSquare,
  Scale,
  ShieldCheck
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

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const { accentColor } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resources = [
    {
      title: 'Project Source Code',
      url: LUNARTUNE_GITHUB_URL,
      icon: <Code className="w-4 h-4 text-black" />,
      desc: 'Main GitHub Repository'
    },
    {
      title: 'Releases',
      url: `${LUNARTUNE_GITHUB_URL}/releases`,
      icon: <Download className="w-4 h-4 text-black" />,
      desc: 'Download LunarTune APK builds'
    },
    {
      title: 'Issue Tracker & Support',
      url: `${LUNARTUNE_GITHUB_URL}/issues/new/choose`,
      icon: <AlertCircle className="w-4 h-4 text-black" />,
      desc: 'Report bugs or submit features'
    },
    {
      title: 'Telegram Community',
      url: LUNARTUNE_TELEGRAM_URL,
      icon: <MessageSquare className="w-4 h-4 text-black" />,
      desc: 'Join LunarTune discussions'
    },
    {
      title: 'VirusTotal Scan',
      url: LUNARTUNE_VIRUSTOTAL_URL,
      icon: <ShieldCheck className="w-4 h-4 text-black" />,
      desc: 'Verified clean & safe'
    },
    {
      title: 'License',
      url: `${LUNARTUNE_GITHUB_URL}/blob/main/LICENSE`,
      icon: <Scale className="w-4 h-4 text-black" />,
      desc: 'GNU GPL v3.0 Open Source'
    }
  ];

  return (
    <footer 
      style={{ backgroundColor: accentColor.hex }}
      className="w-full border-t-[4px] border-black pt-16 pb-12 text-black text-left shadow-2xl transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div 
                style={{ backgroundColor: accentColor.hex }}
                className="p-1 border-2 border-black rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,1)] overflow-hidden flex items-center justify-center transition-colors"
              >
                <img 
                  src={LUNARTUNE_LOGO_URL} 
                  width="40" 
                  height="40" 
                  alt="LunarTune Logo" 
                  className="w-10 h-10 object-contain rounded-lg bg-white" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/icon.svg';
                  }}
                />
              </div>
              <span className="text-xl font-sans font-black uppercase text-black tracking-tight">LunarTune</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 font-mono leading-relaxed max-w-sm">
              Revamped YouTube Music experience on Android. High-performance, privacy-focused, and packed with features for people who really care about their music.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={LUNARTUNE_GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center border-[2.5px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                title="LunarTune GitHub"
              >
                <GithubIcon className="w-4 h-4 text-black" />
              </a>
              <a
                href={LUNARTUNE_TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center border-[2.5px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                title="LunarTune Telegram"
              >
                <Send className="w-4 h-4 text-black" />
              </a>
              <a
                href="https://api.whatsapp.com/send?text=Check%20out%20LunarTune%20-%20Revamped%20YouTube%20Music%20Experience%20on%20Android%20https%3A%2F%2Flunartune.app"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#DCFCE7] text-[#25D366] flex items-center justify-center border-[2.5px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                title="Share on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current text-[#16A34A]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flunartune.app"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#DBEAFE] text-[#1877F2] flex items-center justify-center border-[2.5px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                title="Share on Facebook"
              >
                <svg className="w-4 h-4 fill-current text-[#1D4ED8]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#FCE7F3] text-[#E4405F] flex items-center justify-center border-[2.5px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                title="Instagram Community"
              >
                <svg className="w-4 h-4 fill-current text-[#DB2777]" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Official Resources */}
          <div className="lg:col-span-2 space-y-3 font-mono">
            <div className="font-black text-black uppercase tracking-wider text-[11px]">
              // Developer &amp; Project Resources
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resources.map((res) => (
                <a
                  key={res.title}
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all group"
                >
                  <div 
                    style={{ backgroundColor: accentColor.hex }}
                    className="p-2 border-2 border-black rounded-lg shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 group-hover:bg-white transition-colors"
                  >
                    {res.icon}
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <div className="text-xs font-black text-black truncate flex items-center gap-1">
                      <span>{res.title}</span>
                      <ExternalLink className="w-2.5 h-2.5 text-black/50 group-hover:text-black transition-colors flex-shrink-0" />
                    </div>
                    <div className="text-[10px] text-neutral-600 truncate">{res.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Profiles Section */}
        <div className="pt-8 border-t-2 border-black/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <span className="text-[10px] font-mono uppercase font-black tracking-wider text-neutral-700">// Project Credits &amp; Acknowledgments</span>
            <h3 className="text-sm font-sans font-black text-black uppercase">Crafted &amp; Maintained By</h3>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            {/* Developer Profile */}
            <a 
              href="https://github.com/cognitiveshadows03" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 p-2 px-3 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all group"
            >
              <img 
                src="https://avatars.githubusercontent.com/cognitiveshadows03" 
                alt="cognitiveshadows03" 
                className="w-10 h-10 rounded-lg border-2 border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = LUNARTUNE_LOGO_URL;
                }}
              />
              <div className="text-left font-mono">
                <div className="text-[10px] text-neutral-600 font-bold uppercase tracking-wider">Maintainer</div>
                <div className="text-xs font-black text-black uppercase group-hover:underline">cognitiveshadows03</div>
              </div>
            </a>

            {/* User Profile (Project Partner) */}
            <a 
              href="https://github.com/AlexJamesHQ" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 p-2 px-3 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all group"
            >
              <img 
                src="https://avatars.githubusercontent.com/AlexJamesHQ" 
                alt="Alex James" 
                className="w-10 h-10 rounded-lg border-2 border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] object-cover"
              />
              <div className="text-left font-mono">
                <div className="text-[10px] text-neutral-600 font-bold uppercase tracking-wider">Project Partner</div>
                <div className="text-xs font-black text-black uppercase group-hover:underline">Alex James</div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-black/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="bg-white/85 px-4 py-2.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-center sm:text-left font-bold">
            <span>Built with dedication on</span>
            <span 
              style={{ backgroundColor: accentColor.hex }}
              className="px-2 py-0.5 text-black border border-black rounded font-black uppercase text-[10px]"
            >
              Material 3
            </span>
            <span>theme by</span>
            <a href="https://github.com/cognitiveshadows03" target="_blank" rel="noreferrer" className="underline font-black hover:opacity-80">cognitiveshadows03</a>
            <span>&amp;</span>
            <a href="https://github.com/AlexJamesHQ" target="_blank" rel="noreferrer" className="font-black underline decoration-2 underline-offset-2 hover:opacity-80">Alex James</a>.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl bg-white border-2 border-black text-black font-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
