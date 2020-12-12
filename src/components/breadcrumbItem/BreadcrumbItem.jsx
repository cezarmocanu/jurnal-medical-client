import {React} from 'react'
import {Link} from 'evergreen-ui';
import './BreadcrumbItem.scss'

function BreadcrumbItem ({path,label}) {
  return(
    <div className="breadcrumb-item">
      <Link href={path}>{label}</Link>
    </div>  
  )
}

export {BreadcrumbItem};