import React, { Component } from 'react';
// import logo from '../../static/img/logo.png';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
          <div className="uk-grid">
            <div className="uk-width-1-5@s" style={{ background: "#0e0b0bb3", color: "white" }}>
              <div className="uk-offcanvas-content">
                <button className="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-push">Push</button>

                <div id="offcanvas-push" uk-offcanvas="mode: push, overlay: true">
                    <div className="uk-offcanvas-bar">

                        <button className="uk-offcanvas-close" type="button" uk-close></button>

                        <h3>Title</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div>
              </div>
            </div>
            <div className="uk-width-4-5@s">
              <div style={{ background: "blue" }} className="uk-padding-small">
                <p>yomo</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default HomePage;
