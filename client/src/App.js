import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Dashboard from './Components/Dashboard/Dashboard';
import Chat from './Components/Chat/Chat';
import Register from './Components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/register' component ={Register}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/chat' component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
