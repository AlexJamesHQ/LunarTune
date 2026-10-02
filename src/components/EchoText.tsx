import React, { useRef, useState, useEffect } from 'react';

interface EchoTextProps {
  text: string;
  echoes?: number;
  lag?: number;
  offset?: number;
  direction?: 'right' | 'left' | 'top' | 'bottom' | 'radial' | 'both';
  fade?: number;
  blur?: number;
  tint?: string;
  mode?: 'cursor' | 'auto' | 'both';
  cursorRadius?: number;
  duration?: number;
  ease?: string;
  fontSize?: string;
  fontWeight?: number | string;
  color?: string;
  className?: string;
}

export const EchoText: React.FC<EchoTextProps> = ({
  text,
  echoes = 12,
  lag = 0.24,
  offset = 36,
  direction = 'right',
  fade = 0.72,
  blur = 3,
  tint = '#FFE600',
  mode = 'both',
  cursorRadius = 320,
  duration = 900,
  ease = 'ease-out',
  fontSize = 'clamp(2.5rem, 7vw, 5.5rem)',
  fontWeight = 900,
  color = '#000000',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });
  const [autoAngle, setAutoAngle] = useState(0);

  // Auto animation loop for idle echo motion
  useEffect(() => {
    if (mode === 'cursor') return;

    let animId: number;
    let start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      setAutoAngle((elapsed / duration) * Math.PI * 2);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [mode, duration]);

  // Track cursor position relative to container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mode === 'auto' || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.sqrt(x * x + y * y);

    if (dist < cursorRadius) {
      setMousePos({
        x: (x / cursorRadius) * offset,
        y: (y / cursorRadius) * offset,
        active: true
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePos(prev => ({ ...prev, active: false }));
  };

  // Calculate layer offsets
  const getLayerTransform = (index: number) => {
    const progress = (index + 1) / echoes;
    let dx = 0;
    let dy = 0;

    if (mousePos.active && mode !== 'auto') {
      dx = mousePos.x * progress;
      dy = mousePos.y * progress;
    } else {
      // Auto continuous ambient wave motion
      const wave = Math.sin(autoAngle + index * lag * 3);
      const cosWave = Math.cos(autoAngle * 0.8 + index * lag * 2);

      switch (direction) {
        case 'left':
          dx = -progress * offset + wave * 4;
          dy = cosWave * 3;
          break;
        case 'top':
          dx = wave * 3;
          dy = -progress * offset + cosWave * 4;
          break;
        case 'bottom':
          dx = wave * 3;
          dy = progress * offset + cosWave * 4;
          break;
        case 'radial':
        case 'both':
          dx = Math.cos(autoAngle + index * lag) * (offset * 0.7 * progress);
          dy = Math.sin(autoAngle + index * lag) * (offset * 0.5 * progress);
          break;
        case 'right':
        default:
          dx = progress * offset + wave * 4;
          dy = cosWave * 3;
          break;
      }
    }

    return `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block select-none overflow-visible cursor-default ${className}`}
      style={{
        fontSize,
        fontWeight,
        lineHeight: 1.05
      }}
    >
      {/* Echo Layers Rendered in Reverse (Deepest to Closest) */}
      {Array.from({ length: echoes }).map((_, i) => {
        const index = echoes - 1 - i;
        const opacity = Math.max(0.04, Math.pow(1 - (index / echoes) * fade, 1.4));
        const blurAmount = (index / echoes) * blur;

        return (
          <div
            key={index}
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none transition-transform"
            style={{
              color: tint,
              opacity,
              filter: blurAmount > 0.4 ? `blur(${blurAmount.toFixed(1)}px)` : undefined,
              transform: getLayerTransform(index),
              transition: `transform ${duration * 0.3}ms ${ease}, opacity 300ms ease`,
              WebkitTextStroke: '2px rgba(0,0,0,0.85)',
              willChange: 'transform, opacity'
            }}
          >
            {text}
          </div>
        );
      })}

      {/* Main Foreground Text */}
      <div
        className="relative z-10 transition-colors duration-200"
        style={{
          color,
          WebkitTextStroke: '2px black',
          textShadow: `3px 3px 0px ${tint}`
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default EchoText;
