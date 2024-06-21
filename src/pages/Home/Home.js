import React, { useEffect, useState } from 'react'
import "./home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/Exploremenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import { FaArrowUp } from "react-icons/fa";
const Home = () => {
  const [category,setcategory]=useState("All")
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 800) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  }, []);

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setcategory={setcategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
        <button className={showButton ? 'display' : 'none'} onClick={scrollToTop}><FaArrowUp className='arrow'/></button>
    </div>
  )
}

export default Home