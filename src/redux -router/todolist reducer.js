const initialstate={
    todos:["jagadeesh","Lakshman","Ayyappa","Dinesh"]
}
function Todolistreducer(state=initialstate,action){
    if(action.type==="Addtodo"){
        return {...state,todos:[...state.todos,action.payload]}
    }
    return state
}
export default Todolistreducer
