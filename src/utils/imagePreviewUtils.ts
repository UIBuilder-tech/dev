import { useImagePreview } from "../context/ImagePreviewContext";

export const useImagePreviewTrigger = () => {
  const { setPreviewSrc } = useImagePreview();

  const triggerImagePreview = (src: string) => {
    setPreviewSrc(src);
  };

  return triggerImagePreview;
};
