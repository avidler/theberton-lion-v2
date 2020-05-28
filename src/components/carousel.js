import React from 'react';
import Slider from 'react-slick';
import get from 'lodash/get';
import map from 'lodash/map';
import data from '../data/quotes.yml';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true
}

const Carousel = props => {
    const quotes = data.items;
    console.log("quotes",quotes)
    return (
        <section id={get(props, 'section.section_id')} className={'wrapper alt ' + get(props, 'section.section_id')}>
            <div id="quote-carousel">
                <Slider {...settings}>
                    {map (quotes, (quote, quote_idx) => (
                        <div id={`quote-${quote_idx}`} className="panel">
                            <div className="quote">
                                <h3>{`"${quote.text}"`}</h3>
                                <p>Enjoy your quote</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Carousel;
