import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home'
import Room from './Room'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/:roomId' component={Room}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
