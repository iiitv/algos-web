import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
         <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/home">Algos</Link></li>
                </ul>
            </div>
        </nav>
      </div>
    );
  }
}

export default Header;
