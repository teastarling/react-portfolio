import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-center" id="menu">
      <li class="nav-item alg">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className="nav-link px-sm-0 px-2">
          <span className="ms-1 d-none d-sm-inline text-decoration-none content-text nav-font">About Me</span>
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className="nav-link px-sm-0 px-2">
          <span className="ms-1 d-none d-sm-inline text-decoration-none content-text nav-font">Projects</span>
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className="nav-link px-sm-0 px-2">
          <span className="ms-1 d-none d-sm-inline text-decoration-none content-text nav-font">Contact</span>
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;