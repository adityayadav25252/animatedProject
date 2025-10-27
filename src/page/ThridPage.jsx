import React from "react";
import VideoMask from "../components/VideoMask";

const ThridPage = () => {
  return (
    <div className="h-auto min-h-screen">
      <div className="flex flex-col items-center px-4 md:px-12 lg:px-24 xl:px-50 mb-20">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-center">
          DESIGN AND {" "}
          <span className="font-serif font-thin underline decoration-1 decoration-black underline-offset-7">
            TECHNOLOGY
          </span>{" "}
          STUDIO TRANSFORMING YOUR
          <span className="font-serif font-thin underline decoration-1 decoration-black underline-offset-7">
            {" "}
            IDEAS
          </span>{" "}
          INTO REALITY
        </div>
        <div className="text-[#555555] leading-6 sm:leading-7 md:leading-8 mt-6 md:mt-8 lg:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl text-center font-medium px-4 sm:px-8 md:px-12 lg:px-24">
          Creating a successful digital services for innovative start-up and
          <br className="hidden sm:block" />
          established businesses with trendy design and
          <br className="hidden sm:block" />
          development.
        </div>
      </div>
      <VideoMask />
    </div>
  );
};

export default ThridPage;
