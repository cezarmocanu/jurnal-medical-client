import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {SideMenu} from'./sidemenu/SideMenu';
import {Screen} from './screen/Screen';
import './App.scss';

function App() {

  return (
    <Router>
      <SideMenu/>
      <Switch>
        <Route exact path='/'>
          <Screen title="Home">
            <Link to="/colectii">
              <h1>Colectii</h1>
            </Link>
          </Screen>
        </Route>

        <Route path='/colectii'>
          <Screen title="Colectii">
          <Link to="/">
              <h1>Acasa</h1>
            </Link>
          </Screen>
        </Route>
      </Switch>
      
    </Router>
  );
}
export {App};
