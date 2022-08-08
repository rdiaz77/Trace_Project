import React from 'react';
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Box } from '@mui/material';



export default function SearchBar(){

const [search, setSearch] = useState("")

const handledSearch = e => {
    setSearch(e.target.value)
    
}
//  here I will get a value, setSearch(?), and I need to pass it to handledSubmit

async function handleSubmit(e) {
    e.preventDefault()
    const db = 'http://localhost:3000/users'

    await fetch(db, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })

    
}


return(
  <Box sx = {{width: 250, height: 200}}>

    <form action="">

        <TextField onChange= {handledSearch} id= "outlined-basic" fullWidth label="Enter User's name" margin="none" variant = "outlined">

        </TextField>
        <Button margin = "normal" variant='outlined'>Search</Button>
    </form>

  </Box>
   
    
    





)



    }



