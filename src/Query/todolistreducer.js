const initialstate={
    todos:['hii','hello']
}

function Todoreducer(state=initialstate,action){

    if(action.type==='Addtodo'){
        return {...state,todos:[...state.todos,action.payload]}
    }
    return state
}

export default Todoreducer