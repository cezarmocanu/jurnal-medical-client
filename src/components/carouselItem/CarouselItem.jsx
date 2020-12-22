import React from 'react';
import './CarouselItem.scss';
import { Pane } from 'evergreen-ui';
import { Heading, Text } from 'evergreen-ui';

function CarouselItem({ title, description, backgroundImage, link }) {
    return (
        <Pane className="carousel-item">
            <Heading size={800} className="title">{title}</Heading>
            <Text size={600} className="description">{description}</Text>
            <img className="carousel-image" src={backgroundImage} alt={title} />
        </Pane>
    )
}



export { CarouselItem };