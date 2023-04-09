import { slideVisibility } from '../../common/slide-visibility.js';

export const libsActiveCard = () => {
  const similarSwiper = new Swiper('.similar__swiper', {
    slidesPerGroup: 2,
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
      nextEl: '.similar__next',
      prevEl: '.similar__prev'
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
        slidesPerView: 4,
        slidesPerGroup: 4,
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


  const swiperShowProduct = new Swiper(".product__swiper-sm", {
    loop: false,
    spaceBetween: 18,
    slidesPerView: 2.4,
    direction: 'horizontal',
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
      710: {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 18,
      },
      992: {
        direction: 'horizontal',
        slidesPerView: 3.5,
        spaceBetween: 38,
      },
      1300: {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 38,
      },
    },
  });

  const swiperShowSm = new Swiper(".product__swiper-large", {
    loop: false,
    spaceBetween: 10,
    thumbs: {
      swiper: swiperShowProduct,
    },
    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }
  });

  const swiperModalProduct = new Swiper(".swiper-modal__sm", {
    loop: false,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-modal__next',
      prevEl: '.swiper-modal__prev'
    },

    breakpoints: {
      710: {
        slidesPerView: 2,
        spaceBetween: 78,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 78,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 78,
      },
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
  });

  const swiperModalSm = new Swiper(".swiper-modal__large", {
    loop: false,
    spaceBetween: 10,
    thumbs: {
      swiper: swiperModalProduct,
    },
    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }
  });
}
