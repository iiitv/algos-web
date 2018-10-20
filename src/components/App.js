import React from 'react';
// import { PropTypes } from "prop-types";

import Header from "./common/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: null,
      context: null,
      fillStyles: null,
      enableCanvas: true,
      cirlesQueue: null
    };
  }
  componentDidMount () {
    const cirlesQueue = [];
    const canvasMounted = document.querySelector("canvas");
    canvasMounted.width = window.innerWidth;
    canvasMounted.height = window.innerHeight;
    const contextMounted = canvasMounted.getContext("2d");
    contextMounted.fillStyle = "#f336";
    contextMounted.lineWidth = 10;
    const fillStyles = ["#35da604d", "#f336", "#39f6"]
    this.setState({
      canvas: canvasMounted,
      context: contextMounted,
      fillStyles: fillStyles,
      cirlesQueue: cirlesQueue
    });
  }

  draw = (e) => {
    if(this.state.enableCanvas) {
      const context = this.state.context;
      const canvas = this.state.canvas;
      context.beginPath();
      context.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
      if(e.clientX % 2) {
        context.fillStyle = this.state.fillStyles[1];
      } else {
        context.fillStyle = this.state.fillStyles[2];
      }
      context.fill();
      const cirlesQueue = this.state.cirlesQueue;
      cirlesQueue.push({
        "x" : e.clientX,
        "y": e.clientY,
      });
      this.setState({cirlesQueue: cirlesQueue});
      // let cir = cirlesQueue.shift();
      setTimeout(() => context.clearRect(0, 0, canvas.width, canvas.height), 5000);
    }
  }

  toggleCanvas = () => {
    if(this.state.enableCanvas) {
      this.setState({ enableCanvas: false });
    } else {
      this.setState({ enableCanvas: true });
    }
  }

  render () {
    return (
      <div onMouseMove={this.draw}>
        {this.props.children}
        <div className="uk-position-relative">
          <canvas id="canvas-hover" style={{ width: "100%", height: "100vh", position: "absolute"}}></canvas>
          <div className="uk-position-top">
            <Header toggleCanvas={this.toggleCanvas}/>
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
