import React, { useState, useEffect } from 'react';
import {
  Download,
  Smartphone,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { DOWNLOAD_OPTIONS } from '../data/kodaData';
import { useTheme } from '../context/ThemeContext';

interface DownloadSectionProps {
  lang: Language;
}

export const DownloadSection: React.FC<DownloadSectionProps> = () => {
  const [downloadingAbi, setDownloadingAbi] = useState<string | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);
  const [options, setOptions] = useState(DOWNLOAD_OPTIONS);
  const { accentColor } = useTheme();

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/cognitiveshadows03/LunarTune/releases/latest');
        if (!response.ok) return;
        const data = await response.json();
        
        if (data && data.assets && Array.isArray(data.assets) && data.assets.length > 0) {
          const updatedOptions = DOWNLOAD_OPTIONS.map((opt) => {
            const matchingAsset = data.assets.find((asset: any) => {
              const name = asset.name.toLowerCase();
              if (opt.abi === 'arm64-v8a') {
                return name.includes('arm64') || name.includes('v8a');
              }
              if (opt.abi === 'armeabi-v7a') {
                return name.includes('v7a') || (name.includes('32') && !name.includes('64'));
              }
              if (opt.abi === 'universal') {
                return name.includes('universal') || name.includes('all');
              }
              return false;
            });

            if (matchingAsset) {
              const formattedSize = (matchingAsset.size / (1024 * 1024)).toFixed(1) + ' MB';
              return {
                ...opt,
                filename: matchingAsset.name,
                fileSize: formattedSize,
                downloadUrl: matchingAsset.browser_download_url
              };
            }
            return opt;
          });

          setOptions(updatedOptions);
        }
      } catch (err) {
        console.error('Failed to auto-fetch LunarTune GitHub releases:', err);
      }
    };

    fetchLatestRelease();
  }, []);

  const handleDownload = (abi: string, filename: string, url: string) => {
    setDownloadingAbi(abi);
    
    // Festive celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch (e) {}

    setDownloadToast(`Starting LunarTune download...`);

    // Trigger direct download element to prevent popup-blockers on Android/iOS
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      setDownloadingAbi(null);
    }, 1500);

    setTimeout(() => {
      setDownloadToast(null);
    }, 3500);
  };

  return (
    <div className="w-full space-y-10 text-left relative overflow-visible" id="download">
      {/* Toast in Brutalist Style */}
      {downloadToast && (
        <div 
          style={{ backgroundColor: accentColor.hex }}
          className="fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl text-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] border-[3px] border-black flex items-center gap-3 animate-in slide-in-from-bottom font-mono font-black text-xs"
        >
          <CheckCircle2 className="w-5 h-5 text-black" />
          <span>{downloadToast}</span>
        </div>
      )}

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 relative overflow-visible">
        <h2 
          style={{ textShadow: `3px 3px 0px ${accentColor.hex}` }}
          className="text-2xl sm:text-4xl lg:text-5xl font-sans font-black text-black uppercase tracking-tight relative inline-block transition-all duration-300"
        >
          Get LunarTune for Your Android Phone
        </h2>

        <p className="text-xs sm:text-sm text-neutral-800 font-mono leading-relaxed bg-white border-2 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">
          Pick the APK matching your processor architecture. When you update the LunarTune APK on GitHub, these buttons instantly fetch and download the latest version automatically!
        </p>
      </div>

      {/* 3 ABI Architecture Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {options.map((opt) => (
          <div
            key={opt.abi}
            className="p-6 bg-white border-[3px] border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E9D5FF] border-[3px] border-black flex items-center justify-center text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Smartphone className="w-6 h-6 text-black" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-sans font-black text-black uppercase tracking-tight">
                  {opt.label}
                </h3>
                <div className="font-mono text-xs font-bold text-neutral-600">
                  {opt.fileSize} • {opt.version}
                </div>
              </div>

              <p className="text-xs text-neutral-700 font-mono leading-relaxed">
                {opt.targetDevice}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t-2 border-black/10">
              <button
                onClick={() => handleDownload(opt.abi, opt.filename, opt.downloadUrl)}
                disabled={downloadingAbi === opt.abi}
                style={{ backgroundColor: accentColor.hex }}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 border-[3px] border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer relative overflow-visible"
              >
                {downloadingAbi === opt.abi ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-black" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-black" />
                    <span>Download APK</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
