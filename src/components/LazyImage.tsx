import React, { useState, useRef, useEffect } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  fetchpriority?: "high" | "low" | "auto";
  loading?: "lazy" | "eager";
}

export default function LazyImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  loading = "lazy",
  fetchpriority,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-primary/5 ${wrapperClassName}`}>
      {/* Skeleton / Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-primary/10 animate-pulse z-0" />
      )}
      
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchpriority}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)} 
        // Note: object-cover/contain sekarang dikontrol via className saat pemanggilan
        className={`w-full h-full transition-all duration-700 ease-in-out relative z-10 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
}