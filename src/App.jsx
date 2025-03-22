import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar"
import Menu from "./components/Header/Menu";
import Header from "./components/Header/Header";
import FoodDisplay from "./components/Food/FoodDisplay";
import Footer from "./components/Footers/Footer";
import Appdownload from "./components/Appdownload/Appdownload";
import { useState } from "react";
import Loginpop from "./components/Loginpopup/Loginpop";
import Cart from "./components/Cart/Cart";


const  App = ()=>  {
  const [showlogin,setshowlogin] = useState(false);
  return (
    <>
    {showlogin?<Loginpop setshowlogin={setshowlogin}/>:<></>}
      <Navbar setshowlogin={setshowlogin}/>
      <Header/>
      <Menu/>
      <FoodDisplay/>
      <Appdownload/>
      <Cart/>
      <Footer/>

        
    </>
  )
}

export default App;


