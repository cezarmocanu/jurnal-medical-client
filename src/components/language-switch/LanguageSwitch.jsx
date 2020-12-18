import React, { useState } from 'react';
import {Dialog,Checkbox,Text,Menu,toaster} from 'evergreen-ui'
import { LABELS } from '../../strings';
import './LanguageSwitch.scss';

const ITEMS = [
  "English",
  "Deutsch",
  "Romana"
];

function LanguageSwitch ({isOpened,onClose}) {

  const [items,setItems] = useState(ITEMS);
  const [selectedOption,setSelectedOption] = useState(items[0]);

  const handleSelect = (item) => {
    setSelectedOption(item);
  };

  const renderItems = () => {
    return items.map((item) => {
      const isChecked = item === selectedOption;
      return (
        <React.Fragment>
          <div
            onClick={()=>{
              handleSelect(item);
              toaster.success(LABELS.yourLanguageHasChanged)
              onClose();
            }}
            className={`language-field ${isChecked && 'checked'}`}>
            <Text size={500}>{item}</Text>
            <Checkbox checked={isChecked}/>
          </div>
          <Menu.Divider/>
        </React.Fragment>
      );
    });
  }

  if (!isOpened) {
    return null;
  }

  return (
      <Dialog
        isShown={isOpened}
        title={LABELS.selectLanguage}
        onCloseComplete={onClose}
        hasFooter={false}
        containerProps={{
          className:"language-dialog"
        }}
        contentContainerProps={{
          className:"dialog-content"
        }}
      >
          {renderItems()} 
      </Dialog>
    );
}

export {LanguageSwitch};