import React, {useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import { Box, Button, Typography} from '@mui/material';
import SearchBar from '../components/SearchBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function User(){

    const [users, setUsers] = useState([])
    const [bringUsers, setBringUsers] = useState(null)
    
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
				<Typography variant='h6'>
					{/* <a href="#" onClick={() => history.push(`/users/${users.users_id}`)} > */}
                    <a href="#">
						{users.user_firstName} {users.user_lastName}
					</a>
                    {users.user_email} 
				</Typography>
				
				
			</div>
		)
	})

    const handledOnClick = (e)=>{
        e.preventDefault();
        setBringUsers(allUsers)


    }

    return(
        <> 
           
            <h1>User page</h1>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <SearchBar />
                </Box>
                <Box>
                    <Button variant='contained'>
                        <Link to='new'>New User</Link>
                    </Button>
                </Box>
            </Box>
           
            <Box>
                <Button onClick={handledOnClick}> Show users</Button>
            </Box>
            <div>
                {bringUsers}
            </div>
            <br />
            <Button  variant = 'contained' color='warning'> Delete User</Button>
            


        </>
    )
}



