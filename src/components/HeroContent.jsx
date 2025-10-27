import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const HeroContent = () => {
  const strixRef = useRef(null);
  const digitalRef = useRef(null);
  const hubRef = useRef(null);

  useEffect(() => {
    const animateText = (elementRef, delay = 0) => {
      const element = elementRef.current;
      if (!element) return;

      const letters = element.textContent.split("");
      element.textContent = "";

      letters.forEach((letter, i) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.display = "inline-block";
        span.style.filter = "blur(5px)";
        span.style.letterSpacing = "20px";
        span.style.opacity = "0";
        span.style.transform = "translateX(20px)";
        span.style.willChange = "filter, letter-spacing, opacity, transform";
        element.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          filter: "blur(0px)",
          letterSpacing: "0px",
          transform: "translateX(0)",
          duration: 1,
          delay: delay + i * 0.04,
          ease: "expo.out",
        });
      });
    };

    animateText(strixRef);
    animateText(digitalRef, 0.5);
    animateText(hubRef, 1.0);
  }, []);

  return (
    <div className="mt-24 w-full mb-5 relative">
      <div className="w-full px-4 sm:px-8 md:px-14 py-8 md:py-16 relative z-10">
        <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold tracking-tight flex flex-col sm:flex-row gap-2 sm:gap-5 items-start sm:items-center">
          BRAND BUILDING AGENCY
          <div className="h-px w-16 sm:w-22 bg-black  sm:mt-4"></div>
        </div>

        <div
          ref={strixRef}
          className="font-extrabold leading-[80%] 
                    text-[3.5rem] xs:text-[4rem] 
                    sm:text-[5rem] md:text-[6rem] 
                    lg:text-[8rem] xl:text-[13rem]
                    pl-1 xs:pl-2 sm:pl-3 md:pl-4 lg:pl-6"
        >
          VIP
        </div>

        <div className="flex flex-col  sm:flex-row">
          <div
            ref={digitalRef}
            className="font-extrabold leading-[100%]
                      text-[3.5rem] xs:text-[4rem] 
                      sm:text-[5rem] md:text-[6rem] 
                      lg:text-[7rem] xl:text-[11rem]
                      pl-0 sm:pl-8 md:pl-20 lg:pl-32"
          >
            DIGITAL
          </div>
          <div
            ref={hubRef}
            className="font-extrabold leading-[100%]
                      text-[3.5rem] xs:text-[4rem] 
                      sm:text-[5rem] md:text-[6rem] 
                      lg:text-[7rem] xl:text-[11rem]
                      pl-0 sm:pl-4"
          >
            HUB
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
