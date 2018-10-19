import React from 'react';
import { PropTypes } from "prop-types";

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Algos on web</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
