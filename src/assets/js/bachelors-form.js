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

  // Elements
  const form = document.getElementById("bachelorsForm");
  const inputs = {
    name: document.getElementById("nameInput"),
    email: document.getElementById("emailInput"),
    phone: document.getElementById("phoneInput"),
    nationality: document.getElementById("nationalityInput"),
    academicBifurcation: document.getElementById("academicBifurcationInput"),
    academicAverage: document.getElementById("academicAverageInput"),
    requiredSpecialization: document.getElementById(
      "requiredSpecializationInput"
    ),
  };

  const errors = {
    name: document.getElementById("nameError"),
    email: document.getElementById("emailError"),
    phone: document.getElementById("phoneError"),
    nationality: document.getElementById("nationalityError"),
    academicBifurcation: document.getElementById("academicBifurcationError"),
    academicAverage: document.getElementById("academicAverageError"),
    requiredSpecialization: document.getElementById(
      "requiredSpecializationError"
    ),
  };

  // Validation Functions
  const validators = {
    name: () => {
      const valid = inputs.name.value.trim().length >= 3;
      toggleError(errors.name, valid);
      return valid;
    },
    email: () => {
      const valid = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i.test(
        inputs.email.value.trim()
      );
      toggleError(errors.email, valid);
      return valid;
    },
    phone: () => {
      const phoneValue = phoneInputField.value.trim();

      const countryData = telInit.getSelectedCountryData();
      const dialCode = countryData?.dialCode || "20";

      const phoneWithCode = `+${dialCode}${phoneValue}`;

      const egyptRegex = /^01[0152]\d{8}$/;

      const isValid = egyptRegex.test(phoneValue);
      toggleError(errors.phone, isValid);
      return isValid;
    },
    nationality: () => {
      const valid = inputs.nationality.value.trim().length > 0;
      toggleError(errors.nationality, valid);
      return valid;
    },
    academicBifurcation: () => {
      const valid = inputs.academicBifurcation.value.trim().length > 0;
      toggleError(errors.academicBifurcation, valid);
      return valid;
    },
    academicAverage: () => {
      const valid = inputs.academicAverage.value.trim().length > 0;
      toggleError(errors.academicAverage, valid);
      return valid;
    },
    requiredSpecialization: () => {
      const valid = inputs.requiredSpecialization.value.trim().length > 0;
      toggleError(errors.requiredSpecialization, valid);
      return valid;
    },
  };

  function toggleError(element, isValid) {
    element.style.opacity = isValid ? "0" : "1";
  }

  // Real-time validation
  inputs.name.addEventListener("input", validators.name);
  inputs.email.addEventListener("input", validators.email);
  inputs.phone.addEventListener("input", validators.phone);
  inputs.nationality.addEventListener("input", validators.nationality);
  inputs.academicBifurcation.addEventListener(
    "input",
    validators.academicBifurcation
  );
  inputs.academicAverage.addEventListener(
    "input",
    validators.academicAverage
  );
  inputs.requiredSpecialization.addEventListener(
    "input",
    validators.requiredSpecialization
  );

  // Submit
  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const spinner = document.getElementById("loadingSpinner");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const allValid = Object.values(validators).every((fn) => fn());
    if (!allValid) return;

    // Loading state
    btnText.textContent = "Sending...";
    spinner.classList.remove("hidden");
    submitBtn.disabled = true;

    // Simulate login request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Success
    alert("✅ Form submitted successfully!");

    // Reset form
    form.reset();
    if (telInit) telInit.setNumber("");

    // Reset button
    btnText.textContent = "Start your study journey in Egypt";
    spinner.classList.add("hidden");
    submitBtn.disabled = false;
  });
});
