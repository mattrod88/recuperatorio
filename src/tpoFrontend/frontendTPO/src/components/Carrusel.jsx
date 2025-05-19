import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 50,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
      <div className="container mt-7 w-full">
        <div className="flex">
          <div className="md:w-3/4 w-full my-0">
          <Slider {...settings}>
            <div>
            <img
              className="w-full h-[400px] object-cover object-right rounded-lg md:rounded-l-lg md:rounded-r-none"
              src="/almendras.jpg"
            />
            </div>
            <div>
            <img
              className="w-full h-[400px] object-cover object-right rounded-lg md:rounded-l-lg md:rounded-r-none"
              src="pistachos.jpg"
            />
            </div>
            <div>
            <img
              className="w-full h-[400px] object-cover object-right rounded-lg md:rounded-l-lg md:rounded-r-none"
              src="avellana.jpg"
            />
            </div>
            </Slider>
          </div>
        </div>
      </div>
  );
}