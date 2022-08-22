import React from "react"
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { Typography, Box, TextField, Button } from "@mui/material";

export default function EditVisitForm() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [visit, setVisit] = useState({
    place_id: "",
    contact_id: "",
    user_id: "",
    visit_comment: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/visits/${id}`);
      const resData = await response.json();
      setVisit(resData);
    };
    fetchData();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`http://localhost:3000/visits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visit),
    });

    navigate(`/visits/${id}`);
  }

  return (
    <>
      <Typography variant="h3"> Edit Visit</Typography>
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
              onChange={(e) => setVisit({ ...visit, place_id: e.target.value })}
              fullWidth
              label="Client"
              value={visit.place_id}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />

            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setVisit({ ...visit, contact_id: e.target.value })
              }
              fullWidth
              label="Contact"
              value={visit.contact_id}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />

            <TextField
              id="outlined-basic"
              onChange={(e) => setVisit({ ...visit, user_id: e.target.value })}
              fullWidth
              label="Email"
              value={visit.user_id}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />

            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setVisit({ ...visit, visit_comment: e.target.value })
              }
              fullWidth
              label="Comments"
              value={visit.visit_comment}
              multiline
              rows={10}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />

            <br />
            <Button variant="outlined" type="submit">
              {" "}
              Save
            </Button>
            <Button variant="outlined" href="/visits">
              {" "}
              Cancel
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

