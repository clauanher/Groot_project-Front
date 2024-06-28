import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; 

function Carousel() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const play = () => {
    sliderRef.current.slickPlay();
  };

  const pause = () => {
    sliderRef.current.slickPause();
  };

  const slides = [
    {
      label: "STAR",
      imgPath:
        "/amarillo.jpg",

    },
    {
      label: "STAR WALK",
      imgPath:
        "/camino.jpg",
    },
   
    {
      label: "PROCYON",
      imgPath:
        "/lila.png",
    },
    {
      label: "STAR",
      imgPath:
        "/estrella.jpg",

    },
    {
      label: "CONSTELACIÓN",
      imgPath:
        "/color.png",
    },
  ];

  return (
    <div className="container">
        <div className="carousel-container">
          <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img
                src={slide.imgPath}
                alt={slide.label}
                style={{ width: "100%", height: "100%" }}
              />
              <h3>{slide.label}</h3>
            </div>
          ))}
        </Slider>
          <div className="text-content">
            <h1>ÑAM ÑAM ÑAM</h1>
           
          </div>
        </div>
    </div>
  );
}

export default Carousel;