import React, { createContext, useContext, useState, useEffect } from 'react';
import { play8BitBlip, play8BitToggle, play8BitChime, playColorSound } from '../utils/audio';

export type AccentColorId = 'monochrome' | 'yellow' | 'mint' | 'blue' | 'pink' | 'orange' | 'purple';

export interface AccentColorDef {
  id: AccentColorId;
  label: string;
  hex: string;
  textDark: boolean;
  shadowHex: string;
}

export const ACCENT_COLORS: AccentColorDef[] = [
  { id: 'monochrome', label: 'Monochrome', hex: '#FFFFFF', textDark: true, shadowHex: '#000000' },
  { id: 'yellow', label: 'Cyber Yellow', hex: '#FFE600', textDark: true, shadowHex: '#22D3EE' },
  { id: 'mint', label: 'Mint Fresh', hex: '#80ED99', textDark: true, shadowHex: '#059669' },
  { id: 'blue', label: 'Electric Blue', hex: '#60A5FA', textDark: true, shadowHex: '#2563EB' },
  { id: 'pink', label: 'Bubblegum Pink', hex: '#F472B6', textDark: true, shadowHex: '#DB2777' },
  { id: 'orange', label: 'Neon Peach', hex: '#FB923C', textDark: true, shadowHex: '#EA580C' },
  { id: 'purple', label: 'Vibrant Lavender', hex: '#C084FC', textDark: true, shadowHex: '#7C3AED' }
];

export type GridStyleId = 'classic-static' | 'slow-drift' | 'hyperspeed' | 'retro-dots' | 'dots-drift';

export interface GridStyleDef {
  id: GridStyleId;
  label: string;
}

export const GRID_STYLES: GridStyleDef[] = [
  { id: 'classic-static', label: 'CLASSIC STATIC' },
  { id: 'slow-drift', label: 'SLOW DRIFT' },
  { id: 'hyperspeed', label: 'HYPERSPEED' },
  { id: 'retro-dots', label: 'RETRO DOTS' },
  { id: 'dots-drift', label: 'DOTS DRIFT' }
];

interface ThemeContextType {
  accentColor: AccentColorDef;
  setAccentColorById: (id: AccentColorId, forceSound?: boolean) => void;
  gridStyle: GridStyleId;
  setGridStyle: (style: GridStyleId) => void;
  retroSound: boolean;
  setRetroSound: (enabled: boolean) => void;
  isMenuCustomizerOpen: boolean;
  setIsMenuCustomizerOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accentId, setAccentId] = useState<AccentColorId>('monochrome');
  const [gridStyle, setGridStyleState] = useState<GridStyleId>('classic-static');
  const [retroSound, setRetroSoundState] = useState<boolean>(false);

  // Clear any past session overrides to ensure clean default state (White theme, sound muted)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('lunartune_accent_color');
      localStorage.removeItem('lunartune_grid_style');
      localStorage.removeItem('lunartune_retro_sound');
    }
  }, []);

  const [isMenuCustomizerOpen, setIsMenuCustomizerOpen] = useState(false);

  const setAccentColorById = (id: AccentColorId, forceSound: boolean = false) => {
    setAccentId(id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lunartune_accent_color', id);
    }
    playColorSound(id, forceSound || retroSound);
  };

  const setGridStyle = (style: GridStyleId) => {
    setGridStyleState(style);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lunartune_grid_style', style);
    }
    play8BitBlip(retroSound);
  };

  const setRetroSound = (enabled: boolean) => {
    setRetroSoundState(enabled);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lunartune_retro_sound', String(enabled));
    }
    play8BitToggle(enabled, true); // Play confirmation pip
  };

  const currentAccent = ACCENT_COLORS.find(c => c.id === accentId) || ACCENT_COLORS[1];

  return (
    <ThemeContext.Provider
      value={{
        accentColor: currentAccent,
        setAccentColorById,
        gridStyle,
        setGridStyle,
        retroSound,
        setRetroSound,
        isMenuCustomizerOpen,
        setIsMenuCustomizerOpen
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
