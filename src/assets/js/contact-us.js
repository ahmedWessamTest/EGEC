document.addEventListener("DOMContentLoaded", function () {
  const phoneInputField = document.getElementById("phoneInput");
  let telInit;

  // Initialize intlTelInput
  if (window.intlTelInput && phoneInputField) {
    telInit = window.intlTelInput(phoneInputField, {
      initialCountry: "eg",
      preferredCountries: ["eg", "sa", "ae"],
      separateDialCode: true,
      utilsScript: "../../../node_modules/intl-tel-input/build/js/utils.js",
    });
  }
  // Form Elements
  const name = document.getElementById("nameInput");
  const email = document.getElementById("emailInput");
  const phone = document.getElementById("phoneInput");
  const country = document.getElementById("countries");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const countryError = document.getElementById("countryError");
  const messageError = document.getElementById("messageError");

  // Validation functions
  function validateName() {
    if (name.value.trim().length < 3) {
      nameError.classList.remove("hidden");
      return false;
    } else {
      nameError.classList.add("hidden");
      return true;
    }
  }

  function validateEmail() {
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
    if (!emailRegex.test(email.value.trim())) {
      emailError.classList.remove("hidden");
      return false;
    } else {
      emailError.classList.add("hidden");
      return true;
    }
  }

  function validatePhone() {
  const phoneValue = phone.value.trim();

  const countryData = telInit.getSelectedCountryData();
  const dialCode = countryData?.dialCode || "20";

  const phoneWithCode = `+${dialCode}${phoneValue}`;

  const egyptRegex = /^01[0152]\d{8}$/;

  let isValid = false;
isValid = egyptRegex.test(phoneValue);

  if (!isValid) {
    phoneError.classList.remove("hidden");
    console.log(`❌ Invalid number: ${phoneWithCode}`);
    return false;
  } else {
    phoneError.classList.add("hidden");
    console.log(`✅ Valid number: ${phoneWithCode}`);
    return true;
  }
}


  function validateCountry() {
    if (!country.value) {
      countryError.classList.remove("hidden");
      return false;
    } else {
      countryError.classList.add("hidden");
      return true;
    }
  }

  function validateMessage() {
    if (message.value.trim().length < 10) {
      messageError.classList.remove("hidden");
      return false;
    } else {
      messageError.classList.add("hidden");
      return true;
    }
  }

  // ✅ Real-time validation
  name.addEventListener("input", validateName);
  email.addEventListener("input", validateEmail);
  phone.addEventListener("input", validatePhone);
  country.addEventListener("change", validateCountry);
  message.addEventListener("input", validateMessage);

  // Submit Validation
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const valid =
      validateName() &&
      validateEmail() &&
      validatePhone() &&
      validateCountry() &&
      validateMessage();

    if (valid) {
      alert("Form submitted successfully!");
      this.reset();
      telInit.setNumber("");
    }
  });
});
