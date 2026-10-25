import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      setProgress(Math.round(v * 100));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 h-1 bg-ivory-dark/50">
      <motion.div
        className="h-full bg-steel origin-left"
        style={{ scaleX }}
      />
      <div className="absolute right-4 top-2 font-mono text-xs text-structural bg-ivory/90 px-2 py-0.5 rounded">
        {progress}%
      </div>
    </div>
  );
}
