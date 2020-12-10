import React,{ useState } from "react";
import PropTypes from 'prop-types';
import {Menu,CaretDownIcon,CaretUpIcon} from 'evergreen-ui'
import './Accordion.css'
import {LABELS} from '../../strings'

function Accordion({title,items,initiallyExpanded,canExpand, style}){

  const [isOpened,setIsOpened] = useState(initiallyExpanded);

  const renderItem = ({title}) => {
    return (
        <div className="disable-select">
          <Menu.Divider/>
          <Menu.Item style={style.item}>{title}</Menu.Item>
        </div>
    );
  };

  const renderContent = () =>{
    if (!isOpened) {
      return null;
    }
    return items.map(item => renderItem(item));
  };

  const handleOnClick = () =>{
    if(canExpand)
      setIsOpened(!isOpened);
  };

  return (
    <React.Fragment>
      <Menu.Item style={style.header} onClick={handleOnClick}>
        <div className="accordion-header disable-select">
          {title}
          {isOpened?<CaretUpIcon/>:<CaretDownIcon/>}
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