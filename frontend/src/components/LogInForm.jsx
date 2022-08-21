import React, {useState} from 'react';
import Box from '@mui/material/Box'
import Button from "@mui/material/Button"
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';




export default function LogInForm() {
    
    
    const [login, setLogin] = useState({
        user_email: "",
        user_password: "",
    });
    
    
    async function handleSubmit(e) {
		e.preventDefault()
		const db = 'http://localhost:3000/authentication'

		await fetch(db, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(login)
		})
		
    console.log(login)


		
	}

  return (
    <div>
      <Card sx={{ maxWidth: 410, height: 210 }}>
        <Box sx={{ width: 390, height: 200, border: "primary dark" }}>
        <form method="POST" action= "/authentication" onSubmit={handleSubmit}>

            <TextField
              onChange={(e) =>
                setLogin({ ...login, user_email: e.target.value })
              }
              id="outlined-basic"
              fullWidth
              label="Email address"
              margin="none"
              variant="outlined"
            ></TextField>
            <br />
            <TextField
              onChange={(e) =>
                setLogin({
                  ...login,
                  user_password: e.target.value,
                })
              }
              id="outlined-basic"
              fullWidth
              label="Password"
              margin="dense"
              variant="outlined"
            ></TextField>
            <br />
            <Button onSubmit={handleSubmit} type="submit" variant="contained">
              Log In
            </Button>
          </form>
        </Box>
      </Card>
    </div>
  );
}
