import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='foooter' id='footer'>
       <ul className='permalinks'>
        <li><a className="links-color"href='#'>Home</a></li>
        <li><a className="links-color"href='#about'>About</a></li>
        <li><a className="links-color"href='#projects'>Projects</a></li>
        <li><a className="links-color"href='#contact'>Contact</a></li>
        
       </ul>

       <div className="footer-logo">
       <i className="fa-brands fa-facebook-f"></i>
       <i className="fa-brands fa-square-instagram"></i>
       <i className="fa-brands fa-twitter"></i>

       </div>
       <div className="footer-copyright">
        <small>&copy; Aryan . All rights reserverd
            
        </small>
       </div>
    </section>
  )
}

export default Footer
