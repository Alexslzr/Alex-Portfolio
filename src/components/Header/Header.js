import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { ImFileText2 } from "react-icons/im";
import { MdWorkOutline } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import './header.css'

function Header({ currentPage, handlePageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    handlePageChange(page);
    setIsMenuOpen(false); // Cerrar el menú al seleccionar una opción
  };

  const navItems = [
    {
      key: 'AboutMe',
      label: 'About Me',
      icon: <AiOutlineUser />,
      href: '#aboutMe'
    },
    {
      key: 'Portfolio',
      label: 'Portfolio',
      icon: <MdWorkOutline />,
      href: '#portfolio'
    },
    {
      key: 'Contact',
      label: 'Contact',
      icon: <AiOutlineMail />,
      href: '#contact'
    },
    {
      key: 'Resume',
      label: 'Resume',
      icon: <ImFileText2 />,
      href: '#resume'
    }
  ];

  return (
    <div className='header-container d-flex align-items-center justify-content-between shadow p-3 bac position-relative'>
      <h1>Alejandro Salazar</h1>
      
      {/* Botón hamburguesa - solo visible en mobile */}
      <button 
        className="hamburger-btn d-md-none btn btn-link p-2"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Navegación Desktop - oculta en mobile */}
      <ul className='d-none d-md-flex flex-row justify-content-around desktop-nav'>
        {navItems.map((item) => (
          <li key={item.key}>
            <a
              href={item.href}
              onClick={() => handleNavClick(item.key)}
              className={currentPage === item.key ? 'd-flex align-items-center act' : 'd-flex align-items-center'}
            >
              {item.icon} {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Navegación Mobile - solo visible cuando el menú está abierto */}
      <div className={`mobile-nav-container d-md-none ${isMenuOpen ? 'show' : ''}`}>
        <ul className='mobile-nav d-flex flex-column'>
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                onClick={() => handleNavClick(item.key)}
                className={currentPage === item.key ? 'd-flex align-items-center act mobile-nav-item' : 'd-flex align-items-center mobile-nav-item'}
              >
                {item.icon} {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay para cerrar el menú al hacer click fuera */}
      {isMenuOpen && (
        <div 
          className="mobile-overlay d-md-none"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Header;