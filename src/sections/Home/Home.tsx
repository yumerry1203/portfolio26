import Header from "@/components/layout/Header";
import Hero from "./Hero";
import WorkedWith from "./WorkedWith";

const Home = () => {
  return (
    <div className="w-full bg-primary">
      <section className="content-container py-40" id="home">
        <Header />
        <Hero />
        <WorkedWith />
      </section>
    </div>
  )
};

export default Home;