import React from 'react';
import './resume.css'
import { SiExpress } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3,
  DiGit,
  DiHtml5,
  DiBootstrap,
  DiHeroku,
  DiMysql,
  DiJqueryLogo,
} from "react-icons/di";

import { HiOutlineDownload } from "react-icons/hi";

export default function Resume({skills}) {
  return (
    <div className='m-3'>
      <a href="/Alejandro_Salazar_Resume.pdf" download="Alejandro_Salazar_Resume.pdf"><button><HiOutlineDownload /> Resume</button></a>
      <h1 className='text-center'>Technical Skills</h1>
      <div className='d-flex flex-column align-items-center'>
        <div className='d-flex'>
          <div className='tech-icon'>
            <DiJavascript1/>
            <h5>Javascript</h5>
          </div>
          <div className='tech-icon'>
            <DiReact/>
            <h5>ReactJs</h5>
          </div>
          <div className='tech-icon'>
            <DiNodejs/>
            <h5>NodeJs</h5>
          </div>
          <div className='tech-icon'>
            <DiMongodb/>
            <h5>MongoDB</h5>
          </div>
          <div className='tech-icon'>
            <DiCss3/>
            <h5>CSS</h5>
          </div>
          <div className='tech-icon'>
            <DiGit/>
            <h5>Git</h5>
          </div>
        </div>
        <div className='d-flex'>
          <div className='tech-icon'>
            <DiHtml5/>
            <h5>HTML</h5>
          </div>
          <div className='tech-icon'>
            <DiBootstrap/>
            <h5>Bootstrap</h5>
          </div>
          <div className='tech-icon'>
            <DiHeroku/>
            <h5>Heroku</h5>
          </div>
          <div className='tech-icon'>
            <DiMysql/>
            <h5>MYSQL</h5>
          </div>
          <div className='tech-icon'>
            <DiJqueryLogo/>
            <h5>Jquery</h5>
          </div>
          <div className='tech-icon'>
            <BiLogoTailwindCss/>
            <h5>TailwindCss</h5>
          </div>
        </div>
        <div className='tech-icon'>
          <SiExpress/>
          <h5>ExpressJs</h5>
        </div>
      </div>
    </div>
  );
}


