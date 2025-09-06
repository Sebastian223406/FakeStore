// Guardar en localStorage
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Cargar de localStorage
function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || null;
}

// Borrar de localStorage
function removeFromStorage(key) {
  localStorage.removeItem(key);
}
