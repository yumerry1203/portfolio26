import type { PropsWithChildren } from "react";

interface ResumeSheetProps extends PropsWithChildren {
  page: number;
  totalPages: number;
}

const ResumeSheet = ({ children, page, totalPages }: ResumeSheetProps) => (
  <article className={`resume-sheet resume-sheet--page-${page} relative bg-white px-[12mm] pb-[13mm] pt-[10mm] text-black shadow-[0_10px_35px_rgba(0,0,0,0.12)]`}>
    <div className={`resume-sheet__content resume-sheet__content--page-${page}`}>
      {children}
    </div>
    <footer className="resume-sheet__footer absolute inset-x-0 bottom-[7mm] text-center text-[10.3px] text-[#a8a8a8]">
      나유형 | Frontend Developer ({page}/{totalPages})
    </footer>
  </article>
);

export default ResumeSheet;
