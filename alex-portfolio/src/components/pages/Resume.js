import React from 'react';
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
function handleDownload() {

}

export default function Resume() {
  return (
    <div className='m-3'>
      <h1>Resume</h1>
      <h4>Download my <a href="/Alejandro_Salazar_Resume.pdf" download="Alejandro_Salazar_Resume.pdf">Resume</a></h4>
      <DiJavascript1/>
      <DiBootstrap/>
      <DiGit/>
      <DiReact/>
      <DiCss3/>
      <DiMongodb/>
      <DiHeroku/>
      <DiJqueryLogo/>
      <DiMysql/>
      <DiHtml5/>
      <DiNodejs/>
      <BiLogoTailwindCss/>
      <SiExpress/>
    </div>
  );
}
