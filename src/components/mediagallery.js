import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const MediaGallery = ({ images }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    // <div className="w-full justify-center items-center">
    <div className="w-full h-full flex items-center justify-center object-center">
      <div className="w-full h-full max-w-4x1 mx-auto mt-20">
        <Slider {...settings} className="rounded-lg overflow-hidden h-full" style={{height:"470px"}}>
          {images.map((item) => (
            <div key={item.id} className="focus:outline-none">
              <img
                src={item.src}
                alt={item.alt}
                className="md:w-3/4 md:h-96 object-center justfy-center mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MediaGallery;
