import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addStudent } from '../redux/actions';

const AddStudent = () => {
    const [state, setState] = useState({
        name: "",
        address: "",
        email: "",
        phone: ""
    });
    const [error, setError] = useState("")
    const { name, address, email, phone } = state;
    const navigate = useNavigate();
    const routeChange = () => {
        navigate("/")
    }
    let dispatch = useDispatch();

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !address || !email || !phone) {
            setError("Please fill all input field")
        } else {
            dispatch(addStudent(state));
            routeChange()
            setError("");
        }
    }

    return (
        <div>
            <Button variant="contained" color="primary"
                onClick={routeChange}
                style={{ marginRight: "85%", marginTop: "3%" }}>Go Back</Button>
            <h1>Add Student</h1>
            {error && <h3 style={{color: "red"}}>{error}</h3>}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }} s
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="standard-basic"
                    label="Name"
                    name="name"
                    variant="standard"
                    value={name}
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <TextField
                    id="standard-basic"
                    label="Address"
                    name="address"
                    variant="standard"
                    value={address}
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <TextField
                    id="standard-basic"
                    label="Email"
                    name="email"
                    variant="standard"
                    value={email}
                    type="email"
                    onChange={handleChange}
                />
                <br />
                <TextField
                    id="standard-basic"
                    label="Phone"
                    name="phone"
                    variant="standard"
                    value={phone}
                    type="number"
                    onChange={handleChange}
                />
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ width: "100px" }}>Add</Button>
            </Box>
        </div>
    )
}

export default AddStudent