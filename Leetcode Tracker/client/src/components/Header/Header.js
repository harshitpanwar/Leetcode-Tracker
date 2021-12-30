import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='Header'>

         
            <div className='items'>
                <h3>Leetcode Tracker</h3>

                <div className='pi'>
                    <p>
                        <Link className='pi' to='/'>
                            Home
                        </Link>
                    </p>
                    
                </div>
                <div className='pi'>
                <p>
                    {/* <img height={'20px'} src='https://htxt.co.za/wp-content/uploads/2018/11/github-logo.jpg'></img> */}
                        <a className='pi' href='https://www.github.com/harshitpanwar/Leetcode-Tracker/' >
                            Contribute
                        </a>    
                </p>
                </div>
                <div className='pi'>
                    <p>
                        <Link className='pi' to='/about'>
                            About
                        </Link>
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
