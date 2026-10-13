const loadedProcessImages = new Set<string>();
const pendingProcessImages = new Map<string, Promise<void>>();

export const isProcessImageLoaded = (src: string) => loadedProcessImages.has(src);

export const preloadProcessImage = (src: string) => {
  if (loadedProcessImages.has(src)) return Promise.resolve();

  const pendingImage = pendingProcessImages.get(src);
  if (pendingImage) return pendingImage;

  const request = new Promise<void>((resolve, reject) => {
    const image = new Image();

    image.decoding = "async";
    image.onload = () => {
      loadedProcessImages.add(src);
      pendingProcessImages.delete(src);
      resolve();
    };
    image.onerror = () => {
      pendingProcessImages.delete(src);
      reject(new Error(`Failed to preload image: ${src}`));
    };
    image.src = src;
  });

  pendingProcessImages.set(src, request);
  return request;
};
