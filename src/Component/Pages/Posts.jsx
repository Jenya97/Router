import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
export default function Posts() {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(posts=>setPosts(posts))
    },[])
  
  return (
    <div style={{display:"flex",flexDirection:'column'}}>
        {posts.length===0 ? <h2>Loading...</h2> :
        posts.map(i=>(
            <Link key={i.id} to={`/posts/${i.id}`}>{i.title}</Link>
        ))}
    </div>
  )
}
