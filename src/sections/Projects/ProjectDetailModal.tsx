import { useEffect } from "react";
import type { Project } from "@/type/project";
import Close from "@/assets/images/ico-close.svg";
import Link from "@/assets/images/ico-link.svg";
import Unlink from "@/assets/images/ico-unlink.svg";
import DotLabel from "@/components/common/DotLabel";

interface ProjectDetailModalProps {
  project: Project; //클릭한 프로젝트 
  onClose: () => void; //닫기
}

const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  const { detail } = project;

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-16 md:p-32 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-full w-full max-w-1100 flex-col overflow-hidden rounded-lg bg-[#ffffff] text-black shadow-2xl">
        <header className="shrink-0 flex items-center justify-between bg-[#ffffff] border-b border-black/10 py-20 md:px-60 md:py-20">
          <p className="font-heading text-2xl font-bold text-gray">Project Detail</p>
          <button
            type="button"
            aria-label="상세 팝업 닫기"
            onClick={onClose}
            className="flex h-32 w-32 cursor-pointer items-center justify-center"
          >
            <img src={Close} alt="" aria-hidden="true" className="h-24 w-24" />
          </button>
        </header>

        <div className="min-h-0 overflow-y-auto px-32 py-40 md:px-60 md:py-50">
          <div className="flex flex-wrap items-center gap-16">
            <h2 id="project-detail-title" className="font-heading text-3xl font-bold leading-tight">
              {project.title}
            </h2>
            {detail.links ? (
              <a
                href={detail.links}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} 프로젝트 링크 열기`}
                className="inline-flex h-32 w-32 items-center justify-center"
              >
                <img src={Link} alt="" aria-hidden="true" className="h-28 w-28" />
              </a>
            ) : (
              <img src={Unlink} alt="연결된 프로젝트 링크 없음" className="h-28 w-28" />
            )}
          </div>

          <div className="mt-40 grid gap-20 md:grid-cols-2">
            {detail.heroImages.map((image, index) => (
              <div key={`${project.id}-hero-${index}`} className="flex aspect-[1.45/1] items-center justify-center overflow-hidden bg-gray-dark/5">
                <img src={image} alt={`${project.title} 대표 화면 ${index + 1}`} className="h-full w-full object-contain" />
              </div>
            ))}
          </div>

          <dl className="mt-40 grid gap-20 rounded-md bg-[#F9F8FB] p-24 md:grid-cols-4 md:gap-0 md:p-30">
            <div className="md:border-r md:border-primary">
              <dt className="text-xs text-primary font-heading">역할</dt>
              <dd className="mt-6 pr-16 text-xs leading-relaxed">{detail.role}</dd>
            </div>
            <div className="md:border-r md:border-primary md:pl-24">
              <dt className="text-xs text-primary font-heading">기여도</dt>
              <dd className="mt-6 text-xs">{project.contribution}</dd>
            </div>
            <div className="md:border-r md:border-primary md:pl-24">
              <dt className="text-xs text-primary font-heading">기술</dt>
              <dd className="mt-6 text-xs leading-relaxed">{project.skills.join(" · ")}</dd>
            </div>
            <div className="md:pl-24">
              <dt className="text-xs text-primary font-heading">작업기간</dt>
              <dd className="mt-6 text-xs">{detail.workPeriod}</dd>
            </div>
          </dl>

          <section className="mt-44">
            <h3 className="inline-flex rounded-sm w-120 h-32 items-center justify-center bg-primary text-base text-white font-bold">개요</h3>
            <p className="mt-14 whitespace-pre-line text-sm leading-relaxed">{detail.overview}</p>
          </section>
          <section className="mt-44">
            <h3 className="inline-flex rounded-sm w-120 h-32 items-center justify-center bg-primary text-base text-white font-bold">담당 역할</h3>
            <div className="mt-14 whitespace-pre-line text-sm leading-relaxed">{detail.responsibility}</div>
          </section>

          <section className="mt-60">
            <h3 className="inline-flex rounded-sm w-120 h-32 items-center justify-center bg-primary text-base text-white font-bold">주요 작업 내용</h3>
            <div className="mt-36 space-y-60">
              {detail.sections.map((section) => (
                <article key={`${project.id}-${section.number}`} className="border-b border-black/15 pb-40 last:border-b-0">
                  <div className={`grid items-center gap-30 ${section.images?.length ? "md:grid-cols-2" : ""}`}>
                    <div>
                      <h4 className="text-2xl font-bold leading-snug">
                        <span className="text-primary">{section.number}. </span>
                        {section.title}
                      </h4>
                      {section.description && (
                        <ul className="mt-20 space-y-10 text-sm leading-relaxed">
                          {section.description.map((item, index) => (
                            <li key={`${project.id}-${section.number}-description-${index}`} className="flex items-start gap-12">
                              <DotLabel variant="red" className="mt-7 h-8 w-8 shrink-0 rounded-none" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {section.images?.length && (
                      <div className="grid grid-cols-2 gap-12">
                        {section.images.map((image, imageIndex) => (
                          <img
                            key={`${project.id}-${section.number}-${imageIndex}`}
                            src={image}
                            alt={`${project.title} 주요 작업 ${section.number}-${imageIndex + 1}`}
                            className="aspect-[1.2/1] w-full object-contain shadow-[var(--shadow-base)]"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
