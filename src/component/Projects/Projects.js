import React from 'react'
import './Projects.css'
import manga from '../../assets/manga.png'
import dicegame from '../../assets/dice game.png'
import tindog from '../../assets/tindog.png'
import news from '../../assets/news.png'


const Project = () => {
  return (
  <section id="projects">
<h5>My Recent Work</h5>

<div className="container">
    <div className="row text-center r-1">
        <div className="col-md-4">
<img src={manga} alt=""/>
<div className="projects_item-cta">
    <a href="https://github.com/Teddy1404/mangaseller" className='btn'  target="_blank" rel="noreferrer">Github</a>
    <a href="https://teddy1404.github.io/mangaseller/#about-us" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
    </div>
        </div>

        <div className="col-md-4 ">
<img src={dicegame} alt=""/>
<div className="projects_item-cta">
    <a href="https://github.com" className='btn'  target="_blank" rel="noreferrer">Github</a>
    <a href="https://github.com" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
    </div>
        </div>

        <div className="col-md-4">
<img src={news} alt=""/>
<div className="projects_item-cta">
    <a href="https://github.com" className='btn'  target="_blank" rel="noreferrer">Github</a>
    <a href="https://github.com" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
    </div>
        </div>
    </div>

    <div className="row text-center r-2">
        <div className="col-md-4">
<img src={tindog} alt=""/>
<div className="projects_item-cta">
    <a href="https://teddy1404.github.io/tindog/" className='btn'  target="_blank" rel="noreferrer">Github</a>
    <a href="https://github.com/Teddy1404/tindog" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
    </div>
        </div>

        <div className="col-md-4">
<img src={manga} alt=""/>
<div className="projects_item-cta">
    <a href="https://github.com" className='btn'  target="_blank" rel="noreferrer">Github</a>
    <a href="https://github.com" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
    </div>
        </div>

        <div className="col-md-4">
<img src={dicegame} alt=""/>
<div className="projects_item-cta">
    <a href="https://github.com" className='btn'  target="_blank" rel="noreferrer">Github</a>
    <a href="https://github.com" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
    </div>
        </div>
    </div>
    
</div>
  </section>
  )
}

export default Project
