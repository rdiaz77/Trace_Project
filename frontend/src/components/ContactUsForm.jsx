import React , {useState} from 'react';
import { TextField, Box, Button } from '@mui/material';



export default function ContactUsForm(){


	const [contactMe, setContactMe] = useState({
		
        
	})

	async function handleSubmit(e) {
		e.preventDefault()
		const db = ''

		await fetch(db, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(contactMe)
		})
		
		
	}

    return(
        <>  
			<h1>Contact Us</h1>
            <h3>please fill out the form</h3>
			<Box sx={{'& .MuiTextField-root': { m: 1, width: 300 }}}>

				<form method="POST" action= "/contacts" onSubmit={handleSubmit}>

					<TextField  id= "outlined-basic" fullWidth label="First Name"  variant = "outlined" />

					<TextField id= "outlined-basic" fullWidth label="Last Name"  variant = "outlined"/>

					<TextField id= "outlined-basic" fullWidth label="Email"  variant = "outlined"/>
				
					<TextField id= "outlined-basic" fullWidth label="Place" variant = "outlined"/>

					<TextField id= "outlined-basic" fullWidth label="Reason for contacting us" multiline rows={7} variant = "outlined"/>
					<br />
					<Button onSubmit={handleSubmit} variant="outlined" type='submit'> Send</Button>
					
				</form>

				</Box>

        
        
        </>
    )
}