import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const testimonialsSlider = new Swiper(".testimonials__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".testimonials__next",
  },
});
