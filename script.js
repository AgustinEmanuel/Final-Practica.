document.getElementById('agregar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const duracion = document.getElementById('duracion').value;
    const tipo = document.getElementById('tipo').value;
    const urgente = document.getElementById('urgente').checked ? 'Sí' : 'No';

    if (nombre && duracion) {
        // Agregar a la lista
        const lista = document.getElementById('lista-datos');
        const item = document.createElement('li');
        item.textContent = `${nombre} - ${duracion} horas - ${tipo} - Urgente: ${urgente}`;
        lista.appendChild(item);

        // Agregar a la tabla
        const tabla = document.getElementById('tabla-datos').querySelector('tbody');
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${duracion}</td>
            <td>${tipo}</td>
            <td>${urgente}</td>
        `;
        tabla.appendChild(fila);
    } else {
        alert('Por favor, completa todos los campos obligatorios.');
    }
});

document.getElementById('calcular-horas').addEventListener('click', () => {
    const filas = document.querySelectorAll('#tabla-datos tbody tr');
    let totalHoras = 0;

    filas.forEach(fila => {
        const duracion = parseFloat(fila.cells[1].textContent); // Obtener el valor de la columna "Duración"
        if (!isNaN(duracion)) {
            totalHoras += duracion;
        }
    });

    document.getElementById('total-horas').textContent = `Total de horas: ${totalHoras}`;
});
