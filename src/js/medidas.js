async function getAllMedidas() {
    try {
        const response = await fetch('api/rest/getmediciones.php'); // Update this path if needed
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const p = document.querySelector("p");

        // Display the data appropriately
        if (Array.isArray(data)) {

            return data;
         } else {
            //p.textContent = 'No data available.';
        }

        console.log(data);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

async function getUltimaMedida() {
        try {
            const response = await fetch('api/rest/getmediciones.php'); // Aseg�rate de que esta ruta sea correcta
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            const lastMeasurementRow = document.getElementById("lastMeasurement");

            // Mostrar solo el �ltimo elemento
            if (Array.isArray(data) && data.length > 0) {
                const lastItem = data[data.length - 1];
                lastMeasurementRow.innerHTML = `
                <td>${lastItem.Hora}</td>
                <td>${lastItem.Dia}</td>
                <td>${lastItem.Lugar}</td>
                <td>${lastItem.TipoGas}</td>
                <td>${lastItem.Valor}</td>
            `;
                return lastItem;
            } else {
                lastMeasurementRow.innerHTML = '<td colspan="6">No hay datos disponibles.</td>';
            }

            console.log(data);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
}

// Exportar las funciones para que puedan ser requeridas en las pruebas
module.exports = { getAllMedidas, getUltimaMedida };