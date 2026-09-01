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
import ImgNote from "@/assets/images/Img-note.svg"

export const sideproject: Sideproject[] = [
  {
    id: "react-practice-note",
    year: "2026",
    category: [],
    title: "React 개인 연습 노트",
    description: "React 구현 방식과 트러블슈팅 과정을 기록하는 개인 학습 노트",
    image: ImgNote,
    status: "inProgress",
    link: "https://yumerry1203.github.io/react-practice-note/",
  },
  {
    id: "shake-shack",
    year: "2024",
    category: ["기획 100%", "디자인 100%"],
    title: "쉐이크쉑",
    description: "쉐이크쉑 App 리뉴얼",
    image: ImgShake,
    viewImg:ViewShake,
  },
  {
    id: "air-seoul",
    year: "2024",
    category: ["기획 100%", "디자인 100%", "퍼블리싱 100%"],
    title: "에어서울",
    description: "Web 전체 페이지 리뉴얼",
    image: ImgAir,
    link: "https://yumerry1203.github.io/portfolio/airseoul/index.html",
  },
  {
    id: "baskin-robbins",
    year: "2024",
    category: ["기획 100%", "디자인 100%"],
    title: "배스킨라빈스",
    description: "Web 리뉴얼·기능 확장",
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
  },
  {
    id: "dyson",
    year: "2024",
    category: ["기획 100%", "디자인 100%"],
    title: "다이슨",
    description: "Web 반응형 리뉴얼",
    image: ImgDyson,
    viewImg:ViewDyson,
  },
  {
    id: "dalock",
    year: "2024",
    category: ["기획 100%", "디자인 100%", "퍼블 30%"],
    title: "미니창고 다락",
    description: "Web 메인 + 서브1p 리뉴얼",
    image: ImgDalock,
    link: "https://yumerry1203.github.io/darak/",
  },
  {
    id: "Mg",
    year: "2024",
    category: ["기획 100%", "디자인 100%"],
    title: "새마을금고",
    description: "Web 반응형 리뉴얼",
    image: ImgMg,
    viewImg:ViewMg,
  },
];
