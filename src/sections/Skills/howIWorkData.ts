import ideaCharacter from "@/assets/images/3d-developer-idea-transparent.png";
import codingMonitor from "@/assets/images/3d-coding-monitor.png";
import collaboration from "@/assets/images/3d-collaboration-handshake.png";
import userDataFlow from "@/assets/images/3d-user-data-flow.png";
import learningTechnology from "@/assets/images/3d-learning-technology.png";

export interface SkillItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const skillItems: SkillItem[] = [
  {
    id: "user-experience-and-data-flow",
    number: "01",
    title: "사용자 경험과 데이터 흐름을 고려한 UI 구현",
    description:
      "다양한 디바이스 환경과 사용자를 고려해 반응형 UI와 인터랙션을 구현합니다. API와 상태 관리 구조를 이해하고, 데이터 변화에 따른 로딩, 에러, 빈 상태 등 실제 서비스에 필요한 UI 상태를 구현하며 사용 과정에서 발견되는 불편과 문제를 개선합니다.",
    image: userDataFlow,
    imageAlt: "사용자와 데이터 흐름이 UI 화면으로 연결되는 3D 일러스트",
  },
  {
    id: "stability",
    number: "02",
    title: "안정성과 유지보수를 고려한 개발",
    description:
      "재사용 가능한 구조와 일관된 코드 작성을 지향하며, TypeScript를 활용해 예외 상황과 오류 가능성을 고려한 안정적인 UI를 구현합니다.",
    image: codingMonitor,
    imageAlt: "코드가 표시된 모니터",
  },
  {
    id: "communication",
    number: "03",
    title: "원활한 협업을 위한 커뮤니케이션",
    description:
      "디자인 요구사항을 구현 가능한 형태로 구체화하고, 디자이너, 개발자와 변경사항 및 데이터 구조, 예외 상황 등을 공유하며 요구사항을 조율합니다.",
    image: collaboration,
    imageAlt: "협업을 의미하는 악수",
  },
  {
    id: "problem-solving",
    number: "04",
    title: "문제를 발견하고 함께 답을 찾는 방식",
    description:
      "구현 과정에서 발견한 문제를 적극적으로 공유하고, 원인과 영향을 파악해 관련 구성원과 해결 방향을 조율하며 개선해 나갑니다.",
    image: ideaCharacter,
    imageAlt: "문제 해결 아이디어를 떠올리는 개발자 캐릭터",
  },
  {
    id: "learning",
    number: "05",
    title: "새로운 기술을 익히고 활용하는 방식",
    description:
      "새로운 기술과 개발 방식을 꾸준히 학습하고 적용합니다. AI 도구도 개발 과정에 활용하며, 결과를 이해하고 검토해 생산성과 완성도를 높입니다.",
    image: learningTechnology,
    imageAlt: "새로운 기술을 학습하고 개발에 적용하는 3D 일러스트",
  },
];
