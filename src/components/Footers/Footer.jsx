import React from 'react'
import { assets } from '../../assets/assets'
import "./Footer.css"
const Footer = () => {
  return (
    <>
    <div className="footer" id = "footer">
      <div className="footer-content">
        <div className="footer-left">
          <h1 id = "footer-left">Dhaba420</h1>
          <p id = "footer-left-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, dolores.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, repudiandae ratione? Magni nostrum ad corrupti, nobis consequuntur quibusdam doloremque iusto!
          </p>

          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>

        </div>
        <div className="footer-center">
        <h1>Company</h1>
            <ul>
             
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Data Policy</li>
            </ul>

        </div>
        <div className="footer-right">
            <h1>Get in Touch</h1>
            <ul>
             
              <li>+91 9292909191</li>
              <li>contact@Dhaba420.com</li>
            </ul>
            </div>

        </div>
        <hr />
        <p>Copyright 2024 @Dhaba420 - All Rights Reserved </p>
        <hr />

    </div>
    </>
  )
}

export default Footer