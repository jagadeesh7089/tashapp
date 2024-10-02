import { combineReducers, createStore } from "@reduxjs/toolkit";
import Counterreducer from "./counterred";
import Todoreducer from "./todolistreducer";

const reducer=combineReducers({Counterreducer,Todoreducer})
export default reducer


var store=createStore(reducer)
// export default store
