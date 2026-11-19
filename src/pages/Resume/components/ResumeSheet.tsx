import type { PropsWithChildren } from "react";

interface ResumeSheetProps extends PropsWithChildren {
  page: number;
  totalPages: number;
}

const ResumeSheet = ({ children, page, totalPages }: ResumeSheetProps) => (
  <article className={`resume-sheet resume-sheet--page-${page}`}>
    <div className={`resume-sheet__content resume-sheet__content--page-${page}`}>
      {children}
    </div>
    <footer className="resume-sheet__footer">
      나유형 | Frontend Developer ({page}/{totalPages})
    </footer>
  </article>
);

export default ResumeSheet;
