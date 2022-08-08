import React , {useState} from 'react';
import { TextField, Box, Button } from '@mui/material';



export default function AddVisitForm(){


	const [visit, setVisit] = useState({
		
        user_id: '',
        place_id: '',
        contact_id: '',
        visit_comment: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()
		const db = 'http://localhost:3000/visits'

		await fetch(db, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(visit)
		})
		
		
	}

    return(
        <>  
			<h1>Add New Visit</h1>
			<Box sx={{'& .MuiTextField-root': { m: 1, width: 300 }}}>

				<form method="POST" action= "/visits" onSubmit={handleSubmit}>

					<TextField onChange= {e => setVisit({ ...visit, user_id: e.target.value })} id= "outlined-basic" fullWidth label="User Id"  variant = "outlined" />

					<TextField onChange= {e => setVisit({ ...visit, place_id: e.target.value })} id= "outlined-basic" fullWidth label="Place ID"  variant = "outlined"/>

					<TextField onChange= {e => setVisit({ ...visit, contact_id: e.target.value })} id= "outlined-basic" fullWidth label="Contact ID"  variant = "outlined"/>
				

					<TextField onChange= {e => setVisit({ ...visit, visit_comment: e.target.value })} id= "outlined-basic" fullWidth label="Comments" multiline rows={6} variant = "outlined"/>
					<br />
					<Button onSubmit={handleSubmit} variant="outlined" type='submit'> Add New Visit</Button>
					
				</form>

				</Box>

        
        
        </>
    )
}