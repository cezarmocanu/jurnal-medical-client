import React from 'react';
import { Page } from '../../page/Page';
import './HomePage.scss';
import { LABELS } from '../../../strings';
import { Breadcrumb } from '../../breadcrumb/Breadcrumb';
import { Carousel } from '../../carousel/Carousel';
import { CarouselItem } from '../../carouselItem/CarouselItem';

const CRUMBS = [
  {
    label: "Home",
    path: "/"
  }
]

function HomePage() {
  
  return (
    <Page title={LABELS.homePage}>
      <Breadcrumb list={CRUMBS} />
      < Carousel >
        <CarouselItem description= {LABELS.loremSmall} title={LABELS.loremSmall} backgroundImage="https://cdn.dc5.ro/img-prod/230884-0.png"/>
        <CarouselItem description= {LABELS.loremSmall} title={LABELS.loremSmall} backgroundImage="http://www.felicitaricunume.com/images/nume/dragoste/cezar/dragoste-cezar-529517.jpg"/>
        <CarouselItem description= {LABELS.loremSmall} title={LABELS.loremSmall} backgroundImage="https://cdn2.img.sputnik.md/images/1132/25/11322505.jpg"/>
        <CarouselItem/>
      </Carousel>
    </Page>
  )
}

export { HomePage };