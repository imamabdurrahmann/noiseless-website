'use client';

import * as React from 'react';

export function SplashScreen() {
  const [show, setShow] = React.useState(true);
  const [fade, setFade] = React.useState(false);

  React.useEffect(() => {
    // Start fading out after 1.2s
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 1200);

    // Completely remove from DOM after 1.7s
    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ease-in-out ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-4xl md:text-6xl font-display font-black tracking-widest uppercase text-foreground animate-pulse">
        NOISELESS
      </div>
    </div>
  );
}
