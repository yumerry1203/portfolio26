import type { Project } from "@/type/project";

import sampleImg from "@/assets/images/sample.png"

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
      links: [
        {
          label: "Web",
          url: "https://example.com",
        },
        {
          label: "App",
          url: "https://example.com",
        },
      ],
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
          title: "관리자 페이지의 전반적인 코딩 컴포넌트 만들기, 교통수단 관리 객실 배정 관리를 작업하였습니다.",
          description: "자바스크립트와 Shadcn의 표를 커스텀하여 나타냈습니다. 인풋은 커스텀하여 검색버튼을 클릭시 아래 드롭다운 형식으로 나타냈습니다.",
          images: [ sampleImg, ],
        },
        {
          number: "02",
          title:"관리자 페이지의 전반적인 코딩 컴포넌트 만들기, 교통수단 관리 객실 배정 관리를 작업하였습니다.",
          description: "자바스크립트와 Shadcn의 표를 커스텀하여 나타냈습니다. 인풋은 커스텀하여 검색버튼을 클릭시 아래 드롭다운 형식으로 나타냈습니다.",
          images: [sampleImg,],
        },
        {
          number: "03",
          title: "관리자 페이지의 전반적인 코딩 컴포넌트 만들기, 교통수단 관리 객실 배정 관리를 작업하였습니다.",        
				},
      ],
    },
  },
];