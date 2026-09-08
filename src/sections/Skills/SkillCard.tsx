interface SkillCardProps {
  name: string;
  description: React.ReactNode;
  icon: string;
}

const SkillCard = ({ name, description, icon }: SkillCardProps) => (
  <article className="relative rounded-lg border-3 border-white bg-gray-dark px-32 py-25">
    <div className="absolute -top-30 left-20 flex h-60 w-60 items-center justify-center bg-gray-dark p-8 sm:-top-38 sm:left-24 sm:h-75 sm:w-75 sm:p-10">
      <img src={icon} alt="" className="h-full w-full object-contain" />
    </div>
    <div className="flex flex-col gap-18 sm:flex-row sm:items-center">
      <p className="min-w-130 font-heading text-3xl font-bold text-white">{name}</p>
      <span className="hidden h-28 w-3 bg-white sm:block" />
      <p className="text-lg leading-relaxed text-white">{description}</p>
    </div>
  </article>
);

export default SkillCard;
