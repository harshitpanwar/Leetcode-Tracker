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
        
            {/* <div className='items'> */}
                {/* <h3>Leetcode Tracker</h3>

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
                        {/* <a className='pi' href='https://www.github.com/harshitpanwar/Leetcode-Tracker/' > */}
                            {/* Contribute
                        </a>    
                </p>
                </div>
                <div className='pi'>
                    <p>
                        <Link className='pi' to='/about'>
                            About
                        </Link>
                    </p>
                    
                </div> */}

            {/* </div> } */}


           

                
        </div>
    )
}

export default Header
