import React, {useState} from 'react';
import './CarouselItem.scss';

function CarouselItem() {

    let carouselArr = [1, 2, 3, 4, 5];
    const [x, setX] = useState(0);
    

    return (
        <div className="carousel-item-content">
            {carouselArr.map((item, index) => {
                return (
                    <div key={index} className="slide" style = {{transform: `translateX(${x}%)` }}>
                        {item}
                    </div>
                )
            })
            }
        </div>
    )
}

function OnClickLeft() {
    setX(x + 100);
}

function OnClickRight() {
    setX(x - 100);
}

export { CarouselItem };