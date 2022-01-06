import React from 'react';
import './User.css';
import { useSelector } from 'react-redux';

const User = ( {post} ) => {


    const UserProfile = () => {
        if(post.gender=='Male'){
            return(<img src='https://cdn-icons-png.flaticon.com/512/1306/1306286.png' height={'40px'}/>)
        }

        else{
            return(<img src='https://cdn-icons-png.flaticon.com/512/1306/1306286.png' height={'40px'}/>)
        }
    }


        var url = 'https://leetcode.com/'+post.username+'/';
        var score = parseInt(post.easy) + parseInt(post.medium) * 2 + parseInt(post.hard) * 4;



    return (
        <div className='top'>
        <div className='user'>

            <div className='header'>

                <UserProfile/>

                <a href={url}>{post.username}</a>
            </div>


            <div className='questions'>
                <div className='que easy'>
                    <p>Easy</p>
                    <p>{post.easy}</p>

                </div>
                <div className='que medium'>
                    <p>Medium</p>
                    <p>{post.medium}</p>
                </div>
                <div className='que hard'>
                    <p>Hard</p>
                    <p>{post.hard}</p>
                </div>
            </div>

            <div className='otherInfo'>
                <div>
                    <p>Acceptance</p>
                    <p>{post.acceptance}</p>
                </div>
                <div>
                    <p>Total Submissions</p>
                    <p>{post.submissions}</p>

                </div>
                <div>
                    <p>Total Score</p>
                    <p>{score}</p>
                </div>
            </div>

        </div>



    </div>
    )
}

export default User
