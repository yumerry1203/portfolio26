import type { PropsWithChildren } from "react";

interface CareerSheetProps extends PropsWithChildren {
  page: number;
  totalPages: number;
}

const CareerSheet = ({ children, page, totalPages }: CareerSheetProps) => (
  <article className={`career-sheet career-sheet--page-${page} relative bg-white text-black shadow-[0_10px_35px_rgba(0,0,0,0.12)]`}>
    <div className="career-sheet__content">{children}</div>
    <footer className="career-sheet__footer absolute inset-x-0 text-center text-[#999]">
      나유형 | Frontend Developer ({page}/{totalPages})
    </footer>
  </article>
);

export default CareerSheet;
