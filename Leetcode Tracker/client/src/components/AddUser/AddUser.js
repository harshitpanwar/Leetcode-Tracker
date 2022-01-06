import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
import './AddUser.css'

const AddUser = () => {

    const [postData, setPostData] = useState({
        name : '', username : '' 
    });

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {

        try{
            e.preventDefault();
            dispatch(createPost(postData));
        }
        catch(error){
            console.log(error)
        }

    }

    return (
        <div className='outer'>
        <form onSubmit={handleSubmit} autoComplete='off'>

        <label>Name</label>

            <input type="text" id="name" name="name" placeholder="Name.." value={postData.name} onChange={(e) => setPostData({...postData, name : e.target.value })}/>

            <br/>

            <label>Leetcode UserName</label>
            <input type="text" id="username" name="username" placeholder="Leetcode username.." placeholder="Name.." value={postData.username} onChange={(e) => setPostData({...postData, username : e.target.value })}/>

            <br/>

            {/* <label>Gender</label>
                <select id="gender" name="gender" placeholder="Name.." value={postData.gender} onChange={(e) => setPostData({...postData, gender : e.target.value })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="None">Rather Not Say</option>
                </select> */}

            <input type="submit" value="submit"/>

        </form>

    </div>
    )
}

export default AddUser;
