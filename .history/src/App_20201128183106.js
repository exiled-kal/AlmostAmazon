import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/"></Route>
          <Header />
          <Home />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
