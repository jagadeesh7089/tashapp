import { combineReducers } from "redux";
import Counterreducer from "./counter reducer";
import Todolistreducer from "./todolist reducer";
const reducer=combineReducers({Counterreducer,Todolistreducer})
export default reducer