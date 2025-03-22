import React, { useState } from 'react'
import { createContext } from 'react'
import {food_list} from '../assets/assets'

export const  StoreContext = createContext(null)
const StoreContextProvider = (props) => {
  const [cartItems,setCartItems] = useState({})
  const addtoCart = (itemId) =>{
    if(!cartItems[itemId]) {
      setCartItems((prev) =>({...prev,[itemId]:1}) )
    }
    else{
      setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
    }
  }
  const remove = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const contextvalue = {
    food_list,
    cartItems,
    addtoCart,
    remove
    }
  return (
    <StoreContext.Provider value = {contextvalue}>
        {props.children}
    </StoreContext.Provider>

  )
}

export default StoreContextProvider;