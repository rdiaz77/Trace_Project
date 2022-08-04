import React from 'react';



function Navbar(){

    return <nav className='nav'>
        <a href='/' className='site-title'>SVTrace</a>

            <ul>
                <li>
                    <a href="/dashboard">Dashboard</a>
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
                    <a href='/places'>Users</a>
                </li>
                <li>
                    <a href='/credentials'>Credentials</a>
                </li>
              

                
            </ul>

        </nav>
    
}


export default Navbar