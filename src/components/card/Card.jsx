import React from 'react'
import { Pane} from 'evergreen-ui';
import './Card.scss';
import PropTypes from 'prop-types';
import { LABELS } from "../../strings";


function Card({onClick,headerTitle,footerText,children,className}) {
  const renderFooter = () => {
    if ( footerText === "" || footerText === undefined || footerText === null) {
      return null;
    }
    
    return (
      <Pane 
        className="card-row card-footer"
        elevation="0"
      >
        <h4>{footerText}</h4>
      </Pane>
      )
  }

  return (
    <Pane
        onClick={onClick}
        className={`card ${className}`}
        elevation={4}
      >
        <Pane 
        className="card-row card-header"
        elevation={0}
        >
          <h3>{headerTitle}</h3>
        </Pane>

        <Pane 
        className="card-row card-content"
        elevation={0}
        >
          {children}
        </Pane>
      
        {renderFooter()}

      </Pane>
  )
}

Card.defaultProps = {
  headerTitle: PropTypes.string.isRequired,
  footerText: PropTypes.string
}

Card.defaultProps = {
  headerTitle: LABELS.loremSmall
}

export {Card};