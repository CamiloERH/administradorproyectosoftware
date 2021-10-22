import React, { useState, useContext } from 'react';

import horasContext from '../context/horas/horasContext';
import serviciosContext from '../context/servicios/serviciosContext';

import { Container, 
    TextField, 
    Stack, 
    Paper, 
    Select, 
    InputLabel, 
    MenuItem, 
    FormControl, 
    FormHelperText, 
    Typography, 
    Button} from "@mui/material";

import SendIcon from '@mui/icons-material/Send';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';


const CreateHour = () => {

    const { servicios } = useContext(serviciosContext)

    const { crearHora } = useContext(horasContext);

    const [form, setForm] = useState({
        fecha: new Date(),
        idServicio: "61515feeaca56c4e1425c0a2"
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        crearHora(form);
    }

    return (  
        
        <Container 
            component={Paper} 
            elevation={5}
            sx={{
                padding: 5, 
                marginY: 5
            }}
            maxWidth="sm"
        >
            <Stack
                sx={{alignItems: 'center'}}
            >
                <Typography variant="h5" gutterBottom component="div">
                   Crear Hora
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 250 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            name="date"
                            renderInput={(props) => <TextField {...props} />}
                            label="Escoger Hora"
                            value={form.fecha}
                            onChange={(newDate) => {
                                setForm({
                                    ...form,
                                    fecha: newDate
                                })
                            }}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel id="select-servicio-label">Servicio</InputLabel>
                    <Select
                        name="idServicio"
                        labelId="select-servicio-label"
                        value={form.idServicio}
                        label="Servicio"
                        onChange={handleChange}
                    >
                        {
                            servicios.map( (servicio) => (
                                <MenuItem
                                    key={servicio._id}
                                    value={servicio._id}
                                >
                                    {servicio.nombre}
                                </MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escoger un servicio</FormHelperText>
                </FormControl>
                
                <Button 
                    sx={{m: 2}} 
                    variant="contained" 
                    endIcon={<SendIcon />}
                    onClick={handleSubmit}
                >
                    Crear Hora
                </Button>
            </Stack>

            
        </Container>

       
    );
}
 
export default CreateHour;