import { combineReducers } from "redux";
import Todolistreducer from "../todolist.reducer";
import counterreducer from "../counterReducer";
import productsreducer from "./products.reducer";

const reducer=combineReducers({Todolistreducer,counterreducer,productsreducer})
export default reducer