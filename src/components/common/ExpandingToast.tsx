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
    <div ref={alertRef} className="flex justify-center py-40" aria-live="polite">
      <div
        className={`flex h-56 items-center justify-center shadow-[var(--shadow-base)] overflow-hidden rounded-full bg-white px-28 transition-[width,transform] duration-700 ease-out motion-reduce:transition-none ${
          isVisible ? "w-full max-w-760 scale-100" : "w-74 scale-90"
        }`}
      >
        <div className={`flex items-center gap-16 whitespace-nowrap transition-opacity duration-300 delay-400 motion-reduce:transition-none ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <DotLabel variant="purpleLightLine" className="size-22 shrink-0 border-0 bg-gradient" />
          <strong className="mt-2 font-heading text-xl text-black">{title}</strong>
          <span className="text-lg text-gray-dark">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpandingToast;
