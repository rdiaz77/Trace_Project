import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../context/CurrentUser";

function LogInForm() {
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(CurrentUser);

  const [errorMessage, setErrorMessage] = useState(null);

  const [login, setLogin] = useState({
    user_email: "",
    user_password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const db = "http://localhost:3000/authentication";

    const response = await fetch(db, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });
    const data = await response.json();
    console.log("this is data {}}:", data);
    console.log("user name", data.user.user_firstName);

    if (response.status === 200) {
      setCurrentUser(data.user);
      navigate("/");
      console.log("form submit working with 200 code");
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    <div>
      {errorMessage !== null ? <div>{errorMessage}</div> : null}
      <Card sx={{ maxWidth: 410, height: 210 }}>
        <Box sx={{ width: 390, height: 200, border: "primary dark" }}>
          <form method="POST" action="/authentication" onSubmit={handleSubmit}>
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

export default LogInForm;
