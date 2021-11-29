import React, { useReducer, useEffect } from 'react';

import ProductosContext from './productosContext';
import productosReducer from './productosReducer';

import clienteAxios from '../../config/axios';

const ProductosState = (props) => { 

    const initialState = {
        
    }

    const [state, dispatch] = useReducer(productosReducer, initialState)

    const crearProducto = async (producto) => {

        const resultado = await clienteAxios.post(`/api/productos`, producto);
        console.log(resultado);

        // dispatch({
        //     type: CREAR_PRODUCTO
        // });
    }

    return (
        <ProductosContext.Provider
            value={{
                crearProducto
            }}
        >
            {props.children}

        </ProductosContext.Provider>
    );

}

export default ProductosState;