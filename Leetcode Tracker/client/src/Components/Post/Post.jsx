import React from 'react'
import { useState } from 'react';


const Post = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');
    const [section, setSection] = useState('');
    const [leetcode, setLeetcode] = useState('');
    const [gfg, setGfg] = useState('');

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

        const user = {
            name,
            email,
            year,
            branch,
            section,
            leetcode,
            gfg
        }

        console.log(user);

    }


  return (
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 class="font-bold text-center text-2xl mb-5">Add User</h1>  
      <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
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

            <label class="font-semibold text-sm text-gray-600 pb-1 block">Year</label>
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

          <label class="font-semibold text-sm text-gray-600 pb-1 block">Year</label>
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

          
          
          <button type="button" onClick={handleSubmit} class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block" >
              <span class="inline-block mr-2">Submit</span>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </button>
        </div>
        <p id='error'></p>

      </div>
    </div>
  </div>  

  )
}

export default Post