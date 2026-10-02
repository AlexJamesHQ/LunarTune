import React, { useState } from 'react';
import {
  Share2,
  Check,
  ExternalLink,
  MessageCircle,
  Copy
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LUNARTUNE_GITHUB_URL, LUNARTUNE_TELEGRAM_URL } from '../data/kodaData';
import { useTheme } from '../context/ThemeContext';

export const SocialShareBar: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { accentColor } = useTheme();

  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://lunartune.app';
  const shareText = 'Check out LunarTune - Revamped YouTube Music Experience on Android with Material 3 styling, live lyrics, and no ads!';

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      icon: (
        <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      ),
      bg: 'bg-[#DCFCE7]'
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      bg: 'bg-[#DBEAFE]'
    },
    {
      name: 'Telegram',
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      icon: (
        <svg className="w-4 h-4 fill-current text-[#229ED9]" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.718-1.574 6.703-2.28 9.948-.299 1.373-.787 1.83-1.258 1.875-.989.091-1.741-.655-2.699-1.282-1.5-1.002-2.348-1.624-3.805-2.607-1.684-1.137-.592-1.762.368-2.784.251-.267 4.614-4.227 4.698-4.586.01-.045.02-.214-.08-.303-.1-.089-.247-.059-.353-.035-.15.034-2.534 1.61-7.153 4.729-.676.464-1.288.69-1.838.678-.606-.013-1.771-.343-2.64-.627-1.065-.348-1.912-.532-1.838-1.123.039-.308.463-.623 1.272-.947 4.978-2.169 8.3-3.6 9.967-4.293 4.743-1.973 5.729-2.316 6.37-2.327.141-.002.456.033.66.199.172.14.22.329.243.461.023.133.052.438.03.679z"/>
        </svg>
      ),
      bg: 'bg-[#E0F2FE]'
    },
    {
      name: 'Instagram',
      url: `https://www.instagram.com/`,
      isCopy: true,
      icon: (
        <svg className="w-4 h-4 fill-current text-[#E4405F]" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      bg: 'bg-[#FCE7F3]'
    },
    {
      name: 'GitHub',
      url: LUNARTUNE_GITHUB_URL,
      icon: <GithubIcon className="w-4 h-4 text-black" />,
      bg: 'bg-white'
    }
  ];

  return (
    <div className="p-4 sm:p-5 bg-white border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-left space-y-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div 
            style={{ backgroundColor: accentColor.hex }}
            className="w-8 h-8 rounded-lg border-2 border-black flex items-center justify-center text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]"
          >
            <Share2 className="w-4 h-4 text-black" />
          </div>
          <div>
            <h4 className="font-sans font-black text-xs uppercase tracking-wider text-black">
              Share &amp; Connect
            </h4>
            <p className="font-mono text-[10px] text-neutral-500">
              Facebook, Instagram, WhatsApp, GitHub &amp; Telegram
            </p>
          </div>
        </div>

        {/* Copy Link Button */}
        <button
          onClick={handleCopy}
          className="px-2.5 py-1.5 rounded-lg bg-[#FAF6EE] border-2 border-black font-mono text-[10px] font-black uppercase text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1 cursor-pointer transition-all"
          title="Copy Link to Clipboard"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-600 font-black" /> : <Copy className="w-3 h-3 text-black" />}
          <span>{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>

      {/* Social Icons Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
        {shareLinks.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              if (s.isCopy) {
                handleCopy();
              }
            }}
            className={`p-2 rounded-xl border-2 border-black ${s.bg} text-black font-mono text-[11px] font-black flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all`}
            title={`Share on ${s.name}`}
          >
            {s.icon}
            <span>{s.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
