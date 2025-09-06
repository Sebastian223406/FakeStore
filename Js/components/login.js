const loginModal = document.getElementById("login-modal");
const btnLogin = document.getElementById("btn-login");
const loginCerrar = document.getElementById("login-cerrar");

// Abrir login
btnLogin?.addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("oculto");
  loginModal.style.display = "block";
  document.getElementById("register-modal").style.display = "none";
});

// Cerrar
loginCerrar?.addEventListener("click", () =>
  document.getElementById("overlay").classList.add("oculto")
);

// Link "No tienes cuenta?"
document.getElementById("linkRegister")?.addEventListener("click", e => {
  e.preventDefault();
  loginModal.style.display = "none";
  document.getElementById("register-modal").style.display = "block";
});
