import React from 'react'
import './About.css'
import aboutme from '../../assets/killua.png'

const About = () => {
  return (
    <section id="about">
    <div className='container text-center'>
    
      <div className="row align-items-start">
            
    <h5 className='aa'>Get To Know</h5>
    <h2 >About Me</h2>
        <div className=" col-md-6">
<div className="about_me">
    <div className="about_me_image">
    <img src={aboutme} alt="about image"/>
    </div>
</div>
        </div>
        <div className="  col-md-6">
        <div className="about_content">
    <div className="about_cards">
      <article className='about_card' >
      <i className="fa-brands fa-html5"></i>
     

        <h5>Web Dev</h5>
      </article>

      <article className='about_card' >
      <i className="fa-solid fa-c"></i>
      

        <h5>Languages</h5>
      </article>

      <article className='about_card' >
      <i className="fa-brands fa-windows"></i>
     
        <h5>O.S</h5>
      </article>
    </div>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, distinctio doloribus fuga similique itaque quae odio ab tenetur impedit, assumenda, veritatis dicta. Veniam repudiandae ratione cumque non voluptate praesentium error.
    </p>
    <a href="contact" className='btn btn-primary'>Let's Talk</a>
      </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About
