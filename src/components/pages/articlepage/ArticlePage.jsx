import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import { Page } from '../../page/Page';
import { Card } from '../../card/Card'
import './ArticlePage.scss';
import { LABELS } from "../../../strings";


function ArticlePage() {
  return (
    <Page title={LABELS.articlePage}>
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