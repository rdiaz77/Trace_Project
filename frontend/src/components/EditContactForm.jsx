import React from "react"
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { Typography, Box, TextField, Button } from "@mui/material";

export default function EditContactForm() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [contact, setContact] = useState({
    contact_firstName: "",
    contact_lastName: "",
    contact_email: "",
    contact_phone: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/contacts/${id}`);
      const resData = await response.json();
      setContact(resData);
    };
    fetchData();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`http://localhost:3000/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    navigate(`/contacts/${id}`);
  }

  return (
    <>
      <Typography variant="h3"> Edit Contact</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          maxWidth: 450,
        }}
      >
        <Box sx={{ "& .MuiTextField-root": { m: 1, width: 300 } }}>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setContact({ ...contact, contact_firstName: e.target.value })
              }
              fullWidth
              label="First Name"
              value={contact.contact_firstName}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />

            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setContact({ ...contact, contact_lastName: e.target.value })
              }
              fullWidth
              label="Last Name"
              value={contact.contact_lastName}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />

            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setContact({ ...contact, contact_email: e.target.value })
              }
              fullWidth
              label="Email"
              type="email"
              value={contact.contact_email}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />

            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setContact({ ...contact, contact_phone: e.target.value })
              }
              fullWidth
              label="Phone"
              type="phone"
              value={contact.contact_phone}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
            <br />
            <Button variant="outlined" type="submit">
              {" "}
              Save
            </Button>
            <Button variant="outlined" href="/contacts">
              {" "}
              Cancel
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

