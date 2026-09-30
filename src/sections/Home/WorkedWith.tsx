import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import ClassicBlanc from "@/assets/images/classic-blanc.svg";
import HyundaiCard from "@/assets/images/hyundai-card.svg";
import HyundaiCapital from "@/assets/images/hyundai-capital.svg";
import BeautyPoint from "@/assets/images/beauty-point.svg";
import Cleverse from "@/assets/images/cleverse.svg";
import HaruShare from "@/assets/images/haru-share.svg";
import Koen from "@/assets/images/koen-transparent.png";
import Samsung from "@/assets/images/samsung.svg";
import Moggoji from "@/assets/images/moggoji.svg";

const logos = [
  { name: "Classic Blanc", src: ClassicBlanc },
  { name: "Hyundai Card", src: HyundaiCard },
  { name: "Beauty Point", src: BeautyPoint },
  { name: "Cleverse", src: Cleverse },
  { name: "Haru Share", src: HaruShare },
  { name: "Koen", src: Koen },
  { name: "Hyundai Capital", src: HyundaiCapital },
  { name: "Samsung", src: Samsung },
  { name: "Moggoji", src: Moggoji },
];

const WorkedWith = () => {
  const trackRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) return;

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
      <div className="content-container mt-24 text-right font-heading text-base font-bold text-gray-dark sm:mt-0 sm:text-2xl">
        Worked with.
      </div>
      <div className="relative mt-20 overflow-hidden border-y border-gray-dark">
        <ul
          ref={trackRef}
          className="flex w-max"
        >
          {[...logos, ...logos].map((logo, index) => {
            const isDuplicate = index >= logos.length;

            return (
              <li
                key={`${logo.name}-${index}`}
                aria-hidden={isDuplicate || undefined}
                className="
                  flex h-90 w-190 shrink-0 sm:h-145 sm:w-356
                  items-center justify-center
                  border-r border-gray-dark
                "
              >
                <img
                  src={logo.src}
                  alt={isDuplicate ? "" : logo.name}
                  className="h-40 w-120 object-contain grayscale contrast-125 sm:h-64 sm:w-220"
                />
              </li>
            );
          })}
        </ul>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-[linear-gradient(to_right,var(--purple),transparent)] sm:w-80"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-[linear-gradient(to_left,var(--purple),transparent)] sm:w-80"
        />
      </div>
    </>
  );
};

export default WorkedWith;
