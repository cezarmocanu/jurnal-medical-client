import React from 'react';
import { Page } from '../../page/Page';
import { Card } from '../../card/Card'
import './ArticlePage.scss';
import { LABELS } from '../../../strings';
import {ImageCard} from '../../image-card/ImageCard'
import {Breadcrumb} from '../../breadcrumb/Breadcrumb'
import { Heading,Text } from 'evergreen-ui';

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

      <Card footerText={LABELS.loremSmall}>
        <Heading size={600}>{LABELS.loremSmall}</Heading>
        <Text size={400}>{LABELS.loremMedium}</Text>
      </Card>

      <ImageCard 
        image="https://cdn.dc5.ro/img-prod/230884-0.png"
        headerContent={
          <React.Fragment>
            <Heading size={600}>{LABELS.loremSmall}</Heading>
            <Text size={400}>{LABELS.loremMedium}</Text>
          </React.Fragment>
        }
        footerContent={
          <React.Fragment>
            <Heading size={500}>{LABELS.loremSmall}</Heading>
            <Text size={400} color="muted">{LABELS.loremMedium}</Text>
          </React.Fragment>
        }/>

      <Card footerText={LABELS.loremSmall}>
        <Heading size={600}>{LABELS.loremSmall}</Heading>
        <Text size={400}>{LABELS.loremMedium}</Text>
      </Card>

      <ImageCard 
        image="http://www.felicitaricunume.com/images/nume/dragoste/cezar/dragoste-cezar-529517.jpg"
        headerContent={
          <React.Fragment>
            <Heading size={600}>{LABELS.loremSmall}</Heading>
            <Text size={400}>{LABELS.loremMedium}</Text>
          </React.Fragment>
        }
        footerContent={
          <React.Fragment>
            <Heading size={500}>{LABELS.loremSmall}</Heading>
            <Text size={400} color="muted">{LABELS.loremMedium}</Text>
          </React.Fragment>
        }/>
      <Card/>
      <Card/>
      <Card/>
    </Page>
  )
}

export { ArticlePage };