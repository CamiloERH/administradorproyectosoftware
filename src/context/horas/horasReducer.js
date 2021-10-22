import { OBTENER_AGENDAS } from "../../types";

const horasReducer = (state, action) => {
    switch(action.type){
        case OBTENER_AGENDAS:
            return {
                ...state,
                agendas: action.payload
            }
        default:
            return state;
    }
}

export default horasReducer;