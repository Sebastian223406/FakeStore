// Mensaje de éxito
function mostrarMensajeExito(texto) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay-msg");
  overlay.innerHTML = `
    <div class="msg-box">
      ✅ ${texto}
    </div>
  `;
  document.body.appendChild(overlay);

  setTimeout(() => overlay.remove(), 3000);
}