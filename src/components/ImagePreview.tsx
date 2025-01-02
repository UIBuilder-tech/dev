import React, { useState, useEffect, useRef } from "react";
import { useImagePreview } from "../context/ImagePreviewContext";
import { ZoomIn, ZoomOut, X, RotateCw } from "lucide-react";

const ImagePreview: React.FC = () => {
  const { previewSrc, setPreviewSrc } = useImagePreview();
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setPreviewSrc]);

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
      <div ref={containerRef} className="relative max-w-4xl max-h-full p-4">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={previewSrc}
            alt="Preview"
            className="max-w-full max-h-[calc(100vh-4rem)] object-contain transition-all duration-300 ease-in-out"
            style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}
          />
        </div>
        <div className="absolute bottom-0 inset-x-0 flex justify-center items-center space-x-2">
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
        </div>
        <div className="absolute top-2 right-2 flex space-x-2">
          <button
            onClick={handleClose}
            className="bg-white text-black p-2 rounded-full hover:bg-gray-200 focus:outline-none transition-colors duration-200"
            title="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
