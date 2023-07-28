import React from 'react';
import './portfolio.css'

let styles = {
  image: {
    height: '40px',
    marginLeft: '10px'
  }
}

//
export default function Portfolio({projects}) {
  return (
      <div>
        {projects.map((project)=> (
        <div className="bg-secondary m-5 p-4 rounded shadow" key={project.id}>
          <div className='d-flex align-items-center'>
            <h1 key={project.id}>{project.title}</h1>
            <a href={project.repo} target="_blank">
                  <img style={styles.image} src={require("../../Images/github-mark.png")} alt="github-logo"></img>
            </a>
          </div>
          <h5>{project.tech}</h5>
          <a href={project.app} target='_blank'>
            <img src={project.img} alt={project.title}></img>
          </a>
        </div>
        ))}
    </div> 
    )
}

