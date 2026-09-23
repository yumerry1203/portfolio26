
export interface Sideproject {
  id: string;
  year: string;
  category: string[];
  title: string;
  description: string;
  image: string;
  hidden?: boolean;
  status?: "new" | "inProgress";
  link?: string;
  viewImg?:string;
}
