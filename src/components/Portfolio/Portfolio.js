import React from 'react';
import './portfolio.css'

let styles = {
  image: {
    height: '5vh',
    marginLeft: '10px'
  }
}

export default function Portfolio({projects}) {
  return (
    <div className='container-fluid px-4 py-5'>
      <div className='row g-4'>
        {projects.map((project)=> (       
            <div className="col-12 col-md-6 col-lg-4">
                <div className="project my-2 mx-4 p-4 rounded">
                  <div className='d-flex align-items-center'>
                    <h1 key={project.id}>{project.title}</h1>
                    <a href={project.repo} target="_blank">
                          <img style={styles.image} src={require("../../Images/github-mark-white.png")} alt="github-logo"></img>
                    </a>
                  </div>
                  <a href={project.app} target='_blank' className='tech'>
                    <img src={project.img} className='m-2 p-2' alt={project.title}></img>
                  </a>
                  <p className='description'>{project.description}</p>
                </div>
            </div> 
          ))} 
    </div> 
  </div>
    )
}

