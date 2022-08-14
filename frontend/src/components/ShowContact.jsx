import React from 'react';
import { useState, useEffect } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useParams} from 'react-router-dom';






export default function ShowContact(){


    const { id } = useParams()
    console.log(id)

    const [contact, setContact] = useState({
        contact_firstName:'',
        contact_lastName: '',
        contact_email:'',
        contact_phone: ''
    })
    

	useEffect(() => {
		const getContact = async () => {
			const response = await fetch(`http://localhost:3000/contacts/${id}`)
			const json = await response.json()
			setContact(json)
		}
		getContact()
	}, [ id ])


    return(
        <main>

            <Typography variant='h3'> Particular Contact</Typography>
			<Box sx = {{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 450}}>

				<Box sx={{'& .MuiTextField-root': { m: 1, width: 300 }}}>

					<form>

						<TextField id= "outlined-basic" fullWidth label="First Name" value={contact.contact_firstName} variant = "outlined" />

						<TextField id= "outlined-basic" fullWidth label="Last Name" value={contact.contact_lastName}  variant = "outlined"/>

						<TextField id= "outlined-basic" fullWidth label="Email"  value={contact.contact_email} variant = "outlined"/>
					
						<TextField id= "outlined-basic" fullWidth label="Phone" value={contact.contact_phone} variant = "outlined"/>
						<br />
						<Button variant="outlined" type='submit' href='/contacts'> Back</Button>
						
					</form>

				</Box>
			</Box>
        </main>
    )
}