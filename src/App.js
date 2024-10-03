import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/Loginpopup/LoginPopup';

function App() {
  const [showlogin,setshowlogin]=useState(false)
  return (
    <>
      {
        showlogin?<LoginPopup setshowlogin={setshowlogin}/>:<></>
      }
      <div className="App">
        <Navbar setshowlogin={setshowlogin}/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/cart' Component={Cart} />
          <Route path='/order' Component={PlaceOrder}/>
        </Routes>
      </div>
      <Footer/>
    </>

  );
}

export default App;
