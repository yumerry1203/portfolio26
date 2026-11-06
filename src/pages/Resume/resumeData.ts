export const skillGroups = [
  { label: "Frontend", skills: ["React", "TypeScript", "JavaScript", "React Native", "Vue.js"] },
  { label: "State & Data", skills: ["Zustand", "React Hook Form", "Zod"] },
  { label: "UI & Styling", skills: ["HTML5/CSS", "Tailwind CSS", "shadcn/ui"] },
  { label: "Tools & Environment", skills: ["Git", "GitLab", "ESLint", "Vite", "Figma"] },
  { label: "AI Tools", skills: ["GPT-5 (검토 및 문서화)", "Codex (분석, 리팩토링)", "AI Agent (프로젝트 규칙)"] },
] as const;

export const experiences = [
  {
    period: "2025. 08 - 2026. 06",
    company: "(주)핀게이트",
    role: "프론트엔드 (프로젝트 계약)",
    responsibilities: [
      "보험 관련 솔루션 프로젝트에서 프론트엔드 UI 및 화면 개발",
      "React+TypeScript 기반 행사관리 플랫폼 웹 어드민과 React Native 기반 사용자 모바일 앱 UI 구현",
      "차트, 데이터 테이블 등 복잡한 데이터를 시각화한 화면 및 인터랙션 구현",
      "React Hook Form, Zod 기반 로그인/회원가입 폼 관리 및 사용자 입력 검증 구현",
      "Google Lighthouse를 활용한 성능, 접근성, SEO 점검 및 웹 품질 개선",
    ],
    projects: "모꼬지 행사관리 Web & App 구축, 보험상담 플랫폼 ISP 구축",
  },
  {
    period: "2024. 08 - 2025. 05",
    company: "(주)에이디앤스타일",
    role: "프론트엔드 (프로젝트 계약)",
    responsibilities: [
      "한화 차세대 그룹웨어 프로젝트에서 전자결재, 협업보드, 게시판 등 주요 업무 시스템의 신규 화면 구현",
      "Vue3 + TypeScript 기반 웹/모바일 그룹웨어 화면 개발 및 데이터 상태에 따른 조건부 UI 처리",
      "QA 과정에서 발견된 UI 오류 및 요구사항을 수정하고 화면 완성도와 일관성 개선",
      "Git 기반 형상관리 환경에서 다수 개발자와 협업하며 수정사항 반영 및 버전 관리",
    ],
    projects: "한화 차세대 그룹웨어 Cleverse Web & App 구축",
  },
  {
    period: "2021. 01 - 2024. 02",
    company: "개인 프리랜서",
    role: "웹사이트 구축 및 운영",
    responsibilities: [
      "클라이언트와 소통하며 화면 개발부터 수정, 유지보수까지 외주 프로젝트 전반 수행",
      "(주)클래식컴퍼니 HTML/CSS 기반 웹 상세페이지 구축",
      "GSAP 등 인터랙션 라이브러리를 활용한 스크롤 애니메이션 및 동적 UI 구현",
    ],
    projects: "클래식컴퍼니 홈페이지 구축, Haru Share 사이트 구축 등",
  },
  {
    period: "2018. 07 - 2020. 12",
    company: "(주)애드캡슐소프트",
    role: "UI 개발팀 (정규직)",
    note: "DreamCapsule 7기 인턴십 수료 후 정규직 전환",
    responsibilities: [
      "웹에이전시 환경에서 다양한 브랜드와 기업 웹사이트 구축",
      "HTML/CSS/JavaScript 기반 웹표준과 시맨틱 마크업을 준수한 웹 구현",
      "다양한 브라우저와 디바이스 환경을 고려한 크로스 브라우징",
      "반응형 레이아웃을 적용해 PC, 태블릿, 모바일 등 다양한 디바이스 환경 구현",
    ],
    projects: "현대카드 Web 구축 및 운영, 현대캐피탈 자동차금융 구축, 삼성서울병원 암병원 리뉴얼, 아모레퍼시픽 뷰티포인트 APP 고도화, KOEN 권한관리 사이트 구축",
  },
] as const;

export const educationItems = [
  { period: "2020.02", title: "학점은행제", major: "컴퓨터 공학", detail: "학사학위 취득" },
  { period: "2016.03 - 2019.02", title: "명지전문대학", major: "컴퓨터 공학", detail: "전문학사 졸업" },
] as const;

export const course = {
  period: "2024.03 - 2024.07",
  title: "UI/UX 웹 퍼블리싱 & 프론트엔드(React.js) 과정 760H",
  institute: "(이젠아카데미평생교육원)",
  descriptions: [
    "UI/UX에 대한 이해를 바탕으로 웹표준, 반응형을 고려한 화면 설계 및 구현",
    "React 기초 및 컴포넌트 구조를 학습하고 Bootstrap을 활용한 SPA 화면 구현",
  ],
} as const;

export const certificates = [
  { period: "2019.10", title: "컴퓨터활용능력 2급", issuer: "대한상공회의소" },
  { period: "2018.11", title: "정보처리산업기사", issuer: "한국산업인력공단" },
  { period: "2017.09", title: "GTQ(그래픽기술자격) 1급", issuer: "한국생산성본부" },
  { period: "2017.09", title: "GTQ i (일러스트) 1급", issuer: "한국생산성본부" },
] as const;

export const awards = [
  { period: "2024.07.23", title: "이젠아카데미 교육과정 우수 수료자 선정", prize: "우수상" },
  { period: "2018.09.20", title: "명지전문대학 소프트웨어 경진대회", prize: "최우수상" },
] as const;
