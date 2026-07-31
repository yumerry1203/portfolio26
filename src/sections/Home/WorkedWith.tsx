import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import ClassicBlanc from "@/assets/images/classic-blanc.svg";
import HyundaiCard from "@/assets/images/hyundai-card.svg";
import HyundaiCapital from "@/assets/images/hyundai-capital.svg";
import BeautyPoint from "@/assets/images/beauty-point.svg";
import Cleverse from "@/assets/images/cleverse.svg";
import HaruShare from "@/assets/images/haru-share.svg";
import Koen from "@/assets/images/koen.svg";
import Samsung from "@/assets/images/samsung.svg";
import Moggoji from "@/assets/images/moggoji.svg";

const logos = [
  { name: "Classic Blanc", src: ClassicBlanc },
  { name: "Hyundai Card", src: HyundaiCard },
  { name: "Hyundai Capital", src: HyundaiCapital },
  { name: "Beauty Point", src: BeautyPoint },
  { name: "Cleverse", src: Cleverse },
  { name: "Haru Share", src: HaruShare },
  { name: "Koen", src: Koen },
  { name: "Samsung", src: Samsung },
  { name: "Moggoji", src: Moggoji },
];

const WorkedWith = () => {
  const trackRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -50,
        duration: 50,
        ease: "none",
        repeat: -1,
      });
    }, track);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="content-container text-right font-heading text-2xl text-gray-dark font-bold">
        Worked with.
      </div>
      <div className="relative mt-20 overflow-hidden border-y border-gray-dark">
        <ul
          ref={trackRef}
          className="flex w-max"
        >
          {[...logos, ...logos].map((logo, index) => (
            <li
              key={`${logo.name}-${index}`}
              className="
                flex h-145 w-356 shrink-0
                items-center justify-center
                border-r border-gray-dark
              "
            >
              <img
                src={logo.src}
                alt={logo.name}
              />
            </li>
          ))}
        </ul>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-80 bg-[linear-gradient(to_right,var(--purple),transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-80 bg-[linear-gradient(to_left,var(--purple),transparent)]"
        />
      </div>
    </>
  );
};

export default WorkedWith;
