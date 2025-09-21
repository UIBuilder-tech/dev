"use client";

import React, { useState, useEffect, useRef } from "react";
import { useImagePreview } from "../context/ImagePreviewContext";
import { ZoomIn, ZoomOut, X, RotateCw } from "lucide-react";

const ImagePreview: React.FC = () => {
  const { previewSrc, setPreviewSrc } = useImagePreview();
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    // Use setTimeout to ensure the event listener is added after the current call stack is cleared
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!previewSrc) return null;

  const handleZoom = (factor: number) => {
    setScale((prevScale) => Math.max(0.1, Math.min(prevScale * factor, 3)));
  };

  const handleRotate = () => {
    setRotation((prevRotation) => (prevRotation + 90) % 360);
  };

  const handleClose = () => {
    setPreviewSrc(null);
    setScale(1);
    setRotation(0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div
        ref={containerRef}
        className="relative max-w-4xl w-full max-h-[90vh] p-4"
      >
        <div
          className="overflow-hidden rounded-lg shadow-lg bg-cream flex items-center justify-center"
          style={{ minHeight: "40vh" }}
        >
          <img loading="lazy"
            ref={imageRef}
            src={previewSrc}
            alt="Preview"
            className="max-w-full max-h-[calc(90vh-2rem)] object-contain transition-all duration-300 ease-in-out"
            style={{
              transform: `scale(${scale}) rotate(${rotation}deg)`,
              minHeight: "40vh",
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "90vh",
            }}
          />
        </div>
        {/* <div className="absolute bottom-6 inset-x-0 flex justify-center items-center space-x-2">
          <button
            onClick={() => handleZoom(1.2)}
            className="bg-white text-black p-2 rounded-full hover:bg-gray-200 focus:outline-none transition-colors duration-200"
            title="Zoom In"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleZoom(1 / 1.2)}
            className="bg-white text-black p-2 rounded-full hover:bg-gray-200 focus:outline-none transition-colors duration-200"
            title="Zoom Out"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
          <button
            onClick={handleRotate}
            className="bg-white text-black p-2 rounded-full hover:bg-gray-200 focus:outline-none transition-colors duration-200"
            title="Rotate"
          >
            <RotateCw className="h-5 w-5" />
          </button>
        </div> */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 bg-white text-black p-2 rounded-full hover:bg-gray-200 focus:outline-none transition-colors duration-200"
          title="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ImagePreview;
