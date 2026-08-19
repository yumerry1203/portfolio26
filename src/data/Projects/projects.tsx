import type { Project } from "@/type/project";

import ImgCleverse from "@/assets/images/img-cleverse.svg"
import ImgIsp from "@/assets/images/img-isp.svg"
import ImgMoggoji from "@/assets/images/img-moggoji.svg"
import Moggoji01 from "@/assets/images/moggoji-01.svg"
import Moggoji02 from "@/assets/images/moggoji-02.svg"
import Moggoji03 from "@/assets/images/moggoji-03.svg"
import Moggoji04 from "@/assets/images/moggoji-04.svg"
import Moggoji05 from "@/assets/images/moggoji-05.svg"
import Moggoji06 from "@/assets/images/moggoji-06.svg"
import Moggoji07 from "@/assets/images/moggoji-07.svg"
import Moggoji08 from "@/assets/images/moggoji-08.svg"
import Isp01 from "@/assets/images/isp-01.svg"
import Isp02 from "@/assets/images/isp-02.svg"
import Isp03 from "@/assets/images/isp-03.svg"
import Isp04 from "@/assets/images/isp-04.svg"
import Isp05 from "@/assets/images/isp-05.svg"
import Isp06 from "@/assets/images/isp-06.svg"
import Isp07 from "@/assets/images/isp-07.svg"
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
    description:"행사 운영자와 참가자가 필요한 정보를 편리하게 관리하고 이용할 수 있도록 설계한 통합 행사 운영 플랫폼",
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
    image: ImgMoggoji,
    detail: {
      links: "https://apps.apple.com/ph/app/%EB%AA%A8%EA%BC%AC%EC%A7%80-%ED%96%89%EC%82%AC%EC%9D%98-%EC%8B%9C%EC%9E%91/id6768188369",
      heroImages: [
        Moggoji01,
        Moggoji02,
      ],
      role: "모바일 앱·웹 어드민·랜딩 페이지 화면 UI 구현",      
      workPeriod: "6개월",
      overview: "보험 설계사를 위한 온·오프라인 통합 행사 운영 플랫폼입니다.운영자는 웹 어드민에서 행사, 조직, 구성원, 참가자 정보와 운영 항목을 관리하고, 참가자는 모바일 앱에서 행사 일정과 안내를 확인할 수 있습니다",
      responsibility: <>
        <strong className="block">모바일 앱</strong>
        React Native·Expo 환경에서 참가자용 모바일 앱의 UI를 구현했습니다. Expo Router 기반 화면 전환을 구성하고, 공통 디자인 토큰을 적용해 로그인, 행사 목록·상세, 초대 수락, 내 정보 화면의 일관된 UI를 구현했습니다.
        <strong className="mt-16 block">웹 어드민</strong>
        React·TypeScript·Vite 환경에서 행사 운영 웹 어드민의 UI를 구현했습니다.  Tailwind CSS와 shadcn/ui를 서비스 디자인에 맞게 커스텀했습니다. 행사·조직·구성원·참가자 관리 화면을 중심으로 테이블, 검색·필터, 드롭다운, 입력 폼, 모달 등 반복 사용되는 인터페이스를 컴포넌트화했습니다.
      </>,
      sections: [
        {
          number: "01",
          title: <>
             <span className="text-primary">참가자용 모바일 앱</span> 에서 초대 수락부터<br />
             행사 목록·상세 조회, 알림, 내 정보 관리까지<br/>
             참가자의  <span className="text-primary">주요 이용 흐름</span>을 구현했습니다.
          </>,
          description: [
            "TODAY 홈에서 당일 행사 정보와 빠른 접근 제공",
            "행사 일정·옵션 등 상세 정보 확인",
            "로그인, 회원가입, 아이디·비밀번호 찾기, 초대 처리",
            "프로필·소속 조직·설정·탈퇴 등 내 정보 관리"
          ],
          images: [ Moggoji03, Moggoji04, Moggoji05 ],
        },
        {
          number: "02",
          title: <>
             <span className="text-primary">대규모 행사</span> 의 복잡한 운영 업무를 빠르고 <br />
             정확하게 처리할 수 있도록, <br/>
             운영자용  <span className="text-primary">웹 어드민 페이지</span>를 구현했습니다.
          </>,
          description: [
            "행사·조직·구성원 관리 화면 구현",
            "참가자 현황 조회 및 검색·필터 인터랙션 구성",
            "교통수단, 객실 배정 등 행사 운영 항목 관리",
            "테이블, 입력 폼, 드롭다운, 모달 등 반복 UI 컴포넌트 적용"
          ],
          images: [Moggoji06],
        },
        {
          number: "03",
          title: <>
             모꼬지 서비스의 <span className="text-primary">핵심 가치를<br/> 효과적으로 전달 </span> 하고 <br />
             이용을 유도할 수 있도록, 
             <span className="text-primary">반응형 랜딩 페이지</span>를 구현했습니다.
          </>,
          description: [
            "서비스 소개, 주요 기능, 이용 흐름 등 섹션별 화면을 구성",
            "다양한 디바이스 환경에서도 일관된 경험을 제공하도록 반응형 UI를 구현",
            "사용자 흐름에 맞는 CTA 버튼을 배치해 서비스 문의 및 이용으로 연결",
          ],
          images: [Moggoji07, Moggoji08],

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
    description:"보험 설계사의 고객 관리·보장 분석·상품 비교·맞춤 리포트 제작을 하나로 연결한 상담 업무 통합 플랫폼",
    period: "2025.08 ~ 2025.12",
    skills: [
      "Vue 3",
      "TypeScript",
      "SCSS",
      "Figma",
    ],
    contribution: "퍼블리싱 50%",
    image: ImgIsp,
    detail: {
      heroImages: [
        Isp01,
        Isp02,
      ],
      role: "웹 플랫폼·모바일 웹뷰 UI 구현",      
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
          images: [ Isp03, Isp04 ],
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
          images: [Isp05, Isp06, Isp07],
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
    image: ImgCleverse,
    detail: {
      heroImages: [
        Cleverse01,
        Cleverse02,
      ],
      role: "화면 UI 구현 · 공통 컴포넌트 설계 · API 응답 기반 화면 처리",      
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
          images: [ Cleverse03 ],
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
          images: [Cleverse03],
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
          images: [Cleverse04],
        },
      ],
    },
  },
];
