import * as types from "./actionType";
import axios from "axios";

const getStudents = (students) => ({
    type: types.GET_STUDENTS,
    payload: students,
});

const studentDelete = () => ({
    type: types.DELETE_STUDENT
})

export const loadStudents = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`)
            .then((res) => {
                dispatch(getStudents(res.data))
            }).catch(error => console.log(error))
    }
}

export const deleteStudent = (id) => {
    return function (dispatch) {
        axios
            .delete(`${process.env.REACT_APP_API}/${id}`)
            .then((res) => {
                dispatch(studentDelete())
                dispatch(loadStudents());
            }).catch(error => console.log(error))
    }
}