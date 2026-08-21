interface ProjectStatusBadgeProps {
  status: "new" | "inProgress";
  className?: string;
}

const statusStyle = {
  new: "bg-primary text-white",
  inProgress: "bg-white text-black",
};

const statusLabel = {
  new: "NEW",
  inProgress: "작업중",
};

const ProjectStatusBadge = ({ status, className = "" }: ProjectStatusBadgeProps) => (
  <span
    className={`inline-flex items-center justify-center rounded-full px-12 py-6 text-xs font-bold leading-none ${statusStyle[status]} ${className}`}
  >
    {statusLabel[status]}
  </span>
);

export default ProjectStatusBadge;
