import React from 'react';
import { Page } from '../../page/Page';
import './ArticlePage.scss';
import { LABELS } from '../../../strings';
import {Breadcrumb} from '../../breadcrumb/Breadcrumb'
import { ArticleCard } from '../../cards/article-card/ArticleCard';

const CRUMBS = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Articole",
    path: "/articole"
  }
]

function ArticlePage() {
  return (
    <Page title={LABELS.articlePage}>
      <Breadcrumb list={CRUMBS}/>

      <ArticleCard/>
    </Page>
  )
}

export { ArticlePage };