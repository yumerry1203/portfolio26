import type { Sideproject } from "@/type/sideproject";
import ImgShake from "@/assets/images/img-shake.svg"
import ViewShake from "@/assets/images/view-shake.svg"
import ImgBr from "@/assets/images/img-br.svg"
import ViewBr from "@/assets/images/view-br.svg"
import ImgBook from "@/assets/images/img-book.svg"
import ViewBook from "@/assets/images/view-book.svg"
import ImgMirae from "@/assets/images/img-mirae.svg"
import ImgDyson from "@/assets/images/img-dyson.svg"
import ViewDyson from "@/assets/images/view-dyson.svg"
import ImgDalock from "@/assets/images/img-dalock.svg"
import ImgAir from "@/assets/images/img-air.svg"
import ImgMg from "@/assets/images/img-mg.svg"
import ViewMg from "@/assets/images/view-mg.svg"
import ViewAir from "@/assets/images/view-air.svg"
import ViewDalock from "@/assets/images/view-dalock.svg"
import ImgNote from "@/assets/images/Img-note.svg"
import ImgPortfolio from "@/assets/images/img-portfolio.svg"

export const sideproject: Sideproject[] = [
  {
    id: "react-practice-note",
    year: "2026",
    category: [],
    title: "Frontend Dev Note",
    description:"프론트엔드 기술과 구현·트러블슈팅 과정을 기록하는 개인 개발 노트",
    image: ImgNote,
    status: "inProgress",
    link: "https://yumerry1203.github.io/react-practice-note/",
  },
  {
    id: "money-log",
    year: "2026",
    category: [],
    title: "Money Log — 개인 지출 관리 시스템",
    description: "사용자가 수입/지출을 등록하고 월별 소비 현황을 보는 서비스",
    status: "inProgress",
    link: "",
    hidden: true,
  },
  {
    id: "portfolio",
    year: "2026",
    category: [],
    title: "Nayuhyeong - Portfolio",
    description: "2026년 나유형 포트폴리오",
    image: ImgPortfolio,
    status: "inProgress",
    link: "",
    hidden: false,
  },
  {
    id: "shake-shack",
    year: "2024",
    category: ["기획 100%", "디자인 100%"],
    title: "쉐이크쉑",
    description: "쉐이크쉑 App 리뉴얼",
    image: ImgShake,
    viewImg:ViewShake,
    hidden: true,
  },
  {
    id: "air-seoul",
    year: "2024",
    category: ["기획 100%", "디자인 100%", "퍼블리싱 100%"],
    title: "에어서울",
    description: "Web 전체 페이지 리뉴얼",
    image: ImgAir,
    link: "https://yumerry1203.github.io/portfolio/airseoul/index.html",
    viewImg:ViewAir,
  },
  {
    id: "baskin-robbins",
    year: "2024",
    category: ["기획 100%", "디자인 100%"],
    title: "배스킨라빈스",
    description: "Web 원페이지 리뉴얼",
    image: ImgBr,
    link: "https://yumerry1203.github.io/portfolio/onepage/index.html",
    viewImg:ViewBr,
  },
  {
    id: "mirae-asset",
    year: "2024",
    category: ["기획 100%", "디자인 100%"],
    title: "미래에셋",
    description: "App 리뉴얼",
    image: ImgMirae,
    link: "https://yumerry1203.github.io/mobile/",
  },
  {
    id: "aladin",
    year: "2024",
    category: ["기획 100%", "디자인 100%"],
    title: "알라딘 중고서점",
    description: "Web 메인·서브 리뉴얼",
    image: ImgBook,
    viewImg:ViewBook,
    hidden: true,
  },
  {
    id: "dyson",
    year: "2024",
    category: ["기획 100%", "디자인 100%"],
    title: "다이슨",
    description: "Web 반응형 리뉴얼",
    image: ImgDyson,
    viewImg:ViewDyson,
    hidden: true,
  },
  {
    id: "dalock",
    year: "2024",
    category: ["기획 100%", "디자인 100%", "퍼블 30%"],
    title: "미니창고 다락",
    description: "mobile 리뉴얼",
    image: ImgDalock,
    link: "https://yumerry1203.github.io/darak/",
    viewImg:ViewDalock,
  },
  {
    id: "Mg",
    year: "2024",
    category: ["기획 100%", "디자인 100%"],
    title: "새마을금고",
    description: "mobile 리뉴얼",
    image: ImgMg,
    viewImg:ViewMg,
    hidden: true,
  },
];
