import React, { useState } from 'react';
import { Icon, ChevronLeftIcon, ChevronRightIcon, DotIcon } from 'evergreen-ui'
import { Pane } from 'evergreen-ui'
import './Carousel.scss';
import '../carouselItem/CarouselItem.scss';

function Carousel({ children }) {

    const goLeft = () => {
        const nextIndex = parseInt(Math.max(currentIndex - 1, 0));

        setCurrentIndex(nextIndex);
    };
    const goRight = () => {
        const nextIndex = parseInt(Math.min(currentIndex + 1, children.length - 1));
        setCurrentIndex(nextIndex);
    };

    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <div className="carousel">
            <Pane>
                <div className="carousel-content">
                    {children[currentIndex]}
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
                    <button className="button"><Icon icon={DotIcon} size={24} /></button>
                    <button className="button"><Icon icon={DotIcon} size={24} /></button>
                    <button className="button"><Icon icon={DotIcon} size={24} /></button>
                    <button className="button"><Icon icon={DotIcon} size={24} /></button>
                        
                    </div>
                </div>
            </Pane>
        </div>
    )

}

export { Carousel };