import { isWebP } from '../common/webp-class.js';
import { isValid, isChecked } from '../common/inp-validation.js';
import { thankYouModal } from '../product-card/modules/one-click-buy-modals.js';
import { libsActiveMain } from './modules/libs-active-main.js';
import { showMoreCards } from './modules/show-more.js';
import { heroSwiper } from './modules/swiper-hero.js';

window.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.callback__form');
  const inputName = document.querySelector('#name');
  const inputPhone = document.querySelector('#phone');
  const inputMail = document.querySelector('#mail');
  const checkBox = document.querySelector('.check__inp');
  const checkCustom = document.querySelector('.check__box');

  const inpPhone = document.querySelector('#phone')
  const mask = new Inputmask("+7 (999) 999 - 99 - 99");
  mask.mask(inpPhone);

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const phoneOnly = inpPhone.inputmask.unmaskedvalue();

    if (!isValid(inputName, phoneOnly) ||
      !isValid(inputPhone, phoneOnly) ||
      !isValid(inputMail, phoneOnly) ||
      !isChecked(checkBox, checkCustom)) {
      return;
    }
    else document.body.append(thankYouModal());
  })

  isWebP();
  libsActiveMain();
  heroSwiper();
  showMoreCards();
})
