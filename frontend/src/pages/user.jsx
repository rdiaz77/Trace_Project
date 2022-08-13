import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';


export default function User() {
  // SET STATES & GLOBAL VAR

  const history = useNavigate();
  const url = "http://localhost:3000/users";
  const [users, setUsers] = useState({
        user_firstName:'',
        user_lastName: '',
        user_email:'',
        credential_id: ''
  });
  const [bringUsers, setBringUsers] = useState(null);
  const [deleteUser, setDeleteUser] = useState({
    user_id: "",
  });

  //DATA FETCH

  useEffect(() => {
    async function getAllUsers() {
      const res = await fetch(url);
      const dbUsers = await res.json();
      setUsers(dbUsers);
    }

    getAllUsers();
  }, []);

  // ACTION HANDLERS

  const handledOnClick = (e) => {
    e.preventDefault();
    setBringUsers(allUsers);
  };

  let handleDelete = async ({ id }) => {
    await fetch(`http://localhost/users/${id}`, {
      method: "DELETE",
    });
    history.push("/");
  };

  //----FUNCTIONS------

  // TABLE CREATION
  function allUsers() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.user_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.user_firstName}
                </TableCell>
                <TableCell>{user.user_lastName}</TableCell>
                <TableCell>{user.user_email}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" size="small" href={`/users/${user.user_id}`}>
                    {/* <Link
                      to={`${user.user_id}`}
                      underline="none"
                      component="button"
                    > */}
                      See
                    {/* </Link> */}
                  </Button>
                  </TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" size="small" href={`/users/${user.user_id}/edit`}>
                    {/* <Link
                      to={`${user.user_id}/edit`}
                      underline="none"
                      component="button"
                    > */}
                      Edit
                    {/* </Link> */}
                  </Button>
                </TableCell>
                <TableCell>
                  <form
                    method="POST"
                    action={`http://localhost:3000/users/${user.user_id}?_method=DELETE`}
                  >
                    <Button
                      variant="contained"
                      type="submit"
                      color="error"
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={handleDelete}
                    >
                      Delete
                    </Button>
                  </form>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  //RETURN

  return (
    <>
      <h1>User page</h1>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <SearchBar />
        </Box>
        <Box>
          <Button variant="contained" href="/users/new">
            Add New User
          </Button>
        </Box>
      </Box>

      <Box>
        <Button onClick={handledOnClick}> Show users</Button>
      </Box>

      {bringUsers}
    </>
  );
}
