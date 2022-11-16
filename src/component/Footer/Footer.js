import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
       <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
        
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
    </footer>
  )
}

export default Footer
