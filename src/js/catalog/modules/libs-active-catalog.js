import { slideVisibility } from '../../common/slide-visibility.js';

export const libsActiveCatalog = () => {
  const catalogSwiper = new Swiper('.catalog__swiper', {
    spaceBetween: 16,
    slidesPerView: 2,
    slidesPerGroup: 2,
    watchSlidesProgress: true,

    pagination: {
      el: ".catalog-swiper__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class=${className} role="button" aria-label="Перейти к слайду ${index + 1}" tabindex="0">${(index + 1)}</span>`;
      },
    },

    grid: {
      fill: 'row',
      rows: 3,
    },

    breakpoints: {
      577: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 32,

        grid: {
          fill: 'row',
          rows: 3,
        },
      },
      992: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 32,

        grid: {
          fill: 'row',
          rows: 3,
        },
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
  })

  const rangeSlider = document.querySelector('.price-range__slider');
  const inpPriceFrom = document.querySelector('.price__from-inp');
  const inpPriceTo = document.querySelector('.price__to-inp');
  const inputs = [inpPriceFrom, inpPriceTo];

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [2000, 150000],
      connect: true,
      step: 1,
      range: {
        'min': 500,
        'max': 150000
      }
    });

    rangeSlider.noUiSlider.on('update', (values, handle) => {
      inputs[handle].value = Math.round(values[handle]);
    })

    const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;
      rangeSlider.noUiSlider.set(arr);
    }

    inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value)
      })
    })
  }
}
