const getUrlParams = () => {
  let params = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    params[key] = value;
  });
  return params;
}
const initIntlTelInput = elemDOM => {
  const defaultCountry = localStorage.getItem('countryIso') || 'ua';
  const setInputMask = mask => {
    let im = new window.Inputmask(mask.replace(/[0-9]/g, "9"));
    im.mask(elemDOM);
  }
  let iti = window.intlTelInput(elemDOM, {
    initialCountry: defaultCountry,
    preferredCountries: ['ua', 'ru', 'by', 'kz'],
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.2/js/utils.js',
    separateDialCode: true,
    customPlaceholder: selectedCountryPlaceholder => selectedCountryPlaceholder.replace(/[0-9]/g, "0")
  });
  iti.promise.then(() => {
    setInputMask(elemDOM.placeholder);
  });
  elemDOM.addEventListener("countrychange", () => {
    setInputMask(elemDOM.placeholder);
    localStorage.setItem('countryIso', iti.getSelectedCountryData().iso2.toUpperCase());
  });
  return iti;
}

export {
  getUrlParams,
  initIntlTelInput
}