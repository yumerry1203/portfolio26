import dataIcon from "@/assets/images/ico-data.svg";
import stylingIcon from "@/assets/images/ico-styling.svg";
import toolIcon from "@/assets/images/ico-tool.svg";

const skillGroups = [
  {
    title: "Frontend",
    icon: null,
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vue.js",
      "React Native",
    ],
  },
  {
    title: "State & Form",
    icon: dataIcon,
    skills: [
      "Zustand",
      "React Hook Form",
      "Vuex",
      "Zod",
    ],
  },
  {
    title: "UI & Styling",
    icon: stylingIcon,
    skills: [
      "Tailwind CSS",
      "GSAP",
      "HTML5",
      "SCSS",
      "shadcn/ui",
      "Vuetify.js",
      "Chart.js",
    ],
  },
  {
    title: "Tools & Environment",
    icon: toolIcon,
    skills: ["Git", "Codex", "GitLab", "ESLint", "Figma"],
  },
] as const;

const groupColorStyles = [
  { border: "border-primary", text: "text-primary" },
  { border: "border-secondary", text: "text-secondary" },
  { border: "border-transparent", text: "bg-gradient bg-clip-text text-transparent" },
  { border: "border-sky", text: "text-sky" },
] as const;

const highlightedSkills = new Set([
  "React",
  "TypeScript",
  "JavaScript",
  "Zustand",
  "React Hook Form",
  "Tailwind CSS",
  "GSAP",
  "Git",
  "Codex",
]);

const SkillBox = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-16 text-white md:grid-cols-2 lg:grid-cols-4 lg:gap-16 xl:gap-20">
      {skillGroups.map((group, groupIndex) => (
        <section
          key={group.title}
          className="relative min-h-220 overflow-hidden rounded-lg bg-gradient-to-br from-white/[0.16] via-white/[0.1] to-white/[0.06] p-24 shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_1.6rem_3rem_rgba(0,0,0,0.12)] ring-1 ring-inset ring-white/25 backdrop-blur-md sm:min-h-240 sm:p-28 lg:min-h-270 lg:p-20 xl:p-28"
        >
          <h4 className="relative flex items-center gap-8 border-b border-white/60 pb-12 font-heading text-xl font-bold text-white sm:text-2xl lg:text-lg xl:text-xl">
            {group.icon ? (
              <img src={group.icon} alt="" aria-hidden="true" className="h-20 w-20 shrink-0 object-contain brightness-0 invert sm:h-22 sm:w-22 lg:h-18 lg:w-18 xl:h-20 xl:w-20" />
            ) : (
              <span aria-hidden="true" className="font-heading text-lg font-bold leading-none sm:text-xl lg:text-base xl:text-lg">
                {"</>"}
              </span>
            )}
            {group.title}
          </h4>
          <ul className="mt-20 flex flex-wrap gap-x-8 gap-y-8">
            {group.skills.map((skill) => {
              const isHighlighted = highlightedSkills.has(skill);
              const usesGradientBorder = isHighlighted && groupIndex === 2;

              return (
                <li
                  key={skill}
                  className={`inline-flex items-center rounded-sm bg-white/[0.04] px-12 py-6 text-sm leading-tight text-white sm:px-14 sm:py-7 sm:text-base lg:px-10 lg:py-6 lg:text-sm xl:px-12 ${
                    isHighlighted ? `border-2 ${groupColorStyles[groupIndex].border}` : "border border-gray"
                  }`}
                  style={
                    usesGradientBorder
                      ? {
                          background:
                            "linear-gradient(#494949, #494949) padding-box, var(--gradient) border-box",
                        }
                      : undefined
                  }
                >
                  <span className={isHighlighted ? `font-bold ${groupColorStyles[groupIndex].text}` : undefined}>
                    {skill}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default SkillBox;
