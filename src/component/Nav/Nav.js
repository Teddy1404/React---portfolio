import React from 'react'
import './Nav.css'
import { useState } from 'react'
const Nav = () => {
const[activenav,setActivenav]=useState('#')

  return (
   <nav>
    <a href="#" onClick={()=>setActivenav('#')} className={activenav === '#' ?'active':''} rel="noreferrer"><i className="fa-sharp fa-solid fa-house"></i></a>
    <a href="#about" onClick={()=>setActivenav('#about')} className={activenav === '#about' ?'active':''} rel="noreferrer"><i className="fa-solid fa-user"></i></a>
    {/* <a href="#Skills" onClick={()=>setActivenav('#Skills')} className={activenav=== '#Skills'?'active':''} rel="noreferrer"><i className="fa-solid fa-award"></i></a> */}
    <a href="#projects" onClick={()=>setActivenav('#projects')} className={activenav === '#projects' ?'active':''} rel="noreferrer" ><i className="fa-solid fa-check-to-slot"></i></a>
    <a href="#contact"  onClick={()=>setActivenav('#contact')} className={activenav === '#contact' ?'active':''} rel="noreferrer"><i className="fa-solid fa-message"></i></a>
    <a href="#footer"  onClick={()=>setActivenav('#footer')} className={activenav === '#footer' ?'active':''} rel="noreferrer"><i class="fa-solid fa-copyright"></i></a>
   </nav>
  )
}

export default Nav
