import type { Project } from "@/type/project";

import sampleImg from "@/assets/images/sample.png"

const detailTitle = (
  <>
    관리자 페이지의 전반적인 코딩 컴포넌트 만들기, <span className="text-primary">교통수단 관리</span> 객실 배정 관리를 작업하였습니다.
  </>
);

export const projects: Project[] = [
  /* moggoji */
  {
    id: "moggoji",
    year: "2026",
    type: "구축",
    category: ["Web", "App", "Landing Page"],
    title: "모꼬지, 행사관리 APP",
    description:"GA의 행사관리를 위한 행사운영자와 참가자를 위한 올인원 행사 운영 플랫폼",
    period: "2025.12 ~ 2026.06",
    skills: [
      "React",
      "TypeScript",
      "ReactNative",
      "Tailwind",
      "Shadcn",
      "Figma",
    ],
    contribution: "퍼블리싱 60%",
    image: [
        sampleImg,
        sampleImg,
      ],
    detail: {
      links: "https://example.com",
      heroImages: [
        sampleImg,
        sampleImg,
      ],
      role: "화면 UI 구현 · 공통 컴포넌트 설계 · API 응답 기반 화면 처리",      
      workPeriod: "1년 3개월",
      overview: "모꼬지, 행사 운영의 복잡함을 한눈에. 사람은 많아도 운영은 가볍게 우리은행 독보적 혜택의 시리즈물 중 하나로 참여객 좋은 어드밴스 최근의 간편결제 성장세에 맞춰 카드 본인은 어쩌고 저쩌고 작업이 많아지면 기간이 늘어나요.",
      sections: [
        {
          number: "01",
          title: detailTitle,
          description: "자바스크립트와 Shadcn의 표를 커스텀하여 나타냈습니다. 인풋은 커스텀하여 검색버튼을 클릭시 아래 드롭다운 형식으로 나타냈습니다.",
          images: [ sampleImg, ],
        },
        {
          number: "02",
          title: detailTitle,
          description: "자바스크립트와 Shadcn의 표를 커스텀하여 나타냈습니다. 인풋은 커스텀하여 검색버튼을 클릭시 아래 드롭다운 형식으로 나타냈습니다.",
          images: [sampleImg,],
        },
        {
          number: "03",
          title: detailTitle,
				},
      ],
    },
  },
  /* ISP */
  {
    id: "isp",
    year: "2025",
    type: "구축",
    category: ["Web"],
    title: "보험 상담지원 솔루션, ISP",
    description:"보험 설계사의 보장 설계와 상담을 위한 통합 솔루션",
    period: "2025.08 ~ 2025.12",
    skills: [
      "Vue3",
      "TypeScript",
      "SCSS",
      "Figma",
    ],
    contribution: "퍼블리싱 50%",
    image: [
        sampleImg,
        sampleImg,
      ],
    detail: {
      links: "https://example.com",
      heroImages: [
        sampleImg,
        sampleImg,
      ],
      role: "화면 UI 구현 · 공통 컴포넌트 설계 · API 응답 기반 화면 처리",      
      workPeriod: "1년 3개월",
      overview: "모꼬지, 행사 운영의 복잡함을 한눈에. 사람은 많아도 운영은 가볍게 우리은행 독보적 혜택의 시리즈물 중 하나로 참여객 좋은 어드밴스 최근의 간편결제 성장세에 맞춰 카드 본인은 어쩌고 저쩌고 작업이 많아지면 기간이 늘어나요.",
      sections: [
        {
          number: "01",
          title: detailTitle,
          description: "자바스크립트와 Shadcn의 표를 커스텀하여 나타냈습니다. 인풋은 커스텀하여 검색버튼을 클릭시 아래 드롭다운 형식으로 나타냈습니다.",
          images: [ sampleImg, ],
        },
        {
          number: "02",
          title: detailTitle,
          description: "자바스크립트와 Shadcn의 표를 커스텀하여 나타냈습니다. 인풋은 커스텀하여 검색버튼을 클릭시 아래 드롭다운 형식으로 나타냈습니다.",
          images: [sampleImg,],
        },
        {
          number: "03",
          title: detailTitle,
				},
      ],
    },
  },
  /* Clevers */
  {
    id: "clevers",
    year: "2025",
    type: "구축",
    category: ["Web", "App"],
    title: "한화 그룹웨어 Clevers",
    description:"한화 그룹 내부 임직원의 권한별 화면 분기와 복잡한 업무 플로우를 반영한 차세대 그룹웨어",
    period: "2024.8 ~ 2025.06",
    skills: [
      "React",
      "TypeScript",
      "Zepline",
    ],
    contribution: "퍼블리싱 40%",
    image: [
        sampleImg,
        sampleImg,
      ],
    detail: {
      links: "https://example.com",
      heroImages: [
        sampleImg,
        sampleImg,
      ],
      role: "화면 UI 구현 · 공통 컴포넌트 설계 · API 응답 기반 화면 처리",      
      workPeriod: "1년 3개월",
      overview: "모꼬지, 행사 운영의 복잡함을 한눈에. 사람은 많아도 운영은 가볍게 우리은행 독보적 혜택의 시리즈물 중 하나로 참여객 좋은 어드밴스 최근의 간편결제 성장세에 맞춰 카드 본인은 어쩌고 저쩌고 작업이 많아지면 기간이 늘어나요.",
      sections: [
        {
          number: "01",
          title: detailTitle,
          description: "자바스크립트와 Shadcn의 표를 커스텀하여 나타냈습니다. 인풋은 커스텀하여 검색버튼을 클릭시 아래 드롭다운 형식으로 나타냈습니다.",
          images: [ sampleImg, ],
        },
        {
          number: "02",
          title: detailTitle,
          description: "자바스크립트와 Shadcn의 표를 커스텀하여 나타냈습니다. 인풋은 커스텀하여 검색버튼을 클릭시 아래 드롭다운 형식으로 나타냈습니다.",
          images: [sampleImg,],
        },
        {
          number: "03",
          title: detailTitle,
				},
      ],
    },
  },
  /* harushare */
  {
    id: "harushare",
    year: "2024",
    type: "구축",
    category: ["Web", "반응형"],
    title: "하루쉐어 모바일 웹 제작",
    description:"보험 설계사의 보장 설계와 상담을 위한 통합 솔루션",
    period: "2024.07 ~ 2024.08",
    skills: [
      "Html",
      "CSS",
      "JavaScript",
      "GSAP",
      "Figma",
    ],
    contribution: "디자인 100%, 퍼블리싱 100%",
    image: [
        sampleImg,
        sampleImg,
      ],
    detail: {
      links: "https://example.com",
      heroImages: [
        sampleImg,
        sampleImg,
      ],
      role: "화면 UI 구현 · 공통 컴포넌트 설계 · API 응답 기반 화면 처리",      
      workPeriod: "1년 3개월",
      overview: "모꼬지, 행사 운영의 복잡함을 한눈에. 사람은 많아도 운영은 가볍게 우리은행 독보적 혜택의 시리즈물 중 하나로 참여객 좋은 어드밴스 최근의 간편결제 성장세에 맞춰 카드 본인은 어쩌고 저쩌고 작업이 많아지면 기간이 늘어나요.",
      sections: [
        {
          number: "01",
          title: detailTitle,
          description: "자바스크립트와 Shadcn의 표를 커스텀하여 나타냈습니다. 인풋은 커스텀하여 검색버튼을 클릭시 아래 드롭다운 형식으로 나타냈습니다.",
          images: [ sampleImg, ],
        },
        {
          number: "02",
          title: detailTitle,
          description: "자바스크립트와 Shadcn의 표를 커스텀하여 나타냈습니다. 인풋은 커스텀하여 검색버튼을 클릭시 아래 드롭다운 형식으로 나타냈습니다.",
          images: [sampleImg,],
        },
        {
          number: "03",
          title: detailTitle,
				},
      ],
    },
  },
];
