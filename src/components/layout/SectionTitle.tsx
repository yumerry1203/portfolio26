interface SectionTitleProps {
  number: string;
  title: string;
}

const SectionTitle = ({ number, title }: SectionTitleProps) => {
  return (
    <div>
      <span className="font-heading text-3xl font-bold text-white">
        {number}.
      </span>

      <h2 className="mt-8 font-heading text-7xl font-bold text-primary">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;