import type { Sideproject } from "@/type/sideproject";

interface SideProjectCardProps {
  project: Sideproject;
}

const SideProjectCard = ({ project }: SideProjectCardProps) => {
  return (
    <article className="flex h-full w-full flex-col justify-end bg-white p-32 text-black">
      <p className="text-base text-gray-dark">{project.category.join(" · ")}</p>
      <h3 className="mt-12 text-3xl font-bold">{project.title}</h3>
      <p className="mt-8 text-xl">{project.description}</p>
    </article>
  );
};

export default SideProjectCard;
