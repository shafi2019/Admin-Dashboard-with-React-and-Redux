import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, loadStudents } from '../redux/actions';
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTable = styled(Table)(() => ({
    marign: 100,
    width: 1080,
}));


function DataTable() {
    let dispatch = useDispatch();
    const { students } = useSelector((state) => state.data)
    let navigate = useNavigate()
    const routeChange = () => {
        navigate("/addStudent");
    }

    useEffect(() => {
        dispatch(loadStudents());
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete student")) {
            dispatch(deleteStudent(id))
        }
    }


    return (
        <div>
            <TableContainer component={Paper} width="500px">
                <StyledTable sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="center">Address</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Phone Number</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students && students.map((student) => (
                            <StyledTableRow key={student.id}>
                                <StyledTableCell component="th" scope="row">
                                    {student.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{student.address}</StyledTableCell>
                                <StyledTableCell align="center">{student.emal}</StyledTableCell>
                                <StyledTableCell align="center">{student.phone}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <ButtonGroup variant="contained" aria-label="outlined primary button group">``
                                        <Button
                                            style={{ marginRight: "10px" }}
                                            color="secondary"
                                            onClick={() => handleDelete(student.id)}>Delete</Button>
                                        <Button
                                            color="primary"
                                            onClick={() => navigate(`/editStudent/${student.id}`)}
                                        >
                                            Edit</Button>
                                    </ButtonGroup>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </StyledTable>
            </TableContainer>
            <div>
                <Button variant="contained"
                    style={{ marginTop: "50px", marginRight: "500" }}
                    onClick={routeChange}
                >Add Student</Button>
            </div>
        </div>
    );
}

export default DataTable;