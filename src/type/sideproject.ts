
export interface Sideproject {
  id: string;
  year: string;
  category: string[];
  title: string;
  description: string;
  image: string;
  status?: "new" | "inProgress";
  link?: string;
  viewImg?:string;
}
