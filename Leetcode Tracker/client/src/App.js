import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import AddUser from './components/AddUser/AddUser';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (

    <BrowserRouter>

   
      <Header/>
       
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} exact/>
        <Route path='/addUser' element={<AddUser/>} exact/>
      

      </Routes>




    </BrowserRouter>

  )
}

export default App;


