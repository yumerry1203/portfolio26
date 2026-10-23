import { useCallback, useState } from "react";
import type { ImgHTMLAttributes } from "react";

interface LoadingImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  src: string;
  alt: string;
  containerClassName?: string;
  loadingText?: string;
}

const LoadingImage = ({
  src,
  alt,
  containerClassName = "",
  loadingText = "이미지를 불러오고 있습니다.",
  className = "",
  ...imageProps
}: LoadingImageProps) => {
  const [imageState, setImageState] = useState<{
    src: string;
    status: "loading" | "loaded" | "error";
  }>({ src, status: "loading" });
  const status = imageState.src === src ? imageState.status : "loading";

  const setImageRef = useCallback((image: HTMLImageElement | null) => {
    if (!image?.complete) return;
    setImageState({ src, status: image.naturalWidth > 0 ? "loaded" : "error" });
  }, [src]);

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-transparent ${containerClassName}`}
      aria-busy={status === "loading"}
    >
      {status === "loading" && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-12" role="status">
          <span
            className="h-28 w-28 animate-spin rounded-full border-3 border-gray/40 border-t-primary"
            aria-hidden="true"
          />
          <span className="sr-only">{loadingText}</span>
        </div>
      )}

      {status === "error" && (
        <p className="px-20 py-40 text-center text-sm text-gray-dark" role="status">
          이미지를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
        </p>
      )}

      <img
        {...imageProps}
        ref={setImageRef}
        src={src}
        alt={alt}
        onLoad={() => setImageState({ src, status: "loaded" })}
        onError={() => setImageState({ src, status: "error" })}
        className={`transition-opacity duration-300 ${status === "loaded" ? "opacity-100" : "opacity-0"} ${className}`}
      />
    </div>
  );
};

export default LoadingImage;
