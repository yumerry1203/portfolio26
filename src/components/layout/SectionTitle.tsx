interface SectionTitleProps {
  number: string;
  title: string;
  subTit?:string;
  
}

const SectionTitle = ({ number, title, subTit }: SectionTitleProps) => {
  return (
    <div className={`flex gap-32 items-end ${subTit && 'w-full'}`}>
      <div>
        <span className="font-heading text-3xl font-bold text-white">
          {number}.
        </span>
        <h2 className="mt-8 font-heading text-7xl font-bold text-primary">
          {title}
        </h2>
      </div>

      { subTit && (
        <div className="flex-1 flex flex-col gap-12">
          <span className="font-heading font-bold text-gray text-3xl">{subTit}</span>
          <div className="h-6 bg-gradient"></div>
        </div>
      )}
      
    </div>
  );
};

export default SectionTitle;