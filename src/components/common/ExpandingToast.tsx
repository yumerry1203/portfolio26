import { useEffect, useRef, useState } from "react";
import DotLabel from "@/components/common/DotLabel";

interface ExpandingToastProps {
  title?: string;
  description?: string;
}

const ExpandingToast = ({
  title = "프로젝트 아카이브",
  description = "그 외 다양한 서비스 구축·운영·개선 작업을 진행했습니다.",
}: ExpandingToastProps) => {
  const alertRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = alertRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={alertRef} className="flex justify-center py-24 sm:py-40" aria-live="polite">
      <div
        className={`flex min-h-48 items-center justify-center overflow-hidden rounded-full bg-[#ffffff] px-14 py-10 shadow-[var(--shadow-base)] transition-[width,transform] duration-700 ease-out motion-reduce:transition-none sm:h-56 sm:px-28 sm:py-0 ${
          isVisible ? "w-full max-w-760 scale-100" : "w-74 scale-90"
        }`}
      >
        <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center whitespace-normal transition-opacity duration-300 delay-400 motion-reduce:transition-none sm:flex-nowrap sm:gap-16 sm:whitespace-nowrap ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <DotLabel variant="purpleLightLine" className="size-16 shrink-0 border-0 bg-gradient sm:size-22" />
          <strong className="font-heading text-base text-black sm:mt-2 sm:text-xl">{title}</strong>
          <span className="w-full text-xs leading-snug text-gray-dark sm:w-auto sm:text-lg">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpandingToast;
