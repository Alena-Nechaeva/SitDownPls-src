export const createLogo320 = () => {
  const parent = document.createElement('div');
  const linkWrap = document.createElement('a');
  const logoImg = document.createElement('img');

  parent.classList.add('logo-wrap');
  linkWrap.classList.add('header__logo-mobile');
  linkWrap.href = 'index.html';
  logoImg.src = 'img/svg/logo.svg';
  logoImg.alt = 'logo';

  linkWrap.appendChild(logoImg);
  parent.prepend(linkWrap);

  return parent;
}
