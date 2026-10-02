import React from 'react';
import { Sparkles, Zap, Volume2, VolumeX } from 'lucide-react';
import { useTheme, ACCENT_COLORS, GRID_STYLES, AccentColorId, GridStyleId } from '../context/ThemeContext';

export const ThemeCustomizerCard: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
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
      <div className="p-4 sm:p-5 bg-white border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] space-y-3.5">
        <div className="flex items-start gap-2.5">
          <div className="text-[#EA580C] mt-0.5">
            <Sparkles className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h3 className="font-sans font-black text-black text-xs sm:text-sm uppercase tracking-wider">
              ACCENT THEME COLOR
            </h3>
            <p className="font-mono text-[11px] text-neutral-500 leading-tight mt-0.5">
              Select your custom neobrutalist signature color
            </p>
          </div>
        </div>

        {/* Color Palette Circles */}
        <div className="flex items-center gap-2 sm:gap-2.5 pt-1 overflow-x-auto pb-1 scrollbar-none">
          {ACCENT_COLORS.map((col) => {
            const isSelected = accentColor.id === col.id;
            return (
              <button
                key={col.id}
                onClick={() => setAccentColorById(col.id)}
                title={col.label}
                style={{ backgroundColor: col.hex }}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[2.5px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ${
                  isSelected ? 'ring-2 ring-black ring-offset-2' : ''
                }`}
              >
                {/* Center dot for selected state as shown in screenshot */}
                {isSelected && (
                  <span className={`w-3 h-3 rounded-full ${col.textDark ? 'bg-black' : 'bg-white'} border border-black`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* CARD 2: BACKGROUND GRID STYLE */}
      <div className="p-4 sm:p-5 bg-white border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] space-y-3.5">
        <div className="flex items-start gap-2.5">
          <div className="text-[#EA580C] mt-0.5">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h3 className="font-sans font-black text-black text-xs sm:text-sm uppercase tracking-wider">
              BACKGROUND GRID STYLE
            </h3>
            <p className="font-mono text-[11px] text-neutral-500 leading-tight mt-0.5">
              Choose your moving backdrop animation
            </p>
          </div>
        </div>

        {/* Grid Pill Options */}
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-1">
          {GRID_STYLES.map((grid) => {
            const isSelected = gridStyle === grid.id;
            return (
              <button
                key={grid.id}
                onClick={() => setGridStyle(grid.id)}
                className={`w-full py-2.5 px-3 rounded-xl border-[2.5px] border-black font-mono font-black text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-black text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)] translate-x-[1px] translate-y-[1px]'
                    : 'bg-[#FAF6EE] text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#F3EFE7] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                {grid.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* CARD 3: 8-BIT RETRO SOUND */}
      <div className="p-4 sm:p-5 bg-white border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-4">
        <div className="flex items-start gap-2.5">
          <div className="text-[#EA580C] mt-0.5">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h3 className="font-sans font-black text-black text-xs sm:text-sm uppercase tracking-wider">
              8-BIT RETRO SOUND
            </h3>
            <p className="font-mono text-[11px] text-neutral-500 leading-tight mt-0.5">
              Play nostalgic feedback sounds
            </p>
          </div>
        </div>

        {/* Retro Neobrutalist Toggle Switch */}
        <button
          onClick={() => setRetroSound(!retroSound)}
          style={retroSound ? { backgroundColor: accentColor.hex } : { backgroundColor: '#E5E5E5' }}
          className="w-14 h-7 rounded-full border-[2.5px] border-black p-0.5 transition-colors relative cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center"
          title={retroSound ? 'Sound Enabled' : 'Sound Muted'}
        >
          <div
            className={`w-5 h-5 rounded-full border-[2px] border-black bg-black transition-transform flex items-center justify-center ${
              retroSound ? 'translate-x-7 bg-black' : 'translate-x-0 bg-white'
            }`}
          >
            {retroSound ? (
              <span style={{ backgroundColor: accentColor.hex }} className="w-1.5 h-1.5 rounded-full" />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};
