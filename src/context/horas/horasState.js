import React, { useReducer } from 'react';

import HorasContext from './horasContext';
import horasReducer from './horasReducer';

import { OBTENER_AGENDAS } from '../../types';

import clienteAxios from '../../config/axios';

const HoraState = (props) => {

    const initialState = {
        agendas: []
    }
    
    const [state, dispatch] = useReducer(horasReducer, initialState)



    const crearHora = async (hora) => {

        hora.idAdmin = "61516373ff961ca29899c255";

        try {
            const resultado = await clienteAxios.post('/api/horas', hora);
            // const nuevaHora = resultado.data;
            console.log(resultado.data);

            // dispatch({
            //     type: CREAR_HORA,
            //     payload: nuevaHora
            // });

        } catch(error){
            console.log(error);
        }
    }

    const obtenerAgendas = async () => {
        try {
            const resultado = await clienteAxios.get('/api/agenda');
            // console.log(resultado.data.agendas); 
            dispatch({
                type: OBTENER_AGENDAS,
                payload: resultado.data.agendas
            });

        } catch (error) {
            console.log(error); 
        }
    }

    return (
        <HorasContext.Provider
            value={{
                agendas: state.agendas,
                crearHora,
                obtenerAgendas
            }}
        >
            {props.children}

        </HorasContext.Provider>
    );
}

export default HoraState;