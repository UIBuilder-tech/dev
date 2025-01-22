import React,{ useRef, useEffect, useState} from "react";

interface imageComponent{
    src:string;
    onClick?:()=>void;
    className:string;
    alt?:string;
}


export const ImageComponent = React.memo(({ src, onClick, className, alt }:imageComponent) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && imgRef.current) {
            imgRef.current.src = src;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <>
      {!isLoaded && <div className={`${className} animate-pulse bg-gray-200`} />}
      <img
        ref={imgRef}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        onLoad={() => setIsLoaded(true)}
        onClick={onClick}
        alt={alt || "gallery"}
      />
    </>
  );
});