import React, {useEffect, useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import SearchBar from '../components/SearchBar';
import {useHistory} from 'react-router-dom'


export default function User(){

    const [users, setUsers] = useState([])
    

    useEffect(() => {
        const url = "http://localhost:3000/users"
        async function getAllUsers() {
           const res = await fetch(url)
           const dbUsers = await res.json()
           setUsers(dbUsers)
        }
		
		getAllUsers()
	}, [])
    
    let allUsers = users.map((users) => {
		return (
			<div  key={users.user_id}>
				<h2>
					{/* <a href="#" onClick={() => history.push(`/users/${users.users_id}`)} > */}
                    <a href="#">
						{users.user_firstName}
					</a>
				</h2>
				<p>
					{users.user_lastName}
				</p>
				
			</div>
		)
	})


async function handledDelete(e) {}
//     e.preventDefault()
//     const db = 'http://localhost:3000/users:id'

//     await fetch(db, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(users)
//     })

    
// }



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



