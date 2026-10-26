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
    <div className="w-full rounded-lg bg-white p-[2.8rem] text-black shadow-[var(--shadow-base)] sm:p-[3.2rem] xl:p-[4rem]">
      <div className="grid grid-cols-1 gap-x-[3.2rem] gap-y-[4rem] sm:grid-cols-2 xl:grid-cols-1 xl:gap-y-[4.4rem]">
        {skillGroups.map((group, groupIndex) => (
          <section key={group.title}>
            <h4 className="flex items-center gap-8 font-heading text-xl font-bold text-black sm:text-2xl xl:text-xl">
              {group.icon ? (
                <img src={group.icon} alt="" aria-hidden="true" className="h-20 w-20 shrink-0 object-contain sm:h-22 sm:w-22 xl:h-20 xl:w-20" />
              ) : (
                <span aria-hidden="true" className="font-heading text-lg font-bold leading-none sm:text-xl xl:text-lg">
                  {"</>"}
                </span>
              )}
              {group.title}
            </h4>
            <ul className="mt-[1.4rem] flex flex-wrap gap-x-[0.8rem] gap-y-[0.8rem]">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className={`inline-flex items-center gap-6 rounded-sm border px-12 py-6 text-sm leading-tight text-gray-dark sm:px-14 sm:py-7 sm:text-base xl:px-12 xl:py-6 xl:text-sm ${groupColorStyles[groupIndex].border} ${groupIndex === 2 ? "" : "bg-white"}`}
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
    </div>
  );
};

export default SkillBox;
