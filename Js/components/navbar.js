// --- NAVBAR & SECCIONES ---
const navLinks = document.querySelectorAll(".nav-link");
const secciones = document.querySelectorAll(".seccion");
const brand = document.querySelector(".brand");
const ctaComprar = document.getElementById("cta-comprar");

function mostrarSeccion(id) {
  secciones.forEach(sec => sec.classList.remove("activa"));
  document.getElementById(id).classList.add("activa");

  navLinks.forEach(link => link.classList.remove("active"));
  document.querySelector(`[data-section="${id}"]`)?.classList.add("active");
}

// Al hacer click en links
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    mostrarSeccion(link.dataset.section);
  });
});

// Logo = home
brand?.addEventListener("click", () => mostrarSeccion("home"));

// Botón CTA
ctaComprar?.addEventListener("click", () => mostrarSeccion("productos-seccion"));
