import React, { useState } from 'react';

import { AppBar, Tab, Tabs, Toolbar, useScrollTrigger } from '@mui/material';
import Box from '@mui/material/Box';

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

    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }
    
    return (
        <>
            <ElevationScroll >
                <AppBar position="fixed">
                    <Toolbar disableGutters sx={{marginY: 2}}>
                        <Tabs 
                            value={value}
                            onChange={handleChange} 
                            indicatorColor="primary"
                            textColor="inherit"  
                            sx={{marginLeft: 'auto', paddingX: 5}}
                        >
                            <Tab 
                                component={Link} to="/" 
                                label="Home"
                                sx={tabStyle}
                            />

                            <Tab 
                                component={Link} to="/createhour" 
                                label="Crear Hora"
                                sx={tabStyle}
                            />
                            <Tab 
                                component={Link} to="/scheduledhours" 
                                label="Horas Agendadas"
                                sx={tabStyle}
                            />
                            
                        </Tabs>   
                        {/* <Button 
                            component={Link} to="/schedules" 
                            variant="contained" 
                            color="warning"
                            sx={{
                                borderRadius: "50px",
                                marginLeft: "25px",
                                marginRight: "25px",
                                height: "45px",
                                fontFamily: "Pacifico",
                                textTransform: "none",
                                fontSize: "1.2rem"
                            }}
                        >
                            Crear hora
                        </Button> */}
 
                    </Toolbar>                  
                </AppBar>
            </ElevationScroll>
            <Box sx={{minHeight: 90}}/>
        </>
        
    )
}
