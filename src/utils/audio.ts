/**
 * Lightweight 8-Bit Retro Sound Synthesizer using Web Audio API
 * Zero dependencies, instant playback, mobile & desktop audio unlocked!
 */

let audioCtx: AudioContext | null = null;
let isAudioUnlocked = false;

export const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }

  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }

  return audioCtx;
};

// Automatic global unlock on first user interaction
if (typeof window !== 'undefined') {
  const unlockAudio = () => {
    if (isAudioUnlocked) return;
    try {
      const ctx = getAudioContext();
      if (ctx && ctx.state === 'suspended') {
        ctx.resume().then(() => {
          isAudioUnlocked = true;
        }).catch(() => {});
      } else if (ctx && ctx.state === 'running') {
        isAudioUnlocked = true;
      }
    } catch (e) {}

    // Clean up listeners
    window.removeEventListener('click', unlockAudio);
    window.removeEventListener('touchstart', unlockAudio);
    window.removeEventListener('keydown', unlockAudio);
  };

  window.addEventListener('click', unlockAudio, { passive: true });
  window.addEventListener('touchstart', unlockAudio, { passive: true });
  window.addEventListener('keydown', unlockAudio, { passive: true });
}

/**
 * Crisp retro click / pop sound for UI interactions
 */
export const play8BitBlip = (enabled: boolean = true) => {
  if (!enabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (err) {
    // Ignore audio restriction errors
  }
};

/**
 * Funky toggle click sound
 */
export const play8BitToggle = (enabledState: boolean, soundEnabled: boolean = true) => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const freq1 = enabledState ? 380 : 760;
    const freq2 = enabledState ? 760 : 380;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq1, ctx.currentTime);
    osc.frequency.setValueAtTime(freq2, ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (err) {
    // Ignore
  }
};

/**
 * Melodic chime for downloads & success actions
 */
export const play8BitChime = (soundEnabled: boolean = true) => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const startTime = ctx.currentTime + idx * 0.04;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.08, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.1);
    });
  } catch (err) {
    // Ignore
  }
};

/**
 * Butterfly flutter sound effect
 */
export const playButterflyFlutter = (soundEnabled: boolean = true) => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.06);
  } catch (err) {}
};

/**
 * 7 Unique Signature Sounds for each Color Theme:
 * 1. monochrome -> Crystal Double Beep (Clean sine bell)
 * 2. yellow     -> Cyber Arcade Arp (C5 -> E5 -> G5 -> C6)
 * 3. mint       -> Forest Spring Bounce (Rapid spring pulse)
 * 4. blue       -> Electric Down-Laser (Futuristic laser slide)
 * 5. pink       -> Sweet Bubble Sparkle (High pitch staccato trill)
 * 6. orange     -> Warm Power Brass (Full warm retro triad)
 * 7. purple     -> Mystic Cosmic Chord (Dual detuned space chime)
 */
export const playColorSound = (colorId: string, forcePlay: boolean = true) => {
  if (!forcePlay) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const t = ctx.currentTime;

    switch (colorId) {
      case 'monochrome': {
        // Pure Crystal Chime: 659.25Hz -> 1318.5Hz clean sine
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, t);
        osc.frequency.setValueAtTime(1318.5, t + 0.05);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.18);
        break;
      }
      case 'yellow': {
        // Arcade Cyber Arpeggio: 4 notes up
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const st = t + i * 0.035;
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, st);
          gain.gain.setValueAtTime(0.1, st);
          gain.gain.exponentialRampToValueAtTime(0.001, st + 0.09);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(st);
          osc.stop(st + 0.09);
        });
        break;
      }
      case 'mint': {
        // Bouncy spring vibrato
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, t);
        osc.frequency.exponentialRampToValueAtTime(880, t + 0.04);
        osc.frequency.exponentialRampToValueAtTime(660, t + 0.09);
        osc.frequency.exponentialRampToValueAtTime(1100, t + 0.14);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.15);
        break;
      }
      case 'blue': {
        // Sci-Fi Laser Sweep
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1174.66, t);
        osc.frequency.exponentialRampToValueAtTime(329.63, t + 0.14);
        gain.gain.setValueAtTime(0.08, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.14);
        break;
      }
      case 'pink': {
        // Sweet Bubble Pop Sparkle
        const pitches = [783.99, 1046.5, 1318.51, 1567.98];
        pitches.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const st = t + i * 0.03;
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, st);
          gain.gain.setValueAtTime(0.09, st);
          gain.gain.exponentialRampToValueAtTime(0.001, st + 0.07);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(st);
          osc.stop(st + 0.07);
        });
        break;
      }
      case 'orange': {
        // Warm Power Brass Triad
        [392.00, 493.88, 587.33].forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, t);
          osc.frequency.exponentialRampToValueAtTime(freq * 1.5, t + 0.12);
          gain.gain.setValueAtTime(0.06, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + 0.16);
        });
        break;
      }
      case 'purple': {
        // Cosmic Mystic Space Warp: detuned ethereal chime
        [523.25, 528.00, 830.61].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const st = t + i * 0.025;
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, st);
          gain.gain.setValueAtTime(0.08, st);
          gain.gain.exponentialRampToValueAtTime(0.001, st + 0.18);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(st);
          osc.stop(st + 0.18);
        });
        break;
      }
      default:
        play8BitBlip(true);
    }
  } catch (err) {}
};
