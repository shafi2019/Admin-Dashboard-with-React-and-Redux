const initialState = {
    students: [],
    student: [],
    loading: false
}

const studentsReducers = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default studentsReducers;