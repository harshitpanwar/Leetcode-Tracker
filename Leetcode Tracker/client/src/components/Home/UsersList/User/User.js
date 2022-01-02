import React from 'react';
import './User.css';
import { useSelector } from 'react-redux';

const User = ( {post} ) => {


    return (
        <div className='top'>
        <div className='user'>

            <div className='header'>
                <img src='https://cdn-icons-png.flaticon.com/512/2922/2922510.png' height={'40px'}/>
            
                <p>{post.username}</p>
            </div>


            <div className='questions'>
                <div className='que easy'>
                    <p>Easy</p>
                    <p>{post.Easy}</p>

                </div>
                <div className='que medium'>
                    <p>Medium</p>
                    <p>{post.Medium}</p>
                </div>
                <div className='que hard'>
                    <p>Hard</p>
                    <p>{post.Hard}</p>
                </div>
            </div>

            <div className='otherInfo'>
                <div>
                    <p>Acceptance</p>
                    <p>66.5%</p>
                </div>
                <div>
                    <p>Total Submissions</p>
                    <p>250</p>

                </div>
            </div>

        </div>



    </div>
    )
}

export default User
