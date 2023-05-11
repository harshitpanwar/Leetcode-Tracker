import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Actions/Post';

const Home = () => {

  const [page, setPage] = useState(1);
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [section, setSection] = useState('');
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
      
    console.log('useEffect called');
      dispatch(getPosts(page, branch, year, section));
  
  }, [dispatch, page, branch, year, section]);
  
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
    }
  }



  return (
    <div className='App'>

      {/* Search */}
      <input type="text" value={query} onChange={handleSearch} placeholder="Search by name or email" />

      {/* Filters */}
      <select name="branch" value={branch} onChange={handleFilter}  >
        <option value="">All Branches</option>
        <option value="ISE">ISE</option>
        <option value="CSE">CSE</option>
        <option value="ETE">ETE</option>
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

      <h1>Post Data</h1>
      <ul>
        { posts && posts.map((item) => (
          <li key={item._id}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Branch: {item.branch}</p>
            <p>Section: {item.section}</p>
            <p>Year: {item.year}</p>
            <p>Score: {item.score}</p>
          </li>
        ))}
      </ul>

      

    </div>
  )
}

export default Home