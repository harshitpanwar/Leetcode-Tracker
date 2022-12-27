import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
import './AddUser.css'


var temp = "";

const AddUser = () => {

    const [postData, setPostData] = useState({
        name : '', username : '' 
    });

    const dispatch = useDispatch();

    const setNameAndUsername = () =>{
        var name = document.getElementById("name");
        name.value = "";
        var username = document.getElementById("username");
        username.value = "";
        document.getElementById("success").innerHTML = "User Added Successfully";
    }

    const handleSubmit = async (e) => {

        try{
            e.preventDefault();
            dispatch(createPost(postData));
            setNameAndUsername();
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

            <input type="submit" value="submit"/>
            <p id="success"> </p>
            <br></br>


        </form>



    </div>
    )
}

export default AddUser;
