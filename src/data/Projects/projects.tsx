import type { Project } from "@/type/project";

import ImgCleverse from "@/assets/images/img-cleverse.svg"
import ImgIsp from "@/assets/images/img-isp.svg"
import ImgMoggoji from "@/assets/images/img-moggoji.svg"
import Moggoji01 from "@/assets/images/img-moggoji-01.svg"
import Moggoji02 from "@/assets/images/img-moggoji-02.svg"
import Moggoji03 from "@/assets/images/img-moggoji-03.svg"
import Moggoji04 from "@/assets/images/img-moggoji-04.svg"
import Isp01 from "@/assets/images/img-isp-01.svg"
import Isp02 from "@/assets/images/img-isp-02.svg"
import Isp03 from "@/assets/images/img-isp-03.svg"
import Cleverse01 from "@/assets/images/cleverse-01.svg"
import Cleverse02 from "@/assets/images/cleverse-02.svg"
import Cleverse03 from "@/assets/images/cleverse-03.svg"
import Cleverse04 from "@/assets/images/cleverse-04.svg"



export const projects: Project[] = [
  /* moggoji */
  {
    id: "moggoji",
    year: "2026",
    type: "구축",
    category: ["Web", "App", "Landing Page"],
    title: "모꼬지, 행사관리 APP & Admin",
    description:"복잡한 행사 운영 업무를 하나의 서비스에서 관리하고 이용할 수 있도록 구축한 통합 행사 운영 플랫폼",
    period: "2025.12 - 2026.06",
    role: "Frontend UI Development",
    skills: [
      "React",
      "TypeScript",
      "React Native",
      "Expo",
      "TanStack Query",
      "Zustand",
    ],
    image: ImgMoggoji,
    detail: {
      links: "https://moggoji.kr/",
      heroImage: Moggoji01,
      workPeriod: "6개월",
      overview: <>
        대규모 행사가 잦은 GA 조직의 복잡하고 반복적인 행사 운영 업무를 효율화하기 위해 구축한 통합 행사 운영 플랫폼입니다.<br/>
        운영자는 웹 어드민에서 행사·참가자·숙박·교통 정보를 관리하고, 참가자는 모바일 앱에서 일정·배정 정보·공지사항을 실시간으로 확인할 수 있습니다.
      </>,
      sections: [
        {
          number: "01",
          title: <>
             행사 정보와 참가자 데이터를 한곳에서 관리할 수 있는 <span className="text-primary">운영자용 Web Admin</span> 을 구현했습니다.<br />
          </>,
          description: [
            "Google API를 연동해 일정별 장소 정보를 화면에 노출",
            "React Hook Form + Zod 스키마를 활용해 입력값 검증과 에러 메시지를 일관되게 관리",
            "shadcn/ui를 서비스 디자인에 맞게 커스텀하고 폼·모달·드롭다운 등 공통 컴포넌트로 구현"
          ],
          image: Moggoji03,
        },
        {
          number: "02",
          title: <>
             행사 초대부터 행사 당일까지 이어지는 참가자의 주요 이용 흐름을<span className="text-primary"> 모바일 APP </span> 으로 구현했습니다.
          </>,
          description: [
            "WeatherAPI가 연동된 TODAY 화면의 날씨 정보 UI 구현",
            "TanStack Query·Zustand 기반 데이터 흐름에 맞춰 행사·알림·내정보 화면 UI 구현",
            "Expo Router 기반 화면 구조에서 로그인·초대·행사 조회 등 주요 사용자 플로우 UI 구현"
          ],
          image: Moggoji02,
        },
        {
          number: "03",
          title: <>
            서비스 소개와 도입 문의를 위한 반응형<span className="text-primary"> Landing Page</span> 를 구현했습니다. <br />
          </>,
          description: [
            "HTML · CSS · Vanilla JavaScript 기반",
            "PC·모바일 반응형 UI",
            "GSAP · ScrollTrigger 스크롤 인터랙션",
            "도입 문의 폼 및 모달 구현"
          ],
          image: Moggoji04,

				},
      ],
      development: {
        items: [
          {
            number: "01",
            title: "Kendo UI → TanStack Table 전환",
            description: "컬럼 고정 기능에 사용하던 Kendo UI의 외부 라이선스 의존성을 줄이기 위해 TanStack Table v8 기반 DataGrid로 전환했습니다. 필요한 테이블 기능을 직접 구성해 커스터마이징이 용이한 구조로 개선했습니다.",
          },
          {
            number: "02",
            title: "FSD 기반 프로젝트 구조 적용",
            description: "features · entities · shared 등 역할별 레이어를 구분해 비즈니스 로직과 공통 UI의 책임을 분리하고 유지보수가 용이하도록 구성했습니다.",
          },
          {
            number: "03",
            title: "WeatherAPI 연동",
            description: "모바일 TODAY 화면에 행사 지역의 날씨 정보를 연동해 참가자가 당일 일정과 날씨를 한 화면에서 확인할 수 있도록 구현했습니다.",
          },
          {
            number: "04",
            title: "WebView → React Native 전환",
            description: "초기 React 기반 WebView 앱을 React Native + Expo 환경으로 전환하면서 기존 웹 UI를 네이티브 컴포넌트 구조에 맞게 재구현했습니다. Expo를 통해 실기기에서 반복적으로 화면을 확인하며 레이아웃과 인터랙션을 조정하고, React Native 환경에 맞는 UI 구현 방식을 익혔습니다.",
          },
        ],
        liveServices: [
          { label: "Landing Page", url: "https://moggoji.kr/" },
          { label: "App Store", url: "https://apps.apple.com/us/app/%EB%AA%A8%EA%BC%AC%EC%A7%80-%ED%96%89%EC%82%AC%EC%9D%98-%EC%8B%9C%EC%9E%91/id6768188369" },
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=kr.co.moggoji.app" },
        ],
      },
    },
  },
  /* ISP */
  {
    id: "isp",
    year: "2025",
    type: "구축",
    category: ["Web"],
    title: "보험 상담지원 솔루션, ISP",
    description:"보험 설계사의 고객 관리·보장 분석·상품 비교·맞춤 리포트 제작을 하나로 연결한 상담 업무 통합 플랫폼",
    period: "2025.08 – 2025.10",
    role: "UI Publishing",
    skills: [
      "Vue 3",
      "TypeScript",
      "SCSS",
      "Figma",
    ],
    image: ImgIsp,
    detail: {
      heroImage: Isp01,
      workPeriod: "6개월",
      overview: "보험 설계사가 고객 정보를 관리하고, 보험 보장을 분석·비교하여 맞춤형 상담과 설계를 진행할 수 있도록 지원하는 통합 보험 상담 플랫폼입니다.",
      responsibility: "Vue 3와 TypeScript 기반으로 보험 상담지원 웹 플랫폼의 UI를 구현했습니다. 고객 정보 관리, 보장 분석, 상품 비교, 상담 리포트 등 설계사의 상담 흐름에 맞춘 화면을 개발했으며, 모바일 환경에서는 고객 정보 입력을 위한 반응형 웹뷰를 구현했습니다. SCSS를 활용해 서비스 전반의 UI 스타일과 컴포넌트를 일관되게 적용했습니다.",
      sections: [
        {
          number: "01",
          title: <>
             고객 관리부터 <span className="text-primary">보장 분석, 상품 비교, <br/>맞춤 설계와 리포트 작성</span>까지 이어지는  <br />
             행사 목록·상세 조회, 알림, 내 정보 관리까지<br/>
             웹 플랫폼 UI를 구현했습니다.
          </>,
          description: [
            "고객의 보험·건강·가족·재무 정보 조회 및 관리 화면 구현",
            "보험 보장 분석과 상품 비교 결과를 확인하는 상담 화면 구성",
            "설계사의 편리함을 위한 일정관리 캘린더 구현",
            "테이블, 검색·필터, 입력 폼, 상세 화면 등 반복 UI 컴포넌트 적용"
          ],
          image: Isp02,
        },
        {
          number: "02",
          title: <>
             설계사가 상담 현장에서<span className="text-primary">고객 정보를 빠르게<br/> 수집</span> 할 수 있도록, <span className="text-primary">모바일 환경</span>에 최적화된<br/>
            고객 정보 입력 웹뷰를 구현했습니다.
          </>,
          description: [
            "고객 기본 정보와 상담에 필요한 항목을 단계적으로 입력하는 화면 구성",
            "폼 항목별 상태와 입력 흐름을 고려한 인터랙션 구현",
            "웹 플랫폼의 상담 프로세스와 연결되는 모바일 입력 경험 제공",
          ],
          image: Isp03,
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
    period: "2024.08 – 2025.06",
    role: "UI Publishing",
    skills: [
      "Vue 3",
      "TypeScript",
      "Zeplin",
    ],
    image: ImgCleverse,
    detail: {
      heroImage: Cleverse01,
      workPeriod: "10개월",
      overview: "한화 그룹 내부 임직원의 결재·일정·공지·문서 업무를 통합하고, 더 빠르고 일관된 협업 경험을 업무 효율성과 사용성을 개선",
      responsibility: "Vue 3와 TypeScript 기반 환경에서 그룹웨어 주요 화면의 UI를 구현했습니다. 업무 흐름과 사용자 권한에 따른 화면 구성을 반영하고, 테이블·검색·필터·입력 폼·모달 등 반복적으로 사용되는 인터페이스를 일관된 형태로 적용했습니다. SCSS를 활용해 공통 스타일과 화면별 스타일을 관리하며 유지보수하기 쉬운 구조를 구성했습니다.",
      sections: [
        {
          number: "01",
          title: <>
             <span className="text-primary">업무 처리와 정보 공유를 위한</span>그룹웨어 <br />
             기능을 구현했습니다.
          </>,
          description: [
            "결재 문서 작성, 조회, 승인 흐름에 따른 화면 구현",
            "업무 정보를 전달하는 게시판 목록·상세·댓글 UI 구현",
            "조직 구성원을 검색하고 필요한 사람을 빠르게 찾는 사람 조회 기능 구현"
          ],
          image: Cleverse02,
        },
        {
          number: "02",
          title: <>
             권한 기반의<span className="text-primary">실시간 협업 보드</span> 및 <br/>
             개인 업무를 기록하고 관리할 수 있는<br/>
             <span className="text-primary">My 노트 기능</span>을 구현
          </>,
          description: [
            "그룹별 접근 권한에 따른 보드 및 게시글 노출 처리",
            "댓글 작성 및 @멘션을 통한 구성원 호출 기능 적용",
            "나만 볼 수 있는 비공개 데이터와 협업 보드 데이터의 화면 분리",
            "개인 전용 노트 작성·수정·삭제 기능 구현",
          ],
          image: Cleverse03,
        },
        {
          number: "03",
          title: <>
             <span className="text-primary">모바일 환경</span> 에서도 핵심 협업 정보를  <br/>
             확인할 수 있도록 구현
          </>,
          description: [
            "모바일 환경에 맞춘 협업 보드 목록·상세 화면 구성",
            "게시글, 댓글, 멘션 등 주요 협업 정보 확인 기능 구현",
            "전자결재·게시판·파일 등 핵심 업무 정보의 모바일 조회 화면 적용",
          ],
          image: Cleverse04,
        },
      ],
    },
  },
];
