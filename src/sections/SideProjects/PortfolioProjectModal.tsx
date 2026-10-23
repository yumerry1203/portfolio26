import { useEffect } from "react";
import Close from "@/assets/images/ico-close.svg";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import DotLabel from "@/components/common/DotLabel";
import ContributionSlider from "@/components/common/ContributionSlider";
import ExpandingToast from "@/components/common/ExpandingToast";
import ProjectStatusBadge from "@/components/common/ProjectStatusBadge";

interface PortfolioProjectModalProps {
  onClose: () => void;
}

const technologyDetails = [
  { category: "Frontend", technology: "React", version: "19.2.7", usage: "섹션과 공통 UI를 컴포넌트로 구성하고 모달·메뉴 상태를 관리" },
  { category: "Frontend", technology: "TypeScript", version: "6.0.2", usage: "프로젝트 데이터와 컴포넌트 Props의 타입을 정의" },
  { category: "Styling", technology: "Tailwind CSS", version: "4.3.3", usage: "반응형 레이아웃과 컴포넌트 스타일을 유틸리티 클래스로 구현" },
  { category: "Styling", technology: "CSS", version: "Native", usage: "인트로 모션과 전역 초기화 스타일을 작성" },
  { category: "Animation", technology: "GSAP", version: "3.15.0", usage: "Hero·섹션·카드의 등장 모션과 타임라인을 구현" },
  { category: "Animation", technology: "ScrollTrigger", version: "3.15.0", usage: "스크롤 위치에 맞춰 섹션 애니메이션의 시작과 복귀를 제어" },
  { category: "Build", technology: "Vite", version: "8.1.1", usage: "개발 서버, TypeScript 빌드와 정적 에셋 번들링에 사용" },
  { category: "Quality", technology: "ESLint", version: "10.6.0", usage: "React·TypeScript 코드의 문법과 작성 규칙을 정적 검사" },
  { category: "Deployment", technology: "GitHub Actions · Pages", version: "-", usage: "main 브랜치 푸시 시 빌드하고 GitHub Pages에 자동 배포" },
];

const projectStructure = `src/
├─ App.tsx                 전체 섹션 순서와 인트로 상태
├─ main.tsx                React 애플리케이션 진입점
├─ index.css               Tailwind·전역 스타일 진입점
│
├─ assets/
│  ├─ fonts/               LINE Seed·SEBANG·Sarina 웹폰트
│  └─ images/              로고·아이콘·프로젝트 이미지
│
├─ components/
│  ├─ common/              Badge·Button·DotLabel 등 공통 UI
│  └─ layout/              Header·SectionTitle 레이아웃 요소
│
├─ data/
│  ├─ AboutMe/             경력·교육·자격증 데이터
│  ├─ Projects/            주요 프로젝트·아카이브 데이터
│  └─ SideProjects/        개인 프로젝트 카드 데이터
│
├─ sections/
│  ├─ Intro/               첫 진입 로고 모션
│  ├─ Home/                Hero·협업사 영역
│  ├─ Projects/            주요 프로젝트 카드·상세 모달
│  ├─ ProjectArchive/      이전 프로젝트 아카이브
│  ├─ Skills/              기술 스택·HOW I WORK
│  ├─ SideProjects/        개인 프로젝트 카드·전용 모달
│  ├─ AboutMe/             경력·교육·자격증
│  └─ Contact/             연락처·Footer
│
├─ styles/
│  ├─ tokens.css           색상·폰트·간격·Radius·Shadow
│  └─ reset.css            기본 스타일 초기화·컨테이너
│
└─ type/
   ├─ project.ts           주요 프로젝트 데이터 타입
   └─ sideproject.ts       개인 프로젝트 데이터 타입`;

const designColors = [
  { name: "Background", hex: "#141414" },
  { name: "Surface", hex: "#fff" },
  { name: "Primary", hex: "#CEA6E0" },
  { name: "Secondary", hex: "#F1DBFA" },
  { name: "Accent", hex: "#EC563B" },
  { name: "Support", hex: "#AEC7D8" },
];

const PortfolioProjectModal = ({ onClose }: PortfolioProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-10 sm:p-16 md:p-32 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex h-[94vh] w-full max-w-900 flex-col overflow-hidden rounded-lg bg-white text-black">
        <header className="flex shrink-0 items-center justify-between border-b border-black/10 bg-white px-20 py-16 sm:px-32 sm:py-20 md:px-60">
          <p id="portfolio-modal-title" className="font-heading text-xl font-bold text-gray-dark sm:text-2xl">
            Nayuhyeong - Portfolio 작업 과정
          </p>
          <button
            type="button"
            aria-label="상세 팝업 닫기"
            onClick={onClose}
            className="flex h-32 w-32 cursor-pointer items-center justify-center"
          >
            <img src={Close} alt="" aria-hidden="true" className="h-24 w-24" />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-20 py-28 sm:px-32 sm:py-36 md:px-60 md:py-48">
          <div className="mx-auto max-w-780">
            <section>
              <p className="text-sm font-bold text-primary">PORTFOLIO README</p>
              <h2 className="mt-8 font-heading text-2xl font-bold text-black sm:text-3xl">
                NAYUHYEONG Portfolio 2026
              </h2>
              <p className="mt-12 max-w-650 text-sm leading-relaxed text-gray-dark sm:text-base">
                프론트엔드 개발과 UI 퍼블리싱 경험을 주요 프로젝트, 개인 작업, 경력과 기술 역량으로 정리한 반응형 포트폴리오입니다.
              </p>
            </section>

            <section className="mt-40 sm:mt-52">
              <h3 className="font-heading text-xl font-bold text-black sm:text-2xl">TECH STACK</h3>
              <div className="mt-16 overflow-x-auto rounded-md border border-black/15">
                <table className="w-full min-w-700 border-collapse text-left text-sm">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="px-14 py-12 font-bold">구분</th>
                      <th className="px-14 py-12 font-bold">기술</th>
                      <th className="px-14 py-12 font-bold">버전</th>
                      <th className="px-14 py-12 font-bold">프로젝트 내 사용</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technologyDetails.map((item) => (
                      <tr key={`${item.category}-${item.technology}`} className="border-b border-black/10 last:border-b-0">
                        <td className="px-14 py-12 font-bold text-primary">{item.category}</td>
                        <td className="px-14 py-12 font-bold text-black">{item.technology}</td>
                        <td className="px-14 py-12 text-gray-dark">{item.version}</td>
                        <td className="px-14 py-12 leading-relaxed text-gray-dark">{item.usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-40 sm:mt-52">
              <h3 className="font-heading text-xl font-bold text-black sm:text-2xl">프로젝트 구조</h3>
              <p className="mt-10 text-sm leading-relaxed text-gray-dark sm:text-base">
                각 섹션을 App에서 순서대로 조합하는 싱글 페이지 구조로 설계해 공통 요소의 재사용성과 섹션별 유지보수성을 높였습니다.
              </p>
              <div className="mt-16 overflow-x-auto rounded-md border border-black/15 bg-black p-18 sm:p-24">
                <pre className="min-w-680 whitespace-pre font-mono text-xs leading-[1.8] text-white sm:text-sm">
                  <code>{projectStructure}</code>
                </pre>
              </div>
            </section>

            <section className="mt-40 sm:mt-52">
              <h3 className="font-heading text-xl font-bold text-black sm:text-2xl">DESIGN COLORS</h3>
              <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-3">
                {designColors.map((color) => (
                  <div key={color.name} className="flex items-center gap-10 rounded-md border border-black/10 p-12">
                    <span
                      className="h-30 w-30 shrink-0 rounded-full border border-black/10"
                      style={{ backgroundColor: color.hex }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-bold text-black">{color.name}</p>
                      <p className="mt-2 text-xs text-gray-dark">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 rounded-md bg-black p-16 text-white">
                <p className="text-sm font-bold">Typography</p>
                <p className="mt-6 text-sm leading-relaxed text-white/75">
                  LINE Seed KR · SEBANG Gothic · Sarina
                </p>
              </div>
            </section>

            <section className="mt-40 sm:mt-52">
              <h3 className="font-heading text-xl font-bold text-black sm:text-2xl">COMMON COMPONENTS</h3>
              <p className="mt-10 text-sm leading-relaxed text-gray-dark sm:text-base">
                components/common에 정의되어 실제 화면에서 재사용되는 공통 UI와 Props별 스타일입니다.
              </p>

              <div className="mt-16 divide-y divide-black/15 border-y border-black/15">
                <div className="py-20 sm:py-24">
                  <div className="flex flex-wrap items-baseline justify-between gap-6">
                    <h4 className="font-heading text-lg font-bold text-black">Button</h4>
                    <code className="text-xs text-gray-dark">variant: gradient | white | purple</code>
                  </div>
                  <div className="mt-14 flex flex-wrap gap-10 rounded-md bg-gray-dark p-16">
                    <Button variant="gradient" className="h-40 px-18 text-sm font-bold">gradient</Button>
                    <Button variant="white" className="h-40 px-18 text-sm font-bold">white</Button>
                    <Button variant="purple" className="h-40 px-18 text-sm font-bold">purple</Button>
                  </div>
                </div>

                <div className="py-20 sm:py-24">
                  <div className="flex flex-wrap items-baseline justify-between gap-6">
                    <h4 className="font-heading text-lg font-bold text-black">Badge</h4>
                    <code className="text-xs text-gray-dark">variant: default | black | gradient</code>
                  </div>
                  <div className="mt-14 flex flex-wrap gap-10 rounded-md bg-gray/20 p-16">
                    <Badge variant="default" className="font-bold">default</Badge>
                    <Badge variant="black" className="font-bold">black</Badge>
                    <Badge variant="gradient" className="font-bold">gradient</Badge>
                  </div>
                </div>

                <div className="py-20 sm:py-24">
                  <div className="flex flex-wrap items-baseline justify-between gap-6">
                    <h4 className="font-heading text-lg font-bold text-black">DotLabel</h4>
                    <code className="text-xs text-gray-dark">variant: red | green | redLine | purpleLine | purpleLightLine</code>
                  </div>
                  <div className="mt-14 flex flex-wrap gap-x-18 gap-y-12 rounded-md bg-gray-dark p-16 text-white">
                    {(["red", "green", "redLine", "purpleLine", "purpleLightLine"] as const).map((variant) => (
                      <div key={variant} className="flex items-center gap-8 text-xs">
                        <DotLabel variant={variant} />
                        {variant}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="py-20 sm:py-24">
                  <div className="flex flex-wrap items-baseline justify-between gap-6">
                    <h4 className="font-heading text-lg font-bold text-black">ContributionSlider</h4>
                    <code className="text-xs text-gray-dark">contribution: number</code>
                  </div>
                  <div className="mt-14 rounded-md bg-gray-dark p-16">
                    <ContributionSlider contribution={60} />
                    <p className="mt-8 text-xs text-white/60">contribution=&#123;60&#125;</p>
                  </div>
                </div>

                <div className="py-20 sm:py-24">
                  <div className="flex flex-wrap items-baseline justify-between gap-6">
                    <h4 className="font-heading text-lg font-bold text-black">ProjectStatusBadge</h4>
                    <code className="text-xs text-gray-dark">status: new | inProgress</code>
                  </div>
                  <div className="mt-14 grid grid-cols-2 gap-10">
                    <div className="relative h-90 overflow-hidden rounded-md border border-black/15 bg-white">
                      <ProjectStatusBadge status="new" />
                      <code className="absolute bottom-10 right-10 text-xs text-gray-dark">status=&quot;new&quot;</code>
                    </div>
                    <div className="relative h-90 overflow-hidden rounded-md border border-black/15 bg-white">
                      <ProjectStatusBadge status="inProgress" />
                      <code className="absolute bottom-10 right-10 text-xs text-gray-dark">status=&quot;inProgress&quot;</code>
                    </div>
                  </div>
                </div>

                <div className="py-20 sm:py-24">
                  <div className="flex flex-wrap items-baseline justify-between gap-6">
                    <h4 className="font-heading text-lg font-bold text-black">ExpandingToast</h4>
                    <code className="text-xs text-gray-dark">title?: string / description?: string</code>
                  </div>
                  <div className="mt-8 rounded-md bg-gray/15 px-10">
                    <ExpandingToast title="ExpandingToast" description="스크롤시 발생하는 토스트 메세지 입니다." />
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjectModal;
