import React from 'react';
import {SideMenu} from'./sidemenu/SideMenu';
import {Screen} from './screen/Screen';
import {ArticlePage} from './pages/ArticlePage'
import './App.scss';

function App() {
  

  return (
    <React.Fragment>
      <SideMenu/>
      <ArticlePage/>
    </React.Fragment>
  );
}
export {App};
