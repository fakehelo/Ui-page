import React from 'react'
import { assets } from '../../assets/assets';
import"./Appdownload.css"

const Appdownload = () => {
  return (
    <>
    <div className="download" id = "app">
        <div className="app">
            <h1> For Better Experience Download Dhaba420 App </h1>
        </div>
        <div className="app-image">
            <img src={assets.app_store} alt="" />
            <img src={assets.play_store} alt="" />
        </div>
    </div>
    </>
  )
}
export default Appdownload;