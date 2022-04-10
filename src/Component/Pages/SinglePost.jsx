import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState} from 'react';
export default function SinglePost() {
    const [singlePost,setSinglePost]=useState(null)
    const {id} =useParams();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(single=>setSinglePost(single))
    },[id])
  return (
    <div>
        {singlePost && (
            <>
            <h1>{singlePost.title}</h1>
            <p>{singlePost.body}</p>
            </>
        )}
    </div>
  )
}
