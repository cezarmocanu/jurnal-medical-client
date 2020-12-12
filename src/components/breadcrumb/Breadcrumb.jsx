import {React} from 'react'
import {BreadcrumbItem} from '../breadcrumbItem/BreadcrumbItem'
import {ChevronRightIcon} from 'evergreen-ui';
import './Breadcrumb.scss'

function Breadcrumb ({list}) {

  const renderItems = () => {
    return list.map((item,index) => (
      <div className="breadcrumb">
        <BreadcrumbItem path={item.path} label={item.label}/>
        {index!==list.length-1?<ChevronRightIcon/>:null}
      </div>
      )
    );
  };

  return(
    renderItems()
  )
}

export {Breadcrumb};