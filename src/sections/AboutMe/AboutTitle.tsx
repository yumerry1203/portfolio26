interface AboutTitleProps {
  title: string;
  icon: string;
}

const AboutTitle = ({ title, icon }: AboutTitleProps) => {
  return (
    <div className="flex items-center gap-8 h-50 border-b-2 border-secondary pb-4">
      <img
        src={icon}
        alt=""
        className="w-24 h-24"
      />

      <h3 className="font-heading text-2xl font-bold text-white">
        {title}
      </h3>
    </div>
  );
};

export default AboutTitle;