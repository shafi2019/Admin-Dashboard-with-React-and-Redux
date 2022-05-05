import { combineReducers } from "redux";
import studentsReducers from "./reducer";

const rootReducer = combineReducers({
    data: studentsReducers,
});

export default rootReducer