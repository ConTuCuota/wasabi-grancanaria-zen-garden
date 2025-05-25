
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

const LazyImage = ({ src, alt, className, placeholderClassName }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && !hasError && (
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br from-luxury-900/20 to-zen-900/20 animate-pulse",
          placeholderClassName
        )} />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        loading="lazy"
      />
      {hasError && (
        <div className="absolute inset-0 bg-luxury-900/10 flex items-center justify-center">
          <span className="text-soft-contrast text-sm">Imagen no disponible</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
