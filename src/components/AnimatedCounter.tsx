import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2, className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

interface StatsSectionProps {
  stats: Array<{ value: number; suffix?: string; prefix?: string; label: string }>;
  dark?: boolean;
}

export function StatsSection({ stats, dark = false }: StatsSectionProps) {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${dark ? 'text-ivory' : 'text-graphite'}`}>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center"
        >
          <div className="font-heading text-4xl md:text-5xl font-bold mb-2">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
          </div>
          <p className={`text-sm ${dark ? 'text-ivory/60' : 'text-structural'}`}>{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
