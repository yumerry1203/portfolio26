import Profile from "@/assets/images/me.png";
import ArrowBlack from "@/assets/images/arrow-black.svg";
import Badge from "@/components/common/Badge";
import DotLabel from "@/components/common/DotLabel";
import Button from "@/components/common/Button";

const Hero = () => {
  return (
    <>
      <div className="relative mt-40">
        <div className="relative flex items-center bg-black rounded-xl px-72 w-1076 h-533">
          <h1 className="font-heading text-[160px] font-bold z-10">Portfolio</h1>
          <h2 className="absolute top-120 right-170 font-point text-primary text-[76px]">Front-End</h2>
          <h3 className="absolute bottom-130 left-270 font-heading text-6xl font-bold text-white/60">NA YU HYEONG 
            <span className="text-2xl text-white font-normal"> (2026ver)</span>
          </h3>
        </div>
        <div 
          className="absolute top-50 right-0 z-10 w-540 h-510 
          bg-[url('/src/assets/images/shape.svg')] bg-no-repeat bg-contain "
        >
          <Badge 
            variant="default" 
            className="absolute bottom-[102%] right-8 gap-8 font-heading"
          >
            <DotLabel variant="green" />
            August 2026
          </Badge>
          <img 
            src={Profile} 
            className="absolute w-253 bottom-3 left-174"
            alt="나유형 프로필 사진"               
          /> 
          <span className="absolute top-34 right-34 font-heading text-secondary text-lg text-right">
            Front-end Developer · Web<br /> 
            Publisher · UI/UIX design
          </span>
        </div>
      </div>
      <div className="flex gap-12 mt-20">
        <Button variant="gradient" className="text-2xl gap-12">
          {`{ PROJECT }`}
          <img src={ArrowBlack} alt="화살표" />
          </Button>
        <Button variant="white" className="text-2xl">{`{ CONTACT }`}</Button>
      </div>
          
    </>
  )
};

export default Hero;