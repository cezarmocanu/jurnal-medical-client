import {React} from 'react'
import {Link} from 'evergreen-ui';

function BreadcrumbItem ({path,label}) {
  return(
  <Link href={path} marginRight={12}>{label}</Link>
  )
}

export {BreadcrumbItem};