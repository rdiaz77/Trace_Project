import React from "react"
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { Typography, Box, TextField, Button } from "@mui/material"







export default function EditUserForm() {

	const navigate = useNavigate()

    const { id } = useParams()
    const [user, setUser] = useState({
        user_firstName:'',
        user_lastName: '',
        user_email:'',
        credential_id: ''
    })

    useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/users/${id}`);
			const resData = await response.json();
			setUser(resData);
		}
		fetchData()
	}, [ id ])
	

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/users/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		navigate(`/users/${id}`);

	}








	return (
		<>

            <Typography variant='h3'> Edit user</Typography>
			<Box sx = {{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 450}}>

				<Box sx={{'& .MuiTextField-root': { m: 1, width: 300 }}}>

					{/* <form method="POST" action= {`http://localhost:3000/users/${id}?_method=PUT`} onSubmit={handleSubmit}> */}
                    <form onSubmit={handleSubmit}>

						<TextField id= "outlined-basic" onChange= {e => setUser({ ...user, user_firstName: e.target.value })} fullWidth label="First Name" value={user.user_firstName} InputLabelProps={{ shrink: true }} variant = "outlined" />

						<TextField id= "outlined-basic" onChange= {e => setUser({ ...user, user_lastName: e.target.value })} fullWidth label="Last Name"  value={user.user_lastName} InputLabelProps={{ shrink: true }} variant = "outlined" />

						<TextField id= "outlined-basic" onChange= {e => setUser({ ...user, user_email: e.target.value })} fullWidth label="Email" value={user.user_email} InputLabelProps={{ shrink: true }} variant = "outlined" />
					
						<TextField id= "outlined-basic" onChange= {e => setUser({ ...user, credential_id: e.target.value })} fullWidth label="Credential" value={user.credential_id} InputLabelProps={{ shrink: true }} variant = "outlined" />
						<br />
						<Button variant="outlined" type='submit'> Save</Button>
						
					</form>

				</Box>
			</Box>
        </>
	
			
		
	)
}

