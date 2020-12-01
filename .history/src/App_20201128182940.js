import Header from './Header';
import Home from './Home';
import {BrowserRouter as router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
