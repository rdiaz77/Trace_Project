import React from 'react';
import { useState, useEffect } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useParams} from 'react-router-dom';






export default function ShowUser(){


    const { id } = useParams()
    console.log(id)

    const [user, setUser] = useState({
        user_firstName:'',
        user_lastName: '',
        user_email:'',
        credential_id: ''
    })
    

	useEffect(() => {
		const getUser = async () => {
			const response = await fetch(`http://localhost:3000/users/${id}`)
			const json = await response.json()
			setUser(json)
		}
		getUser()
	}, [ id ])


    return(
        <main>

            <Typography variant='h3'> Particular user</Typography>
			<Box sx = {{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 450}}>

				<Box sx={{'& .MuiTextField-root': { m: 1, width: 300 }}}>

					<form>

						<TextField id= "outlined-basic" fullWidth label="First Name" value={user.user_firstName} variant = "outlined" />

						<TextField id= "outlined-basic" fullWidth label="Last Name" value={user.user_lastName}  variant = "outlined"/>

						<TextField id= "outlined-basic" fullWidth label="Email"  value={user.user_email} variant = "outlined"/>
					
						<TextField id= "outlined-basic" fullWidth label="Credential" value={user.credential_id} variant = "outlined"/>
						<br />
						<Button variant="outlined" type='submit' href='/users'> Back</Button>
						
					</form>

				</Box>
			</Box>
        </main>
    )
}