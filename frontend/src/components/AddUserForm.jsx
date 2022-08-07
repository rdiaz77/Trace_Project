
import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box'
import { Button } from '@mui/material';





export default function AddUserForm(){
	
	const [user, setNewUser] = useState({
		user_firstName: '',
		user_lastName: '',
		user_email: '',
		credential_id: ''
	})

	const handleDataChange = e =>{
		setNewUser(e.target.value)
	

	};

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
			<h1>Add New User</h1>
			<Box>

			<form method="POST" action= "/users" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="first name">First Name</label>
					<input id="user_firstName" name="name" onChange={e => setNewUser({ ...user, user_firstName: e.target.value })} required />
				</div>
				<div>
					<label htmlFor="last Name">Last Name</label>
					<input id="user_lastName" name="lastName" onChange={e => setNewUser({ ...user, user_lastName: e.target.value })} />
				</div>
				<div>
					<label htmlFor="city">Email</label>
					<input type="email" id="user_email" name="email" onChange={e => setNewUser({ ...user, user_email: e.target.value })} />
				</div>
				
			   
				<div>
					<label htmlFor="credential">Credential</label>
					<input id="credential_id" name="credential" onChange={e => setNewUser({ ...user, credential_id: e.target.value })} />
				</div>
				<div>
					<Button variant="outlined" type='submit'> Add New User</Button>
				
				</div>

			</form>
			</Box>
		</main>




	)
}

