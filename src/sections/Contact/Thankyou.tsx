import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Thankyou = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const title = titleRef.current;
    const line = lineRef.current;
    if (!title || !line) return;

    const context = gsap.context(() => {
      gsap.fromTo(line, { scaleX: 0 }, {
        scaleX: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });
    }, title);

    return () => context.revert();
  }, []);
 
  return (
    <div className="relative flex h-250 w-full items-center justify-center rounded-b-[4rem] bg-white sm:h-314 sm:rounded-b-[6rem]" >
      <div ref={titleRef} className="h-110 w-230 font-heading text-[5.5rem] font-bold leading-none text-black sm:h-140 sm:w-300 sm:text-[7rem]">
        <div className="relative text-left">
          Thank
          <span
            ref={lineRef}
            className="absolute bottom-1 left-82 h-6 w-78 origin-left bg-primary sm:left-105 sm:h-8 sm:w-100"
            aria-hidden="true"
          />
        </div>
        <div className="-mt-18 text-right sm:-mt-25">you!</div>
      </div>
      <div
        className="absolute top-195 flex h-66 w-[88%] max-w-457 items-center justify-center bg-primary font-heading text-xl font-bold text-black sm:top-250 sm:h-86 sm:w-457 sm:text-2xl"
        style={{ clipPath: "polygon(0 31%, 100% 0, 100% 78%, 0 100%)" }}
      >
        for looking at my portfolio
      </div>
      <div
        className="absolute top-246 flex h-50 w-230 items-center justify-center bg-gray-dark font-heading text-lg font-bold text-white sm:top-310 sm:h-60 sm:w-306 sm:text-xl"
        style={{ clipPath: "polygon(0 0, 100% 16%, 100% 100%, 0 100%)" }}
      >
        NA YUHYEONG
      </div>
    </div>
  )
};

export default Thankyou;
