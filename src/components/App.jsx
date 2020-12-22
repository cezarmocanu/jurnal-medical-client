import React from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SideMenu } from './sidemenu/SideMenu';
import { ArticlePage } from './pages/articlepage/ArticlePage';
import { HomePage } from './pages/homepage/HomePage';
import { CollectionPage } from './pages/collectionpage/CollectionPage'
import { EditionPage } from './pages/editionpage/EditionPage';
import {DocumentsPage} from './pages/documentpage/DocumentsPage'
import {PartnersPage} from './pages/partnerspage/PartnersPage'
import './App.scss';


function App() {

  return (
    <Router>
      <Helmet>
            <title>Jurnal Medical Brasovean</title>
      </Helmet>
      <SideMenu />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        
        <Route exact path='/colectii'>
          <CollectionPage />
        </Route>

        <Route path='/colectii/:collectionId'>
          <EditionPage />
        </Route>

        <Route path='/documente'>
          <DocumentsPage />
        </Route>

        <Route path='/parteneri'>
          <PartnersPage />
        </Route>

        <Route path='/editii/:editionId'>
          <ArticlePage />
        </Route>
        
      </Switch>

    </Router>
  );
}
export { App };
