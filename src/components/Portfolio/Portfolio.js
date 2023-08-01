import React from 'react';
import './portfolio.css'

let styles = {
  image: {
    height: '40px',
    marginLeft: '10px'
  }
}

export default function Portfolio({projects}) {
  return (
      <div>
        {projects.map((project)=> (       
            <div className="d-flex justify-content-center m-5">
              {project.section.map((pro)=> (
                <div className="project my-2 mx-4 p-4 rounded">
                  <div className='d-flex align-items-center uwu'>
                    <h1 key={pro.id}>{pro.title}</h1>
                    <a href={pro.repo} target="_blank">
                          <img style={styles.image} src={require("../../Images/github-mark-white.png")} alt="github-logo"></img>
                    </a>
                  </div>
                  <h5>{pro.tech}</h5>
                  <a href={pro.app} target='_blank' className='tech'>
                    <img src={pro.img} alt={pro.title}></img>
                  </a>
                  <p className='description'>{pro.description}</p>
                </div>
              ))}
            </div> 
          ))} 
    </div> 
    )
}

