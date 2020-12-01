import Header from './Header';
import Home from './Home';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Login />
      <Header />

      <Home />
    </div>
  );
}

export default App;
