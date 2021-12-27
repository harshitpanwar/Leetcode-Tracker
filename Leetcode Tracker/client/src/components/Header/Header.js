import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='Header'>

         
                <div className='items'>
                <h3>Leetcode Tracker</h3>

                    <p>Home</p>
                    <p>Contribute</p>
                    <p>About</p>

                </div>


            <div className='search'>
                <form action="">
                    <input  className='searchtext' type="search" placeholder="Search Users..." required/>
                </form>   
            </div>
                
        </div>
    )
}

export default Header
