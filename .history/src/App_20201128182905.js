import Header from './Header';
import Home from './Home';
import {BrowserRouter as router, Switch, Route}

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
