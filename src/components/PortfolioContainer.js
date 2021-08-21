import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import imageOfMe from "../img/tylericon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="row vh-100 overflow-auto">
      <div className="col-12 col-sm-3 col-xl-3 px-sm-2 px-0 d-flex sticky-top align-items-center" id="nav-background">
          <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-center px-3 pt-2 justify-content-center">
            <h6 id="title-text"><span className="content-text">Tyler</span> Starling</h6>
            <img src={imageOfMe} className="img-fluid align-items-center" alt="Image of me" id="round-img"/>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          </div>
      </div>
      <div className="col d-flex flex-column justify-content-center align-self-center" id="main-background">
        <main className="row overflow-auto">
          {renderPage()}
        </main>
      </div>
      <footer className="pt-3 mt-auto" id="footer-background">
          <a href="https://github.com/teastarling">
            <FontAwesomeIcon icon={faGithub} className="fa-2x icon-color m-2"/></a>
          <a href="https://www.linkedin.com/in/tyler-starling-6790bb66/">
            <FontAwesomeIcon icon={faLinkedinIn} className="fa-2x icon-color m-2"/></a>
          <a href="mailto: tyler.a.starling@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="fa-2x icon-color m-2"/></a>
      </footer>
    </div>
  );
}