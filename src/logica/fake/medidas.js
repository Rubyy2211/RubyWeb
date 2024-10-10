// ---------------------------------------------------
//
// versión con fetch de una función para obtener las mediciones
//
// getAllMedidas(cb) -> (data: Array de mediciones) | error: Texto
//
// Las mediciones se devuelven vía callback (err, res)
//
// ---------------------------------------------------
function getAllMedidas(cb) {
    // Realizar la solicitud utilizando fetch
    fetch("api/rest/getmediciones.php")
        .then(response => {
            // Verificar si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error('Error en la red: ' + response.status);
            }
            // Convertir la respuesta a JSON
            return response.json();
        })
        .then(resultado => {
            // Imprimir el resultado completo en la consola para inspeccionar
            console.log("Resultado completo:", resultado);

            // Verificar si la propiedad "contenido" existe y es un array
            if (resultado && Array.isArray(resultado.contenido)) {
                cb(null, resultado); // Devolver el objeto completo
            } else {
                cb("Error: No se encontraron mediciones en la respuesta", null);
            }
        })
        .catch(error => {
            cb("Error al obtener los datos: " + error.message, null);
        });
}
// Exportar las funciones para que puedan ser requeridas en las pruebas
module.exports = { getAllMedidas };

