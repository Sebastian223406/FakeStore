let carrito = loadFromStorage("carrito") || [];

function agregarAlCarrito(prod) {
  carrito.push(prod);
  saveToStorage("carrito", carrito);
  mostrarCarrito();
}

function mostrarCarrito() {
  const divCarrito = document.getElementById("carrito");
  divCarrito.innerHTML = "<h2>Carrito</h2>";

  if (carrito.length === 0) {
    divCarrito.innerHTML += "<p>Carrito vacío</p>";
    return;
  }

  let total = 0;
  carrito.forEach((item, index) => {
    total += item.price;
    const p = document.createElement("p");
    p.textContent = `${item.title} - $${item.price}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      carrito.splice(index, 1);
      saveToStorage("carrito", carrito);
      mostrarCarrito();
    });

    p.appendChild(btnEliminar);
    divCarrito.appendChild(p);
  });

  const totalP = document.createElement("p");
  totalP.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
  divCarrito.appendChild(totalP);

  // Botón Comprar
  const btnComprar = document.createElement("button");
  btnComprar.textContent = "Comprar";
  btnComprar.style.background = "green";
  btnComprar.style.color = "white";
  btnComprar.style.padding = "8px 12px";
  btnComprar.style.marginTop = "10px";
  btnComprar.style.border = "none";
  btnComprar.style.borderRadius = "5px";
  btnComprar.style.cursor = "pointer";

  btnComprar.addEventListener("click", () => {
    carrito = [];
    removeFromStorage("carrito");
    mostrarCarrito();
    mostrarMensajeExito("¡Tu compra ha sido exitosa!");
  });

  divCarrito.appendChild(btnComprar);

  // Botón Vaciar carrito
  const btnVaciar = document.getElementById("btn-vaciar");
  if (btnVaciar) {
    btnVaciar.addEventListener("click", () => {
      carrito = [];
      removeFromStorage("carrito");
      mostrarCarrito();
    });
  }
}

// Inicial
mostrarCarrito();
