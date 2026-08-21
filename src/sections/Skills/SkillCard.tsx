interface SkillCardProps {
  name: string;
  description: React.ReactNode;
  icon: string;
}

const SkillCard = ({ name, description, icon }: SkillCardProps) => (
  <article className="relative rounded-lg border-3 border-white bg-gray-dark px-32 py-25">
    <div className="absolute -top-38 left-24 flex h-75 w-75 items-center justify-center bg-gray-dark p-10">
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
