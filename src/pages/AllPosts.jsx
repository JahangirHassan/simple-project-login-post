import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../componets'
import service from "../appwrite/conf";
import {useDispatch} from "react-redux";
import {setPosts}  from "../store/postSlice"

 function AllPosts() {
    const dispatch =useDispatch();
    const [post, setPost] = useState([])

    useEffect(() => {
     service.getPosts([]).then((allPosts) => {
        if (allPosts) {
         dispatch(setPosts(allPosts.documents)) 
       setPost(allPosts.documents)   
        }
    } )
}, [])
    
     
    // .then((posts) => {
    //     if (posts) {
    //         setPosts(posts.documents)
    //     }
    // })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {post.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts