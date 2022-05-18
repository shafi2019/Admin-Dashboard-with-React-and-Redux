import * as types from "./actionType";
import axios from "axios";

const getStudents = (students) => ({
    type: types.GET_STUDENTS,
    payload: students,
});

const studentDelete = () => ({
    type: types.DELETE_STUDENT
})

const studentAdd = () => ({
    type: types.ADD_STUDENT
})

const studentUpdate = () => ({
    type: types.UPDATE_STUDENT
})

const getStudent = (student) => ({
    type: types.GET_SINGLE_STUDENT,
    payload: student
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


export const addStudent = (student) => {
    return function (dispatch) {
        axios
            .post(`${process.env.REACT_APP_API}`, student)
            .then((res) => {
                dispatch(studentAdd())
                dispatch(loadStudents());
            }).catch(error => console.log(error))
    }
}

export const getSingleStudent = (id) => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}/${id}`)
            .then((res) => {
                dispatch(getStudent(res.data));
            }).catch(error => console.log(error))
    }
}

export const updateStudent = (student, id) => {
    return function (dispatch) {
        axios
            .put(`${process.env.REACT_APP_API}/${id}`, student)
            .then((res) => {
                dispatch(studentUpdate());
            }).catch(error => console.log(error))
    }
}

