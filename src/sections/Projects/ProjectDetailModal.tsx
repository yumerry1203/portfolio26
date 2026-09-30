import { useEffect } from "react";
import type { Project } from "@/type/project";
import Close from "@/assets/images/ico-close.svg";
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-10 sm:p-16 md:p-32 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[94vh] w-full max-w-1100 flex-col overflow-hidden rounded-lg bg-[#ffffff] text-black">
        <header className="flex shrink-0 items-center justify-between border-b border-black/10 bg-[#ffffff] px-20 py-16 sm:px-32 sm:py-20 md:px-60">
          <p className="font-heading text-xl font-bold text-gray sm:text-2xl">Project Detail</p>
          <button
            type="button"
            aria-label="상세 팝업 닫기"
            onClick={onClose}
            className="flex h-32 w-32 cursor-pointer items-center justify-center"
          >
            <img src={Close} alt="" aria-hidden="true" className="h-24 w-24" />
          </button>
        </header>

        <div className="min-h-0 overflow-y-auto px-20 py-28 sm:px-32 sm:py-40 md:px-60 md:py-50">
          <div className="flex flex-wrap items-center gap-x-20 gap-y-12">
            <h2 id="project-detail-title" className="font-heading text-2xl font-bold leading-tight text-black sm:text-3xl">
              {project.title}
            </h2>
            {detail.development?.liveServices && detail.development.liveServices.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
                <div className="flex items-center gap-8">
                  <DotLabel variant="green" className="!size-10 shrink-0" />
                  <strong className="text-base font-bold text-black">Live Service</strong>
                </div>
                <div className="flex flex-wrap items-center gap-8 text-sm">
                  {detail.development.liveServices.map((service, index) => (
                    <span key={service.label} className="inline-flex items-center gap-8">
                      {index > 0 && <span aria-hidden="true">·</span>}
                      <a
                        href={service.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-gray-dark underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
                      >
                        {service.label}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-32 sm:mt-40">
            <img
              src={detail.heroImage}
              alt={`${project.title} 대표 화면`}
              className="block h-auto w-full"
            />
          </div>

          <dl className="mt-28 grid gap-18 rounded-md bg-[#F9F8FB] p-20 sm:mt-40 sm:p-24 md:grid-cols-[1fr_2fr_2fr_1fr] md:gap-0 md:p-30">
            <div className="border-b border-primary pb-14 md:border-r md:border-b-0 md:pb-0">
              <dt className="font-heading text-sm text-primary">역할</dt>
              <dd className="mt-6 pr-16 text-sm leading-relaxed">{project.role}</dd>
            </div>
            <div className="border-b border-primary pb-14 md:border-r md:border-b-0 md:pb-0 md:pl-24">
              <dt className="font-heading text-sm text-primary">카테고리</dt>
              <dd className="mt-6 text-sm">{project.category.join(" · ")}</dd>
            </div>
            <div className="border-b border-primary pb-14 md:border-r md:border-b-0 md:pb-0 md:pl-24">
              <dt className="font-heading text-sm text-primary">기술</dt>
              <dd className="mt-6 text-sm leading-relaxed">{project.skills.join(" · ")}</dd>
            </div>
            <div className="md:pl-24">
              <dt className="font-heading text-sm text-primary">작업기간</dt>
              <dd className="mt-6 text-sm">{detail.workPeriod}</dd>
            </div>
          </dl>

          <section className="mt-44">
            <h3 className="inline-flex h-32 w-100 items-center justify-center rounded-sm bg-primary text-sm font-bold text-white sm:w-120 sm:text-base">개요</h3>
            <p className="mt-14 whitespace-pre-line text-sm leading-relaxed">{detail.overview}</p>
          </section>

          <section className="mt-60">
            <h3 className="inline-flex h-32 w-120 items-center justify-center rounded-sm bg-primary text-sm font-bold text-white sm:text-base">주요 작업 내용</h3>
            <div className="mt-36 space-y-60">
              {detail.sections.map((section) => (
                <article key={`${project.id}-${section.number}`} className="border-b border-black/15 pb-40 last:border-b-0">
                  <div className={`grid items-center gap-24 sm:gap-30 ${section.image ? "md:grid-cols-2" : ""}`}>
                    <div>
                      <h4 className="text-xl font-bold leading-snug sm:text-2xl">
                        <span className="text-primary">{section.number}. </span>
                        {section.title}
                      </h4>
                      {section.description && (
                        <ul className="mt-20 space-y-10 text-sm leading-relaxed">
                          {section.description.map((item, index) => (
                            <li key={`${project.id}-${section.number}-description-${index}`} className="flex items-start gap-12">
                              <DotLabel variant="red" className="mt-8 h-6 w-6 shrink-0 rounded-none" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {section.image && (
                      <img
                        src={section.image}
                        alt={`${project.title} 주요 작업 ${section.number}`}
                        className="block h-auto w-full"
                      />
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {detail.development && (
            <section className="mt-60">
              <h3 className="inline-flex h-32 items-center justify-center rounded-sm bg-primary px-16 text-sm font-bold text-white sm:text-base">
                개발 및 문제 해결
              </h3>
              <div className="mt-28 space-y-28">
                {detail.development.items.map((item) => (
                  <article key={`${project.id}-development-${item.number}`}>
                    <h4 className="text-lg font-bold leading-snug sm:text-xl">
                      <span className="text-primary">{item.number}. </span>
                      {item.title}
                    </h4>
                    <p className="mt-10 text-sm leading-relaxed text-gray-dark">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>

            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
