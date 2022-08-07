import React, {useEffect, useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import SearchBar from '../components/SearchBar';

export default function User(){
    
let users = fetch('http://localhost:3000/users/')
    .then(response => response.json())
    .then(user => console.log(user[0]))
    .catch(err =>console.log(err))


// const userMap = users.map(user=> user)
// console.log(userMap)


async function handledDelete(e) {
    e.preventDefault()
    const db = 'http://localhost:3000/users:id'

    await fetch(db, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
    })

    
}



    return(
        <> 

           
        
            <div>
                <h1>User page</h1>
                <SearchBar />

            </div>
             <div>
                {/* <ul>
                    {users.map(user => {
                        return <ul>
                                 <li>{JSON.stringify(user)}</li>
                            
                            </ul>

                    })}
                </ul> */}
            </div>
            <Button> Show users</Button>
            <br />
            <Button variant='contained'>
                <Link to='new'>New User</Link>
            </Button>
            <br />
            <Button  variant = 'contained' color='warning' onClick={handledDelete}> Delete User</Button>

            <Outlet /> 
            


        </>
    )
}



