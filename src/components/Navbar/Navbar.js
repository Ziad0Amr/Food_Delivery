import React, { useContext, useState } from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { storecontext } from '../../Context/Storecontext'
const Navbar = ({setshowlogin}) => {
    const [menu,setmenu]=useState("home")
    const {getTotalCartAmount}=useContext(storecontext);
    return (
        <div className='navbar'>
            <Link to="/"><img src={assets.logo} alt='logo_image' className='logo'/></Link>
            <ul className='navbar-menu'>
                <Link to="/" onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</Link>
                <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                <a href='#app-download' onClick={()=>setmenu("moblie-app")} className={menu==="moblie-app"?"active":""}>mobile-app</a>
                <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
            </ul>
            <div className="navbar-right" >
                <img src={assets.search_icon} alt='search_icon'/>
                <div className='navbar-search-icon'>
                    <Link to="./cart"><img src={assets.basket_icon} alt='basket_icon'/></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>setshowlogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar