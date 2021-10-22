import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateHour from "./components/CreateHour";
import ScheduledHours from "./components/ScheduledHours";
import HoraState from "./context/horas/horasState";
import { Header } from "./ui/Header";

function App() {
  return (

    <HoraState>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={()=><div>Home</div>}/>
          <Route exact path="/createhour" component={CreateHour}/>
          <Route exact path="/scheduledhours" component={ScheduledHours}/>
        </Switch>
      </BrowserRouter>
    </HoraState>
  );
}

export default App;
