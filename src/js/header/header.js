import { onResizeHeader } from './modules/on-resize-header.js';
import { libsActiveHeader } from './modules/libs-active-header.js';

window.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const navCloseBtn = document.querySelector('.nav__close');

  onResizeHeader();
  libsActiveHeader();

  burger.addEventListener('click', () => {
    nav.classList.add('is-open');
    navCloseBtn.classList.add('is-active');
    document.body.classList.add('is-menu-open');
  })

  burger.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      nav.classList.add('is-open');
      navCloseBtn.classList.add('is-active');
      document.body.classList.add('is-menu-open');
    }
  })

  navCloseBtn.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navCloseBtn.classList.remove('is-active');
    document.body.classList.remove('is-menu-open');
  })
})
