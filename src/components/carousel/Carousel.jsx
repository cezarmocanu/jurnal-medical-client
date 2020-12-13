import React, { useState } from 'react';
import { Icon, ChevronLeftIcon, ChevronRightIcon } from 'evergreen-ui'
import { Pane } from 'evergreen-ui'
import { CarouselItem } from '../carouselItem/CarouselItem';
import './Carousel.scss';
import '../carouselItem/CarouselItem.scss';

function Carousel() {
    
    



    return (
        <div className="carousel">
            <Pane>
                <div className="controlls">
                    <div>
                        <button className="icon-left" >
                            <Icon
                                icon={ChevronLeftIcon}
                                size={24}
                            />
                        </button>
                    </div>
                    <div>
                        <button className="icon-right" >
                            <Icon
                                icon={ChevronRightIcon}
                                size={24}
                            />
                        </button>
                    </div>
                </div>
                <div>
                    <CarouselItem/>
                    
                </div>
            </Pane>
        </div>
    )

}

export { Carousel };