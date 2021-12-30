import React from 'react'
import User from './User/User'
import './UsersList.css'
import { useSelector } from 'react-redux';

const UsersList = () => {


    const posts = useSelector((state) => state.posts);

    console.log(posts);


    return (
        <div className='UsersList'>
            UsersLIs
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>

        </div>
    )
}

export default UsersList
