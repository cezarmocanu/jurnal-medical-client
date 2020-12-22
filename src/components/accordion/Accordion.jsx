import React,{ useState } from "react";
import PropTypes from 'prop-types';
import {Menu,CaretDownIcon,CaretUpIcon} from 'evergreen-ui'
import './Accordion.css'
import {LABELS} from '../../strings'
import {Link} from 'react-router-dom'

function Accordion({title,items,initiallyExpanded,canExpand,style}){

  const [isOpened,setIsOpened] = useState(initiallyExpanded);

  const renderItem = (item) => {
    const {title,link} = item;
    return (
        <div className="disable-select">
          <Menu.Divider/>
          {link !== undefined ?
          <Link to={link}>
            <Menu.Item style={style.item}>{title}</Menu.Item>
          </Link>
          :
          <Menu.Item style={style.item}>{title}</Menu.Item>}
        </div>
    );
  };

  const renderContent = () =>{
    if (!isOpened) {
      return null;
    }
    return items.map(item => renderItem(item));
  };

  const changeChevron = () =>{
    if(isOpened)
      return <CaretUpIcon/>;
    return <CaretDownIcon/>;
  }

  const renderChevron = () =>{
    if(canExpand){
      return changeChevron();
    }
    return null;
  }

  const handleOnClick = () =>{
    if(canExpand)
      setIsOpened(!isOpened);
  };

  return (
    <React.Fragment>
      <Menu.Item onClick={handleOnClick}>
        <div className="accordion-header disable-select">
          {title}
          {renderChevron()}
        </div>
      </Menu.Item>    
      {renderContent()}
    </React.Fragment>
  );
}

Accordion.defaultProps = {
  title: LABELS.loremSmall,
  items: [{
    title: LABELS.loremSmall
  }],
  initiallyExpanded: false,
  canExpand: false
}

Accordion.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  initiallyExpanded: PropTypes.bool,
  canExpand: PropTypes.bool
}

export {Accordion};