import React from 'react';
import { useState, useEffect } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useParams} from 'react-router-dom';






export default function ShowVisit(){


    const { id } = useParams()
    console.log(id)

    const [visit, setVisit] = useState({
        place_id:'',
        contact_id: '',
        user_id:''
        
    })
    

	useEffect(() => {
		const getVisit = async () => {
			const response = await fetch(`http://localhost:3000/visits/${id}`)
			const json = await response.json()
			setVisit(json)
		}
		getVisit()
	}, [ id ])


    return(
        <main>

            <Typography variant='h3'> Particular Visit</Typography>
			<Box sx = {{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 450}}>

				<Box sx={{'& .MuiTextField-root': { m: 1, width: 300 }}}>

					<form>

						<TextField id= "outlined-basic" fullWidth label="Client" value={visit.place_id} variant = "outlined" />

						<TextField id= "outlined-basic" fullWidth label="Contact" value={visit.contact_id}  variant = "outlined"/>

						<TextField id= "outlined-basic" fullWidth label="Sales Person"  value={visit.user_id} variant = "outlined"/>
					
						
						<br />
						<Button variant="outlined" type='submit' href='/visits'> Back</Button>
						
					</form>

				</Box>
			</Box>
        </main>
    )
}