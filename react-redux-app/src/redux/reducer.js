import * as types from "./actionType";

const initialState = {
    students: [],
    student: {},
    loading: true,
}

const studentsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_STUDENTS:
            return {
                ...state,
                students: action.payload,
                loading: false,
            };
        case types.DELETE_STUDENT:
            return {
                ...state,
                loading: false
            } 
        default:
            return state;
    }
};

export default studentsReducers;