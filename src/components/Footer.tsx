import React from 'react';
import {
  Send,
  ArrowUp,
  ExternalLink,
  Code,
  Download,
  AlertCircle,
  MessageSquare,
  Scale
} from 'lucide-react';
import { Language } from '../types';
import {
  LUNARTUNE_LOGO_URL,
  LUNARTUNE_GITHUB_URL,
  LUNARTUNE_TELEGRAM_URL
} from '../data/kodaData';
import { useTheme } from '../context/ThemeContext';

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
            <div className="flex items-center gap-3 pt-2">
              <a
                href={LUNARTUNE_GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                title="LunarTune GitHub"
              >
                <GitHubIcon className="w-4 h-4 text-black" />
              </a>
              <a
                href={LUNARTUNE_TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                title="LunarTune Telegram"
              >
                <Send className="w-4 h-4 text-black" />
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
