import React, { useEffect, useRef, useState } from "react";

interface CachedImage {
  data: string; // base64 string
  timestamp: number;
}

interface OptimizedHeroImageProps {
  src: string;
  alt: string;
  className: string;
  onLoad?: () => void;
}

// Cache duration in milliseconds (24 hours)
const CACHE_DURATION = 24 * 60 * 60 * 1000;

const imageCache = new Map<string, CachedImage>();

export const OptimizedHeroImage: React.FC<OptimizedHeroImageProps> = ({
  src,
  alt,
  className,
  onLoad,
}) => {
  const [imageData, setImageData] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  const convertBlobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  useEffect(() => {
    const loadImage = async () => {
      if (!src) return;

      try {
        // Check if image is in memory cache and not expired
        const cachedImage = imageCache.get(src);
        const now = Date.now();

        if (cachedImage && now - cachedImage.timestamp < CACHE_DURATION) {
          setImageData(cachedImage.data);
          setIsLoading(false);
          onLoad?.();
          return;
        }

        // Check if image is in localStorage cache
        const storageKey = `hero-image-${src}`;
        const storedData = localStorage.getItem(storageKey);
        const storedTimestamp = localStorage.getItem(`${storageKey}-timestamp`);

        if (
          storedData &&
          storedTimestamp &&
          now - parseInt(storedTimestamp) < CACHE_DURATION
        ) {
          setImageData(storedData);
          imageCache.set(src, {
            data: storedData,
            timestamp: parseInt(storedTimestamp),
          });
          setIsLoading(false);
          onLoad?.();
          return;
        }

        // If not cached, fetch and cache the image
        const response = await fetch(src);
        const blob = await response.blob();
        const base64Data = await convertBlobToBase64(blob);

        // Store in memory cache
        imageCache.set(src, {
          data: base64Data,
          timestamp: now,
        });

        // Store in localStorage
        try {
          localStorage.setItem(storageKey, base64Data);
          localStorage.setItem(`${storageKey}-timestamp`, now.toString());
        } catch (e) {
          // Handle localStorage quota exceeded
          console.warn("localStorage quota exceeded, clearing old cache");
          clearOldCache();
          // Try storing again after clearing
          try {
            localStorage.setItem(storageKey, base64Data);
            localStorage.setItem(`${storageKey}-timestamp`, now.toString());
          } catch (retryError) {
            console.error(
              "Still unable to store in localStorage after clearing cache"
            );
          }
        }

        setImageData(base64Data);
        setIsLoading(false);
        onLoad?.();
      } catch (error) {
        console.error("Error loading image:", error);
        setIsLoading(false);
      }
    };

    loadImage();

    // Cleanup function
    return () => {
      if (imageData.startsWith("blob:")) {
        URL.revokeObjectURL(imageData);
      }
    };
  }, [src]);

  // Clear old cache entries
  const clearOldCache = () => {
    const now = Date.now();

    // Clear localStorage
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("hero-image-")) {
        const timestamp = localStorage.getItem(`${key}-timestamp`);
        if (timestamp && now - parseInt(timestamp) > CACHE_DURATION) {
          localStorage.removeItem(key);
          localStorage.removeItem(`${key}-timestamp`);
        }
      }
    });

    // Clear memory cache
    imageCache.forEach((value, key) => {
      if (now - value.timestamp > CACHE_DURATION) {
        imageCache.delete(key);
      }
    });
  };

  return (
    <>
      {isLoading && (
        <div className={`${className} animate-pulse bg-gray-200`} />
      )}
      <img
        ref={imgRef}
        src={imageData || src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />
    </>
  );
};
