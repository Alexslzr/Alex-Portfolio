import React, { useState } from 'react';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import Footer from './footer/footer';
import Header from './Header'
import projects from '../Data/Data';
import skills from '../Data/Tech';
import './styles.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio projects={projects}/>;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume skills={skills}/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='back'>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} /> 
      {renderPage()}
      <Footer />
    </div>
  );
}
