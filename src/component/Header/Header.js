import React from 'react'
import cv from '../../assets/mcv.pdf'
import killua from '../../assets/kill.png'
import './Header.css'
const Header = () => {
  return (
  <header>
 <div className="container header_container">
    <h5>Hello</h5>
    <h1>Aryan</h1>
    <h5 className="text-light">
       Web Developer
    </h5>
    <div className="cta">
    <a href={cv} className="btn" target="_blank" rel="noreferrer">Download CV</a>
    <a href="#contact" className="btn btn-primary">Let's Talk</a>
  </div>


  <div className="me">
 <img src={killua} alt=""/>
  </div>
  <a href ="#contact" className='Scroll_down'>Scroll Down</a>
 <div className="header_socials">
 <a href="https://linkedin.com" target="_blank"  rel="noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
 <a href="https://github.com" target="_blank"  rel="noreferrer" ><i className="fa-brands fa-github"></i></a>
 <a href="https://whatsapp.com" target="_blank"  rel="noreferrer" ><i className="fa-brands fa-square-whatsapp"></i></a>
 </div>
 </div>
 </header> 

    
  )
}

export default Header
