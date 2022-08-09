import React , {useState} from 'react';
import { TextField, Box, Button, Typography } from '@mui/material';


export default function ContactUsForm(){
    const reasons =[
        "Wrong information in place or contact",
        "A way to improve the app",
        "I cannot find certain information"
    ]

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

    return (
      <>
        <Typography variant="h3">Contact Us</Typography>

        <Typography variant="h5">All fields are required</Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ m: 1, width: 400, height: 600 }}>
            <form method="POST" action="/contacts" onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                fullWidth
                label="First Name"
                variant="outlined"
                margin="dense"
              />

              <TextField
                id="outlined-basic"
                fullWidth
                label="Last Name"
                variant="outlined"
              />

              <TextField
                id="outlined-basic"
                fullWidth
                label="Email"
                variant="outlined"
                margin="dense"
              />

              <TextField
                id="outlined-basic"
                fullWidth
                label="Reason for Contacting Us"
                variant="outlined"
              />

              <TextField
                id="outlined-basic"
                fullWidth
                label="Message"
                multiline
                rows={10}
                variant="outlined"
                margin="dense"
              />
              <br />
              <Button onSubmit={handleSubmit} variant="outlined" type="submit">
                {" "}
                Send
              </Button>
            </form>
          </Box>
        </Box>
      </>
    );
}