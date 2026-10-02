import React, { useState } from 'react';
import { DownloadCloud, Smartphone, X, CheckCircle } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useTheme } from '../context/ThemeContext';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'navbar' | 'card' | 'menu';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'navbar'
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const { accentColor } = useTheme();

  // If already installed or running standalone, show installed badge in menu
  if (isInstalled) {
    if (variant === 'menu') {
      return (
        <div className="p-3 bg-white border-[2.5px] border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 text-xs font-mono font-bold text-emerald-700">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>LunarTune PWA Installed</span>
        </div>
      );
    }
    return null;
  }

  // Chromium / Android / Desktop Flow
  if (isInstallable) {
    if (variant === 'menu' || variant === 'card') {
      return (
        <button
          onClick={install}
          style={{ backgroundColor: accentColor.hex }}
          className={`w-full py-3 px-4 rounded-xl border-[2.5px] border-black text-black font-sans font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 cursor-pointer ${className}`}
        >
          <DownloadCloud className="w-4 h-4 text-black" />
          <span>Install Web App (PWA)</span>
        </button>
      );
    }

    return (
      <button
        onClick={install}
        style={{ backgroundColor: accentColor.hex }}
        className={`px-3 py-2 rounded-xl border-[2.5px] border-black text-black font-sans font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5 cursor-pointer ${className}`}
        title="Install LunarTune as Desktop/Mobile Web App"
      >
        <DownloadCloud className="w-4 h-4 text-black" />
        <span className="hidden sm:inline">Install PWA</span>
      </button>
    );
  }

  // iOS Safari Flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className={`px-3 py-2 rounded-xl bg-white border-[2.5px] border-black text-black font-sans font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5 cursor-pointer ${className}`}
          title="Install on iPhone / iPad"
        >
          <Smartphone className="w-4 h-4 text-black" />
          <span>Install on iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-[10050] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in">
            <div className="w-full max-w-sm rounded-2xl bg-[#FAF6EE] border-[3px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b-2 border-black/10">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-black" />
                  <h3 className="text-sm font-sans font-black uppercase tracking-tight text-black">
                    Install on iOS (iPhone / iPad)
                  </h3>
                </div>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-lg bg-white border-2 border-black text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                >
                  <X className="w-4 h-4 font-black" />
                </button>
              </div>

              <div className="space-y-3 font-mono text-xs text-neutral-800 text-left bg-white p-4 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FFE600] border border-black flex items-center justify-center text-[10px] font-black flex-shrink-0">
                    1
                  </span>
                  <span>Tap the <strong>Share</strong> button in Safari toolbar.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FFE600] border border-black flex items-center justify-center text-[10px] font-black flex-shrink-0">
                    2
                  </span>
                  <span>Scroll down and tap <strong>Add to Home Screen</strong>.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FFE600] border border-black flex items-center justify-center text-[10px] font-black flex-shrink-0">
                    3
                  </span>
                  <span>Launch <strong>LunarTune</strong> directly from your home screen!</span>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                style={{ backgroundColor: accentColor.hex }}
                className="w-full py-2.5 rounded-xl border-2 border-black text-black font-sans font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
              >
                Got It!
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Fallback direct install button for all browsers
  return (
    <button
      onClick={() => {
        if (window.confirm('To install LunarTune: click your browser menu (⋮ or Share) and select "Install app" or "Add to Home Screen".')) {
          install();
        }
      }}
      className={`px-3 py-2 rounded-xl bg-white border-[2.5px] border-black text-black font-sans font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5 cursor-pointer ${className}`}
      title="Install LunarTune Web App"
    >
      <DownloadCloud className="w-4 h-4 text-black" />
      <span className="hidden sm:inline">PWA</span>
    </button>
  );
};
