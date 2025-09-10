let productosOriginales = [];

async function cargarProductos() {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    productosOriginales = await respuesta.json();
    mostrarProductos(productosOriginales);
  } catch (error) {
    console.error("Error cargando productos", error);
  }

}

function mostrarProductos(lista) {
  const contenedor = document.getElementById("productos");

  contenedor.innerHTML = "";

  lista.forEach(prod => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${prod.image}" alt="${prod.title}">
      <h3>${prod.title}</h3>
      <p>$${prod.price}</p>
      <p><em>${prod.category}</em></p>
      <button>Agregar al carrito</button>
    `;

    const btn = div.querySelector("button");
    btn.addEventListener("click", () => {
      agregarAlCarrito(prod);
    });

    contenedor.appendChild(div);
  });
}

// --- Filtros ---
document.getElementById("busqueda")?.addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();
  const filtrados = productosOriginales.filter(
    p =>
      p.title.toLowerCase().includes(texto) ||
      p.description.toLowerCase().includes(texto)
  );
  mostrarProductos(filtrados);
});

document.getElementById("filtroCategoria")?.addEventListener("change", e => {
  const categoria = e.target.value;
  const filtrados =
    categoria === "all"
      ? productosOriginales
      : productosOriginales.filter(p => p.category === categoria);
  mostrarProductos(filtrados);
});

document.getElementById("ordenar")?.addEventListener("change", e => {
  const tipo = e.target.value;
  let ordenados = [...productosOriginales];

  if (tipo === "asc") ordenados.sort((a, b) => a.price - b.price);
  if (tipo === "desc") ordenados.sort((a, b) => b.price - a.price);
  if (tipo === "az") ordenados.sort((a, b) => a.title.localeCompare(b.title));
  if (tipo === "za") ordenados.sort((a, b) => b.title.localeCompare(a.title));

  mostrarProductos(ordenados);
});

// Inicial
cargarProductos();
