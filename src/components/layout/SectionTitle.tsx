interface SectionTitleProps {
  number: string;
  title: string;
  subTit?:string;
  
}

const SectionTitle = ({ number, title, subTit }: SectionTitleProps) => {
  return (
    <div className={`flex flex-col gap-12 sm:flex-row sm:items-end sm:gap-32 ${subTit && 'w-full'}`}>
      <div>
        <span className="font-heading text-2xl font-bold text-white sm:text-3xl">
          {number}.
        </span>
        <h2 className="mt-4 font-heading text-5xl font-bold text-primary sm:mt-8 sm:text-7xl">
          {title}
        </h2>
      </div>

      { subTit && (
        <div className="flex flex-1 flex-col gap-8 sm:gap-12">
          <span className="font-heading text-2xl font-bold text-gray sm:text-3xl">{subTit}</span>
          <div className="h-6 bg-gradient"></div>
        </div>
      )}
      
    </div>
  );
};

export default SectionTitle;
