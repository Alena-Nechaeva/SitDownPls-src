import { cartAndLogin } from './cart-&-login.js';
import { createLogo320 } from './logo-320.js';

export const onResizeHeader = () => {
  const cartLogin = cartAndLogin();
  const headerItem3 = document.querySelector('.header__item-3');
  const list1Wrap = document.querySelector('.list-1-wrap');
  const burger = document.querySelector('.burger');
  const headerItem2 = document.querySelector('.header__item-2');
  const headerItem1 = document.querySelector('.header__item-1-content');
  const logoMobile = createLogo320();

  const isChangingHeader = () => {
    if (window.innerWidth > 1300) {
      headerItem3.appendChild(cartLogin);
    }

    if (window.innerWidth <= 1300) {
      list1Wrap.appendChild(cartLogin);
    }

    if (window.innerWidth <= 992) {
      burger.classList.add('is-active');
      headerItem2.appendChild(cartLogin);
    } else {
      burger.classList.remove('is-active');
    }

    if (window.innerWidth <= 576) {
      headerItem1.prepend(logoMobile);
    } else {
      if (headerItem1.contains(logoMobile)) {
        headerItem1.removeChild(logoMobile);
      }
    }
  }

  isChangingHeader();

  window.addEventListener('resize', () => {
    isChangingHeader();
  })
}
