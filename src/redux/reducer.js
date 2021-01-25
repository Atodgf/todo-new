import { CREATE } from "./types"

const inicialState = {
    info: []
}

const reducer =(state=inicialState, action) =>{
    switch(action.type) {
        case CREATE:
            return {...state, info: state.info.concat(action.payload)}
        default: return state
    }
    
}

export default reducer