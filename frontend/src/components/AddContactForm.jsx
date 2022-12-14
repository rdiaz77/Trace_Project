import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box'
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';



export default function AddContactForm(){

	const navigate = useNavigate();
	const [contact, setContact] = useState({
		
        contact_firstName: '',
        contact_lastName: '',
        contact_email: '',
        contact_phone: '',
        place_id: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()
		const db = 'http://localhost:3000/contacts'

		await fetch(db, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(contact)
		})
		navigate(`/contacts`);

		
	}


    return(
        <>  
			
			<Box sx = {{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent:'center', maxWidth: 300, m:10 }}>
				<Typography variant='h3'> Add new contact</Typography>

			<Box sx={{'& .MuiTextField-root': { m: 1, width: 300 }}}>

				<form method="POST" action= "/contacts" onSubmit={handleSubmit}>

					<TextField onChange= {e => setContact({ ...contact, contact_firstName: e.target.value })} id= "outlined-basic" fullWidth label="First Name"  variant = "outlined" />

					<TextField onChange= {e => setContact({ ...contact, contact_lastName: e.target.value })} id= "outlined-basic" fullWidth label="Last Name"  variant = "outlined"/>

					<TextField onChange= {e => setContact({ ...contact, contact_email: e.target.value })} id= "outlined-basic" fullWidth label="Email"  variant = "outlined"/>
				
					<TextField onChange= {e => setContact({ ...contact, contact_phone: e.target.value })} id= "outlined-basic" fullWidth label="Phone" variant = "outlined"/>

					<TextField onChange= {e => setContact({ ...contact, place_id: e.target.value })} id= "outlined-basic" fullWidth label="Place" variant = "outlined"/>
					<br />
					<Box sx ={{display: 'flex', flexWrap:'wrap', justifyContent:'space-evenly', maxWidth: 450}}>
							<Grid>
								<Button variant="contained" color='primary' type='submit'> Add Contact</Button>
							</Grid>
							<Grid>
								<Button variant="contained" href="/contacts"> Cancel</Button>
							</Grid>

						</Box>
					
				</form>

				</Box>
			</Box>

        
        
        </>
    )
}