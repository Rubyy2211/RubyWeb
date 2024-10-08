const { getAllMedidas, getUltimaMedida } = require('../src/js/medidas');
const assert = require("assert");

// Simular el fetch global para devolver dos mediciones
global.fetch = async () => ({
    ok: true,
    json: async () => [
        { id_medicion: 1, Hora: '10:00', Dia: '2024-01-01', Lugar: 'Sala', TipoGas: 'CO2', Valor: 50 },
        { id_medicion: 2, Hora: '11:00', Dia: '2024-01-01', Lugar: 'Cocina', TipoGas: 'CO2', Valor: 45 }
    ]
});

// Simular el DOM
global.document = {
    querySelector: () => ({ textContent: '' }),
    getElementById: () => ({ innerHTML: '' })
};

describe('API Function Tests', function() {
    it('should fetch all measurements in getAllMedidas', async function() {
        const data = await getAllMedidas();
        console.log('getAllMedidas data:', data); // Agrega esto para depurar
        assert.ok(data, 'getAllMedidas should return data');
    });

    it('should fetch the last measurement in getUltimaMedida', async function() {
        const data = await getUltimaMedida();
        console.log('getUltimaMedida data:', data); // Agrega esto para depurar
        assert.ok(data, 'getUltimaMedida should return data');
    });
});
