import React from 'react';
import {Link} from 'react-router-dom';



function Navbar(){

    return <nav className='nav'>
        <Link to='/' className='site-title'>SVTrace</Link>

            <ul>
                
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to='/visits'>Visits</Link>
                </li>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
                <li>
                    <Link to='/map'>Map</Link>
                </li>
                <li>
                    <Link to='/contacts'>Contacts</Link>
                </li>
                <li>
                    <Link to='/support'>Contact Us</Link>
                </li>
                <li>
                    <Link to='/login'>Exit</Link>
                </li>
              
                
            </ul>

        </nav>
    
}


export default Navbar