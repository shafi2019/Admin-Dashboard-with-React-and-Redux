import * as types from "./actionType";
import axios from "axios";

const getStudents = (students) => ({
    type: types.GET_STUDENTS,
    payload: students,
});

export const loadStudents = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((res) => {
            dispatch(getStudents(res.data))
        }).catch(error => console.log(error))
    }
}