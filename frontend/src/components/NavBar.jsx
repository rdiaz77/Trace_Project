import React from 'react';
import {Link} from 'react-router-dom';
import { CurrentUser } from '../context/CurrentUser';



export default function NavBar(){
    const {UserLoggedOut} = React.useContext(CurrentUser)

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
                    <Link to='/login' onClick={UserLoggedOut}> Exit</Link>
                </li>
              
                
            </ul>

        </nav>
    
}


