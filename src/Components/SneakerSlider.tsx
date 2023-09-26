import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "../../src/Styles/SneakerSlider.module.css";
import sneaker1 from "../assets/Images/image-product-1.jpg";
import sneaker2 from "../assets/Images/sneaker-four.jpg";
import sneaker3 from "../assets/Images/heels-two.jpg";
import sneaker4 from "../assets/Images/image-product-4.jpg";
import sneaker5 from "../assets/Images/image-product-5.jpg";
import sneaker6 from "../assets/Images/heels-one.jpg";

const SneakerSlider = () => {
  const images = [
    { id: 1, image: sneaker1 },
    { id: 2, image: sneaker2 },
    { id: 3, image: sneaker3 },
    { id: 4, image: sneaker4 },
    { id: 5, image: sneaker5 },
    { id: 6, image: sneaker6 },
  ];

  return (
    <>
      <h1 className={styles.heading}>Alags Sneakers</h1>
      <p>
        Welcome to Alags Sneakers, your top destination for the latest stylish
        and comfortable kicks. Express your unique style with every step.
        Whether you're a sneaker enthusiast or looking to upgrade your shoe
        collection, Alags Sneakers has you covered. Step into style{" "}
      </p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.image}
              alt="Your browser doesn't support this image"
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className={styles.headingTwo}>Take a peek at our collections</h2>
    </>
  );
};

export default SneakerSlider;
