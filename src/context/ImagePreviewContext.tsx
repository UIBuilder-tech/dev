import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ImagePreviewContextType {
  previewSrc: string | null;
  setPreviewSrc: (src: string | null) => void;
}

const ImagePreviewContext = createContext<ImagePreviewContextType | undefined>(undefined);

export const ImagePreviewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  return (
    <ImagePreviewContext.Provider value={{ previewSrc, setPreviewSrc }}>
      {children}
    </ImagePreviewContext.Provider>
  );
};

export const useImagePreview = () => {
  const context = useContext(ImagePreviewContext);
  if (context === undefined) {
    throw new Error('useImagePreview must be used within an ImagePreviewProvider');
  }
  return context;
};

