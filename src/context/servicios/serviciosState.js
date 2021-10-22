import React, { useReducer, useEffect } from 'react';

import { OBTENER_SERVICIOS } from "../../types";

import ServiciosContext from './serviciosContext';
import serviciosReducer from './serviciosReducer';

import clienteAxios from '../../config/axios';

const ServiciosState = (props) => {

    const initialState = {
        servicios: []
    }

    const [state, dispatch] = useReducer(serviciosReducer, initialState);

    const obtenerServicios = async () => {
        const resultado = await clienteAxios.get(`/api/servicios`);
        dispatch({
            type: OBTENER_SERVICIOS,
            payload: resultado.data.servicios
        });
    }

    useEffect(() => {
        obtenerServicios();
    }, [])

    return (
        <ServiciosContext.Provider
            value={{
                servicios: state.servicios
            }}
        >
            {props.children}

        </ServiciosContext.Provider>
    );
}

export default ServiciosState;