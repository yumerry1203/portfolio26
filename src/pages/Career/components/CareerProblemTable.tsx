export interface CareerProblemItem {
  title: string;
  situation: string;
  solution: string;
  result: string;
}

interface CareerProblemTableProps {
  items: CareerProblemItem[];
}

const CareerProblemTable = ({ items }: CareerProblemTableProps) => (
  <div className="career-problem-list">
    {items.map((item) => (
      <section key={item.title} className="career-problem-item">
        <h4>{item.title}</h4>
        <div className="career-problem-grid">
          <div><strong>상황</strong><p>{item.situation}</p></div>
          <div><strong>해결</strong><p>{item.solution}</p></div>
          <div><strong>결과</strong><p>{item.result}</p></div>
        </div>
      </section>
    ))}
  </div>
);

export default CareerProblemTable;
