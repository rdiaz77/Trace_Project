import React from 'react';
import { useState, useEffect } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';






export default function ShowUser(){

    const [getUser, setGetUser] = useState({
        user_firstName:''
    })

    
useEffect (()=>{
 
    const getUser = async ()=>{
        const response = await fetch(`http://localhost:3000/users/1`);
        const json = response.json();
        return setGetUser(json);
        
    };

    getUser();

}, []);


    return(
        <main>

            <Typography variant='h3'> Particular user</Typography>
			<Box sx = {{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 450}}>

				<Box sx={{'& .MuiTextField-root': { m: 1, width: 300 }}}>

					<form>

						<TextField id= "outlined-basic" fullWidth label="First Name" defaultValue= {''} variant = "outlined" />

						<TextField id= "outlined-basic" fullWidth label="Last Name" defaultValue= "Rafael"  variant = "outlined"/>

						<TextField id= "outlined-basic" fullWidth label="Email"  variant = "outlined"/>
					
						<TextField id= "outlined-basic" fullWidth label="Credential" variant = "outlined"/>
						<br />
						<Button variant="outlined" type='submit'> Back</Button>
						
					</form>

				</Box>
			</Box>
        </main>
    )
}