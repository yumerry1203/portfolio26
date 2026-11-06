interface CareerBulletListProps {
  items: string[];
}

const CareerBulletList = ({ items }: CareerBulletListProps) => (
  <ul className="career-bullet-list">
    {items.map((item) => <li key={item}>{item}</li>)}
  </ul>
);

export default CareerBulletList;
