/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.github.com/repos/iiitv/algos/contents', {
      method: 'GET',
      credentials: 'same-origin',
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
      }),
      mode: 'cors',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          data: data,
        });
      });
  }

  render() {
    const urlList = this.state.data.map(item => {
      if (item.type === 'dir' && item.name !== '.bin') {
        return (
          <a href={item.html_url}>
            <li key={item.sha}>{item.name}</li>
          </a>
        );
      } else {
        return null;
      }
    });
    return (
      <div className="HomePage">
        <div className="uk-grid">
          <div className="uk-width-1-5@s" style={{ background: '#0e0b0bb3', color: 'white' }}>
            <div className="uk-offcanvas-content">
              <button
                className="uk-button uk-button-default uk-margin-small-right"
                type="button"
                data-uk-toggle="target: #offcanvas-push"
              >
                Push
              </button>

              <div id="offcanvas-push" data-uk-offcanvas="mode: push; overlay: true">
                <div className="uk-offcanvas-bar">
                  <button className="uk-offcanvas-close" type="button" data-uk-close="true" />

                  <h3>Algorithms</h3>

                  <p>Comming soon.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-width-4-5@s">
            <div style={{ background: 'blue' }} className="uk-padding-small">
              <p>yomo</p>
            </div>
          </div>
        </div>
        <div>
          <ul>{urlList}</ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
