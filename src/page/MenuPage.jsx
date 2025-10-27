import React, { useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { gsap } from "gsap";

const MenuPage = ({ onClose }) => {
  const menuItems = [
    "HOME",
    "ABOUT",
    "SERVICE",
    "PORTFOLIO",
    "WHO WE ARE",
    "CONTACT",
  ];
  const letterRefs = useRef([]);
  const menuRef = useRef(null);

  useEffect(() => {
    letterRefs.current = letterRefs.current.slice(0, menuItems.length);
  }, [menuItems]);

  useEffect(() => {
    if (!menuRef.current) return;

    const setupAnimation = (letterContainer) => {
      const top = letterContainer.querySelector(".top");
      const bottom = letterContainer.querySelector(".bottom");
      const topLetters = top.querySelectorAll(".letter");
      const bottomLetters = bottom.querySelectorAll(".letter");

      gsap.set(bottomLetters, { y: 100 });
      gsap.set(topLetters, { y: 0 });

      const handleMouseEnter = () => {
        topLetters.forEach((letter, i) => {
          if (letter.textContent === " ") return;
          gsap.to(letter, {
            y: -60,
            duration: 0.3,
            ease: "power2.out",
            delay: i * 0.05,
          });
        });

        bottomLetters.forEach((letter, i) => {
          if (letter.textContent === " ") return;
          gsap.to(letter, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            delay: i * 0.05,
          });
        });
      };

      const handleMouseLeave = () => {
        topLetters.forEach((letter, i) => {
          if (letter.textContent === " ") return;
          gsap.to(letter, {
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.8)",
            delay: i * 0.03,
          });
        });

        bottomLetters.forEach((letter, i) => {
          if (letter.textContent === " ") return;
          gsap.to(letter, {
            y: 60,
            duration: 0.6,
            ease: "elastic.out(1, 0.8)",
            delay: i * 0.03,
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
    <div
      className="bg-[#121212] w-full overflow-hidden h-screen flex relative"
      ref={menuRef}
    >
      {/* Exit button - always visible */}
      <div className="absolute top-5 right-5 z-50">
        <button
          onClick={onClose}
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-[#232323] text-3xl hover:bg-gray-200 transition"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      {/* Left Sidebar - hidden on screens <= 425px */}
      <div className="hidden sm:flex w-68 border-2 border-[#1d1d1d] flex-col justify-between">
        {/* Logo */}
        <div className="h-38 border-b-2 border-[#1d1d1d] flex items-center justify-center">
          <img
            src="/img/Strix logo.png"
            alt="Logo"
            className="w-[195px] h-[50px]"
          />
        </div>

        {/* Social Media */}
        <div className="h-[440px] text-white border-y-2 border-[#1d1d1d] flex flex-col justify-end pl-10 pb-6">
          <h1 className="text-2xl font-bold mb-7">Follow Us</h1>
          <div className="text-lg font-medium flex flex-col gap-2">
            {["WhatsApp", "LinkedIn", "Instagram", "Facebook", "Twitter", "YouTube"].map(
              (social, i) => (
                <h2
                  key={i}
                  className="hover:text-[#999999] cursor-pointer transition-colors"
                >
                  {social}
                </h2>
              )
            )}
          </div>
        </div>

        {/* About */}
        <div className="h-38 flex items-center pl-10 border-t-2 border-[#1d1d1d]">
          <h1 className="text-white font-medium text-lg hover:text-[#999999] cursor-pointer transition-colors">
            About
          </h1>
        </div>
      </div>

      {/* Center Menu (always visible) */}
      <div className="flex-1 border-2 border-[#1d1d1d] text-white">
        <div className="h-8 border-b-2 border-[#1d1d1d]"></div>
        {menuItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (letterRefs.current[index] = el)}
            className="h-25 px-10 py-3 text-3xl sm:text-5xl md:text-4xl font-medium border-b-2 border-[#1d1d1d] cursor-pointer relative"

          >
            <div className="letter-container relative h-[60px] overflow-hidden">
              <div className="top flex whitespace-pre">
                {item.split("").map((char, i) => (
                  <span
                    key={`top-${i}`}
                    className="letter inline-block text-white"
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div className="bottom flex whitespace-pre absolute top-0 left-0">
                {item.split("").map((char, i) => (
                  <span key={`bottom-${i}`} className="letter inline-block">
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar - hidden on screens <= 425px */}
      <div className="hidden sm:flex w-92 bg-[#1d1d1d] border-2 border-[#1d1d1d] flex-col justify-between">
        {/* Search Bar */}
        <div className="border rounded-full mt-50 border-[#585858] h-15 w-80 flex items-center justify-between px-5 py-7 mb-30 ml-5">
          <span className="text-[#585858]">Search keyword</span>
          <i className="fa-solid fa-magnifying-glass text-white text-xl cursor-pointer"></i>
        </div>

        {/* Contact Info */}
        <div className="text-white flex flex-col justify-end pb-5 ml-5">
          <div className="text-2xl font-bold mb-6">Get in touch</div>
          <div className="flex flex-col gap-3 font-bold mb-3">
            <h1 className="hover:text-[#999999] cursor-pointer transition">
              +(91) - 7000396461
            </h1>
            <h1 className="hover:text-[#999999] cursor-pointer transition">
              strixdigitaLin@gmail.com
            </h1>
            <h1 className="hover:text-[#999999] cursor-pointer transition">
              infoestrixdigitaLin
            </h1>
          </div>
          <div className="flex flex-col gap-1 font-bold text-sm">
            <h1>1st Floor, IJMIMA building,</h1>
            <h1>Mindspace Opposite Interface</h1>
            <h1>Building, Malad West, Mumbai</h1>
          </div>
        </div>

        {/* Decorative Images */}
        <div className="flex flex-col items-center gap-5 pb-5">
          <img src="/img/menuballpurple.png" alt="Decoration Purple" />
          <img src="/img/menuballorange.png" alt="Decoration Orange" />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
