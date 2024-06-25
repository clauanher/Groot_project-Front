import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Importa el archivo CSS

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
      label: "Pulses from the Sun – NASA ID: PIA17669",
      imgPath:
        "https://images-assets.nasa.gov/image/PIA17669/PIA17669~small.jpg",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
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
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
          <div className="text-content">
            <h2>Texto a la derecha del carrusel</h2>
            <p>Aquí puedes escribir el texto que desees.</p>
          </div>
        </div>
    </div>
  );
}

export default Carousel;