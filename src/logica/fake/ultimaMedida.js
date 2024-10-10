// ---------------------------------------------------
//
// versión con fetch para obtener la última medición
//
// callback -> getUltimaMedida() -> (ultimaMedida: Objeto de la última medición) | error: Texto
//
// La última medición se devuelve vía callback (err, res)
//
// ---------------------------------------------------
function getUltimaMedida(cb) {
    // Realizar la solicitud GET con fetch
    fetch("api/rest/getUltimaMedicion.php")
        .then(response => {
            // Verificar si la respuesta es OK (status 200-299)
            if (!response.ok) {
                throw new Error('Error al obtener los datos. Código de estado: ' + response.status);
            }
            return response.json(); // Parsear la respuesta como JSON
        })
        .then(data => {
            console.log("Recibo: ", data);

            // Verificar si la respuesta es un objeto y contiene mediciones
            if (!data || !Array.isArray(data.mediciones) || data.mediciones.length === 0) {
                cb("Error: No hay mediciones disponibles", null);
                return;
            }

            // Devolver la última medición
            cb(null, data.mediciones[data.mediciones.length - 1]); // Cambiado para acceder a la propiedad correcta
        })
        .catch(error => {
            // Manejo de errores
            cb('Error: ' + error.message, null);
        });
}
// Exportar las funciones para que puedan ser requeridas en las pruebas
module.exports = { getUltimaMedida };
