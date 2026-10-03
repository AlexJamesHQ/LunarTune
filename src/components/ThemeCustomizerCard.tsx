import React from 'react';
import { Sparkles, Zap, Volume2, VolumeX, Grid, Radio, Check } from 'lucide-react';
import { useTheme, ACCENT_COLORS, GRID_STYLES, AccentColorId, GridStyleId } from '../context/ThemeContext';
import { play8BitBlip, play8BitChime } from '../utils/audio';

export const ThemeCustomizerCard: React.FC<{ onClose?: () => void }> = () => {
  const {
    accentColor,
    setAccentColorById,
    gridStyle,
    setGridStyle,
    retroSound,
    setRetroSound
  } = useTheme();

  return (
    <div className="w-full space-y-4 text-left">
      {/* CARD 1: ACCENT THEME COLOR */}
      <div className="bg-white border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* Colorful Card Header Banner */}
        <div className="bg-[#FEF08A] px-4 py-2.5 border-b-[2.5px] border-black flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white border-2 border-black flex items-center justify-center text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-4 h-4 fill-amber-400 text-black" />
            </div>
            <h3 className="font-sans font-black text-black text-xs uppercase tracking-wider">
              Accent Theme Color
            </h3>
          </div>
          {/* Active Color Badge */}
          <span 
            style={{ backgroundColor: accentColor.hex, color: accentColor.textDark ? '#000000' : '#ffffff' }}
            className="px-2.5 py-1 rounded-md font-mono text-[10px] font-black uppercase border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]"
          >
            {accentColor.label}
          </span>
        </div>

        <div className="p-4 space-y-3">
          <p className="font-mono text-[11px] text-neutral-600 leading-tight">
            Tap a signature swatch to change theme &amp; hear its unique sound:
          </p>

          {/* Color Palette Swatches */}
          <div className="flex items-center gap-2 sm:gap-2.5 pt-1 overflow-x-auto pb-1 scrollbar-none">
            {ACCENT_COLORS.map((col) => {
              const isSelected = accentColor.id === col.id;
              return (
                <button
                  key={col.id}
                  onClick={() => setAccentColorById(col.id, true)}
                  title={col.label}
                  style={{ backgroundColor: col.hex }}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[2.5px] border-black shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ${
                    isSelected ? 'ring-3 ring-black ring-offset-2 scale-105' : ''
                  }`}
                >
                  {isSelected && (
                    <Check className={`w-4 h-4 stroke-[3px] ${col.textDark ? 'text-black' : 'text-white'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CARD 2: BACKGROUND GRID STYLE */}
      <div className="bg-white border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* Colorful Card Header Banner */}
        <div className="bg-[#E9D5FF] px-4 py-2.5 border-b-[2.5px] border-black flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white border-2 border-black flex items-center justify-center text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              <Grid className="w-4 h-4 text-purple-600" />
            </div>
            <h3 className="font-sans font-black text-black text-xs uppercase tracking-wider">
              Background Animation
            </h3>
          </div>
          <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded bg-white border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]">
            5 Styles
          </span>
        </div>

        <div className="p-4 space-y-3">
          <p className="font-mono text-[11px] text-neutral-600 leading-tight">
            Choose your dynamic retro background canvas effect:
          </p>

          {/* Grid Pill Options */}
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            {GRID_STYLES.map((grid) => {
              const isSelected = gridStyle === grid.id;
              return (
                <button
                  key={grid.id}
                  onClick={() => setGridStyle(grid.id)}
                  style={isSelected ? { backgroundColor: accentColor.hex } : undefined}
                  className={`py-2 px-2.5 rounded-xl border-[2.5px] border-black font-mono font-black text-[10px] uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    isSelected
                      ? 'text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] translate-x-[1px] translate-y-[1px]'
                      : 'bg-[#FAF6EE] text-black shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:translate-x-[0.5px] hover:translate-y-[0.5px]'
                  }`}
                >
                  {isSelected && <Zap className="w-3 h-3 fill-black text-black flex-shrink-0" />}
                  <span className="truncate">{grid.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CARD 3: 8-BIT RETRO SOUND */}
      <div className="bg-white border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* Colorful Card Header Banner */}
        <div className="bg-[#BAE6FD] px-4 py-2.5 border-b-[2.5px] border-black flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white border-2 border-black flex items-center justify-center text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              {retroSound ? (
                <Volume2 className="w-4 h-4 text-sky-600" />
              ) : (
                <VolumeX className="w-4 h-4 text-neutral-500" />
              )}
            </div>
            <h3 className="font-sans font-black text-black text-xs uppercase tracking-wider">
              8-Bit Retro Sound
            </h3>
          </div>

          <span className={`text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] ${
            retroSound ? 'bg-[#86EFAC] text-black' : 'bg-neutral-200 text-neutral-600'
          }`}>
            {retroSound ? 'ENABLED' : 'MUTED'}
          </span>
        </div>

        <div className="p-4 flex items-center justify-between gap-3">
          <div className="space-y-1">
            <p className="font-mono text-[11px] text-neutral-700 leading-tight">
              Interactive 8-bit audio feedback on clicks and toggles.
            </p>
          </div>

          {/* Retro Neobrutalist Toggle Switch */}
          <button
            onClick={() => setRetroSound(!retroSound)}
            style={retroSound ? { backgroundColor: accentColor.hex } : { backgroundColor: '#E5E7EB' }}
            className="w-14 h-8 rounded-full border-[2.5px] border-black p-0.5 transition-colors relative cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center flex-shrink-0"
            title={retroSound ? 'Sound Enabled - Click to Mute' : 'Sound Muted - Click to Enable'}
          >
            <div
              className={`w-6 h-6 rounded-full border-[2px] border-black transition-transform flex items-center justify-center ${
                retroSound ? 'translate-x-6 bg-black text-white' : 'translate-x-0 bg-white text-neutral-400'
              }`}
            >
              {retroSound ? (
                <Volume2 className="w-3 h-3 text-white" />
              ) : (
                <VolumeX className="w-3 h-3 text-neutral-500" />
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
