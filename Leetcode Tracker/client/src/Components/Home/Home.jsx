import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Actions/Post';

const Home = () => {

  const [page, setPage] = useState(1);
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [section, setSection] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
      
      dispatch(getPosts(page, branch, year, section));
  
  }, [dispatch, page, branch, year, section]);
  
  const {loading, posts, error} = useSelector(state => state.getPosts);


  return (
    <div className='App'>

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