import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='Header'>

         
            <div className='items'>
                <h3>Leetcode Tracker</h3>

                <div className='pi'>
                    <p>
                    Home
                    </p>
                    
                </div>
                <div className='pi'>
                <p>
                    <img height={'20px'} src='https://htxt.co.za/wp-content/uploads/2018/11/github-logo.jpg'></img>
                    Contribute
                </p>
                </div>
                <div className='pi'>
                    <p>
                    About
                    </p>
                    
                </div>

            </div>


            <div className='search'>
                <form action="">
                    <input  className='searchtext' type="search" placeholder="Search Users..." required/>
                </form>
                <button className='searchButton'>
                    Search    
                </button>   
            </div>
                
        </div>
    )
}

export default Header
