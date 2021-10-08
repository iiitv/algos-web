import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Algorithm() {
    const [data,setData] = useState([]);
    const [algoList,setAlgoList] = useState([]);
    const [pathForAPI,setpathForAPI] = useState("");
    useEffect( ()=>{
        axios
            .get('https://api.github.com/repos/iiitv/algos/contents/')
            .then( (res) => {
                console.log(res.data);
                setData(res.data);
                
            })
            .catch( (err) => {
                console.error(err)
            })

    },[])

    const humanize = (str) => {
        var i, frags = str.split('_');
        for (i=0; i<frags.length; i++){
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
    }

    useEffect(() => {
        for(let i =0;i<data.length;i++){
            if(data[i].name.includes(".") || data[i].name.includes("LICENSE") ){
            }
            else{
                setAlgoList( old => [...old, data[i].name]);
            }
        }
    }, [data])

    // const handleAlgorithmClick = (FolderName) => {
    //     console.log("aaya ");
    //     console.log(FolderName);
    // }
    useEffect( ()=>{
        axios
            .get('https://api.github.com/repos/iiitv/algos/contents/'+pathForAPI)
            .then( (res)=>{
                console.log(res.data);
                
            })
    },[pathForAPI])
    return (
        <div>
            <div className = "algoListContainer">
                {algoList.map( (value,index) => (
                    <div className = "Algorithm" onClick={()=>{
                        setpathForAPI(value);
                    }}>
                     {value.includes("_") ? humanize(value) : value.charAt(0).toUpperCase()+value.slice(1)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Algorithm

