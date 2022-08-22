import React , {useState} from 'react';
import { TextField, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';


export default function AddVisitForm(){

	const navigate = useNavigate();
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
		navigate(`/visits`);
		
		
	}

    return(
        <>  
			<h1>Add New Visit</h1>
			<Box sx = {{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent:'center', maxWidth: 300, m:10 }}>

				<form method="POST" action= "/visits" onSubmit={handleSubmit}>

					<TextField onChange= {e => setVisit({ ...visit, user_id: e.target.value })} id= "outlined-basic" fullWidth label="User Id"  variant = "outlined" />

					<TextField onChange= {e => setVisit({ ...visit, place_id: e.target.value })} id= "outlined-basic" fullWidth label="Place ID"  variant = "outlined"/>

					<TextField onChange= {e => setVisit({ ...visit, contact_id: e.target.value })} id= "outlined-basic" fullWidth label="Contact ID"  variant = "outlined"/>
				

					<TextField onChange= {e => setVisit({ ...visit, visit_comment: e.target.value })} id= "outlined-basic" fullWidth label="Comments" multiline rows={6} variant = "outlined"/>
					<br />
					<Box sx ={{display: 'flex', flexWrap:'wrap', justifyContent:'space-evenly', maxWidth: 450}}>
						<Grid>
								<Button variant="contained" color='primary' type='submit'> Add Visit</Button>
						</Grid>
						<Grid>
								<Button variant="contained" href="/visits"> Cancel</Button>
						</Grid>

					</Box>
					
				</form>

				</Box>

        
        
        </>
    )
}