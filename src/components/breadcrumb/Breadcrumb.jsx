import React from 'react';
import {BreadcrumbItem} from '../breadcrumb-item/BreadcrumbItem'
import {ChevronRightIcon} from 'evergreen-ui';
import './Breadcrumb.scss'

function Breadcrumb ({list}) {

  const renderItems = () => {
    
    return list.map((item,index) => {
      const hasChevron = index !== list.length - 1;
      return (
        <React.Fragment>
          <BreadcrumbItem path={item.path} label={item.label}/>
          {hasChevron && <ChevronRightIcon/>}
        </React.Fragment>
      )
    })
  }

  return (
    <div className="breadcrumb">
      {renderItems()}
    </div>
  )
}

export {Breadcrumb};