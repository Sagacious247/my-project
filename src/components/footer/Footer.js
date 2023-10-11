import React from 'react'
import logoImg from '../../assets/logo.png'
import facebookImg from '../../assets/facebook.png'
import './footer.css'

function Footer() {
  return (
    <>
    <div className='footerSection'>
        <div className='footerLinks'>
<div className='footerLinkFacebook'>
    <div className='footerLinkImg'>
        <img src={logoImg} alt=''/>
        <span><h1>KLEM ELECTRICAL</h1>ENGINEERING</span>
    </div>
    <div className='footerLinkMedia'>
        <div className='infoImg'>
           <img src={facebookImg} alt='' />
        </div>
        <div className='infoImg'>
           <img src={facebookImg} alt='' />
        </div>
        <div className='infoImg'>
           <img src={facebookImg} alt='' />
        </div>
        <div className='infoImg'>
           <img src={facebookImg} alt='' />
        </div>
    </div>
</div>

<div className='infoLink'>
    <span>Our Services</span>
    <ul>
        <li>Electrical Repairs</li>
        <li>Lightning Installations</li>
        <li>Electrical Panel Replacement</li>
        <li>Ev Charger Installation</li>
        <li>House Rewiring Services</li>
        <li>Landscape Lightning</li>
        <li>Electrical Repairs</li>
    </ul>
</div>
<div className='infoLink'>
    <span>Quick Links</span>
    <ul>
        <li>About</li>
        <li>FAQ</li>
        <li>Services</li>
        <li>Our Work</li>
        <li>Leave a Review</li>
        <li>Contact</li>
        <li>Electrical Repairs</li>
    </ul>
</div>
<div className='infoLink'>
    <span>Contact</span>
    <ul>
        <li>+234-070-670-057-59</li>
        <li>programmingwithsagacious@gmail.com</li>
    </ul>
  <button className='InfoContactBtn'>Contact Us</button>
</div>
</div>
</div>
 <div className='footer'>
    <footer>
    &#169; 2023 Copyrights Reserved <span>KLEM-ELECTRICAL</span>
    </footer>
 </div>
 </>
  )
}

export default Footer