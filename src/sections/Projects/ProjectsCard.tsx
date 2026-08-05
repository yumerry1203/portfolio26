import arrowBlack from "@/assets/images/arrow-black.svg";
import Badge from "@/components/common/Badge";
import type { Project } from "@/type/project";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DotLabel from "@/components/common/DotLabel";
import Button from "@/components/common/Button";

import "swiper/css";
import "swiper/css/pagination";

interface ProjectsCardProps {
  project: Project;
}

const ProjectsCard = ({ project }: ProjectsCardProps) => {
  return (
    <div className="flex gap-60">
      <div className="flex items-center justify-center w-480 h-340 bg-gray-dark rounded-tl-md rounded-br-md">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          className="[--swiper-pagination-bottom:-3rem] [--swiper-pagination-bullet-horizontal-gap:0.5rem] [--swiper-pagination-bullet-inactive-color:var(--red)] [--swiper-pagination-bullet-inactive-opacity:1] [--swiper-pagination-color:var(--red)]"
        >
          {project.image.map((image, index) => (
            <SwiperSlide key={`${project.id}-${index}`}>
              <div className="aspect-[1.7/1] overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} 화면 ${index + 1}`}
                  className="h-full w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-10">
          <Badge variant="gradient" className="min-w-70 font-heading text-base font-bold text-white">
            {project.year}
          </Badge>
          <Badge variant="black" className="min-w-70 font-heading text-base font-bold">
            {project.type}
          </Badge>
          <div className="flex gap-12 text-base font-bold text-accent font-heading">
            {project.category.map((category) => (
              <div key={category} className="flex items-center gap-4">
                <DotLabel variant="red" className="w-9 h-9 rounded-none"/>
                <span>{category}</span>
              </div>
            ))}
          </div>
        </div>

        <h3 className="mt-18 font-heading text-4xl font-bold leading-tight text-black">
          {project.title}
        </h3>
        <p className="mt-20 text-2xl text-gray-dark">
          {project.description}
        </p>

        <dl className="mt-16 flex flex-col gap-8 text-lg">
          <div className="flex gap-35">
            <dt className="min-w-50 shrink-0 font-bold text-black">기간</dt>
            <dd className="text-gray-dark">{project.period}</dd>
          </div>
          <div className="flex gap-35">
            <dt className="min-w-50 shrink-0 font-bold text-black">기술</dt>
            <dd className="text-gray-dark">{project.skills.join(" · ")}</dd>
          </div>
          <div className="flex gap-35">
            <dt className="min-w-50 shrink-0 font-bold text-black">기여도</dt>
            <dd className="text-gray-dark">{project.contribution}</dd>
          </div>
        </dl>
        <div className="mt-26">
          <Button 
            variant="purple" 
            children="DETAIL" 
            className="w-220 h-54 text-xl"
          />          
          <Button
            variant="purple"
            className="w-54 h-54 !py-0 !px-0"
          >
            <img src={arrowBlack} alt="다음 이미지" className="h-16 w-16 rotate-45" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
