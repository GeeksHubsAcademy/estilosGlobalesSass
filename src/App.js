import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importación de containers
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import Register from './containers/Register/Register';

//Importación archivos de diseño

import './App.css';
import './Global.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
