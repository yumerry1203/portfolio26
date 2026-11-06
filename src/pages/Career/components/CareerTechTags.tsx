interface CareerTechTagsProps {
  items: string[];
}

const CareerTechTags = ({ items }: CareerTechTagsProps) => (
  <div className="career-tech-tags flex flex-wrap">
    {items.map((item) => <span key={item}>{item}</span>)}
  </div>
);

export default CareerTechTags;
