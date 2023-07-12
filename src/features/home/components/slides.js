import React from 'react';

import "./slides.css";

const Slides = ({slideCount, currentSlide, click}) => {
    const slides = new Array(slideCount).fill(0);

    return (
        <div className="slide">
            {slides.map((_,i) => {
                return <div key={i} className={currentSlide===i?"circle current":"circle"} onClick={() => click(i)}></div>
            })}
        </div>
    );
}


export default Slides;