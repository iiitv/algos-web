import React, { Component } from 'react';

import programmer from '../../static/img/programmer.png'
import './HomeComponent.css'

export default class Header extends Component {

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h2 className='header-title'>IIITV Open Source</h2>
          <h3 className='header-subtitle'>Welcomes You</h3>
        </div>
        <img alt="programmer" src={programmer} className='header-image' />
      </div>
    )
  }
}
