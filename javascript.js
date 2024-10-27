//desplegable
const tareasLink = document.getElementById('tareas');
const submenu = document.getElementById('submenu');

// Mostrar u ocultar el submenú al hacer clic en "Tareas"
tareasLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener("DOMContentLoaded", () => {
    // Obtener referencias a los elementos de contenido central y derecho
    const contenidoCentral = document.querySelector(".centro section");
    const contenidoDerecho = document.querySelector(".derecha .Doc");

    // Obtener todos los enlaces dentro del submenu
    const enlaces = document.querySelectorAll(".tareas-listado a");

    // Función para manejar clics en los enlaces
    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", (event) => {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace

            // Actualiza el contenido central y derecho basado en el enlace clicado
            const textoEnlace = event.target.textContent;

            switch (textoEnlace) {
                case "Tutorial":
                    contenidoCentral.innerHTML = "<h2>Tutorial</h2><p>Aquí puedes aprender a usar el sistema.</p>";
                    contenidoDerecho.innerHTML = "<h2>Información del Tutorial</h2><p>Detalles sobre el tutorial.</p>";
                    break;
                case "Crear tareas (POST)":
                    contenidoCentral.innerHTML = "<h2>Crear Tarea</h2><p>Completa el formulario para crear una nueva tarea.</p>";
                    contenidoDerecho.innerHTML = "<h2>Crear Tarea</h2><p>Información sobre cómo crear tareas.</p>";
                    break;
                case "Listar tareas (GET)":
                    contenidoCentral.innerHTML = "<h2>Listar Tareas</h2><p>Aquí verás todas tus tareas.</p>";
                    contenidoDerecho.innerHTML = "<h2>Listado de Tareas</h2><p>Detalles sobre cómo listar tareas.</p>";
                    break;
                case "Obtener tareas por ID (GET)":
                    contenidoCentral.innerHTML = "<h2>Obtener Tarea por ID</h2><p>Introduce el ID de la tarea para obtener información.</p>";
                    contenidoDerecho.innerHTML = "<h2>Obtener Tarea</h2><p>Información sobre cómo obtener tareas por ID.</p>";
                    break;
                case "Editar tareas (PUT)":
                    contenidoCentral.innerHTML = "<h2>Editar Tarea</h2><p>Selecciona la tarea que deseas editar.</p>";
                    contenidoDerecho.innerHTML = "<h2>Editar Tarea</h2><p>Detalles sobre cómo editar tareas.</p>";
                    break;
                case "Eliminar tareas (DELETE)":
                    contenidoCentral.innerHTML = "<h2>Eliminar Tarea</h2><p>Selecciona la tarea que deseas eliminar.</p>";
                    contenidoDerecho.innerHTML = "<h2>Eliminar Tarea</h2><p>Información sobre cómo eliminar tareas.</p>";
                    break;
                default:
                    contenidoCentral.innerHTML = "<h2>Tareas</h2><p>Selecciona una opción del menú.</p>";
                    contenidoDerecho.innerHTML = "<h2>Post</h2>";
                    break;
            }
        });
    });
});
