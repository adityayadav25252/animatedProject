import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const MarqueeScroll = () => {
  const marqueeRef = useRef(null);
  const marqueeContentRef = useRef(null);
  const animationRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!marqueeRef.current || !marqueeContentRef.current) return;

    if (animationRef.current) {
      animationRef.current.kill();
    }
    const existingClones = marqueeRef.current.querySelectorAll('.marquee-clone');
    existingClones.forEach(clone => marqueeRef.current.removeChild(clone));

    // Get the width of the content
    const contentWidth = marqueeContentRef.current.offsetWidth;
    const marqueeWidth = marqueeRef.current.offsetWidth;

    // Only clone if content is narrower than container
    if (contentWidth < marqueeWidth * 2) {
      const clonesNeeded = Math.ceil((marqueeWidth * 2) / contentWidth);
      
      for (let i = 0; i < clonesNeeded; i++) {
        const clone = marqueeContentRef.current.cloneNode(true);
        clone.classList.add('marquee-clone');
        clone.style.position = 'absolute';
        clone.style.left = `${contentWidth * (i + 1)}px`;
        marqueeRef.current.appendChild(clone);
      }
    }

    // GSAP Animation with proper infinite looping
    const elementsToAnimate = [
      marqueeContentRef.current, 
      ...marqueeRef.current.querySelectorAll('.marquee-clone')
    ];

    animationRef.current = gsap.to(elementsToAnimate, {
      x: -contentWidth,
      duration: contentWidth / 50, // Speed based on content width
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % contentWidth)
      }
    });

    // Cleanup function
    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, [windowWidth]); // Re-run effect when window width changes

  return (
    <div 
      ref={marqueeRef}
      className="relative bg-black w-full h-[60px] md:h-[92px] text-white flex items-center overflow-hidden"
    >
      <div 
        ref={marqueeContentRef}
        className="flex whitespace-nowrap relative"
      >
        {['AGENCY', 'TYPOGRAPHY', 'DESIGN', 'INTERACTION', 'ELEMENT', 
          'DIGITAL SOLUTION', 'STRATEGY', 'BRANDING', 'DEVELOPMENT', 'STUDIO'].map((text, index) => (
          <h1 
            key={index}
            className="inline-block mx-4 md:mx-10 lg:mx-20 text-lg md:text-2xl font-bold"
          >
            {text}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default MarqueeScroll;