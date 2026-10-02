import React, { useState, useEffect } from 'react';
import {
  Maximize2,
  X,
  Smartphone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { SCREENSHOTS } from '../data/kodaData';
import { useTheme } from '../context/ThemeContext';

interface ScreenshotsGalleryProps {
  lang: Language;
}

export const ScreenshotsGallery: React.FC<ScreenshotsGalleryProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const { accentColor } = useTheme();

  useEffect(() => {
    if (activeModalIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalIdx]);

  const filteredScreenshots = selectedCategory === 'all' 
    ? SCREENSHOTS 
    : SCREENSHOTS.filter((s) => s.category === selectedCategory);

  return (
    <section className="w-full space-y-10" id="screenshots">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b-[3px] border-black">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FBCFE8] border-[3px] border-black text-black text-xs font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <Smartphone className="w-4 h-4 text-black" />
            <span>LunarTune Android Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-black uppercase tracking-tight">
            Every Screen in Pristine Detail
          </h2>
          <p className="text-neutral-800 text-xs sm:text-sm max-w-xl font-mono leading-relaxed bg-white border-2 border-black p-3.5 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            Captured directly from LunarTune on Android. Featuring Material 3 dynamic color theming, up to 9 player styles, live synced lyrics, discography view, and listening statistics. Click any frame to inspect full resolution.
          </p>
        </div>

          {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5">
          {[
            { id: 'all', label: 'All Screens' },
            { id: 'music', label: 'Home & Library' },
            { id: 'players', label: 'Player & Lyrics' },
            { id: 'video', label: 'Search' },
            { id: 'subscriptions', label: 'Stats & Recap' }
          ].map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={isSelected ? { backgroundColor: accentColor.hex } : {}}
                className={`px-4 py-2 rounded-xl text-xs uppercase font-black tracking-wider border-[3px] border-black transition-all cursor-pointer ${
                  isSelected
                    ? 'text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-50 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Showcase with Real Screenshot Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredScreenshots.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              key={item.id}
              onClick={() => setActiveModalIdx(idx)}
              className="group relative bg-white rounded-2xl border-[3px] border-black overflow-hidden cursor-pointer shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between"
            >
              {/* Real Screenshot Image Container */}
              <div className="relative aspect-[9/18] w-full bg-neutral-900 overflow-hidden border-b-2 border-black rounded-t-[15px]">
                {!loadedImages[item.id] && (
                  <div className="absolute inset-0 bg-neutral-200 animate-pulse flex flex-col items-center justify-center p-3 space-y-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-300 animate-pulse" />
                    <div className="w-3/4 h-2.5 bg-neutral-300 rounded" />
                    <div className="w-1/2 h-2 bg-neutral-300 rounded" />
                  </div>
                )}
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onLoad={() => setLoadedImages((prev) => ({ ...prev, [item.id]: true }))}
                  onError={(e) => {
                    // Fallback to placeholder visual if raw github image fails
                    setLoadedImages((prev) => ({ ...prev, [item.id]: true }));
                  }}
                  className={`w-full h-full object-cover object-top rounded-t-[15px] group-hover:scale-105 transition-all duration-500 ${
                    loadedImages[item.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                
                {/* Hover Overlay with Icon Button */}
                <div className="absolute inset-0 bg-[#00000030] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                  <div className="w-12 h-12 rounded-full bg-white border-[3px] border-black text-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] scale-90 group-hover:scale-100 transition-all">
                    <Maximize2 className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>

              {/* Item Title Footer */}
              <div className="p-3 bg-[#FAF8F5] space-y-0.5 text-left">
                <h4 className="text-xs font-black text-black uppercase truncate">
                  {item.title}
                </h4>
                <p className="text-[10px] text-neutral-600 font-mono truncate">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Full Resolution Modal Lightbox */}
      {activeModalIdx !== null && activeModalIdx < filteredScreenshots.length && (
        <div
          className="fixed inset-0 z-[10010] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-6 overflow-y-auto min-h-screen"
          onClick={() => setActiveModalIdx(null)}
        >
          {/* Lightbox Shell */}
          <div
            className="relative w-full max-w-xs sm:max-w-lg flex flex-col items-center justify-center my-auto py-2 sm:py-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Showcase Row (Desktop Side Buttons + Phone Frame) */}
            <div className="flex items-center justify-center gap-3 md:gap-6 w-full relative">
              {/* Desktop Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIdx((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : filteredScreenshots.length - 1
                  );
                }}
                className="hidden md:flex w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] items-center justify-center transition-all cursor-pointer flex-shrink-0 z-20"
                title="Previous Image"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-black font-black" />
              </button>

              {/* Large Image Showcase Frame */}
              <div className="relative w-[220px] xs:w-[250px] sm:w-[280px] md:w-[320px] aspect-[9/18] max-h-[62vh] sm:max-h-[70vh] flex items-center justify-center bg-neutral-900 rounded-[22px] sm:rounded-[26px] border-[3px] sm:border-[4px] border-black overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src={filteredScreenshots[activeModalIdx].url}
                  alt={filteredScreenshots[activeModalIdx].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top rounded-[19px] sm:rounded-[22px]"
                />
              </div>

              {/* Desktop Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIdx((prev) =>
                    prev !== null && prev < filteredScreenshots.length - 1 ? prev + 1 : 0
                  );
                }}
                className="hidden md:flex w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] items-center justify-center transition-all cursor-pointer flex-shrink-0 z-20"
                title="Next Image"
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-black font-black" />
              </button>
            </div>

            {/* Bottom Controls / Mobile Navigation & Close */}
            <div className="flex items-center justify-between w-full max-w-[260px] xs:max-w-[290px] sm:max-w-sm mt-3 sm:mt-5 px-1 gap-2 sm:gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIdx((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : filteredScreenshots.length - 1
                  );
                }}
                className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white text-black border-[2.5px] sm:border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-sans font-black text-[11px] sm:text-xs uppercase flex items-center gap-1 cursor-pointer transition-all md:hidden"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black font-black" />
                <span>Prev</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIdx(null);
                }}
                style={{ backgroundColor: accentColor.hex }}
                className="mx-auto px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-black border-[2.5px] sm:border-[3px] border-black font-sans font-black text-[11px] sm:text-xs uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 cursor-pointer transition-all"
                title="Close Modal"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black font-black" />
                <span>Close</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIdx((prev) =>
                    prev !== null && prev < filteredScreenshots.length - 1 ? prev + 1 : 0
                  );
                }}
                className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white text-black border-[2.5px] sm:border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-sans font-black text-[11px] sm:text-xs uppercase flex items-center gap-1 cursor-pointer transition-all md:hidden"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black font-black" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
