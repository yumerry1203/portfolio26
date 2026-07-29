import Header from "@/components/layout/Header";
import Profile from "@/assets/images/me.png";

const Home = () => {
  return (
    <>
      <div className="w-full bg-primary">
        <section className="content-container h-dvh py-32" id="home">
          <Header />
          <div className="relative mt-50">
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
        </section>
      </div>
    </>
  )
};

export default Home;