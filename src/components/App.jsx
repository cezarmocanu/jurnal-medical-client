import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { SideMenu } from './sidemenu/SideMenu';
import { ArticlePage } from './pages/articlepage/ArticlePage';
import { HomePage } from './pages/homepage/HomePage';
import {CollectionPage} from './pages/collectionpage/CollectionPage'
import { EditionPage } from './pages/editionpage/EditionPage';
import {PartnersPage} from './pages/partnerspage/PartnersPage'
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
        
        <Route exact path='/colectii'>
          <CollectionPage />
        </Route>

        <Route path='/colectii/:collectionId'>
          <EditionPage />
        </Route>

        <Route path='/parteneri'>
          <PartnersPage />
        </Route>
      </Switch>

    </Router>
  );
}
export { App };
