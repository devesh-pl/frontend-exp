const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const charCount = document.querySelector("#charCount");
const liveStatus = document.querySelector("#liveStatus");
const toast = document.querySelector("#toast");

let toastTimer;

// Show a temporary notification.
function showToast(message, type = "success") {
  toast.textContent = message;
  toast.className = `toast show ${type === "success" ? "success" : "error-toast"}`;

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}

// Display an error below an input.
function showError(input, errorId, message) {
  document.querySelector(`#${errorId}`).textContent = message;
  input.classList.toggle("invalid", Boolean(message));
}

// Validate the name.
function validateName() {
  const value = nameInput.value.trim();

  if (value.length < 2) {
    showError(nameInput, "nameError", "Please enter at least 2 characters.");
    return false;
  }

  showError(nameInput, "nameError", "");
  return true;
}

// Validate the email using a basic format check.
function validateEmail() {
  const value = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(value)) {
    showError(emailInput, "emailError", "Enter a valid email address.");
    return false;
  }

  showError(emailInput, "emailError", "");
  return true;
}

// Validate the message.
function validateMessage() {
  const value = messageInput.value.trim();

  if (value.length < 10) {
    showError(messageInput, "messageError", "Message must contain at least 10 characters.");
    return false;
  }

  showError(messageInput, "messageError", "");
  return true;
}

// Live updates: character count and activity text.
messageInput.addEventListener("input", () => {
  charCount.textContent = `${messageInput.value.length} / 250`;
  liveStatus.textContent = messageInput.value.trim()
    ? "You are currently writing a message…"
    : "Waiting for your message…";
});

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("blur", validateMessage);

// Validate everything when the form is submitted.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (!isNameValid || !isEmailValid || !isMessageValid) {
    showToast("Please correct the highlighted fields.", "error");
    liveStatus.textContent = "Form has errors. Please review your entries.";
    return;
  }

  const formData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };

  // Demo only: this logs the data; it does not send it to a server.
  console.log("Form submitted:", formData);

  showToast(`Thanks, ${formData.name}! Your message is ready.`, "success");
  liveStatus.textContent = `Success! Message prepared for ${formData.name}.`;
  form.reset();
  charCount.textContent = "0 / 250";
});

// Optional browser notification. The user must grant permission.
async function enableBrowserNotifications() {
  if (!("Notification" in window)) {
    showToast("This browser does not support notifications.", "error");
    return;
  }

  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    new Notification("Notifications enabled", {
      body: "You'll receive browser notifications from this demo."
    });
  } else {
    showToast("Browser notification permission was not granted.", "error");
  }
}

// Run enableBrowserNotifications() from the browser console if you want
// to test the optional browser notification feature.
