import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
         <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/home">Algos</Link></li>
                    <li style = {{ alignSelf: "center" }}>
                      <label>
                        <input className="uk-checkbox uk-margin-small-right" type="checkbox" onChange={this.props.toggleCanvas}/>Toggle Canvas
                      </label>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
    );
  }
}

export default Header;
