import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.banners__swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  wrapperClass: 'banners__list',
  
  // If we need pagination
  pagination: {
    el: '.banners__pagination',
    bulletActiveClass: 'slider-pagination__button--big',
    bulletClass: 'slider-pagination__button',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.banners__arrow--right',
    prevEl: '.banners__arrow--left',
  },
});

const popularswiper = new Swiper('.popular__swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  
  breakpoints: {
    1728: {
      slidesPerView: 3,
      spaceBetween: 67,
      centeredSlides: true,
    },
  },
  
  // If we need pagination
  pagination: {
    el: '.popular__slider-pagination',
    bulletActiveClass: 'slider-pagination__button--big',
    bulletClass: 'slider-pagination__button',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.popular__arrow--right',
    prevEl: '.popular__arrow--left',
  },
});