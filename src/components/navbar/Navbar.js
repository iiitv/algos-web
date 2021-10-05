import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="navbar-item">
          <p>
            <span>
              <i class="ri-subtract-line"></i>
            </span>
            TREE
          </p>
        </li>
        <li className="navbar-item">
          <p>
            <span>
              <i class="ri-subtract-line"></i>
            </span>
            GRAPH
          </p>
        </li>
        <li className="navbar-item">
          <p>
            <span>
              <i class="ri-subtract-line"></i>
            </span>
            SORTING
          </p>
        </li>
        <li className="navbar-item">
          <p>
            <span>
              <i class="ri-subtract-line"></i>
            </span>
            LINKED LISTS
          </p>
        </li>
        <li className="navbar-item">
          <p>
            <span>
              <i class="ri-subtract-line"></i>
            </span>
            ALGORITHM
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
