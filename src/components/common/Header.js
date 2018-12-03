import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
         <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
            <div className="uk-navbar-left">
            <BrowserRouter>
                <ul className="uk-navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/home">Algos</Link></li>
                </ul>
            </BrowserRouter>
            </div>
        </nav>
      </div>
    );
  }
}

export default Header;
