
import type { ReactNode } from "react";

export interface ProjectDetailSection {
  number: string;
  title: ReactNode;
  description?: ReactNode[];
  image?: string;
}

export interface ProjectDevelopmentItem {
  number: string;
  title: string;
  summary: string[];
  description: string;
}

export interface ProjectServiceLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  year: string;
  type: string;
  category: string[];
  title: string;
  description: string;
  period: string;
  role: string;
  skills: string[];
  image: string;
  // 상세 팝업
  detail: {
    heroImage: string;
    workPeriod: string;
    overview: ReactNode;
    sections: ProjectDetailSection[];
    development?: {
      items: ProjectDevelopmentItem[];
      liveServices?: ProjectServiceLink[];
    };
  };
}
