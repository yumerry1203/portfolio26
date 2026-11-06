import type { PropsWithChildren } from "react";

import SectionLine from "@/assets/career/line-section.svg";

const CareerSectionTitle = ({ children }: PropsWithChildren) => (
  <div className="career-section-title flex items-center">
    <span className="career-section-title__bar" aria-hidden="true" />
    <h2>{children}</h2>
    <img src={SectionLine} alt="" aria-hidden="true" />
  </div>
);

export default CareerSectionTitle;
