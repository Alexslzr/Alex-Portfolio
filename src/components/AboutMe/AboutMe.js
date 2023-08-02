import React from 'react';
import './aboutme.css'

export default function AboutMe() {
  return (
    <div className='m-5 d-flex flex-column'>
      <img className="rounded mx-auto shadow mb-2" width="20%" src='https://media.licdn.com/dms/image/C5603AQE0UaSQWtuzIA/profile-displayphoto-shrink_800_800/0/1624990786703?e=1695859200&v=beta&t=uTjZHbkJI5FyejDPI3Hn4hhnv4fFnuN8Bfo0ALMpmeU'></img>
      <div className='mx-5 my-2 rounded p-3 about'>
        <h1 className='text-center'>About Me</h1>
        <p className='text-justify'>
          I am Fullstack Web developer, on my free times i study by myself and i am currently taking a Fullstack development bootcamp 
          in order to improve my programing skills, what i also enjoy is hanging out with friends, go outside for a walk and play sports,
          i have a Bachelor of Science in Mechatronics Engineering, and my favorite sport and activity is soccer which i play since i was 5, 
          my favorite color is green and i enjoy a lot eating tacos.
        </p>
      </div>
    </div>
  );
}
