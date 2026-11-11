interface SkillCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const SkillCard = ({ number, title, description, image, imageAlt }: SkillCardProps) => (
  <article className="group relative min-h-150 overflow-hidden rounded-lg border border-white/25 bg-gray-dark/95 px-24 py-24 shadow-[var(--shadow-gray)] transition-[border-color,box-shadow] duration-300 hover:border-primary sm:min-h-180 sm:px-36 sm:py-30">
    <div className="flex h-full items-center gap-22 sm:gap-30">
      <div className="flex size-106 shrink-0 items-center justify-center sm:size-128">
        <img src={image} alt={imageAlt} className="h-full w-full object-contain" loading="lazy" />
      </div>

      <div className="min-w-0">
        <span className="font-heading text-xs font-bold text-primary sm:text-sm">{number}</span>
        <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-primary sm:text-xl">
          {title}
        </h3>
        <p className="mt-8 text-sm leading-relaxed text-white/75 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  </article>
);

export default SkillCard;
