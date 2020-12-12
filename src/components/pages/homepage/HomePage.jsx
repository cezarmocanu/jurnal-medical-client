import React from 'react';
import { Page } from '../../page/Page';
import './HomePage.scss';
import {LABELS} from '../../../strings'
import {Breadcrumb} from '../../breadcrumb/Breadcrumb'

const CRUMBS = [
    {
      label: "Home",
      path: "/"
    }
  ]

function HomePage() {
    return (
        <Page title = {LABELS.homePage}>
            <Breadcrumb list={CRUMBS}/>
        </Page>
    )
}

export { HomePage };