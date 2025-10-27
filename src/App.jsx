import React from "react";

import FourthPage from "./page/FourthPage.jsx";
import ThridPage from "./page/ThridPage.jsx";
import SecondPage from "./page/SecondPage.jsx";
import MarqueeScroll from "./components/MarqueeScroll.jsx";
import HeroPage from "./page/HeroPage.jsx";

function App() {

  
  return (
    <>
      <HeroPage />
      <MarqueeScroll />
      <SecondPage />
      <ThridPage />
      <FourthPage />
    </>
  );
}

export default App;
