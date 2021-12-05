import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Dashboard from './Pages/Dashboard/Dashboard';
// import Chat from './Pages/Chat/Chat';
import Chat2 from './Pages/Chat2/Chat2';
import Register from './Pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/register' component ={Register}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/chat' component={Chat2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
