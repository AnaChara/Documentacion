//desplegable
const tareasLink = document.getElementById('tareas');
const submenu = document.getElementById('submenu');

// Mostrar u ocultar el submenú al hacer clic en "Tareas"
tareasLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace haga scroll
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
});