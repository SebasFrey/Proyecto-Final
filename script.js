// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene referencias a elementos importantes del DOM
    const form = document.getElementById('gps-form');
    const table = document.querySelector('.table-container table tbody');

    // Agrega un event listener para el envío del formulario
    form.addEventListener('submit', function(e) {
        // Previene el comportamiento por defecto del formulario (recargar la página)
        e.preventDefault();

        // Obtiene los valores de los campos del formulario
        const marca = document.getElementById('marca').value;
        const modelo = document.getElementById('modelo').value;
        const imei = document.getElementById('imei').value;
        const fecha = document.getElementById('fecha').value;
        const simCard = document.getElementById('simCard').value;
        const placa = document.getElementById('placa').value;
        const modeloAuto = document.getElementById('modeloAuto').value;

        // Crea una nueva fila en la tabla con los datos del formulario
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${marca}</td>
            <td>${modelo}</td>
            <td>${imei}</td>
            <td>${fecha}</td>
            <td>${simCard}</td>
            <td>${placa}</td>
            <td>${modeloAuto}</td>
        `;

        // Agrega la clase 'new-row' para aplicar la animación
        newRow.classList.add('new-row');

        // Limpia el formulario después de agregar la nueva fila
        form.reset();
    });
});

