import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../componets'
import service from "../appwrite/conf";
import { useNavigate,  useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost