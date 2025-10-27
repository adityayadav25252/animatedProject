import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NavBar = ({ onMenuClick }) => {
  const navItems = ["HOME", "SERVICES", "PORTFOLIO", "WHO WE ARE", "CONTACT"];
  const navRef = useRef(null);
  const letterRefs = useRef([]);

  useEffect(() => {
    letterRefs.current = letterRefs.current.slice(0, navItems.length);
  }, [navItems]);

  useEffect(() => {
    if (!navRef.current) return;

    const setupAnimation = (letterContainer) => {
      const top = letterContainer.querySelector(".top");
      const bottom = letterContainer.querySelector(".bottom");
      const letters = letterContainer.querySelectorAll(".letter");

      gsap.set([top, bottom], { y: 0, willChange: "transform" });
      gsap.set(letters, { y: 0, willChange: "transform" });

      const handleMouseEnter = () => {
        letters.forEach((letter, i) => {
          if (letter.textContent === " ") return;
          gsap.to(letter, {
            y: -23,
            duration: 0.1,
            ease: "sine.out",
            delay: i * 0.05,
            onUpdate: function () {
              gsap.set(top.children[i], { y: letter._gsap.y });
              gsap.set(bottom.children[i], { y: letter._gsap.y });
            },
          });
        });
      };

      const handleMouseLeave = () => {
        letters.forEach((letter, i) => {
          if (letter.textContent === " ") return;
          gsap.to(letter, {
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1,1)",
            delay: i * 0.03,
            onUpdate: function () {
              gsap.set(top.children[i], { y: letter._gsap.y });
              gsap.set(bottom.children[i], { y: letter._gsap.y });
            },
          });
        });
      };

      letterContainer.addEventListener("mouseenter", handleMouseEnter);
      letterContainer.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        letterContainer.removeEventListener("mouseenter", handleMouseEnter);
        letterContainer.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    const cleanups = letterRefs.current.map(setupAnimation);
    return () => cleanups.forEach((cleanup) => cleanup && cleanup());
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div
        className="py-[22px] px-[50px] max-[1200px]:px-[20px] flex justify-between items-center max-w-screen-2xl mx-auto"
        ref={navRef}
      >
        <div className="w-[180px] h-[45px] min-w-[180px] min-h-[45px]">
          <img
            src="/img/Strix logo.png"
            alt="logo"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="nav-items text-[15px] flex gap-[80px] font-[600] max-[1200px]:hidden">
          {navItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (letterRefs.current[index] = el)}
              className="cursor-pointer letter-container flex flex-col h-[17px] overflow-hidden"
            >
              <div className="top flex whitespace-pre">
                {item.split("").map((char, i) => (
                  <span
                    key={`top-${i}`}
                    className="letter inline-block"
                    style={{ transition: "transform 0.3s ease-out" }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div className="bottom flex whitespace-pre">
                {item.split("").map((char, i) => (
                  <span
                    key={`bottom-${i}`}
                    className="letter inline-block"
                    style={{ transition: "transform 0.3s ease-out" }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <img
            className="ml-[200px] max-[1200px]:ml-[50px] w-[25px] h-[25px] cursor-pointer"
            src="/img/menu.png"
            alt="menu logo"
            onClick={onMenuClick}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
