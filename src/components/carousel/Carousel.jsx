import React, { useState } from 'react';
import { Icon, ChevronLeftIcon, ChevronRightIcon, DotIcon } from 'evergreen-ui'
import { Pane } from 'evergreen-ui'
import './Carousel.scss';
import '../carouselItem/CarouselItem.scss';

function Carousel({ children }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const goLeft = () => {
        const nextSlide = parseInt(Math.max(currentSlide - 1, 0));
        setCurrentSlide(nextSlide);
    };
    const goRight = () => {
        const nextSlide = parseInt(Math.min(currentSlide + 1, children.length - 1));
        setCurrentSlide(nextSlide);
    };

    const goToIndex = (index) =>{
        setCurrentSlide(index);
    }

    const renderDots = () => {
        return children.map((slide, index) => {
            const isSelected = index === currentSlide && "selected-dot";
            return <div key={index} className={`dot ${isSelected}`} onClick={() => {goToIndex(index)}}></div>;
        });
    };


    return (
        <div className="carousel">
            <Pane>
                <div className="carousel-content">
                    {children[currentSlide]}
                </div>
                <div className="controlls">
                    <div>
                        <button className="icon-left" onClick={goLeft}>
                            <Icon
                                icon={ChevronLeftIcon}
                                size={24}
                            />
                        </button>
                    </div>
                    <div>
                        <button className="icon-right" onClick={goRight}>
                            <Icon
                                icon={ChevronRightIcon}
                                size={24}
                            />
                        </button>
                    </div>
                    <div className="button-box">
                        {renderDots()}
                    </div>
                </div>
            </Pane>
        </div>
    )

}

export { Carousel };