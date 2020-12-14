import React from 'react';
import './CarouselItem.scss';
import { Pane } from 'evergreen-ui'

function CarouselItem({ title, description, backgroundImage, link }) {
    return (
        <Pane>
            <h1 className="title">{title}</h1>
            <h2 className="description">{description}</h2>
            <img className="carousel-image"src={backgroundImage} alt={title} />
        </Pane>
    )
}



export { CarouselItem };