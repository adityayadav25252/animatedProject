import { useEffect, useRef } from "react";
import { gsap } from "gsap";


export default function VideoMask() {
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0, },
      { opacity: 1,  duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="flex items-center justify-center py-10 sm:py-20 md:py-22 lg:py-20 xl:py-30 bg-[#1c1d20]">
      <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
         
          src="/video/MaskVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <img
          ref={overlayRef}
          src="/img/video-frame.png"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />
      </div>
    </div>
  );
}