import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FourthPage = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    gsap.fromTo(
      card,
      { y: 500 },
      {
        y: -400, 
        ease: "expo.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom", 
          end: "bottom+=-100 top",
          scrub: 1, 
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#121212] overflow-hidden text-white flex flex-col lg:flex-row justify-start items-center lg:items-start px-4 sm:px-8 md:px-12 lg:px-20 py-12 lg:py-30">
      <div className="lg:pl-30 lg:pt-30 order-1 lg:order-2 w-full lg:w-auto">
        <img
          ref={cardRef}
          src="/img/homebanner.png"
          alt="Fourth Page"
          className="w-full max-w-[550px] h-auto mx-auto lg:mx-0"
        />
      </div>

      <div className="lg:ml-10 lg:pt-30 flex flex-col order-1 lg:order-2 w-full lg:w-1/2 mt-8 lg:mt-0">
        <div className="lg:pl-20 text-center lg:text-left">
          <h1 className="text-lg font-medium mb-4">WHO WE ARE</h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            WE ARE LEADING <br className="hidden sm:block" /> BRAND BUILDING <br className="hidden sm:block" /> AGENCY{" "}
          </h1>
        </div>
        <div className="text-[#999999]  text-base sm:text-lg lg:ml-20 lg:mt-30 px-4 sm:px-0 max-w-[500px] mx-auto lg:mx-0 text-center lg:text-left">
          <p className="leading-relaxed ">
            Strix is a brand building agency that thrives at the junction of strategy and creativity. What we do is both art and science. It's about showing up and buckling down. Dreaming big and finding the breakthroughs. Together, we can create future-proofed brands with plenty of room for growth.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="text-white px-6 py-3 sm:px-9 mt-40 sm:py-4 rounded-full mt-8 hover:bg-[#e0e0e0] hover:text-black transition duration-300">
              Explore Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;