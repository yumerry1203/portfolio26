
export interface Sideproject {
  id: string;
  year: string;
  category: string[];
  title: string;
  description: string;
  image: string;
  isNew?: boolean;
  isInProgress?: boolean;
  siteUrl?: string;
}
