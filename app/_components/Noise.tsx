'use client';
import React, { useRef, useEffect } from 'react';

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
  excludeSelector?: string; 
}

const Noise: React.FC<NoiseProps> = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 5,
  patternAlpha = 15,
  excludeSelector,
}) => {
  const grainRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId: number;
    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    // Canvas ko excluded element ke upar clip-path se hide karo
    const updateClip = () => {
      if (!excludeSelector || !canvas) return;

      const el = document.querySelector(excludeSelector);
      if (!el) return;

      const rect = el.getBoundingClientRect();

      // Excluded area ke rect ko canvas par "hole" bana do using clip-path
      // polygon: full screen except the excluded rect
      const { top, left, bottom, right } = rect;

      // CSS clip-path se excluded zone chhod do (evenodd rule)
      canvas.style.clipPath = `polygon(
        0% 0%, 100% 0%, 100% 100%, 0% 100%,
        0% 0%,
        ${left}px ${top}px,
        ${left}px ${bottom}px,
        ${right}px ${bottom}px,
        ${right}px ${top}px,
        ${left}px ${top}px
      )`;
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      updateClip();
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha, excludeSelector]);

  return (
    <canvas
      ref={grainRef}
      className="pointer-events-none fixed inset-0 w-screen h-screen"
      style={{
        zIndex: 9999,
        imageRendering: 'pixelated',
      }}
    />
  );
};

export default Noise;