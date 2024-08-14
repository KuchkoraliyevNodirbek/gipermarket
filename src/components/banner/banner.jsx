import React from "react";
import Slider from "react-slick";
import { usegetBanner } from "./service/usegetBanner";

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const { data } = usegetBanner();

  

  return (
    <div>
      <Slider {...settings}>
        {data?.map((banner) => (
          <div key={banner.id}>
            <img src={banner.img} alt={`Banner`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
