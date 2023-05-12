import { useEffect, useState } from 'react'
import Header from './Components/Header/Header.jsx'
import Home from './Components/Home/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import Login from './Components/Auth/Login/Login.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './Actions/User.js'
import Post from './Components/Post/Post.jsx'

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const selector = useSelector((state) => state.user);
  const { user, loading, isAuthenticated } = selector;

  return (
    <>

      <div className='header'>
        <Header auth = {isAuthenticated}/>
      </div>

      <div className='body'>

        <BrowserRouter>

          <Routes>

            <Route path='/' element = { <Home/>} />
            <Route path='/login' element = {<Login/>} />
            <Route path='/addPost' element = {<Post/>} />

          </Routes>

        </BrowserRouter>

      </div>

      <div className='footer'>
        <Footer/>
      </div>

    </>
  )
}

export default App
