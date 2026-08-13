interface SkillCardProps {
  name: string;
  description?: string;
  depth: number;
}

const ReactMark = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="h-64 w-64">
    <g fill="none" stroke="currentColor" strokeWidth="3.2">
      <ellipse cx="32" cy="32" rx="25" ry="10" />
      <ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(120 32 32)" />
      <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
    </g>
  </svg>
);

const SkillCard = ({ name, description, depth }: SkillCardProps) => (
  <article
    data-skill-card
    className="sticky rounded-xl border-3 border-white bg-gray-dark p-24 shadow-[0_10px_24px_rgba(0,0,0,0.16)] will-change-transform"
    style={{
      top: `${18 + Math.min(depth, 3) * 10}px`,
      transformOrigin: "top center",
      zIndex: depth + 1,
    }}
  >
    <div className="-mt-57 flex h-88 w-88 items-center justify-center rounded-2xl bg-black text-[#d9f7fa]">
      <ReactMark />
    </div>
    <div className="mt-10 flex flex-col gap-18 sm:flex-row sm:items-center">
      <p className="min-w-130 font-heading text-3xl text-white">{name}</p>
      <span className="hidden h-28 w-3 bg-white sm:block" />
      <p className="text-lg leading-relaxed text-white">
        {description || "스킬에 대한 설명을 여기에 작성할 수 있습니다."}
      </p>
    </div>
  </article>
);

export default SkillCard;
