import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import {BookIcon,Menu,SearchInput} from 'evergreen-ui'
import './SideMenu.scss';
import {Accordion} from '../accordion/Accordion'
import { LABELS } from "../../strings";
import {LanguageSwitch} from "../language-switch/LanguageSwitch"

const ITEMS = [
  {
    title:LABELS.usefulDocuments,
    isAccordion: true,
    initiallyExpanded: true,
    insideItems:[
      {title:"2017"},
      {title:"2018"},
      {title:"2019"}
    ]
  },
  {
    title:LABELS.partners,
    isAccordion: false,
  }
]

const submenuItem = {
  paddingTop : 20,
  paddingBottom: 20,
  margin: 0
}

function SideMenu(){
  const [items, setItems] = useState(ITEMS);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(()=>{
      const fetchCollection = async () => {
        try{
          const response = await fetch(`http://jurnal-medical-server.herokuapp.com/collection/all`);
          const json = await response.json();
          const {data} = json;
          const finalData = data.map(collection => ({
            link:`/colectii/${collection.id}`,
            title: collection.title
        }))
          setItems([
            ...ITEMS.slice(0,1),
            {
              title:LABELS.anualCollections,
              isAccordion: true,
              initiallyExpanded: false,
              insideItems:finalData
            },
            ...ITEMS.slice(1),
          ]);
        }
        catch(e){
          throw new Error(e);
        }
      }
      fetchCollection();
  },[])

  const renderModal = () => {
    setModalIsOpen(true);
  }

  const renderSubmenuItem = ({title, insideItems, isAccordion, initiallyExpanded}) => {
    if (isAccordion) {
      return <Accordion 
                title={title}
                items={insideItems}
                initiallyExpanded={initiallyExpanded}
                canExpand={true}
                hasLink={false}
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
        <Link to='/'>
          <h2>{LABELS.title}</h2>
        </Link>
        <BookIcon></BookIcon>
      </div>
      <Menu>
          <Menu.Group>
            <Menu.Divider/>
            <Menu.Item className="sidemenu-form">
              <SearchInput
                placeholder={LABELS.fastSearch} 
              />
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item onClick={renderModal}>Schimba limba</Menu.Item>
            {modalIsOpen && <LanguageSwitch isOpened={modalIsOpen} onClose={()=>{setModalIsOpen(false)}}/>}
            <Menu.Divider/>
            {renderSubmenuContent()}
            <Menu.Divider/>
          </Menu.Group>
      </Menu>
    </div>
  )
}

export {SideMenu};