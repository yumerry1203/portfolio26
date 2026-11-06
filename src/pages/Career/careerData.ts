import type { CareerProblemItem } from "./components/CareerProblemTable";

export const careerSummary = [
  { period: "2025. 08 - 2026. 06", company: "(주)핀게이트", badge: "프로젝트 계약", role: "프론트엔드" },
  { period: "2024. 08 - 2025. 05", company: "(주)에이디앤스타일", badge: "프로젝트 계약", role: "프론트엔드" },
  { period: "2021. 01 - 2024. 02", company: "개인 프리랜서", role: "웹사이트 구축 및 운영" },
  { period: "2018. 07 - 2020. 12", company: "(주)애드캡슐소프트", badge: "정규직", role: "UI개발팀" },
];

export const moggoji = {
  period: "2025. 12 - 2026. 06",
  title: "모꼬지, 행사 관리 Web & APP",
  team: "기획 3명, 디자인 2명, 백엔드 1명, 프론트엔드 3명",
  scope: "Web Admin, Mobile App, Landing Page 프론트엔드 개발",
  overview: "대규모 행사가 잦은 GA 조직의 복잡하고 반복적인 행사 운영 업무를 효율화하기 위한 통합 행사 운영 플랫폼입니다. 운영자는 Web Admin에서 행사, 참가자, 숙박, 교통 정보를 통합 관리하고, 참가자는 Mobile App에서 일정, 배정 정보, 공지사항을 실시간으로 확인할 수 있습니다.",
  skills: ["React", "TypeScript", "React Native", "Expo", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Zustand", "React Hook Form", "Zod", "Claude Code", "GitLab", "TanStack Table"],
  roles: [
    {
      title: "1. Web Admin | 행사 운영 및 참가자 관리 어드민",
      items: [
        "행사와 일정을 생성하고 참가자를 초대하며, 참가자 정보를 통합 관리하는 React, TypeScript 기반 운영자 Web Admin 개발",
        "행사 장소 등록을 위한 Google API 연동, React Hook Form, Zod 기반 회원가입 및 로그인 폼 검증",
        "Zustand를 활용해 사용자 권한, 행사 선택, 마스킹 정책 등 서비스 전역 상태 관리",
      ],
    },
    {
      title: "2. Mobile App | 행사 참가자용 앱",
      items: [
        "로그인, 회원가입부터 행사 초대 및 참여까지 이어지는 주요 사용자 플로우를 React Native, Expo 기반 모바일 App으로 구현",
        "Expo Go를 활용해 iOS, Android 실제 디바이스에서 화면과 동작을 실시간으로 확인하며 디바이스별 UI 및 동작 검증",
        "WeatherAPI를 연동해 행사 지역의 날씨를 제공하고, 행사 일정과 시간에 따라 교통 및 객실 배정 정보 제공",
      ],
    },
    {
      title: "3. Landing Page | 서비스 소개를 위한 반응형 랜딩페이지",
      items: [
        "검색 노출을 고려해 정적 HTML 기반으로 구현하고 title, description, OG, canonical 등 SEO 메타 정보 구성",
        "GSAP과 ScrollTrigger를 활용해 서비스 소개 콘텐츠의 스크롤 인터랙션 구현",
      ],
    },
  ],
};

export const landingAudit = [
  { check: "스크롤 잠금과 약 17,000px의 과도한 핀 스크롤 구조 확인", improve: "히어로 스크롤 잠금을 5초 → 3초로 단축하고 모션을 최소화했으며, prefers-reduced-motion 적용" },
  { check: "SCSS 고유 기능 활용도가 낮아 불필요한 빌드 과정 확인", improve: "SCSS를 CSS로 전환해 스타일 구조 및 개발 환경 단순화" },
  { check: "검색 노출을 위한 SEO 요소와 주요 이미지 로딩 개선 필요", improve: "SEO 메타 태그, OG, canonical 구성 및 주요 이미지 LCP preload 적용" },
];

export const moggojiProblems: CareerProblemItem[] = [
  {
    title: "1. WebView → React Native + Expo 전환으로 iOS·Android 앱 출시",
    situation: "WebView 기반 앱에서 위치 안내, 배터리 정책 등 네이티브 기능 요구사항 발생",
    solution: "React Native + Expo로 전환하고 웹 UI를 네이티브 구조로 재구현",
    result: "네이티브 기능 대응이 가능한 앱 구조 구축, 별도 App 개발자 없이 iOS와 Android 출시",
  },
  {
    title: "2. Web, App 공통 관리를 위한 모노레포 전환",
    situation: "Web과 App에서 API, 디자인 토큰, 아이콘 등 공통 코드 중복 발생",
    solution: "pnpm Workspace 기반 모노레포로 전환하고 공통 패키지로 분리",
    result: "중복 코드를 줄이고 공통 패키지 수정으로 Web과 App 변경사항을 함께 관리하는 구조 구축",
  },
  {
    title: "3. Kendo UI → TanStack Table 전환",
    situation: "Kendo UI의 상용 라이선스 비용으로 대체 필요",
    solution: "TanStack Table로 전환하고 컬럼 고정 등 필요한 DataGrid 기능 구현",
    result: "상용 라이선스 의존성 제거 및 비용 절감, Table UI 커스터마이징 구조 확보",
  },
];

export const isp = {
  period: "2025. 08 - 2025. 11",
  title: "보험 상담지원 솔루션, ISP",
  team: "기획 1명, 디자인 1명, 백엔드 2명, 프론트엔드 1명",
  scope: "보험상담 Web, 모바일 WebView 반응형 프론트엔드 개발",
  overview: "보험 설계사의 고객 관리부터 보장 분석, 상품 비교, 맞춤 제안까지 상담 전 과정을 지원하는 통합 보험 상담 솔루션입니다.",
  skills: ["Vue.js", "TypeScript", "Vue Router", "Tailwind CSS", "Chart.js", "Toast UI Calendar", "GSAP", "Vite"],
  roles: [
    {
      title: "1. 보험 상담 웹 플랫폼 UI 개발",
      items: [
        "Chart.js와 vue-slider-component를 활용해 복잡한 보험 보장 분석 및 건강관리 데이터를 보험 설계사가 한눈에 파악할 수 있도록 시각화",
        "TOAST UI Calendar를 활용해 고객 일정 관리 기능을 개발하고 Drag & Drop과 주간/월간 캘린더 전환 등 업무 환경에 맞게 커스터마이징",
        "Vue 생명주기 훅을 활용해 이벤트 리스너를 등록하고 컴포넌트 해제 시 리스너를 정리",
      ],
    },
    {
      title: "2. 모바일 고객 정보 입력을 위한 단계별 WebView 개발",
      items: [
        "Vue.js와 TypeScript 기반으로 고객 정보 입력 단계를 분리하고, 이전/다음 단계 이동에 따라 입력 화면과 진행 상태가 변경되는 Step Form UI 구현",
        "Daum Postcode API를 연동해 주소 검색 결과를 제공하고 선택한 주소를 고객 정보 입력 화면에 반영",
        "Radio, Counter, Datepicker 등 데이터 유형별 입력 컴포넌트를 구성하고 다양한 모바일 화면 크기에 대응하는 반응형 UI 구현",
      ],
    },
  ],
};

export const ispProblems: CareerProblemItem[] = [
  {
    title: "1. 중복 UI의 공통 컴포넌트화",
    situation: "메시지와 용도에 따라 Alert를 각각 별도 컴포넌트로 생성해 유사한 UI 코드가 반복됨",
    solution: "Alert의 공통 UI를 하나의 컴포넌트로 통합하고 메시지와 옵션을 Props로 전달하도록 구조 개선",
    result: "중복 컴포넌트를 줄이고 Props 변경만으로 다양한 Alert를 재사용할 수 있는 구조 구축",
  },
  {
    title: "2. SCSS Utility → Tailwind CSS 전환",
    situation: "SCSS 반복문으로 다수의 Utility Class를 생성해 스타일 관리가 복잡",
    solution: "기존 Utility를 정리하고 Tailwind CSS 기반 스타일링으로 전환",
    result: "반복 스타일을 줄이고 일관된 Utility Class 기반 스타일 관리 구조 구축",
  },
  {
    title: "3. UI Guide 구축을 통한 화면 검수 개선",
    situation: "권한별 화면이나 에러 페이지 등 접근이 제한적인 화면을 다른 부서에서 확인하고 검수하기 어려움",
    solution: "공통 컴포넌트와 전체 화면을 정리한 UI Guide와 화면 리스트 구성",
    result: "프로젝트 구성원이 필요한 화면에 직접 접근해 UI와 구현 상태를 빠르게 확인하고 검수하는 환경 마련",
  },
];

export const cleverse = {
  period: "2024. 08 - 2025. 05",
  title: "한화 그룹웨어 Cleverse",
  team: "기획 6명, 디자인 3명, 백엔드 11명, 프론트엔드 4명",
  scope: "Web, Mobile App 프론트엔드 개발",
  overview: "한화그룹 임직원의 메일·일정·전자결재·게시판 등 주요 업무를 하나의 환경으로 통합한 그룹웨어입니다.",
  skills: ["Vue.js", "TypeScript", "Vuex", "vue3-table-lite", "Vuetify", "Chart.js", "Vuepic Datepicker", "SCSS", "ESLint"],
  roles: [
    {
      title: "1. 그룹웨어 주요 업무 기능 개발(전자결재, 게시판, 구성원 조회 등)",
      items: [
        "vue3-table-lite를 활용해 데이터가 많은 업무 화면의 테이블을 구성하고 조건별 필터링으로 필요한 정보만 조회하도록 구현",
        "사이드 메뉴의 열림/접힘 상태를 Vuex 전역 상태로 관리해 여러 화면에서 동일한 UI 상태 유지",
        "Mobile App 출시를 위해 주요 업무 화면을 WebView 환경에 맞게 구현하고 모바일 UI 개발",
      ],
    },
    {
      title: "2. 개인 업무 관리를 위한 My Note와 협업보드 기능 전담 개발",
      items: [
        "개인 업무를 기록하고 공유할 수 있는 My Note 화면을 구현하고 Edit Mode 상태에 따라 조회/편집 UI와 사용자 인터랙션이 전환되도록 개발",
        "노트별 댓글 작성 및 삭제, @멘션을 통한 구성원 지정 등 My Note 내 커뮤니케이션 기능 구현",
      ],
    },
  ],
};

export const cleverseProblems: CareerProblemItem[] = [
  {
    title: "1. TypeScript 타입 안정성 개선",
    situation: "데이터와 Props에 any가 광범위하게 사용되어 TypeScript의 타입 검사를 충분히 활용하기 어려움",
    solution: "any로 정의된 데이터와 Props에 interface, type을 적용하고 공통 로직에 Generic <T> 적용",
    result: "any 의존도를 줄이고 데이터와 Props 타입 오류를 개발 단계에서 사전 확인",
  },
  {
    title: "2. ESLint 기반 코드 규칙 통일",
    situation: "다수의 작업자가 참여하면서 프로젝트별 코드 작성 방식과 컨벤션 차이 발생",
    solution: "ESLint 공통 규칙으로 문법 오류, 불필요한 변수 및 코드 스타일을 일관된 기준으로 점검",
    result: "일관된 코드베이스 유지와 작업자별 개발 편차 감소, 코드 검증 및 리뷰 효율성 개선",
  },
];

export const collaborationCases = [
  {
    title: "1. 개발 후반 디스플레이 기준 변경 요구에 대한 협업 대응",
    paragraphs: [
      "그룹웨어 Cleverse 프로젝트 초기부터 Windows 디스플레이 배율 100%를 기준으로 디자인과 개발을 진행했으나, 개발 후반부에 현업 사용자 환경을 반영해 125% 배율을 새로운 기준으로 전체 화면을 수정해 달라는 요구사항이 추가되었습니다.",
      "전체 화면을 처음부터 다시 구현하기보다 125% 환경에서 발생하는 레이아웃 문제를 빠르게 확인하고, 공통 UI와 반복적으로 사용되는 레이아웃부터 수정했습니다. Flexbox와 Grid를 활용해 화면을 조정하고 디자이너 및 기획자와 변경 범위를 지속적으로 확인했습니다.",
      "그 결과 별도의 인력 충원이나 일정 연장 없이 125% 배율 기준으로 전체 화면 대응을 마무리하고 기존 일정에 맞춰 프로젝트를 완료했습니다.",
    ],
  },
  {
    title: "2. AI를 활용한 QA 시나리오 작성 및 통합 관리 프로세스 구축",
    paragraphs: [
      "ISP 프로젝트에서는 별도의 QA 전담 인력 없이 팀 구성원이 직접 기능을 테스트하고, 발견한 이슈를 Figma 멘션으로 전달해 전체 QA 항목과 진행 상태를 한눈에 확인하기 어려웠습니다.",
      "이전 프로젝트의 Excel 기반 QA 시나리오 방식을 제안하고 AI에 기획서와 디자인 자료를 제공해 기능별 QA 시나리오 초안을 작성했습니다. 결과는 실제 기획과 구현 내용을 기준으로 직접 검토하고 체크리스트로 정리했습니다.",
      "기획자와 개발자가 QA 항목, 발견된 오류, 담당자와 처리 상태를 함께 확인하고 개별적으로 전달되던 이슈를 하나의 문서에서 관리하도록 개선했습니다.",
    ],
  },
];
