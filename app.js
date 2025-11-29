// Dropdown de categorías
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownContainer = document.getElementById("dropdown");

// Abrir/cerrar con clic
dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
});

// Evitar que se cierre cuando haces clic dentro del menú
dropdownMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Cerrar si haces clic fuera
document.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.classList.remove("open");
  }
});
