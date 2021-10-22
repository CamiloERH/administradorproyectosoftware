import React, { useContext, useEffect } from 'react';

import { Container,
    Grid, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow,
    Paper } from '@mui/material';

import HorasContext from '../context/horas/horasContext';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';



const ScheduledHours = () => {

    const horasContext = useContext(HorasContext)
    const { agendas, obtenerAgendas } = horasContext;

    useEffect(() => {
        obtenerAgendas();
        //eslint-disable-next-line  
    }, []);

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
            maxWidth="md"
        >
            <Grid
                container 
                spacing={0} 
                direction="column"
                justifyContent="center" 
                alignItems="center"
            >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Apellido</TableCell>
                            <TableCell align="right">Servicio Agendado</TableCell>
                            <TableCell align="right">Fecha</TableCell>
                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {agendas.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.idCliente.nombre}
                                </TableCell>
                                <TableCell align="right">{row.idCliente.apellido}</TableCell>
                                <TableCell align="right">{row.idHora.idServicio.nombre}</TableCell>
                                <TableCell align="right">{ format(new Date(row.idHora.fecha), 'PP', {locale: es})}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Container>
    );
}
 
export default ScheduledHours;