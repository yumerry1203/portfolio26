interface ProjectStatusBadgeProps {
  status: "new" | "inProgress";
  className?: string;
}

const statusStyle = {
  new: "bg-primary text-white",
  inProgress: "bg-accent text-white",
};

const statusLabel = {
  new: "NEW",
  inProgress: "작업중",
};

const ProjectStatusBadge = ({ status, className = "" }: ProjectStatusBadgeProps) => (
  <span
    className={`absolute left-0 top-0 z-20 flex h-70 w-80 items-start px-8 pt-12 text-sm font-heading font-bold leading-none [clip-path:polygon(0_0,100%_0,0_100%)] ${statusStyle[status]} ${className}`}
  >
    {statusLabel[status]}
  </span>
);

export default ProjectStatusBadge;
