import Swiper from "swiper/bundle";

const createSwiper = (selector, options = {}) => {
  const config = {
    loop: true,

    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // pagination: {
    //   el: ".swiper-pagination",
    // },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    ...options,
  };
  return new Swiper(selector, config);
};

export default createSwiper;
