import React, { useState } from 'react'
import Header from '../Header/Header'
import Menu from '../Header/Menu'
import FoodDisplay from '../Footer/FoodDisplay'
const Home = () => {
    const[category,setcategory] = useState("All")
  return (
    <>
    
    <Menu category = {category} setcategory = {setcategory}/>
    <FoodDisplay category = {category}/>

    
    </>
  )
}

export default Home