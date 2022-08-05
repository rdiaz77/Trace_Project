import React from 'react';
import { Link, Outlet } from 'react-router-dom';


export default function User(){

    return(
        <> 
            <div>
            <h1>User page</h1>
            </div>
            <div>
                <ul>
                    {['Andy', 'John', 'Paul', 'Tom'].map((user, id)=>{
                        return <li key={id}>{user}</li>
                    })}
                </ul>
            </div>
            <button type="">
                <Link to='new'>New User</Link>
            </button>
            <Outlet />
            


        </>
    )
}



