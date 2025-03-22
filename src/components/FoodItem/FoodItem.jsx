import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import "./FoodItem.css"
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'


const FoodItem = ({id,name,price,description,image}) => {
  const[itemcount,setitemcount] = useState(0)
  const{cartItems,addtoCart,remove} = useContext(StoreContext);
  return (
   <>
   <div className="food-item">
        <div className="food-item-img-conatiner">
        <img className= "food-item-image" src={image} alt="" />
        {!cartItems[id]
          ?<img className="add_icon" onClick={()=>addtoCart(id) } src={assets.add_icon_white}  />
          :<div className="addremicons">
            <img className="remove_icon" onClick={()=>remove(id) } src = {assets.remove_icon_red}/>
            <p id= "itemcount">{cartItems[id]}</p>
            <img className="addition " onClick={() =>addtoCart(id)}src= {assets.add_icon_green} alt="" />
            </div>
        }
        </div>
        <div className="food-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-descr">{description} </p>
        <p className="food-item-price">${price}</p>
    
   </div>
   </>
  )
}

export default FoodItem