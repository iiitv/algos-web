import React, { useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import './Algorithm.css';

const Algorithm = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);
  console.log(name);

  // Get all files under the selected algo and store it into the data variable
  useEffect(() => {
    const getDataFromGit = async () => {
      try {
        const resp = await axios.get(`https://api.github.com/repos/iiitv/algos/contents/${name}`);
        console.log(resp.data);
        setData(resp.data);
      } catch (e) {
        window.location.replace(`https://github.com/iiitv/algos/blob/master/${name}`);
        console.log(e.response, 'error');
      }
    };
    getDataFromGit();
  }, [name]);

  console.log(data)

  let finalRender = data.map((file) => {
    return (
      <Link key={file.sha} to={`${name}/${file.name}`}>
        <li key={file.sha}>{file.name}</li>
      </Link>
    );
  });
  return (
    <div className="list">
      <ul>{finalRender}</ul>
    </div>
  )
}


export default Algorithm
