import { isWebP } from '../common/webp-class.js';
import { libsActiveCard } from './modules/libs-active-card.js';
import { oneClickBuyModal } from './modules/one-click-buy-modals.js';


window.addEventListener('DOMContentLoaded', () => {
  const increaseSwiperBtns = document.querySelectorAll('.product__swiper-btn');
  const swiperModCloseBtn = document.querySelector('.swiper-modal__close');
  const buyInOneClickBtn = document.querySelector('.product__buy');

  isWebP();
  libsActiveCard();

  increaseSwiperBtns.forEach(elem => {
    elem.addEventListener('click', () => {
      document.querySelector('.swiper-for-modal').style.display = 'block';
    })
  })

  swiperModCloseBtn.addEventListener('click', () => {
    document.querySelector('.swiper-for-modal').style.display = 'none';
  })

  buyInOneClickBtn.addEventListener('click', () => {
    document.body.append(oneClickBuyModal());
  })
})

