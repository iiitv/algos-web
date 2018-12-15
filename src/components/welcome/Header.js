import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { loading, loaded } from './../../actions/ghActions';
import programmer from '../../static/img/programmer.png';
import './HomeComponent.css';

class Header extends Component {
  componentDidMount() {
    this.props.loading();
    // this.props.loaded();
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          {this.props.gh.loading ? <span className="uk-text-danger" data-uk-spinner="ratio: 4.5" /> : null}
          <h2 className="header-title">IIITV Open Source</h2>
          <h3 className="header-subtitle">Welcomes You</h3>
        </div>
        <img alt="programmer" src={programmer} className="header-image" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gh: state.gh,
});

const mapDispatchToProps = dispatch => ({
  loading: () => dispatch(loading()),
  loaded: () => dispatch(loaded()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
