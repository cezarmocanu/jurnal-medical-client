import React,{ useState } from "react";
import {BookIcon,Menu} from 'evergreen-ui'
import './SideMenu.css';


function SideMenu(){

  const [items, setItems] = useState([
    {
        title:'Cautare rapida...',
    },
    {
        title:'Colectii Anuale',
    },
    {
        title:'Documente Utile',
    },
    {
      title:'Universitatea Transilvania',
    },
    {
      title:'Colegiul Medicilor Brasov',
    },
    {
      title:'Facultatea de Medicina Brasov',
    },
]);

  const renderItemsInSubmenu = () => {
    return items.map(({title}) => (
        <div>
          <Menu.Item >{title}</Menu.Item>
          <Menu.Divider/>
        </div>
    ));
};

  return (
    <div className="full-component">
      <div className="header">
        <h2>Jurnalul Medical Brasov</h2>
        <BookIcon></BookIcon>
      </div>
      <Menu>
          <Menu.Group>
          <Menu.Divider/>
            {renderItemsInSubmenu()}
          </Menu.Group>
      </Menu>
    </div>
)

}

export {SideMenu};