import React from 'react';
import Box from '@mui/material/Box'
import Button from "@mui/material/Button"
import { TextField, Container} from '@mui/material';




export default function LogInForm(){

    return(

        <div>
            <Container> 
                <Box sx = {{width: 390, height: 200, border:'primary dark'}} >
                    <form method='POST' action= '/login'>
                        <TextField id= "outlined-basic" fullWidth label="Email address" margin="none" variant = "outlined">
                        </TextField>
                        <br />
                        <TextField id= "outlined-basic" fullWidth label="Password" margin="dense" variant = "outlined">
                        </TextField>
                        <br />
                        <Button type='submit' variant='contained'>Log In</Button>

                    </form>
                </Box>
            </Container>
            
        </div>

    )
    }
