import React from 'react'
import User from './User/User'
import './UsersList.css'
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core'

const UsersList = () => {


    const posts = useSelector((state) => state.posts);
    
    console.log(posts);


    return (
        !posts.length ? <CircularProgress /> : (
            <div >
                {posts.map((post) => (
                    <div key={post._id} item xs={12} sm={6}>
                        <User post = {post}/>
                    </div>
                ))}
            </div>
        )
    )
}

export default UsersList
