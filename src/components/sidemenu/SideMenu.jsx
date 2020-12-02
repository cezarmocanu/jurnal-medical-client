import React,{ useState } from "react";
import {Icon,Divider} from "@blueprintjs/core";
import './SideMenu.css';

function SideMenu(){

  const [items, setItems] = useState([
    {
        title:'Cautare rapida...'
    },
    {
        title:'Colectii Anuale'
    },
    {
        title:'Documente Utile'
    },
    {
      title:'Universitatea Transilvania'
    },
    {
      title:'Colegiul Medicilor Brasov'
    },
    {
      title:'Facultatea de Medicina Brasov'
    },
]);

  const renderItemsInSubmenu = () => {
    return items.map( ({title}) => (
      <li>
        <div className={"item-in-side-menu bp3-text-large"}>{title}</div> 
        <Divider/>
    </li>
    ));
};

  return (
    <div className="full-component">
      {/* Header part*/}
      <div className="header">
        <Icon icon="book" iconSize={60} />
        <h2>Jurnalul Medical Brasov</h2>
      </div>
      <Divider/>
      {/* Body part*/}
      <div>
        <div>
          <ul>
            {renderItemsInSubmenu()}
          </ul>
        </div>
      </div>
    </div>
)

}

export {SideMenu};