import { combineReducers } from "redux";
import Counterreducer from "./counter reducer";
import Todolistreducer from "./todolist reducer";
import Productsreducer from "./product reducer";
const reducer=combineReducers({Counterreducer,Todolistreducer,Productsreducer})
export default reducer