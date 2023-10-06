import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import { decode } from 'js-base64';
import SyntaxHighlighter from 'react-syntax-highlighter';
import atomOne from './CodeBlock';

const Code = () => {
  const { name, file } = useParams();
  const [data, setData] = useState("");
  let lang = file.split('.')[1]

  if (lang === 'js') {
    lang = 'javascript'
  };

  // Get all files under the selected algo and store it into the data variable
  useEffect(() => {
    const getDataFromGit = async () => {
      try {
        const resp = await axios.get(`https://api.github.com/repos/iiitv/algos/contents/${name}/${file}`);
        let text = decode(resp.data.content);
        setData(text);
      } catch (e) {
        console.log(e.response, 'error');
      }
    };
    getDataFromGit();
  }, [name, file]);

  return (
    <div>
      <button onClick={(e) => {
        navigator.clipboard.writeText(data)
      }}>Copy Code</button>

      <SyntaxHighlighter language={lang} style={atomOne}>
        {data}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
