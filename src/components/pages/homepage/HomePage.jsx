import React from 'react';
import { Page } from '../../page/Page';
import './HomePage.scss';
import { LABELS } from '../../../strings';
import { Carousel } from '../../carousel/Carousel';
import { CarouselItem } from '../../carouselItem/CarouselItem';
import { Button, Heading, Text, CaretRightIcon } from 'evergreen-ui';

function HomePage() {
  
  return (
    <Page title={LABELS.homePage} className="home-page">
      <div className="jumbotron">
        <div className="title">
          <Heading size={900}>{LABELS.loremTitle(5)}</Heading>
        </div>
        <div className="call-to-action">
          <Text size={600}>{LABELS.lorem(30)}</Text>
        </div>
        <div className="actions">
          <Button iconBefore={CaretRightIcon} appearance="primary">{LABELS.seeCollections}</Button>
        </div>
      </div>
      <Carousel className="home-carousel">
        <CarouselItem description={LABELS.lorem(5)} title={LABELS.loremTitle(4)} backgroundImage="https://www.reginamaria.ro/sites/default/files/2020-03/iasi-2.jpg"/>
        <CarouselItem description={LABELS.lorem(5)} title={LABELS.loremTitle(4)} backgroundImage="https://www.charisma.ro/upload/img/contents/thumb/clinica-1474449475.jpg"/>
        <CarouselItem description={LABELS.lorem(5)} title={LABELS.loremTitle(4)} backgroundImage="https://estimamedical.ro/wp-content/uploads/2018/03/operatii-1.jpg"/>
      </Carousel> 
    </Page>
  )
}

export { HomePage };