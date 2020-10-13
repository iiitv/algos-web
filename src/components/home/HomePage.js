import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.github.com/repos/iiitv/algos/contents', {
      method: 'GET',
      credentials: 'same-origin',
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
      }),
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  let val = null;
  if (data) {
    val = data.filter((item) => {
      return item.type === 'dir' && item.name !== '.bin';
    });
  }

  let list = null;

  if (val) {
    list = val.map((item) => {
      return (
        <a key={item.sha} href={item.html_url}>
          <li key={item.sha}>{item.name}</li>
        </a>
      );
    });
  }

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
      <>
        <ul>{list}</ul>
      </>
    </div>
  );
};

export default HomePage;
