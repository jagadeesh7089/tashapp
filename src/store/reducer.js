import { combineReducers } from "redux";
import Todolistreducer from "../todolist.reducer";
import counterreducer from "../counterReducer";

const reducer=combineReducers({Todolistreducer,counterreducer})
export default reducer