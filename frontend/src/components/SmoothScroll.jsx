import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      smoothWheel: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
