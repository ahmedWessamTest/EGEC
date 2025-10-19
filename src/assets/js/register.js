const form = document.getElementById("loginForm");

  const inputs = {
    name: document.getElementById("nameInput"),
    email: document.getElementById("emailInput"),
    phone: document.getElementById("phoneInput"),
    password: document.getElementById("passwordInput"),
    rePassword: document.getElementById("rePasswordInput"),
    degree: document.getElementById("degreeInput"),
  };

  const errors = {
    name: document.getElementById("nameError"),
    email: document.getElementById("emailError"),
    phone: document.getElementById("phoneError"),
    password: document.getElementById("passwordError"),
    rePassword: document.getElementById("rePasswordError"),
    degree: document.getElementById("degreeError"),
  };

  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const spinner = document.getElementById("loadingSpinner");

  // Validation functions
  function validateName(value) {
    return value.trim().length >= 3;
  }

  function validateEmail(value) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value.trim());
  }

  function validatePhone(value) {
    return /^\d{11}$/.test(value.trim());
  }

  function validatePassword(value) {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(value);
  }

  function validateRePassword(pass, rePass) {
    return pass === rePass && rePass.length > 0;
  }

  function validateDegree(value) {
    return value.trim() !== "";
  }

  function toggleError(el, isValid) {
    el.style.opacity = isValid ? "0" : "1";
  }

  // Real-time validation
  inputs.name.addEventListener("input", () =>
    toggleError(errors.name, validateName(inputs.name.value))
  );

  inputs.email.addEventListener("input", () =>
    toggleError(errors.email, validateEmail(inputs.email.value))
  );

  inputs.phone.addEventListener("input", () =>
    toggleError(errors.phone, validatePhone(inputs.phone.value))
  );

  inputs.password.addEventListener("input", () =>
    toggleError(errors.password, validatePassword(inputs.password.value))
  );

  inputs.rePassword.addEventListener("input", () =>
    toggleError(
      errors.rePassword,
      validateRePassword(inputs.password.value, inputs.rePassword.value)
    )
  );

  inputs.degree.addEventListener("change", () =>
    toggleError(errors.degree, validateDegree(inputs.degree.value))
  );

  // On form submit
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const isValid = {
      name: validateName(inputs.name.value),
      email: validateEmail(inputs.email.value),
      phone: validatePhone(inputs.phone.value),
      password: validatePassword(inputs.password.value),
      rePassword: validateRePassword(
        inputs.password.value,
        inputs.rePassword.value
      ),
      degree: validateDegree(inputs.degree.value),
    };

    // Show all errors
    Object.keys(isValid).forEach((key) => {
      toggleError(errors[key], isValid[key]);
    });

    if (Object.values(isValid).includes(false)) return;

    // Show loading
    btnText.textContent = "Registering...";
    spinner.classList.remove("hidden");
    submitBtn.disabled = true;

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock error (replace this with your real API)
      const success = false;
      if (!success) throw new Error("Registration failed. Try again!");

      alert("Registration successful!");
    } catch (err) {
      alert(err.message);
    } finally {
      btnText.textContent = "Register";
      spinner.classList.add("hidden");
      submitBtn.disabled = false;
    }
  });