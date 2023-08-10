import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Actions/Post';
import { useNavigate } from 'react-router-dom';
import {User} from 'lucide-react';
import Add_Edit_User from './Add_Edit_User/Add_Edit_User';

const Home = () => {

  //styles 

  const styles={
    mainHeading:`text-center text-5xl font-extrabold`,
    innerText:`text-transparent bg-clip-text bg-gradient-to-r from-amber-400  to-neutral-950`,
    perfText:`text-2xl my-3 ml-2 font-sans font-semibold`,
    tableWrapper:`relative overflow-x-auto shadow-md sm:rounded-lg`,
    table:`w-full text-sm text-left text-gray-500`,
    tableHeaderWrapper:`text-2xl text-gray-700 uppercase bg-gray-50`,
    rowWrapper:`even:bg-gray-50 odd:bg-slate-100 border-b`,
    studentName:`capitalize font-extrabold font-serif text-xl  px-4 py-2`,
    tableValues:`uppercase font-semibold text-center py-3`,
    score:`uppercase font-extrabold`,
    evenBorder:`border-b bg-gray-50`,
    oddBorder:`"bg-white border-b `,
    SelectionWrapper:`grid grid-cols-2 mt-10`,
    search:'mx-5',
    dropDownButton:`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center type="button">Dropdown hover <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"`,

  } 


  const [page, setPage] = useState(1);
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [section, setSection] = useState('');
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddUser, setShowAddUser] = useState(false);
  const [userEditProps, setUserEditProps] = useState({});

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
      
    console.log('useEffect  fdsafsd called');
      dispatch(getPosts(page, branch, year, section,searchQuery));
  
  }, [dispatch, page, branch, year, section, searchQuery]);
  
  const {loading, posts, error} = useSelector(state => state.getPosts);
  const {loading:userLoading, isAuthenticated} = useSelector(state => state.user);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };
  
  const handleFilter = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    if (name === 'branch') {
      setBranch(value);
    } else if (name === 'section') {
      setSection(value);
    } else if (name === 'year') {
      setYear(value);
    } else if (name === 'search') {
      setQuery(value);
    }
  }

  const handleClick = (event) => {
    
    //if enter key is pressed or search button is clicked
    if (event.key === 'Enter'||event.type==='click') {
      setSearchQuery(query);
    }

  }

  const handleAddUser = () => {

    setShowAddUser(false);

  }


  return (
    <div className='App'>

      {/* popUp modal */}
      {showAddUser && <Add_Edit_User handleAddUser={handleAddUser} userEditProps={userEditProps}/>}

      <div className={styles.SelectionWrapper}>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input  name="search" value={query} class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search by Student Name" required onChange={handleFilter} onKeyDown={handleClick}/>
            <button class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 " onClick={handleClick}>Search</button>
        </div>
      <div className={styles.filter}>
                  
      <select name="branch" value={branch} onChange={handleFilter}  >
        <option value="">All Branches</option>
        <option value="ISE">ISE</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="AIML">AIML</option>
        <option value="ETE">ETE</option>
        <option value="EEE">EEE</option>
        <option value="MECH">MECH</option>
        <option value="CIVIL">CIVIL</option>
      </select>

      <select name="section" value={section} onChange={handleFilter}>
        <option value="">All Sections</option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>

      <select name="year" value={year} onChange={handleFilter}>
        <option value="">All Years</option>
        <option value="1">1st Year</option>
        <option value="2">2nd Year</option>
        <option value="3">3rd Year</option>
        <option value="4">4th Year</option>
      </select>
      </div>
  
      </div>

      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        {userLoading ? null: isAuthenticated?

        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Students</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all student. You can add new students, edit or delete existing
              ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              // onClick={(e)=> {e.preventDefault(); Navigate('/addPost')}}
              onClick={ (e)=> { e.preventDefault(); setUserEditProps({}); setShowAddUser(true);}}
            >
              Add new student
            </button>
          </div>
        </div>
        
        :null

        }
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Student</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Branch, Year & Section
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Leetcode
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        GFG
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Score
                      </th>

                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {posts && posts.map((person) => (
                      <tr>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <User/>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{person.name}</div>
                              <div className="text-sm text-gray-700">{person.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{person.branch}</div>
                          <div className="text-sm text-gray-700">{person.year}</div>
                          <div className="text-sm text-gray-700">{person.section}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          {
                          person.username.leetcode?                          
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>:
                          <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Not-Active
                          </span>
                          }
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                        {
                          person.username.gfg?                          
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>:
                          <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Not-Active
                          </span>
                          }
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {person.score}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <button href="#" className="text-gray-700"
                            onClick={(e) => {e.preventDefault(); console.log(person); setUserEditProps(person); setShowAddUser(true) }}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-6">
          <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">&larr; Previous</span>
            <span className="block lg:hidden">&larr;</span>
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            1
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            2
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            3
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            4
          </a>
          <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
          </a>
        </div>
      </section>

    </div>
  )
}

export default Home