import { slideVisibility } from '../../common/slide-visibility.js';

export const libsActiveMain = () => {
  const offersSwiper = new Swiper('.offers__swiper', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    navigation: {
      nextEl: '.offers__next',
      prevEl: '.offers__prev'
    },
    breakpoints: {
      705: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 32,
      },

      993: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 32,
      },

      1300: {
        slidesPerGroup: 3,
        slidesPerView: 'auto',
        spaceBetween: 32,
      }
    },
    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideVisibleClass: "slide-visible",
    on: {
      init() {
        slideVisibility(this.slides);
      },
      slideChange() {
        slideVisibility(this.slides);
      }
    }
  })

  const usefulSwiper = new Swiper('.useful__swiper', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    navigation: {
      nextEl: '.useful__next',
      prevEl: '.useful__prev'
    },
    breakpoints: {
      660: {
        slidesPerView: 2,
        spaceBetween: 32,
      },

      993: {
        slidesPerView: 3,
        spaceBetween: 32,
      },

      1300: {
        slidesPerView: 2,
        spaceBetween: 32,
      }
    },
    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideVisibleClass: "slide-visible",
    on: {
      init() {
        slideVisibility(this.slides);
      },
      slideChange() {
        slideVisibility(this.slides);
      }
    }
  })

  tippy('.callback__descr-btn', {
    content: "Реплицированные с зарубежных источников, исследования формируют глобальную сеть.",
    theme: 'violet',
    animation: 'shift-away',
  });
}
