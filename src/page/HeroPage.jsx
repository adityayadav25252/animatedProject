import React,{useState}from 'react'
import MenuPage from "../page/MenuPage.jsx";
import NavBar from '../components/NavBar.jsx';
import HeroContent from '../components/HeroContent.jsx';

const HeroPage = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Toggle = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <NavBar onMenuClick={Toggle}/>
      <HeroContent />

      {isMenuOpen && <div className="fixed inset-0 z-50">
          <MenuPage onClose={Toggle} />
        </div>}
    </div>
  )
}

export default HeroPage
