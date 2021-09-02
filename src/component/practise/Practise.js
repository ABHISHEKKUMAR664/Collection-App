import React, { useEffect, useState } from 'react'

const Practise = () => {
 const[data,setData]=useState([])
    const getData=async()=>{
       const response= await fetch("https://jsonplaceholder.typicode.com/albums")
        setData(await response.json())
    }
    useEffect(()=>{
        getData();
    },[data])
    return (
        <div>
            <p>contain the list</p>
            <p>{data.map((ele,index)=>{
                return <p key={ele.id}>{ele.id} {ele.title}</p>
            })}</p>
        </div>
    )
}

export default Practise;
