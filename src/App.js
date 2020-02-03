import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Admin from "./layouts/Admin/Admin";
import Home from "./layouts/Home/Home";


const hist = createBrowserHistory();

function App() {
  return (
    <div >
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/home" component={Home} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
