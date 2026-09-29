const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vue.js",
      "React Native (Expo / UI 개발)",
    ],
  },
  {
    title: "Libraries",
    skills: [
      "TanStack Router",
      "GSAP",
      "Swiper",
      "Kendo UI",
      "TOAST UI Calendar",
      "Zod",
      "React Hook Form",
      "Chart.js",
    ],
  },
  {
    title: "Styling",
    skills: ["HTML5", "SCSS", "Tailwind CSS", "shadcn/ui", "Vuetify.js"],
  },
  {
    title: "Tools & Environment",
    skills: ["Git", "GitLab", "ESLint", "Figma"],
  },
] as const;

const groupColorStyles = [
  { border: "border-accent/50", dot: "bg-accent/70" },
  { border: "border-primary", dot: "bg-primary" },
  { border: "border-transparent", dot: "bg-gradient" },
  { border: "border-secondary", dot: "bg-secondary" },
] as const;

const SkillBox = () => {
  return (
    <div className="w-full rounded-lg bg-white p-[2.8rem] text-black shadow-[var(--shadow-base)] sm:p-[3.2rem] xl:p-[3.2rem]">
      <div className="flex items-center border-b-2 border-black pb-[1.8rem]">
        <h3 className="font-heading text-2xl font-bold sm:text-3xl xl:text-2xl">
          TECH STACK
        </h3>
      </div>

      <div className="mt-[3rem] grid grid-cols-1 gap-x-[3.2rem] gap-y-[4rem] sm:grid-cols-2 xl:grid-cols-1 xl:gap-y-[4.4rem]">
        {skillGroups.map((group, groupIndex) => (
          <section key={group.title}>
            <h4 className="font-heading text-xl font-bold text-black sm:text-2xl xl:text-xl">
              {group.title}
            </h4>
            <ul className="mt-[1.4rem] flex flex-wrap gap-x-[0.8rem] gap-y-[0.8rem]">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className={`inline-flex items-center gap-6 rounded-sm border px-12 py-6 text-sm leading-tight text-gray-dark shadow-[0_2px_6px_rgba(0,0,0,0.06)] sm:px-14 sm:py-7 sm:text-base xl:px-12 xl:py-6 xl:text-sm ${groupColorStyles[groupIndex].border} ${groupIndex === 2 ? "" : "bg-white"}`}
                  style={
                    groupIndex === 2
                      ? {
                          background:
                            "linear-gradient(var(--white), var(--white)) padding-box, var(--gradient) border-box",
                        }
                      : undefined
                  }
                >
                  <span
                    aria-hidden="true"
                    className={`size-[0.6rem] shrink-0 rounded-full ${groupColorStyles[groupIndex].dot}`}
                  />
                  <span>{skill}</span>
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
