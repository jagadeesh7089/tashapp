const initialState={
   
    todos:["jagadeesh","Lakshman","Suribabu","Ayyappa"]
}
function  Todolistreducer(state=initialState,action){
    
    if(action.type==="Addtodo"){
      return {...state,todos:[...state.todos,action.payload],}
    
    
    }
    return state
}
export default Todolistreducer