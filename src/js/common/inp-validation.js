export const isValid = (input, phoneNumber) => {
  let inpVal = input.value;
  let label = input.closest('label')
  const regExpName = /^[а-яА-ЯёЁ\s]+$/;
  const regExpMail = /(\W|^)[\w.\-]{0,40}@(yahoo|hotmail|gmail|bk|mail|yandex|outlook)\.com|.ru(\W|$)/;

  input.addEventListener('input', () => {
    label.classList.remove('invalid', 'valid');
  })

  if (input.id === 'name') {
    if (regExpName.test(inpVal)) {
      label.classList.add('valid');
      label.classList.remove('invalid');
      return true;
    } else {
      label.classList.remove('valid');
      label.classList.add('invalid');
      return false;
    }
  }

  if (input.id === 'mail') {
    if (regExpMail.test(inpVal)) {
      label.classList.add('valid');
      label.classList.remove('invalid');
      return true;
    } else {
      label.classList.remove('valid');
      label.classList.add('invalid');
      return false;
    }
  }

  if (input.id === 'phone') {
    if (phoneNumber.length === 10) {
      label.classList.add('valid');
      label.classList.remove('invalid');
      return true;
    } else {
      label.classList.remove('valid');
      label.classList.add('invalid');
      return false;
    }
  }
}

export const isChecked = (input, span) => {
  if (input.checked) {
    span.classList.remove('invalid');
    return true;
  }
  else {
    span.classList.add('invalid');
    return false;
  }
}

