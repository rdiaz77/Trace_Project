import React from 'react';



function Navbar(){

    return <nav className='nav'>
        <a href='/' className='site-title'>SVTrace</a>

            <ul>
                <li>
                    <a href="/">Dashboard</a>
                </li>
                <li>
                    <a href='/visits'>Visits</a>
                </li>
                <li>
                    <a href='/users'>Users</a>
                </li>
                <li>
                    <a href='/map'>Map</a>
                </li>
                <li>
                    <a href='/contacts'>Contacts</a>
                </li>
                <li>
                    <a href='/support'>Contact Us</a>
                </li>
              
              

                
            </ul>

        </nav>
    
}


export default Navbar