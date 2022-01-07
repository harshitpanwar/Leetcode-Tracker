import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='Header'>
            <header>
            <nav>
             <ul>
                 <li className='Brand'>Leetcode Tracker</li>
                 <li>
                     <Link to='/'>
                         Home
                     </Link>
                </li>
                <li >
                    <a href='https://github.com/harshitpanwar/Leetcode-Tracker'>Contribute</a>
                </li>
                <li>
                <Link  to='/about'>
                            About
                        </Link>
                </li>
                

             </ul>
             <div className='search'>
                <form action="">
                    <input  className='searchtext' type="search" placeholder="Search Users..." required/>
                </form>
                <button className='searchButton'>
                    Search    
                </button>   
            </div>
         </nav>
            </header>

                
        </div>
    )
}

export default Header
