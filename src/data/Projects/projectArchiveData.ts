import ImgBp from "@/assets/images/img-bp.svg";
import ImgCard from "@/assets/images/img-card.svg";
import ImgHc from "@/assets/images/img-hc.svg";
import ImgSamsung from "@/assets/images/img-samsung.svg";
import ImgHaruShare from "@/assets/images/img-harushare.svg";
import ImgKoen from "@/assets/images/img-koen.svg";

export interface ArchiveProject {
  id: string;
  period: string;
  title: string;
  image: string;
  siteUrl?: string;
  skills: string[];
  contribution: number;
  workTitle: string;
  responsibilities: string[];
}

export const archiveProjects: ArchiveProject[] = [
  {
    id: "haru-share", period: "2024.", title: "하루쉐어", image: ImgHaruShare,
    siteUrl: "https://yumerry1203.github.io/harushare/",
    skills: ["HTML5", "CSS", "JavaScript", "Figma", "GSAP"], contribution: 30,
    workTitle: "OTT 구독서비스 웹 서비스 구축",
    responsibilities: ["Mobile Web 반응형으로 제작", "메인부터 전체 서브페이지까지 UI 디자인 및 퍼블리싱을 진행", "GSAP을 활용해 스크롤에 따라 콘텐츠가 자연스럽게 노출되는 인터랙션을 구현"],
  },
  {
    id: "hyundai-card", period: "2020.", title: "현대카드", image: ImgCard,
    siteUrl: "https://www.hyundaicard.com",
    skills: ["HTML5", "CSS", "JavaScript", "PhotoShop"], contribution: 30,
    workTitle: "Auto Digital Web 구축 및 운영",
    responsibilities: ["현대카드 홈페이지 HTML과 CSS를 이용해 유지보수", "카드 이벤트 페이지를 반응형으로 제작하고 신규 카드 이벤트 페이지 제작 및 배포", "신규 카드 페이지 작업 및 매월 이벤트 변경 작업"],
  },
  {
    id: "hyundai-capital", period: "2019.", title: "현대캐피탈", image: ImgHc,
    siteUrl: "https://www.hyundaicapital.com",
    skills: ["HTML5", "CSS", "JavaScript", "PhotoShop"], contribution: 30,
    workTitle: "현대캐피탈 자동차금융 페이지 구축",
    responsibilities: ["현대·기아 자동차의 개인리스 메뉴 퍼블리싱 담당", "자동차 움직임 애니메이션 구현"],
  },
  {
    id: "samsung-cancer-center", period: "2019.", title: "삼성서울병원", image: ImgSamsung,
    siteUrl: "http://www.samsunghospital.com/home/cancer/carecenter/gynecologic.do",
    skills: ["HTML5", "CSS", "JavaScript", "PhotoShop"], contribution: 100,
    workTitle: "삼성서울병원 암병원 센터 UI 개선",
    responsibilities: ["부인암 페이지 디자인 반영 및 퍼블리싱", "그래프, 도형을 활용한 콘텐츠 배치"],
  },
  {
    id: "beauty-point", period: "2019.", title: "뷰티포인트", image: ImgBp,
    skills: ["HTML5", "CSS", "JavaScript", "PhotoShop"], contribution: 40,
    workTitle: "아모레퍼시픽 뷰티포인트 APP고도화",
    responsibilities: ["등급 및 혜택 안내 아코디언 JavaScript로 구현", "신규 이벤트 발생시 제작 및 배포", "제품 상세 및 댓글 기능 구현"],
  },
  {
    id: "koen", period: "2018.", title: "남동발전", image: ImgKoen,
    skills: ["HTML5", "CSS", "JavaScript", "PhotoShop"], contribution: 50,
    workTitle: "KOEN 권한관리 사이트 구축",
    responsibilities: ["권한별 메뉴·화면 접근 제어 UI 퍼블리싱", "관리자 화면의 테이블 및 검색·필터 인터페이스 구현", "신규 기능 화면 제작 및 운영 개선 작업"],
  },
];
