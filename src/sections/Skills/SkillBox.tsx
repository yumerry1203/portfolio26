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
  { border: "border-accent/50", dot: "bg-accent/70" },
  { border: "border-primary", dot: "bg-primary" },
  { border: "border-transparent", dot: "bg-gradient" },
  { border: "border-secondary", dot: "bg-secondary" },
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
    <div className="grid w-full grid-cols-1 gap-16 text-black md:grid-cols-2 lg:grid-cols-4 lg:gap-16 xl:gap-20">
      {skillGroups.map((group, groupIndex) => (
        <section
          key={group.title}
          className="min-h-220 rounded-lg bg-white p-24 shadow-[var(--shadow-base)] sm:min-h-240 sm:p-28 lg:min-h-270 lg:p-20 xl:p-28"
        >
          <h4 className="flex items-center gap-8 font-heading text-xl font-bold text-black sm:text-2xl lg:text-lg xl:text-xl">
            {group.icon ? (
              <img src={group.icon} alt="" aria-hidden="true" className="h-20 w-20 shrink-0 object-contain sm:h-22 sm:w-22 lg:h-18 lg:w-18 xl:h-20 xl:w-20" />
            ) : (
              <span aria-hidden="true" className="font-heading text-lg font-bold leading-none sm:text-xl lg:text-base xl:text-lg">
                {"</>"}
              </span>
            )}
            {group.title}
          </h4>
          <ul className="mt-20 flex flex-wrap gap-x-8 gap-y-8">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className={`inline-flex items-center gap-6 rounded-sm border px-12 py-6 text-sm leading-tight text-gray-dark sm:px-14 sm:py-7 sm:text-base lg:px-10 lg:py-6 lg:text-sm xl:px-12 ${groupColorStyles[groupIndex].border} ${groupIndex === 2 ? "" : "bg-white"}`}
                style={
                  groupIndex === 2
                    ? {
                        background:
                          "linear-gradient(var(--white), var(--white)) padding-box, var(--gradient) border-box",
                      }
                    : undefined
                }
              >
                {highlightedSkills.has(skill) && (
                  <span
                    aria-hidden="true"
                    className={`size-[0.6rem] shrink-0 rounded-full ${groupColorStyles[groupIndex].dot}`}
                  />
                )}
                <span className={highlightedSkills.has(skill) ? "font-bold" : undefined}>{skill}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default SkillBox;
