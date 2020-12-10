import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { SideMenu } from './sidemenu/SideMenu';

import { ArticlePage } from './pages/articlepage/ArticlePage';
import { HomePage } from './pages/homepage/HomePage';
import './App.scss';

function App() {

  return (
    <Router>
      <SideMenu />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/colectii'>
          <ArticlePage />
        </Route>
      </Switch>

    </Router>
  );
}
export { App };
