import { OBTENER_SERVICIOS } from "../../types";

const serviciosReducer = (state, action) => {
    switch(action.type){
        case OBTENER_SERVICIOS:
            return {...state, servicios: action.payload};
        default:
            return state;
    }
}

export default serviciosReducer;