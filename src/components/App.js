import React from 'react';
// import { PropTypes } from "prop-types";

import Header from "./common/Header";

class App extends React.Component {
  render () {
    function draw(e) {
      const canvas = document.querySelector("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const context = canvas.getContext("2d");
      context.fillStyle = "#b9090b";
      context.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
      context.fill();

      console.log(e.clientX);
    }
    return (
      <div onMouseMove={draw}>
        {this.props.children}
        <div className="uk-position-relative">
          <canvas id="canvas-hover" style={{ width: "100%", height: "100vh", position: "absolute"}}></canvas>
          <div className="uk-position-top">
            <Header/>
          </div>
        </div>
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;
