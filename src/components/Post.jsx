import React from 'react'
import {useParams} from 'react-router-dom';
import {Navigate, useNavigate} from 'react-router-dom';
function Post() {
    const nav=useNavigate();
    const params=useParams();
    const status=200

    if(status===404){
        return <Navigate to="/notfound"/>
    }

    const handleButtonClick=()=>{
        console.log("hello");
        nav('/about')
    }
   
  return (
    <div>
        <h1>Post id: {params.id}</h1>
        <h1>Name: {params.name}</h1>
        <button onClick={handleButtonClick}>Click Me</button>
    </div>
  )
}

export default Post