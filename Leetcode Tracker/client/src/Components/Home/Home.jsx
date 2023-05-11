import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Actions/Post';

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

  const dispatch = useDispatch();

  useEffect(() => {
      
    console.log('useEffect called');
      dispatch(getPosts(page, branch, year, section,searchQuery));
  
  }, [dispatch, page, branch, year, section, searchQuery]);
  
  const {loading, posts, error} = useSelector(state => state.getPosts);

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


  return (
    <div className='App'>

      <h1 className={styles.mainHeading}>Welcome to <span className={styles.innerText}>Leetcode Tracker</span> </h1>
      {/* Search */}
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
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
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

      <h1 className={styles.perfText}>Performance of Students</h1>

      <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.tableHeaderWrapper}>
              <tr>
            <th scope="col" className="px-6 py-3">
                    Student Name
            </th>
            <th scope="col" className="px-6 py-3">
                    Branch
            </th>
            <th scope="col" className="px-6 py-3">
                    Year
            </th>
            <th scope="col" className="px-6 py-3">
                    Section
            </th>
            <th scope="col" className="px-6 py-3">
                    Easy
            </th>
            <th scope="col" className="px-6 py-3">
                    Medium
            </th>
            <th scope="col" className="px-6 py-3">
                    Hard
            </th>
            <th scope="col" className="px-6 py-3">
                    Score
            </th>
            </tr>
            </thead>
            <tbody>
              {posts && posts.map((item) => (
                <tr className={styles.rowWrapper}>
                  <th className={styles.studentName}>
                      {item.name}
                  </th>
                  <td className={styles.tableValues}>
                    {item.branch}
                  </td>
                  <td className={styles.tableValues}>
                    {item.year}
                  </td>
                  <td className={styles.tableValues}>
                    {item.section}
                  </td>
                  <td className={styles.tableValues}>
                    {item.easy}
                  </td>
                  <td className={styles.tableValues}>
                    {item.medium}
                  </td>
                  <td className={styles.tableValues}>
                    {item.hard}
                  </td>
                  <td className={styles.score}>
                    {item.score}
                  </td>
              </tr>
              ) )}
              
            </tbody>
          </table>
      </div>

    </div>
  )
}

export default Home