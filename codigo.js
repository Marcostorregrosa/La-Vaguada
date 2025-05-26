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