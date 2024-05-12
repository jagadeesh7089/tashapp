import {createStore} from "redux"
import Counterreducer from "./counter reducer"
var store=createStore(Counterreducer)
export default store