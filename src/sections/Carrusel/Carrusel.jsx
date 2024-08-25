import Slider1 from "./Slider1";
import { Carousel } from "flowbite-react";
import product1 from "../../assets/1.png";
import product2 from "../../assets/2.png";
import product3 from "../../assets/3.png";
import product4 from "../../assets/4.png";
import product5 from "../../assets/5.png";
import product6 from "../../assets/6.png";
import PropTypes from "prop-types";
import { useState, lazy, useEffect } from "react";
import LazyImage from "@/components/LazyImage/LazyImage";

const customTheme = {
  scrollContainer: {
    base: "flex h-auto w-full snap-mandatory scroll-smooth rounded-none",
    snap: "snap-x",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full transition bg-naranjaBotonYSubProductos/30 group-hover:bg-naranjaNav/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-naranjaNav dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-letraMarron dark:text-gray-800 sm:h-6 sm:w-6",
  },
};

// Extracción de las imágenes
const IMAGES2 = {
  mobile: [product1, product2, product3, product4, product5, product6],
  slider1: [product1, product2, product3],
  slider2: [product4, product5, product6],
};

const ImageCarousel = ({ images, className }) => (
  <Carousel theme={customTheme} slideInterval={5000} pauseOnHover>
    {images.map((imageSet, index) => (
      <Slider1 key={index} imagenes={imageSet} className={className} />
    ))}
  </Carousel>
);

const ImageCarouselMovil = ({ images, className }) => {
  return (
    <Carousel theme={customTheme} slideInterval={5000} pauseOnHover>
      {images.mobile.map((imagen, index) => {
        return (
          <div className="relative flex w-full" key={index}>
            <LazyImage src={imagen} alt={`Imagen ${index + 1}`} />
          </div>
        );
      })}
    </Carousel>
  );
};
const Carrusel = ({ images }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es mobile o no, y actualizar el estado
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Llamar para inicializar

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {!isMobile ? (
        <ImageCarousel
          images={[IMAGES2.slider1, IMAGES2.slider2]}
          className="relative flex w-full"
        />
      ) : (
        <ImageCarouselMovil images={IMAGES2} />
      )}
    </>
  );
};
ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  className: PropTypes.string,
};

export default Carrusel;
