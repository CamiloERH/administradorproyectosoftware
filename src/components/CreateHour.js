import React, { useState, useContext } from 'react';

import HorasContext from '../context/horas/horasContext';

import { Container, 
    TextField, 
    Grid, 
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

    const horasContext = useContext(HorasContext);
    const { crearHora } = horasContext;

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
                marginY: 5, 
                display: 'flex', 
                justifyContent: 'center'
            }}
            maxWidth="sm"
        >
            <Grid 
                container 
                spacing={0} 
                direction="column"
                justifyContent="center" 
                alignItems="center"
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
                    <InputLabel id="select-helper-label">Servicio</InputLabel>
                    <Select
                        name="idServicio"
                        id="demo-simple-select-helper"
                        labelId="select-helper-label"
                        value={form.idServicio}
                        label="Servicio"
                        onChange={handleChange}
                    >
                        <MenuItem value="61515feeaca56c4e1425c0a2">Servicio 1</MenuItem>
                        <MenuItem value="61516072aca56c4e1425c0a4">Servicio 2</MenuItem>
                        <MenuItem value="6151609cedf29a166dd7e94c">Servicio 3</MenuItem>
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
            </Grid>
        </Container>
    );
}
 
export default CreateHour;