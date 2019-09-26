import { getUrlParams, initIntlTelInput } from  './modules/helpers';
import { emailIsValid, setInputFilter } from  './modules/form-validation';

document.addEventListener("DOMContentLoaded", function() {
  let phoneItl = initIntlTelInput(document.querySelector('[type=tel]'));
  const $inputName = document.querySelector('#age');

  setInputFilter($inputName, function (value) {
    return /^\d*\.?\d*$/.test(value);
  });

  initSubmitForm(phoneItl);
});

function initSubmitForm(phoneIti) {
  document.querySelector('.js-create-order-submit').addEventListener('click', function () {
    const $inputPhone = document.querySelector('[type=tel]');
    const $inputEmail = document.querySelector('[type=email]');

    if (getUrlParams().clinicId) {
      alert(`clinicId: ${getUrlParams().clinicId}`);
    }

    if (phoneIti.isValidNumber($inputPhone.value)) {
      alert('is valid number');
    } else {
      alert('not valid number');
    }

    if (!emailIsValid($inputEmail.value)) {
      alert('not valid email');
    } else {
      alert('email is valid');
    }
  });
}
