const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.textContent = "Ocultar";
  } else {
    password.type = "password";
    togglePassword.textContent = "Ver";
  }
});

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  emailError.textContent = "";
  passwordError.textContent = "";
  message.textContent = "";

  let valid = true;

  if (email.value.trim() === "") {
    emailError.textContent = "El correo es obligatorio";
    valid = false;
  } else if (!validarEmail(email.value)) {
    emailError.textContent = "Ingresa un correo válido";
    valid = false;
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "La contraseña es obligatoria";
    valid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = "La contraseña debe tener mínimo 6 caracteres";
    valid = false;
  }

  if (!valid) return;

  // Usuario de prueba
  const usuarioCorrecto = "admin@gmail.com";
  const passwordCorrecto = "123456";

  if (email.value === usuarioCorrecto && password.value === passwordCorrecto) {
    message.style.color = "green";
    message.textContent = "Inicio de sesión exitoso";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Correo o contraseña incorrectos";
  }
});

function validarEmail(correo) {
  const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresion.test(correo);
}