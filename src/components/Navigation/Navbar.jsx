import React from 'react'
import {Link} from 'react-router-dom'
import { assets } from '../../assets/assets'
import "./Navbar.css"
import Cart from '../Cart/Cart' 

const Navbar = ({setshowlogin}) => {
  return (
    <>    
    <nav>
        <h1 className="title"> Dhaba420</h1>
        
        <ul >        
            <li>
                <Link to = '/home'>Home</Link>
            </li>
            <li>
               <a href="#app"> App</a>
            </li>
            <li>
                <a href='#explore-menu'> Menu</a>
            </li>
            <li>
                <a href= "#footer">Contact Us </a>
            </li>
        <div className='buttons'>
                <ul>
                <img src={assets.search_icon} alt="" srcset="" />
                 
                    <a href='#cart'> <img src={assets.basket_icon}/> </a>    
                 
                <li><button onClick={()=> setshowlogin(true)}>Sign in</button></li>
            </ul>
        </div>
        </ul>


    </nav> 
           
    </>
  )
}

export default Navbar;
