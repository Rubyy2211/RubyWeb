const { getAllMedidas } = require('../src/logica/fake/medidas');
const { getUltimaMedida } = require('../src/logica/fake/ultimaMedida');
const assert = require("assert");

// Simular el fetch global para devolver dos mediciones
global.fetch = async (url) => {
    if (url === "api/rest/getmediciones.php") {
        return {
            ok: true,
            json: async () => ({
                contenido: [
                    { id_medicion: 1, Hora: '10:00', Dia: '2024-01-01', Lugar: 'Sala', TipoGas: 'CO2', Valor: 50 },
                    { id_medicion: 2, Hora: '11:00', Dia: '2024-01-01', Lugar: 'Cocina', TipoGas: 'CO2', Valor: 45 }
                ]
            })
        };
    } else if (url === "api/rest/getUltimaMedicion.php") {
        return {
            ok: true,
            json: async () => ({
                mediciones: [
                    { id_medicion: 1, Hora: '10:00', Dia: '2024-01-01', Lugar: 'Sala', TipoGas: 'CO2', Valor: 50 },
                    { id_medicion: 2, Hora: '11:00', Dia: '2024-01-01', Lugar: 'Cocina', TipoGas: 'CO2', Valor: 45 }
                ]
            })
        };
    }
};

// Simular el DOM
global.document = {
    querySelector: () => ({ textContent: '' }),
    getElementById: () => ({ innerHTML: '' })
};

describe('API Function Tests', function() {
    it('should fetch all measurements in getAllMedidas', function(done) {
        getAllMedidas(function(err, data) {
            console.log('getAllMedidas data:', data); // Agrega esto para depurar
            assert.ok(!err, 'getAllMedidas should not return an error');
            assert.ok(data, 'getAllMedidas should return data');
            assert.ok(Array.isArray(data.contenido), 'data.contenido should be an array');
            done(); // Llamar a done() para indicar que la prueba ha terminado
        });
    });

    it('should fetch the last measurement in getUltimaMedida', function(done) {
        getUltimaMedida(function(err, data) {
            console.log('getUltimaMedida data:', data); // Agrega esto para depurar
            assert.ok(!err, 'getUltimaMedida should not return an error');
            assert.ok(data, 'getUltimaMedida should return data');
            assert.ok(data.id_medicion, 'Última medición debe tener id_medicion');
            done(); // Llamar a done() para indicar que la prueba ha terminado
        });
    });
});
