import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Typography, Box, TextField, Button } from "@mui/material"







export default function EditUserForm() {

	const history = useNavigate()

    const { user_id } = useParams()
    const [user, setUser] = useState({

        user_firstName: '',
		user_lastName: '',
		user_email: '',
		credential_id: ''

    })

    // useEffect(() => {
    //     async function getAllUsers() {
    //         const res = await fetch(`http://localhost:3000/users/${user_id}`);
    //         const dbUsers = await res.json();
    //         setUser(dbUsers);
    //     }
        
    //     getAllUsers();
    // }, []);


    // const [editUser, setEditUser] = useState({

	// 	user_firstName: '',
	// 	user_lastName: '',
	// 	user_email: '',
	// 	credential_id: ''
	// })

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await fetch(`http://localhost:3000/users/${user_id}`)
	// 		const data = await response.json()
	// 		setUser(data)
	// 	}
	// 	fetchData()
	// }, [ user_id ])

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/users/${user.user_id}`, {
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

					<form method="POST" action= "/users" onSubmit={handleSubmit}>

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

