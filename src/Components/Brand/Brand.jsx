import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brand1 from '/src/assets/brands/brand_1.png';
import Brand2 from '/src/assets/brands/brand_2.png';
import Brand3 from '/src/assets/brands/brand_3.png';
import Brand4 from '/src/assets/brands/brand_4.png';
import Brand5 from '/src/assets/brands/brand_5.png';
import Brand6 from '/src/assets/brands/brand_6.png';

const brandLogos = [
    
    {
        id: 1,
        src: Brand1,
    },
    {
        id: 2,
        src: Brand2,
    },
    {
        id: 3,
        src: Brand3,
    },
    {
        id: 4,
        src: Brand4,
    },
    {
        id: 5,
        src: Brand5,
    },
    {
        id: 6,
        src: Brand6,
    },
  
];

const Brand = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="mx-4 relative bg-slate-100 py-6 overflow-hidden rounded-xl">
  <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white via-white to-transparent z-10" />
  <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white via-white to-transparent z-10" />

  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    <Slider {...settings}>
      {brandLogos.map((logo, index) => (
        <div key={index} className="px-4">
          <img
            src={logo.src}
            alt={`Brand ${index}`}
            className="w-full h-20 object-contain mx-auto grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      ))}
    </Slider>
  </div>
</div>

  );
};

export default Brand;
