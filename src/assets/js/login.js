const form = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const submitBtn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const spinner = document.getElementById("loadingSpinner");

// --- Validation functions ---
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

function validatePassword(password) {
  return password.trim().length >= 6;
}

function toggleError(el, isValid) {
  el.style.opacity = isValid ? "0" : "1";
}

// --- Real-time validation ---
emailInput.addEventListener("input", () =>
  toggleError(emailError, validateEmail(emailInput.value))
);

passwordInput.addEventListener("input", () =>
  toggleError(passwordError, validatePassword(passwordInput.value))
);

// --- Form Submit ---
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const isEmailValid = validateEmail(emailInput.value);
  const isPasswordValid = validatePassword(passwordInput.value);

  toggleError(emailError, isEmailValid);
  toggleError(passwordError, isPasswordValid);

  if (!isEmailValid || !isPasswordValid) return;

  // Show loading
  btnText.textContent = "Logging in...";
  spinner.classList.remove("hidden");
  submitBtn.disabled = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock failure (you can replace with real API check)
    const success = false;
    if (!success) throw new Error("Invalid credentials");

    alert("Login successful!");
  } catch (err) {
    // Show error message (can be toast instead)
    alert(err.message);
  } finally {
    btnText.textContent = "Send";
    spinner.classList.add("hidden");
    submitBtn.disabled = false;
  }
});
