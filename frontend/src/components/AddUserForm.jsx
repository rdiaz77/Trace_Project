import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box'
import { Button, TextField, Typography } from '@mui/material';





export default function AddUserForm(){
	
	const [user, setNewUser] = useState({
		user_firstName: '',
		user_lastName: '',
		user_email: '',
		credential_id: ''
	})

	// const handleDataChange = e =>{
	// 	setNewUser(e.target.value)
	

	// };

	async function handleSubmit(e) {
		e.preventDefault()
		const db = 'http://localhost:3000/users'

		await fetch(db, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		
	}

	
	return(
		<main>
			<Typography variant='h3'> Add new user</Typography>
			<Box sx = {{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 450}}>

				<Box sx={{'& .MuiTextField-root': { m: 1, width: 300 }}}>

					<form method="POST" action= "/users" onSubmit={handleSubmit}>

						<TextField defaultValue={''} onChange= {e => setNewUser({ ...user, user_firstName: e.target.value })} id= "outlined-basic" fullWidth label="First Name"  variant = "outlined" />

						<TextField onChange= {e => setNewUser({ ...user, user_lastName: e.target.value })} id= "outlined-basic" fullWidth label="Last Name"  variant = "outlined"/>

						<TextField onChange= {e => setNewUser({ ...user, user_email: e.target.value })} id= "outlined-basic" fullWidth label="Email"  variant = "outlined"/>
					
						<TextField onChange= {e => setNewUser({ ...user, credential_id: e.target.value })} id= "outlined-basic" fullWidth label="Credential" variant = "outlined"/>
						<br />
						<Button variant="outlined" type='submit'> Add User</Button>
						
					</form>

				</Box>
			</Box>
				
				


			
		</main>




	)
}

