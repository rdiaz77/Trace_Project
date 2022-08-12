import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Typography, Box, TextField, Button } from "@mui/material"







export default function EditUserForm() {

	const history = useNavigate()

    const { user_id } = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/users/${user_id}`);
			const resData = await response.json();
			setUser(resData);
            console.log(resData)
		}
		fetchData()
	}, [ user_id ])
	

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/users/${user_id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		history.push(`/users/${user.user_id}`)
	}







	return (
		<>

            <Typography variant='h3'> Edit user</Typography>
			<Box sx = {{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 450}}>

				<Box sx={{'& .MuiTextField-root': { m: 1, width: 300 }}}>

					<form method="POST" action= {`http://localhost:3000/users/${user_id}?_method=PUT`} onSubmit={handleSubmit}>

						<TextField onChange= {e => setUser({ ...user, user_firstName: e.target.value })} id= "outlined-basic" fullWidth label="First Name"  variant = "outlined" />

						<TextField onChange= {e => setUser({ ...user, user_lastName: e.target.value })} id= "outlined-basic" fullWidth label="Last Name"  variant = "outlined"/>

						<TextField onChange= {e => setUser({ ...user, user_email: e.target.value })} id= "outlined-basic" fullWidth label="Email"  variant = "outlined"/>
					
						<TextField onChange= {e => setUser({ ...user, credential_id: e.target.value })} id= "outlined-basic" fullWidth label="Credential" variant = "outlined"/>
						<br />
						<Button variant="outlined" type='submit'> Save</Button>
						
					</form>

				</Box>
			</Box>
        </>
	
			
		
	)
}

