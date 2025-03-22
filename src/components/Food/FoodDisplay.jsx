import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import "./FoodDisplay.css"
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <>
    <div className="Topdish">
    <h2>Top dishes Near you</h2>
    </div>
    
    <div className="food-display-list">
      {food_list.map((item,index)=>{
        
          return(
            <FoodItem key = {index} id= {item._id} name = {item.name} description={item.description} price = {item.price} image = {item.image}/> 
          )

     
      
        
       
    
      })}

    </div>
    </>
  )
}

export default FoodDisplay