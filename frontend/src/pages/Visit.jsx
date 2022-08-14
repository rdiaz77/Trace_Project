import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';




// PAGINATION
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  
  const handleFirstPageButtonClick = (event) => {
    console.log("pressed handleFirstPageButtonClick")
    onPageChange(event, 0);
  };
  
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  
  const handleNextButtonClick = (event) => {
    console.log("pressed handleNextButtonClick")
    onPageChange(event, page + 1);
  };
  
  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  
  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
        >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
        >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function User() {

  // SET STATES & GLOBAL VAR

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const navigate = useNavigate();
  const url = "http://localhost:3000/visits";
  const [visits, setVisits] = useState({
        user_id:'',
        place_id: '',
        contact_id:'',
        
  });
  const [bringVisits, setBringVisits] = useState(null);
  


  //DATA FETCH

  useEffect(() => {
    async function getAllVisits() {
      const res = await fetch(url);
      const dbVisits = await res.json();
      setVisits(dbVisits);
    }

    getAllVisits();
  }, []);

  // ACTION HANDLERS

  const handledOnClick = (e) => {
    e.preventDefault();
    setBringVisits(allVisits);
  };

  let handleDelete = async ({ id }) => {
    await fetch(`http://localhost/visits/${id}`, {
      method: "DELETE",
    });
    navigate("/visits");
  };


   // PAGINATION


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - visits.length) : 0;

  const handleChangePage = (event, newPage) => {
    console.log('handle change pressed')
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  //----FUNCTIONS------


  // TABLE CREATION
  function allVisits() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
            ? visits.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : visits
          ).map((visit) => (
              <TableRow
                key={visit.visit_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {visit.place_id}
                </TableCell>
                <TableCell>{visit.contact_id}</TableCell>
                <TableCell>{visit.user_id}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" href={`/visits/${visit.visit_id}`}>
                    See
                  </Button>
                  </TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" size="small" href={`/visits/${visit.visit_id}/edit`}>
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <form
                    method="POST"
                    action={`http://localhost:3000/users/${visit.visit_id}?_method=DELETE`}
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
            {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={visits.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
        </Table>
      </TableContainer>
    );
  }

  //RETURN

  return (
    <>

      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent:'space-evenly', p: 3, m:4}}>

        <Grid>
          <Button variant="contained" href="/visits/new">Add New Visit</Button>   
        </Grid>

        <Grid>      
          <Button variant="contained" color="success" onClick={handledOnClick}> Show All Visits</Button>
        </Grid>
        
      </Box>

      

      {bringVisits}
    </>
  );
}
