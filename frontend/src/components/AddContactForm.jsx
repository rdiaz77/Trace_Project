import React , {useState} from 'react';
import { TextField, Box, Button } from '@mui/material';



export default function AddContactForm(){


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
		
		
	}

    return(
        <>  
			<h1>Add New Contact</h1>
			<Box sx={{'& .MuiTextField-root': { m: 1, width: 300 }}}>

				<form method="POST" action= "/contacts" onSubmit={handleSubmit}>

					<TextField onChange= {e => setContact({ ...contact, contact_firstName: e.target.value })} id= "outlined-basic" fullWidth label="First Name"  variant = "outlined" />

					<TextField onChange= {e => setContact({ ...contact, contact_lastName: e.target.value })} id= "outlined-basic" fullWidth label="Last Name"  variant = "outlined"/>

					<TextField onChange= {e => setContact({ ...contact, contact_email: e.target.value })} id= "outlined-basic" fullWidth label="Email"  variant = "outlined"/>
				
					<TextField onChange= {e => setContact({ ...contact, contact_phone: e.target.value })} id= "outlined-basic" fullWidth label="Phone" variant = "outlined"/>

					<TextField onChange= {e => setContact({ ...contact, place_id: e.target.value })} id= "outlined-basic" fullWidth label="Place" variant = "outlined"/>
					<br />
					<Button onSubmit={handleSubmit} variant="outlined" type='submit'> Add New contact</Button>
					
				</form>

				</Box>

        
        
        </>
    )
}