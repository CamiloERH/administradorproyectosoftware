import React, { useState, useContext } from 'react';

import authContext from '../context/autenticacion/authContext';

import { AppBar, Tab, Tabs, Toolbar, useScrollTrigger, Button } from '@mui/material';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from 'react-router-dom';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });

  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
}

const tabStyle = {
    fontWeight: 500,
    fontSize: "1.2rem",
    textTransform: "none",
    marginX: "0.5rem"
}

export const Header = () => {

    const { autenticado, cerrarSesion } = useContext(authContext);

    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }
    
    return (
        <>
        {autenticado && (<>
            <ElevationScroll >
                <AppBar position="fixed">
                    <Toolbar disableGutters sx={{marginY: 0, marginX: 2}}>
                        <Tabs 
                            value={value}
                            onChange={handleChange} 
                            indicatorColor="primary"
                            textColor="inherit"  
                            sx={{marginLeft: 'auto', paddingX: 5}}
                        >
                            <Tab 
                                component={Link} to="/home" 
                                label="Home"
                                sx={tabStyle}
                            />

                            <Tab 
                                component={Link} to="/createhour" 
                                label="Crear Hora"
                                sx={tabStyle}
                            />
                            <Tab 
                                component={Link} to="/createproduct" 
                                label="Crear Producto"
                                sx={tabStyle}
                            />
                            <Tab 
                                component={Link} to="/scheduledhours" 
                                label="Horas Agendadas"
                                sx={tabStyle}
                            />
                            
                        </Tabs>   
                        <Button 
                            onClick={() => cerrarSesion()}
                            endIcon={<LogoutIcon/>}  
                            sx={{ color: 'white'}}
                        >
                            Cerrar Sesión
                        </Button>
 
                    </Toolbar>                  
                </AppBar>
            </ElevationScroll>
            <Box sx={{minHeight: 90}}/>
        </>)}
        </>
    )
}
