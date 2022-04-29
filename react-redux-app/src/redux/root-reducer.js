import { combineReducers } from "redux";
import studentsReducers from "./reducer";

const rootReducer = combineReducers({
    students: studentsReducers
});

export default rootReducer