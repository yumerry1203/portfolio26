export interface CareerRole {
  title: string;
  items: string[];
}

export interface CareerProject {
  period: string;
  title: string;
  company: string;
  team: string;
  scope: string;
  overview: string;
  skills: string[];
  outcomes: string[];
  roles: CareerRole[];
}

export const skillGroups = [
  { label: "Frontend", items: "React, TypeScript, Vue.js, JavaScript, React Native (Expo)" },
  { label: "State & Styling", items: "Zustand, React Hook Form(Zod), TanStack Query, Tailwind CSS, shadcn/ui, SCSS" },
  { label: "Tools & Collaboration", items: "Git, GitLab, Vite, ESLint, Figma, Codex / AI Tools" },
];

export const moggoji: CareerProject = {
  period: "2025. 12 - 2026. 06",
  title: "모꼬지, 행사 관리 Web & App 구축",
  company: "(주)핀게이트",
  team: "기획 3명, 디자인 2명, 백엔드 1명, 프론트엔드 3명",
  scope: "Web Admin, Mobile App, Landing Page 프론트엔드 개발",
  overview: "대규모 행사가 잦은 GA 조직의 복잡하고 반복적인 행사 운영 업무를 효율화하기 위한 통합 행사 운영 플랫폼입니다. 운영자는 Web Admin에서 행사, 참가자, 숙박, 교통 정보를 통합 관리하고, 참가자는 Mobile App에서 일정, 배정 정보, 공지사항을 실시간으로 확인할 수 있습니다.",
  skills: ["React", "TypeScript", "React Native", "Expo", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Zustand", "Claude Code", "GitLab", "TanStack Table", "React Hook Form", "Zod"],
  outcomes: [
    "초기 WebView 앱을 React Native로 전환해 별도 앱 개발자 없이 1차에 iOS와 Android 모두 출시",
    "어드민과 모바일 앱 간 공통 리소스의 중복이 늘어나 모노레포로 통합해 관리 비용을 줄임",
    "유료 Kendo UI Table을 TanStack Table로 전환해 라이선스 비용 절감",
    "Figma 기반 QA를 Excel 테스트 시나리오로 전환하는 개선을 주도해 검수 누락률 줄임",
  ],
  roles: [
    {
      title: "1. Web Admin | 행사 운영 관리를 위한 어드민 페이지 개발",
      items: [
        "행사 생성 등록, 교통수단 배치, 객실 배정 등 주요 행사 관리에 필요한 화면 구현과 기능 개발",
        "사용자 앱에 행사 장소 기반 날씨 노출 필요성을 발견해, 기존 Text Input 방식에서 Google API 연동 방식으로 개선",
        "전역 상태 관리가 필요한 사용자 권한, 선택된 행사 정보, 개인정보 마스킹 등을 위해 Zustand로 관리",
        "회원가입과 로그인 입력 폼의 일관성과 다양한 에러 케이스 대응을 위해 React Hook Form과 Zod로 검증 로직 관리",
      ],
    },
    {
      title: "2. Mobile App | 행사 참가자용 앱",
      items: [
        "Expo Go를 활용해 iOS, Android 실제 디바이스에서 화면과 동작을 실시간으로 확인하며 디바이스별 UI 및 동작을 검증",
        "WeatherAPI를 연동해 행사 지역의 날씨를 제공하고, 행사 일정과 시간에 따라 교통 및 객실 배정 정보 제공",
      ],
    },
    {
      title: "3. Landing Page | 서비스 소개를 위한 반응형 랜딩페이지",
      items: [
        "검색 노출과 공유 품질을 높이기 위해 title, description, OG, canonical 등 SEO 메타 정보 구성 및 주요 이미지 로딩 최적화",
        "서비스 소개 흐름의 몰입도를 높이기 위해 GSAP과 ScrollTrigger를 활용해 콘텐츠 전환 및 강조 인터랙션 구현",
        "소규모 랜딩페이지 특성상 과도한 빌드 환경 도입을 지양하고, 유지보수와 배포가 단순한 정적 HTML 구조로 제작",
      ],
    },
  ],
};

export const landingAudit = [
  {
    check: "스크롤 잠금과 약 17,000px의 과도한 핀 스크롤 구조 확인",
    improve: "히어로 스크롤 잠금을 5초 → 3초로 단축하고 모션을 최소화했으며, prefers-reduced-motion 적용으로 모션 없이도 콘텐츠를 확인할 수 있도록 개선",
  },
  {
    check: "SCSS 고유 기능 활용도가 낮아 불필요한 빌드 과정 확인",
    improve: "CSS로 전환하여 별도 컴파일 과정을 제거 및 개발 환경 단순화",
  },
  {
    check: "검색 노출을 위한 SEO 요소와 주요 이미지 로딩 개선 필요",
    improve: "SEO 메타 태그, OG, canonical을 구성하고 LCP preload를 적용 → Lighthouse SEO 92점으로 검증",
  },
];

export const isp: CareerProject = {
  period: "2025. 08 - 2025. 11",
  title: "보험 상담지원 솔루션, ISP 구축",
  company: "(주)핀게이트",
  team: "기획 1명, 디자인 1명, 백엔드 2명, 프론트엔드 1명",
  scope: "보험상담 Web, 모바일 WebView 반응형 프론트엔드 개발",
  overview: "보험 설계사의 고객 관리부터 보장 분석, 상품 비교, 맞춤 제안까지 상담 전 과정을 지원하는 통합 보험 상담 솔루션입니다.",
  skills: ["Vue.js", "TypeScript", "Vite", "Vue Router", "Tailwind CSS", "Chart.js", "Toast UI Calendar", "GSAP"],
  outcomes: [
    "프론트엔드를 단독으로 담당하며 일정 관리, 요구사항 조율, 리뷰부터 출시까지 전 과정에 참여",
    "중장년 여성 타깃층을 고려해 복잡한 보험 데이터를 차트, 그래프로 시각화하고, 현업 실무자 리뷰에서 긍정적인 피드백 확보",
    "이용 가이드의 필요성을 제안하고 기획과 제작을 주도해 복잡한 기능의 서비스 이해도를 높임",
  ],
  roles: [
    {
      title: "1. 보험 상담 웹 플랫폼 개발",
      items: [
        "TOAST UI Calendar를 활용해 고객 일정 관리 기능을 개발하고, 일정 Drag & Drop과 주간/월간 캘린더 전환 등 업무 환경에 맞게 캘린더 기능을 커스터마이징하여 제공",
        "반복되는 CSS 클래스의 가독성과 관리 효율을 높이기 위해 Tailwind CSS를 도입하고, 공통 스타일 적용 방식을 정리",
        "Chart.js와 vue-slider-component를 활용해 복잡한 보험 데이터를 설계사가 한눈에 파악할 수 있도록 시각화",
        "퍼블리싱 가이드를 제작해 컴포넌트 기준을 정리하고, 팀원들이 일관된 기준으로 화면을 검수할 수 있도록 지원",
      ],
    },
    {
      title: "2. 고객 정보 입력을 위한 WebView 개발",
      items: [
        "이전/다음 단계 이동에 따라 입력 화면과 진행 상태가 변경되는 Step Form UI 구현",
        "Daum Postcode API를 연동해 주소 검색 결과를 제공하고, 선택한 주소를 고객 정보 입력 화면에 반영하는 주소 검색 기능 구현",
        "Radio, Counter, Datepicker 등 데이터 유형별 입력 컴포넌트를 구성하고 다양한 모바일 화면 크기에 대응하는 반응형 UI 구현",
      ],
    },
  ],
};

export const cleverse: CareerProject = {
  period: "2024. 08 - 2025. 05",
  title: "한화 그룹웨어 Cleverse 구축",
  company: "(주)에이디앤스타일",
  team: "기획 6명, 디자인 3명, 백엔드 11명, 프론트엔드 4명",
  scope: "Web, Mobile App 프론트엔드 개발 및 퍼블리싱",
  overview: "한화 그룹사의 메일, 결재, 일정 등 분산된 업무를 하나의 환경에서 통합하고, 맞춤형 AI Agent를 통한 자동화와 검색 및 추천 기능으로 업무 효율을 높이는 한화시스템의 지능형 그룹웨어입니다.",
  skills: ["Vue.js", "TypeScript", "Vuex", "vue3-table-lite", "Vuetify", "Chart.js", "Vuepic Datepicker", "SCSS", "ESLint"],
  outcomes: [
    "오픈 직전 발생한 125% 디스플레이 배율 이슈를 Flex와 Grid로 리팩토링해 추가 공수와 일정 지연 없이 해결",
    "화면별로 반복 구현되던 No Data와 Error UI를 공통 컴포넌트 1개로 통합해 중복 구현을 약 80% 이상 줄임",
    "광범위하게 사용되던 any를 Interface와 Generic 구조로 정리해 데이터 타입 안정성과 재사용성 향상",
    "다수 작업자 환경에 ESLint 공통 규칙을 적용해 코드 작성 기준을 통일하고 개발 편차를 줄임",
  ],
  roles: [
    {
      title: "1. 그룹웨어 주요 업무 기능 개발(전자결재, 게시판, 구성원 조회 등)",
      items: [
        "vue3-table-lite를 활용해 전자결재, 게시판 등 데이터가 많은 업무 화면의 테이블을 구성하고, 조건별 필터링을 통해 필요한 정보만 조회할 수 있도록 구현",
        "사이드 메뉴의 열림/접힘 상태를 Vuex 전역 상태로 관리해 여러 화면에서 동일한 UI 상태가 유지되도록 구현",
        "그룹웨어 Mobile App 출시를 위해 주요 업무 화면을 WebView 환경에 맞게 구현하고, 앱 내에서 사용할 수 있는 모바일 UI 개발",
      ],
    },
    {
      title: "2. 개인 업무 관리를 위한 My Note와 협업보드 기능 전담 개발",
      items: [
        "개인 업무를 기록하고 공유할 수 있는 My Note 화면을 구현하고, Edit Mode 상태에 따라 조회/편집 UI와 사용자 인터랙션이 전환되도록 개발",
        "노트별 댓글 작성 및 삭제, @멘션을 통한 구성원 지정 등 My Note 내 커뮤니케이션 기능 구현",
      ],
    },
  ],
};

export const collaborationCase = {
  title: "개발 후반 디스플레이 배율 변경(100% → 125%) 요구 대응",
  situation: "프로젝트 초기부터 Windows 디스플레이 배율 100% 기준으로 디자인과 개발까지 진행했으나, 오픈 직전 125% 배율 기준으로 전체 화면 수정 요구가 발생했습니다. 125% 배율 적용 시 요소가 확대되어 전체 페이지 레이아웃이 깨지는 이슈가 발생해, 추가 인력 투입과 약 1개월의 일정 지연이 예상",
  response: [
    "전체를 처음부터 재구현하는 대신, 공통 UI와 반복 사용되는 레이아웃부터 우선 수정",
    "기존 구조를 최대한 유지하면서 Flex와 Grid를 활용해 화면을 유연하게 조정",
    "디자이너, 기획자와 실시간 싱크를 맞추며 컴포넌트 크기와 콘텐츠 영역을 검토하고 전체 페이지에 신속히 적용",
  ],
  result: "별도의 인력 충원이나 일정 연장 없이 기존 일정에 맞춰 125% 배율 기준 대응 완료",
};
