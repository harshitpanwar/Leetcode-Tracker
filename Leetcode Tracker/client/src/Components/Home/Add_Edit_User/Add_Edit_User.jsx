import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../../Actions/Post';
import '../Home.css';

const Add_Edit_User = ({ handleAddUser, userEditProps}) => {

  console.log("userEditProps",userEditProps);
  const [name, setName] = useState(userEditProps?.name?userEditProps.name:'');
  const [email, setEmail] = useState(userEditProps?.email?userEditProps.email:'');
  const [year, setYear] = useState(userEditProps?.year?userEditProps.year:'');
  const [branch, setBranch] = useState(userEditProps?.branch?userEditProps.branch:'');
  const [section, setSection] = useState(userEditProps?.section?userEditProps.section:'');
  const [leetcode, setLeetcode] = useState(userEditProps?.username?.leetcode?userEditProps.username?.leetcode:'');
  const [gfg, setGfg] = useState(userEditProps?.username?.gfg?userEditProps.username?.gfg:'');

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.getPosts);

  const {loading, post} = selector;

  const handleSubmit = (event) => {

      if(name === '' || email === '' || year === '' || branch === '' || section === ''){
          document.getElementById('error').innerHTML = "Please fill all the fields";
          document.getElementById('error').style.color = 'red';
          //center this p tag
          document.getElementById('error').style.textAlign = 'center';

          return;
      }

      //atlest one of leetcode or gfg should be filled
      if(leetcode === '' && gfg === ''){
          document.getElementById('error').innerHTML = "Please fill atleast one of leetcode or gfg";
          document.getElementById('error').style.color = 'red';
          //center this p tag
          document.getElementById('error').style.textAlign = 'center';

          return;
      }
      document.getElementById('error').innerHTML = "";

      dispatch(addPost(name, email, year, branch, section, leetcode, gfg));


    }

    useEffect(()=>{

      //add modal-open class to body tag to disable scrolling
      document.body.classList.add('modal-open');

      if(post!==undefined && post!==null && post!==''){
        document.getElementById('error').innerHTML = post;
        document.getElementById('error').style.color = 'green';
        //center this p tag
        document.getElementById('error').style.textAlign = 'center';
        return;
      }

      if(loading){
        document.getElementById('submit').disabled = true;

        document.getElementById('error').innerHTML = "Loading...";
        document.getElementById('error').style.color = 'blue';
        //center this p tag
        document.getElementById('error').style.textAlign = 'center';
        return;
      }

      document.getElementById('error').innerHTML = "";
      document.getElementById('submit').disabled = true;

      return () => {
        
        document.body.classList.remove('modal-open');

      }; 
      
    }, [post, loading]);

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-75">
      <div className="w-1/2 bg-white p-4 rounded-lg">
    

      <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={handleAddUser}
          >
            Close
          </button>
        </div>

        <div class="p-10 xs:p-0">
          <h1 class="">Add User</h1>  
          <div class="">
            <div class="px-5 py-7">
              <label class="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
              <input type="text" value = {name} onChange={(event)=>{setName(event.target.value)}} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
              <input type="text" value = {email} onChange={(event)=>{setEmail(event.target.value)}} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              
              <label class="font-semibold text-sm text-gray-600 pb-1 block">Year</label>
                <select value={year} onChange={(event) => setYear(event.target.value)} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full">
                <option value="">Select Year</option>
                <option value="1">1st year</option>
                <option value="2">2nd year</option>
                <option value="3">3rd year</option>
                <option value="4">4th year</option>
                </select>

                <label class="font-semibold text-sm text-gray-600 pb-1 block">Branch</label>
                <select value={branch} onChange={(event) => setBranch(event.target.value)} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full">
                <option value="">Select Branch</option>
                <option value="ISE">ISE</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="ETE">ETE</option>
                <option value="EEE">EEE</option>
                <option value="ME">ME</option>
                <option value="CE">CE</option>
                <option value="AIML">AIML</option>
                </select>

              <label class="font-semibold text-sm text-gray-600 pb-1 block">Section</label>
                <select value={section} onChange={(event) => setSection(event.target.value)} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full">
                <option value="">Select Section</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                </select>

              <label class="font-semibold text-sm text-gray-600 pb-1 block">Leetcode Username</label>
              <input type="text" value = {leetcode} onChange={(event)=>{setLeetcode(event.target.value)}} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              <label class="font-semibold text-sm text-gray-600 pb-1 block">GFG Username</label>
              <input type="text" value = {gfg} onChange={(event)=>{setGfg(event.target.value)}} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />

              
              
              <button type="button" onClick={handleSubmit} id="submit" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block" >
                  <span class="inline-block mr-2">{loading?'Loading...':userEditProps.email?'Update':'Submit'}</span>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
              </button>
            </div>
            <p id='error'></p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Add_Edit_User;