interface SkillCardProps {
  number: string;
  title: string;
  description: string;
}

const SkillCard = ({ number, title, description }: SkillCardProps) => (
  <article className="group relative overflow-hidden rounded-md border border-white/25 bg-black/15 px-20 py-20 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-base)] sm:px-24 sm:py-22">
    <div
      aria-hidden="true"
      className="absolute inset-y-0 left-0 w-5 bg-gradient opacity-70 transition-opacity duration-300 group-hover:opacity-100"
    />

    <div className="flex items-start gap-14 sm:gap-18">
      <span className="inline-flex h-34 min-w-42 shrink-0 items-center justify-center rounded-full border border-primary bg-gray-dark px-8 font-heading text-sm font-bold text-primary sm:h-38 sm:min-w-48 sm:text-base">
        {number}
      </span>

      <div className="min-w-0 pt-3">
        <h3 className="font-body text-lg font-bold leading-snug text-primary sm:text-xl">
          {title}
        </h3>
        <p className="mt-10 text-sm leading-relaxed text-white sm:mt-12 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  </article>
);

export default SkillCard;
