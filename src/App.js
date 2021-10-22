import { BrowserRouter, Switch, Route } from "react-router-dom";

import CreateHour from "./components/CreateHour";
import ScheduledHours from "./components/ScheduledHours";
import RutaPrivada from './components/rutas/RutaPrivada';
import Login from './components/auth/Login';


import HorasState from "./context/horas/horasState";
import ServiciosState from "./context/servicios/serviciosState";
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';

import { Header } from "./ui/Header";

import tokenAuth from './config/tokenAuth';


const token = localStorage.getItem('token');

if( token ){
  tokenAuth(token);
}

function App() {
  return (
    <AlertaState>
      <AuthState>
        <ServiciosState>
          <HorasState>
            <BrowserRouter>
              <Header/>
              <Switch>
                <Route exact path="/home" component={() => <div>home</div>} />
                <Route exact path="/" component={Login} />
                <RutaPrivada exact path="/scheduledhours" component={ScheduledHours} />
                <RutaPrivada exact path="/createhour" component={CreateHour} />
              </Switch>
            </BrowserRouter>
          </HorasState>
        </ServiciosState>
      </AuthState>
    </AlertaState>
  );
}

export default App;
