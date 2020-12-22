import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { SideMenu } from './sidemenu/SideMenu';
import { ArticlePage } from './pages/articlepage/ArticlePage';
import { HomePage } from './pages/homepage/HomePage';
import {CollectionPage} from './pages/collectionpage/CollectionPage'
import { EditionPage } from './pages/editionpage/EditionPage';
import './App.scss';


function App() {

  return (
    <Router>
      <SideMenu />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/articole'>
          <ArticlePage />
        </Route>
        
        <Route path='/colectii'>
          <CollectionPage />
        </Route>

        <Route path='/editii'>
          <EditionPage />
        </Route>
      </Switch>

    </Router>
  );
}
export { App };
