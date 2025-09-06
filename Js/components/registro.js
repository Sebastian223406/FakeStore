const registerModal = document.getElementById("register-modal");
const btnRegister = document.getElementById("btn-register");
const registerCerrar = document.getElementById("register-cerrar");

// Abrir registro
btnRegister?.addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("oculto");
  registerModal.style.display = "block";
  document.getElementById("login-modal").style.display = "none";
});

// Cerrar
registerCerrar?.addEventListener("click", () =>
  document.getElementById("overlay").classList.add("oculto")
);

// Link "¿Ya tienes cuenta?"
document.getElementById("linkLogin")?.addEventListener("click", e => {
  e.preventDefault();
  registerModal.style.display = "none";
  document.getElementById("login-modal").style.display = "block";
});

/* ---------- VALIDACIÓN CONTRASEÑA ---------- */
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

const reglas = {
  longitud: document.getElementById("longitud"),
  mayuscula: document.getElementById("mayuscula"),
  numero: document.getElementById("numero"),
};

function validarPassword() {
  const val = passwordInput.value;
  let valido = true;

  // Longitud
  reglas.longitud.textContent =
    val.length >= 8 ? "✅ Mínimo 8 caracteres" : "❌ Mínimo 8 caracteres";
  if (val.length < 8) valido = false;

  // Mayúscula
  reglas.mayuscula.textContent =
    /[A-Z]/.test(val) ? "✅ Al menos una mayúscula" : "❌ Al menos una mayúscula";
  if (!/[A-Z]/.test(val)) valido = false;

  // Número
  reglas.numero.textContent =
    /[0-9]/.test(val) ? "✅ Al menos un número" : "❌ Al menos un número";
  if (!/[0-9]/.test(val)) valido = false;

  return valido;
}

passwordInput?.addEventListener("input", validarPassword);

// Confirmación
confirmInput?.addEventListener("input", () => {
  const msg = document.getElementById("mensajeCoincidencia");
  if (confirmInput.value === passwordInput.value) {
    msg.textContent = "✅ Coinciden";
    msg.style.color = "green";
  } else {
    msg.textContent = "❌ No coinciden";
    msg.style.color = "red";
  }
});

// Activar botón
const btnRegistro = document.getElementById("btnRegistro");
const terminos = document.getElementById("terminos");

function validarFormulario() {
  const valido =
    validarPassword() &&
    confirmInput.value === passwordInput.value &&
    terminos.checked;
  btnRegistro.disabled = !valido;
}

passwordInput?.addEventListener("input", validarFormulario);
confirmInput?.addEventListener("input", validarFormulario);
terminos?.addEventListener("change", validarFormulario);
