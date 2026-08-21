import type { ReactNode } from "react";
import reactIcon from "@/assets/images/ico-react.svg";
import vueIcon from "@/assets/images/img-vue.svg";
import htmlIcon from "@/assets/images/img-html.svg";
import typescriptIcon from "@/assets/images/img-ts.svg";
import gitIcon from "@/assets/images/img-git.svg";
import sassIcon from "@/assets/images/img-sass.svg";
import SkillCard from "./SkillCard";

interface SkillItem { id: string; name: string; icon: string; description: ReactNode; }

const highlight = "text-primary";
const skillItems: SkillItem[] = [
  { id: "react", name: "React", icon: reactIcon, description: <><span className={highlight}>useState, useRef, useEffect</span>를 활용한 상태·DOM·이벤트 관리<br />조건부/반복 렌더링, Props 기반의 재사용 가능한 컴포넌트 구현</> },
  { id: "vue", name: "Vue 3", icon: vueIcon, description: <>ref, reactive, v-if, v-show를 활용한 반응형 UI 구현<br /><span className={highlight}>props, emit, Composition API</span> 기반의 컴포넌트 설계</> },
  { id: "html", name: "HTML 5", icon: htmlIcon, description: <><span className={highlight}>header, nav, main, section, article</span> 등 시맨틱 태그 활용<br />웹 표준과 접근성을 고려한 화면 구조 설계</> },
  { id: "typescript", name: "TypeScript", icon: typescriptIcon, description: <><span className={highlight}>type, interface</span>로 데이터와 Props 타입 정의<br />오류를 줄이고 안정적인 컴포넌트 구조 구현</> },
  { id: "git", name: "Git", icon: gitIcon, description: <>브랜치와 커밋으로 기능별 작업 이력을 체계적으로 관리<br />협업 시 병합과 충돌 해결을 통해 팀원의 변경 사항을 안전하게 반영</> },
  { id: "scss", name: "SCSS", icon: sassIcon, description: <><span className={highlight}>Nesting</span>과 &amp;를 활용해 상태별 스타일을 효율적으로 작성<br />변수와 <span className={highlight}>mixin</span>으로 반복 스타일을 모듈화하고 유지보수성 향상</> },
];

const SkillList = () => (
  <div className="mt-60 min-w-0 flex-1 pl-24 pr-40 pb-40" aria-label="기술 목록">
    <div className="space-y-40">
      {skillItems.map((skill) => <SkillCard key={skill.id} {...skill} />)}
    </div>
  </div>
);

export default SkillList;
