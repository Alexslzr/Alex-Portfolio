import React from 'react';
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { ImFileText2 } from "react-icons/im";
import { MdWorkOutline } from "react-icons/md";
import './header.css'


function Header({ currentPage, handlePageChange }) {
  return (
    <div className='d-flex align-items-center justify-content-between shadow p-3 bac'>
      <h1>Alejandro Salazar</h1>
      <ul className='d-flex flex-col justify-content-around'>
        <li>
          <a
            href="#aboutMe"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'd-flex align-items-center act ' : 'd-flex align-items-center'}
          >
            <AiOutlineUser/>About Me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'd-flex align-items-center act' : 'd-flex align-items-center'}
          >

          <MdWorkOutline/> Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'd-flex align-items-center act' : 'd-flex align-items-center'}
          >
          <AiOutlineMail/>  Contact
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'd-flex align-items-center act' : 'd-flex align-items-center'}
          >
          <ImFileText2/>  Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
