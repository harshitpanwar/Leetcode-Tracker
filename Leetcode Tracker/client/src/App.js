import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import './App.css'
import Home from './components/Home/Home';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);

  return (
    <div>
        <Header/>
        <Home/>
    </div>
  )
}

export default App;


