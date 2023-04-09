import { isValid, isChecked } from '../../common/inp-validation.js';

export const oneClickBuyModal = () => {
  const modal = document.createElement('div');
  const modalConntent = document.createElement('div');
  const closeBtn = document.createElement('button');
  const modalTitle = document.createElement('h2');
  const modalDescr = document.createElement('p');
  const form = document.createElement('form');
  const labelName = document.createElement('label');
  const inpName = document.createElement('input');
  const labelPhone = document.createElement('label');
  const inpPhone = document.createElement('input');
  const btnSend = document.createElement('button');
  const labelCheck = document.createElement('label');
  const inpCheck = document.createElement('input');
  const customCheck = document.createElement('span');
  const labelCheckText = document.createElement('span');

  const mask = new Inputmask("+7 (999) 999 - 99 - 99");
  mask.mask(inpPhone);

  modal.classList.add('modal', 'site-modal', 'modal-animation');
  modalConntent.classList.add(
    'modal__content',
    'site-modal__content',
    'site-modal__content-buy',
    'modal-animation'
  );
  closeBtn.classList.add('modal__close');
  modalTitle.classList.add('modal__title');
  modalDescr.classList.add('modal__descr');
  form.classList.add('modal__form');
  labelName.classList.add('modal__label');
  inpName.classList.add('modal__inp');
  labelPhone.classList.add('modal__label');
  inpPhone.classList.add('modal__inp');
  btnSend.classList.add('modal__btn-send');
  labelCheck.classList.add('modal__check', 'check');
  inpCheck.classList.add('modal__check-inp', 'check__inp');
  customCheck.classList.add('modal__custom-check', 'check__box');
  labelCheckText.classList.add('modal__check-txt');

  labelCheckText.innerHTML = `Принимаю <a href="#" class="agreement-link">пользовательское соглашение</a>`
  closeBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3812 0.397739L11.2581 9.03977C11.8029 9.57009 11.8029 10.4299 11.2581 10.9602L2.3812 19.6023C1.83647 20.1326 0.953281 20.1326 0.408549 19.6023C-0.136183 19.0719 -0.136183 18.2121 0.408549 17.6818L8.29914 10L0.40855 2.31819C-0.136182 1.78787 -0.136181 0.928057 0.408551 0.397739C0.953283 -0.13258 1.83647 -0.13258 2.3812 0.397739Z"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6188 0.397739L8.74188 9.03977C8.19715 9.57009 8.19715 10.4299 8.74188 10.9602L17.6188 19.6023C18.1635 20.1326 19.0467 20.1326 19.5914 19.6023C20.1362 19.0719 20.1362 18.2121 19.5914 17.6818L11.7009 10L19.5914 2.31819C20.1362 1.78787 20.1362 0.928057 19.5914 0.397739C19.0467 -0.13258 18.1635 -0.13258 17.6188 0.397739Z"/>
  </svg>
  `
  closeBtn.tabIndex = '0';
  modalTitle.textContent = 'Купить в один клик';
  modalDescr.textContent = 'Чтобы оформить заказ — заполните формы ниже и наш менеджер свяжется с вами в течении часа.';
  inpCheck.type = 'checkbox';
  inpName.placeholder = 'Как вас зовут?';
  inpPhone.placeholder = 'Ваш телефон';
  btnSend.textContent = 'Отправить';
  inpPhone.id = 'phone';
  inpName.id = 'name';

  labelName.append(inpName);
  labelPhone.append(inpPhone);
  labelCheck.append(inpCheck, customCheck, labelCheckText)
  form.append(labelName, labelPhone, btnSend, labelCheck)
  modalConntent.append(closeBtn, modalTitle, modalDescr, form);
  modal.append(modalConntent);

  closeBtn.addEventListener('click', () => {
    modal.remove();
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const phoneOnly = inpPhone.inputmask.unmaskedvalue();

    if (!isValid(inpName, phoneOnly) ||
      !isValid(inpPhone, phoneOnly) ||
      !isChecked(inpCheck, customCheck)) {
      return;
    }
    else {
      modal.remove();
      document.body.append(thankYouModal());
    }
  })

  return modal;
}

export const thankYouModal = () => {
  const modal = document.createElement('div');
  const modalConntent = document.createElement('div');
  const closeBtn = document.createElement('button');
  const modalTitle = document.createElement('h2');
  const modalImg = document.createElement('div')


  modal.classList.add('modal', 'site-modal', 'modal-animation');
  modalConntent.classList.add(
    'modal__content',
    'site-modal__content',
    'site-modal__content-thankyou',
    'modal-animation'
  );
  closeBtn.classList.add('modal__close');
  modalTitle.classList.add('modal__title', 'modal__title-thankyou');
  modalImg.classList.add('modal__img')

  closeBtn.tabIndex = '0';
  closeBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3812 0.397739L11.2581 9.03977C11.8029 9.57009 11.8029 10.4299 11.2581 10.9602L2.3812 19.6023C1.83647 20.1326 0.953281 20.1326 0.408549 19.6023C-0.136183 19.0719 -0.136183 18.2121 0.408549 17.6818L8.29914 10L0.40855 2.31819C-0.136182 1.78787 -0.136181 0.928057 0.408551 0.397739C0.953283 -0.13258 1.83647 -0.13258 2.3812 0.397739Z"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6188 0.397739L8.74188 9.03977C8.19715 9.57009 8.19715 10.4299 8.74188 10.9602L17.6188 19.6023C18.1635 20.1326 19.0467 20.1326 19.5914 19.6023C20.1362 19.0719 20.1362 18.2121 19.5914 17.6818L11.7009 10L19.5914 2.31819C20.1362 1.78787 20.1362 0.928057 19.5914 0.397739C19.0467 -0.13258 18.1635 -0.13258 17.6188 0.397739Z"/>
  </svg>
  `

  modalTitle.textContent = 'Спасибо, мы вам перезвоним!';
  modalImg.innerHTML = `<svg><use xlink:href="img/sprite.svg#elefant" /></svg>`

  modalConntent.append(closeBtn, modalImg, modalTitle);
  modal.append(modalConntent);

  closeBtn.addEventListener('click', () => {
    modal.remove();
  })

  return modal;
}


