import React from 'react';
import { Page } from '../../page/Page';
import { Card } from '../../card/Card'
import './ArticlePage.scss';
import { LABELS } from '../../../strings';
import {Breadcrumb} from '../../breadcrumb/Breadcrumb'

const CRUMBS = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Colectii",
    path: "/colectii"
  }
]

function ArticlePage() {
  return (
    <Page title={LABELS.articlePage}>
      <Breadcrumb list={CRUMBS}/>
      <Card footerText={LABELS.loremSmall}>
        <h3>{LABELS.loremSmall}</h3>
        <h4>{LABELS.loremMedium}</h4>
      </Card>
      <Card/>
      <Card/>
      <Card/>
    </Page>
  )
}

export { ArticlePage };