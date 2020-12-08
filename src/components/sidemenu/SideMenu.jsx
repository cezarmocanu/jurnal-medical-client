import React,{ useState } from "react";
import {BookIcon,Menu} from 'evergreen-ui'
import './SideMenu.css';
import {Accordion} from '../accordion/Accordion'
import { LABELS } from "../../strings";

const ITEMS = [
  {
    title:"Cautare rapida...",
  },
  {
    title:"Documente Utile",
    isAccordion: true,
    initiallyExpanded: true,
    insideItems:[
      {title:"2017"},
      {title:"2018"},
      {title:"2019"}
    ]
  },
  {
    title:"Colectii Anuale",
    isAccordion: true,
    insideItems:[
      {title:"2017"},
      {title:"2018"},
      {title:"2019"}
    ]
  },
  {
    title:"Parteneri",
    isAccordion: false,
  },

]

const submenuItem = {
  paddingTop : 20,
  paddingBottom: 20,
  margin: 0
}

function SideMenu(){
  const [items, setItems] = useState(ITEMS);

  const renderSubmenuItem = ({title, insideItems, isAccordion, initiallyExpanded}) => {
    if (isAccordion) {
      return <Accordion 
                title={title}
                items={insideItems}
                initiallyExpanded={initiallyExpanded}
                canExpand={true}
                style={{
                  header: submenuItem,
                  item: submenuItem
                }}
              />
    }
    return (
      <Menu.Item 
        style={submenuItem}>
          {title}
      </Menu.Item>
    );
  };

  const renderSubmenuContent = () => {
    return items.map(item => (
        <React.Fragment>
          {renderSubmenuItem(item)}
          <Menu.Divider/>
        </React.Fragment>
      )
    );
  };

  return (
    <div className="full-component">
      <div className="header">
        <h2>{LABELS.title}</h2>
        <BookIcon></BookIcon>
      </div>
      <Menu>
          <Menu.Group>
            <Menu.Divider/>
            {renderSubmenuContent()}
          </Menu.Group>
      </Menu>
    </div>
)

}

export {SideMenu};