// Seleccionar elementos
const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescripcion = document.getElementById("modal-descripcion");
const modalEnlace = document.getElementById("modal-enlace");
const modalImagen = document.getElementById("modal-imagen"); // Seleccionar el elemento de la imagen del modal
const closeModal = document.querySelector(".close");

// Abrir modal al hacer clic en una imagen
document.querySelectorAll(".tienda-img").forEach(img => {
    img.addEventListener("click", () => {
        const tienda = img.getAttribute("data-tienda");
        const descripcion = img.getAttribute("data-descripcion");
        const enlace = img.getAttribute("data-enlace");
        const imagenModal = img.getAttribute("data-modal-img"); // Nueva imagen para el modal

        modalTitulo.textContent = tienda;
        modalDescripcion.textContent = descripcion;
        modalEnlace.href = enlace;
        modalImagen.src = imagenModal || img.getAttribute("src"); // Usa la imagen del modal o la original

        modal.style.display = "block";
    });
});

// Cerrar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Formulario
document.getElementById('formularioContacto').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const confirmarEmail = document.getElementById('confirmarEmail').value;

  if (email !== confirmarEmail) {
    alert("⚠️ Los correos electrónicos no coinciden.");
    return;
  }

  const confirmacion = confirm("¿Deseas enviar el formulario con los datos introducidos?");
  if (confirmacion) {
    alert("✅ Formulario enviado correctamente.");
    this.reset(); // Limpia el formulario
  }
});
