import { useEffect, useState } from "react";
import type { Sideproject } from "@/type/sideproject";
import Close from "@/assets/images/ico-close.svg";
import { isProcessImageLoaded } from "./processImagePreloader";

interface SideProjectModalProps {
  project: Sideproject;
  onClose: () => void;
}

const SideProjectModal = ({ project, onClose }: SideProjectModalProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(
    () => !project.viewImg || isProcessImageLoaded(project.viewImg),
  );
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    //ESC key 닫기
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    // 본문 스크롤 막기
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-10 sm:p-16 md:p-32 backdrop-blur"
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[94vh] w-full max-w-900 flex-col overflow-hidden rounded-lg bg-[#ffffff] text-black">
        <header className="flex shrink-0 items-center justify-between border-b border-black/10 bg-[#ffffff] px-20 py-16 sm:px-32 sm:py-20 md:px-60">
          <p className="font-heading text-xl font-bold text-gray-dark sm:text-2xl">{project.title} 작업 과정</p>
          <button
            type="button"
            aria-label="상세 팝업 닫기"
            onClick={onClose}
            className="flex h-32 w-32 cursor-pointer items-center justify-center"
          >
            <img src={Close} alt="" aria-hidden="true" className="h-24 w-24" />
          </button>
        </header>

        <div
          className="min-h-0 overflow-y-auto"
          aria-busy={project.viewImg ? !isImageLoaded && !hasImageError : undefined}
        >
          {project.viewImg && !isImageLoaded && !hasImageError && (
            <div className="flex min-h-260 flex-col items-center justify-center gap-12 bg-[#ffffff] px-20 text-center" role="status">
              <span className="h-28 w-28 animate-spin rounded-full border-3 border-gray border-t-primary" aria-hidden="true" />
              <p className="text-sm text-gray-dark">작업 과정 이미지를 불러오고 있습니다.</p>
            </div>
          )}

          {hasImageError && (
            <div className="flex min-h-260 items-center justify-center bg-[#ffffff] px-20 text-center" role="status">
              <p className="text-sm text-gray-dark">이미지를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.</p>
            </div>
          )}

          {project.viewImg && (
            <img
              src={project.viewImg}
              alt={`${project.title} 작업 과정`}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onLoad={() => setIsImageLoaded(true)}
              onError={() => setHasImageError(true)}
              className={`mx-auto w-full transition-opacity duration-300 ${isImageLoaded ? "block opacity-100" : "h-0 opacity-0"}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SideProjectModal;
