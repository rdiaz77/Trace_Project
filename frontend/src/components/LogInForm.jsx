import React, {useState} from 'react';
import Box from '@mui/material/Box'
import Button from "@mui/material/Button"
import { TextField, Container} from '@mui/material';




export default function LogInForm(){
    const db = 'http://localhost:3000/credentials'

    const [credential, SetCredential] = useState('')

    const handledLogin = e => SetCredential(e.target.value)

    async function handledSubmit (e){
        e.preventDefault()
        await fetch(db, {
            method: 'POST',
            headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credential)     

        })

    }

    return(

        <div>
            <Container> 
                <Box sx = {{width: 390, height: 200, border:'primary dark'}} >
                    <form method='POST' action= '/login'>
                        <TextField onChange={handledLogin} id= "outlined-basic" fullWidth label="Email address" margin="none" variant = "outlined">
                        </TextField>
                        <br />
                        <TextField onChange={handledLogin} id= "outlined-basic" fullWidth label="Password" margin="dense" variant = "outlined">
                        </TextField>
                        <br />
                        <Button onSubmit={handledSubmit} type='submit' variant='contained'>Log In</Button>

                    </form>
                </Box>
            </Container>
            
        </div>

    )
    }
