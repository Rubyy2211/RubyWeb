<?php
require_once "../conexion/conexion-bbdd.php";
require_once('../../logica/ultimaMedida.php');
/**
 * @OA\Get(
 *     path="src/api/getUltimaMedicion.php",
 *     summary="Obtener la última medición",
 *     description="Este endpoint devuelve la última medición registrada en la base de datos.",
 *     @OA\Response(
 *         response=200,
 *         description="Última medición recuperada con éxito",
 *         @OA\JsonContent(ref="#/components/schemas/Medicion")
 *     ),
 *     @OA\Response(
 *         response=404,
 *         description="No se encontraron mediciones"
 *     ),
 *     @OA\Response(
 *         response=500,
 *         description="Error al recuperar la última medición"
 *     )
 * )
 */
$query = "SELECT * FROM mediciones ORDER BY Dia DESC, Hora DESC LIMIT 1";

// Preparar y ejecutar la consulta
$stmt = $conn->prepare($query);

$stmt->execute();
$resultado = $stmt->get_result();

$medidas = [];

if ($resultado->num_rows > 0) {
    while ($fila = $resultado->fetch_assoc()) {
        $medidas[] = [
            'id_medicion' => $fila['id_medicion'],
            'Hora' => $fila['Hora'], // Codificar la imagen en base64
            'Dia' => $fila['Dia'],
            'Lugar' => $fila['Lugar'],
            'TipoGas' => $fila['Tipo de Gas'],
            'Valor' => $fila['Valor'],
        ];
    }
}

$stmt->close();
$conn->close();
$last = ultimaMedida($medidas);
// Devolver los resultados como JSON
header('Content-Type: application/json');
echo json_encode($last);



