import React, { useState, useContext } from 'react';

import { Button, Container, Stack, TextField, Typography, Paper } from "@mui/material";

import SendIcon from '@mui/icons-material/Send';

import productosContext from '../context/productos/productosContext';


const CreateProduct = () => {

    const { crearProducto } = useContext(productosContext)

    const [form, setForm] = useState({
        nombre: '',
        imagen: '',
        descripcion: '',
        valor: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        crearProducto(form);
    }

    return ( 
        <Container 
            maxWidth="xs" 
            component={Paper}
            sx={{
                padding: 5, 
                marginY: 5
            }}
        >
            <Typography variant="h5" gutterBottom component="div">
                Crear nuevo producto
            </Typography>
            <Stack component="form" spacing={2}>
                <TextField
                    label="Nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                />
                <TextField
                    label="Imagen"
                    name="imagen"
                    value={form.imagen}
                    onChange={handleChange}
                />
                <TextField
                    label="Descripcion"
                    name="descripcion"
                    value={form.descripcion}
                    onChange={handleChange}
                />
                <TextField
                    label="Valor"
                    name="valor"
                    value={form.valor}
                    onChange={handleChange}
                />
                <Button
                    fullWidth
                    sx={{m: 2, p: 1}} 
                    variant="contained" 
                    endIcon={<SendIcon />}
                    onClick={handleSubmit}
                >
                    Crear Producto
                </Button>

            </Stack>
        </Container>
    );
}
 
export default CreateProduct;
