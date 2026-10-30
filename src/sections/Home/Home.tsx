import Header from "@/components/layout/Header";
import HeroV2 from "./HeroV2";

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden bg-primary">
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[28%] bg-black" />
      <section className="relative z-10 mx-16 pt-16 sm:mx-20 sm:pt-20" id="home">
        <div className="overflow-hidden rounded-t-[2.4rem] bg-black sm:rounded-t-[4rem]">
          <div className="px-20 pt-18 sm:px-48 sm:pt-28 lg:px-72 lg:pt-32">
            <Header />
          </div>
          {/* 기존 Hero V1은 시안 비교를 위해 잠시 미노출합니다. */}
          {/* <Hero /> */}
          <HeroV2 />
          {/* WorkedWith는 새 Home과 About Me의 연결 흐름을 위해 잠시 미노출합니다. */}
        </div>
      </section>
    </div>
  )
};

export default Home;
