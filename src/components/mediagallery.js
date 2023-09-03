import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';

const MediaGallery = ({ images }) => {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="w-full bg-blue-900 py-16" style={{ backgroundColor:'#e1eedd'}}>
            <div className="container mx-auto">
                <div className="w-full md:w-2/3 mx-auto">
                    <Slider {...settings} className="rounded-lg overflow-hidden">
                        {images.map((item) => (
                            <div key={item.id} className="focus:outline-none">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-auto md:h-96 object-cover object-center"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default MediaGallery;
