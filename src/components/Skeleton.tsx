import { motion } from 'framer-motion';

export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className={`bg-gradient-to-r from-ivory-dark via-ivory to-ivory-dark ${className}`}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white border border-ivory-dark rounded-sm overflow-hidden">
      <Skeleton className="aspect-[16/10] w-full" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export function ImageSkeleton({ aspectRatio = 'aspect-[16/9]' }: { aspectRatio?: string }) {
  return (
    <div className={`relative overflow-hidden ${aspectRatio}`}>
      <Skeleton className="w-full h-full" />
    </div>
  );
}
