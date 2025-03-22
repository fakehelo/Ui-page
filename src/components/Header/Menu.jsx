import React from 'react'
import {menu_list} from '../../assets/assets'
import "./Menu.css"
const Menu = ({category,setcategory}) => {
  return (
    <>
    <div className="menu" id = "explore-menu">
        <h2>Explore Our menu</h2>
        <p> Choose your dish from our delicious menu. Our mission is to provide best quality with honest prices</p>
        <div className="menu_list">
            {menu_list.map((item,index) =>{
                return (
                    <div onClick={()=>setcategory(prev=>prev===item.menu_name ? "All" :item.menu_name)} key = {index}className="explore_list">
                        <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt="" srcset="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
       
        </div>
        <hr />    
    </div>    
    </>
  )
}

export default Menu;