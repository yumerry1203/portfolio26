import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Profile from "@/assets/images/me.png";

gsap.registerPlugin(ScrollTrigger);

const ProfileJourney = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const profile = profileRef.current;
    const home = document.querySelector<HTMLElement>("#home");
    const aboutStage = document.querySelector<HTMLElement>(".about-journey-stage");
    const aboutDetails = document.querySelector<HTMLElement>(".about-details");

    if (!profile || !home || !aboutStage || !aboutDetails) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const media = gsap.matchMedia();

    media.add("(min-width: 1024px)", () => {
      const title = aboutStage.querySelector<HTMLElement>(".about-journey-title");
      const keywords = gsap.utils.toArray<HTMLElement>(".about-journey-keywords > li");
      const name = aboutStage.querySelector<HTMLElement>(".about-journey-name");
      const role = aboutStage.querySelector<HTMLElement>(".about-journey-role");
      const quote = aboutStage.querySelector<HTMLElement>(".about-journey-quote");
      const description = aboutStage.querySelector<HTMLElement>(".about-journey-description");
      const revealItems = [title, ...keywords, name, role, quote, description].filter(
        (item): item is HTMLElement => Boolean(item),
      );

      gsap.set(profile, {
        display: "block",
        left: "4vw",
        top: "52vh",
        xPercent: 0,
        yPercent: -50,
        scale: 0.92,
        autoAlpha: 1,
      });

      if (reduceMotion) {
        gsap.set(profile, {
          position: "absolute",
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          scale: 1,
          autoAlpha: 1,
        });
        gsap.set(revealItems, { autoAlpha: 1, x: 0, y: 0 });
        return;
      }

      gsap.fromTo(
        profile,
        { autoAlpha: 0, scale: 0.35, filter: "blur(18px)" },
        { autoAlpha: 1, scale: 0.92, filter: "blur(0px)", duration: 0.8, delay: 0.15, ease: "back.out(1.45)" },
      );

      const travelTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: home,
          start: "top top",
          endTrigger: aboutStage,
          end: "top top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      travelTimeline
        .to(profile, { left: "6vw", top: "45vh", scale: 0.86, duration: 0.72, ease: "none" })
        .to(profile, {
          left: "50vw",
          top: "50vh",
          xPercent: -50,
          yPercent: -50,
          scale: 1.05,
          duration: 0.28,
          ease: "power2.inOut",
        });

      const aboutTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: aboutStage,
          start: "top top",
          end: "+=1700",
          pin: aboutStage,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      aboutTimeline
        .fromTo(title, { autoAlpha: 0, x: -40 }, { autoAlpha: 1, x: 0, duration: 0.75, ease: "power3.out" })
        .fromTo(keywords, { autoAlpha: 0, x: -28 }, { autoAlpha: 1, x: 0, duration: 0.5, stagger: 0.14, ease: "power3.out" }, "-=0.35")
        .fromTo(name, { autoAlpha: 0, x: 42 }, { autoAlpha: 1, x: 0, duration: 0.65, ease: "power3.out" })
        .fromTo(role, { autoAlpha: 0, x: 42 }, { autoAlpha: 1, x: 0, duration: 0.65, ease: "power3.out" }, "-=0.4")
        .fromTo(quote, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out" })
        .fromTo(description, { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .to({}, { duration: 1.1 });

      const releaseTrigger = ScrollTrigger.create({
        trigger: aboutDetails,
        start: "top bottom",
        onEnter: () => {
          const rect = profile.getBoundingClientRect();

          gsap.set(profile, {
            position: "absolute",
            left: window.scrollX + rect.left + rect.width / 2,
            top: window.scrollY + rect.top + rect.height / 2,
            xPercent: -50,
            yPercent: -50,
            y: 0,
          });
        },
        onLeaveBack: () => {
          gsap.set(profile, {
            position: "fixed",
            left: "50vw",
            top: "50vh",
            xPercent: -50,
            yPercent: -50,
            y: 0,
          });
        },
      });

      return () => {
        travelTimeline.kill();
        aboutTimeline.kill();
        releaseTrigger.kill();
      };
    });

    media.add("(max-width: 1023px)", () => {
      gsap.set(profile, { display: "none" });
      gsap.set(".about-journey-title, .about-journey-keywords > li, .about-journey-name, .about-journey-role, .about-journey-quote, .about-journey-description", {
        autoAlpha: 1,
        x: 0,
        y: 0,
      });
    });

    return () => media.revert();
  }, []);

  return (
    <div
      ref={profileRef}
      aria-hidden="true"
      className="pointer-events-none fixed z-20 hidden aspect-square w-[clamp(36rem,38vw,54rem)] will-change-[left,top,transform,opacity] lg:block"
    >
      <img src={Profile} alt="" className="absolute bottom-[7%] left-1/2 z-10 w-[54%] -translate-x-1/2 object-contain" />
    </div>
  );
};

export default ProfileJourney;
