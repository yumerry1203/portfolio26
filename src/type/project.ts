
import type { ReactNode } from "react";

export interface ProjectDetailSection {
  number: string;
  title: ReactNode;
  description?: ReactNode[];
  image?: string;
}

export interface Project {
  id: string;
  year: string;
  type: string;
  category: string[];
  title: string;
  description: string;
  period: string;
  skills: string[];
  contribution: string;
  image: string;
  // 상세 팝업
  detail: {
    links?:string;
    heroImage: string;
    role: string;
    workPeriod: string;
    overview: ReactNode;
    responsibility?: ReactNode;
    sections: ProjectDetailSection[];
  };
}
