// Obtener elementos del DOM
const music = document.getElementById("miCancion");
const mostrarImagenBtn = document.getElementById("mostrarImagen");
const imagenMensaje = document.getElementById("imagenMensaje");

// Evento para mostrar la imagen y reproducir la canción
mostrarImagenBtn.addEventListener("click", () => {
    imagenMensaje.style.display = "block";  // Mostrar el mensaje
    mostrarImagenBtn.style.display = "none"; // Ocultar el botón

    // Intentar reproducir la canción si no está en reproducción
    if (music.paused) {
        music.play().catch(error => {
            console.log("Error al intentar reproducir la canción: ", error);
        });
    }
});

// Eventos de los botones de flores
document.getElementById("flor1").addEventListener("click", () => {
    alert("Te tengo en mi mente 🔥");
});

document.getElementById("flor2").addEventListener("click", () => {
    alert("Nuestro Secreto 🫢");
});

// Asignar mensaje correctamente
