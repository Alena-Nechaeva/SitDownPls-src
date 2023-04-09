import { slideVisibility } from '../../common/slide-visibility.js';

export const heroSwiper = () => {
  const swiperHero = new Swiper('.hero__swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.hero__swiper-pagination',
      bulletClass: 'swiper-pagination-bullet-custom',
      bulletActiveClass: 'swiper-pagination-bullet-custom--active',
      renderBullet: function (index, className) {
        return `<div class="${className}" data-index="${index}" tabindex="0" role="button">
        <svg viewbox="0 0 20 20">
        <circle r="7" cx="10" cy="10" fill="none" stroke-width="2" stroke="#ff862f"/>
        </svg>
        </div>`
      },
      clickable: true
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
        this.el.style.setProperty('--delay', this.params.autoplay.delay);
        slideVisibility(this.slides);
      },
      slideChange() {
        slideVisibility(this.slides);
      }
    }
  })
}
