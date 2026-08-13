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
    <div className="relative h-314 w-full flex items-center justify-center bg-white rounded-b-[6rem]" >
      <div ref={titleRef} className="h-140 w-300 text-black font-heading text-[7rem] font-bold leading-none">
        <div className="relative text-left">
          Thank
          <span
            ref={lineRef}
            className="absolute left-105 bottom-1 h-8 w-100 origin-left bg-primary"
            aria-hidden="true"
          />
        </div>
        <div className="text-right -mt-25">you!</div>
      </div>
      <div
        className="absolute top-250 flex h-86 w-457 items-center justify-center bg-primary text-black font-heading font-bold text-2xl"
        style={{ clipPath: "polygon(0 31%, 100% 0, 100% 78%, 0 100%)" }}
      >
        for looking at my portfolio
      </div>
      <div
        className="absolute top-310 flex items-center justify-center h-60 w-306 bg-gray-dark text-white font-heading text-xl font-bold"
        style={{ clipPath: "polygon(0 0, 100% 16%, 100% 100%, 0 100%)" }}
      >
        NA YUHYEONG
      </div>
    </div>
  )
};

export default Thankyou;
