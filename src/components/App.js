import React from 'react';
// import { PropTypes } from "prop-types";

import Header from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Header />
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;
