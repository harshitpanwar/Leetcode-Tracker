import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Home from './Components/Home/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'

function App() {

  return (
    <>

      <div className='header'>
        <Header/>
      </div>

      <div className='body'>

        <BrowserRouter>

          <Routes>

            <Route path='/' element = {<Home/>} />

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
