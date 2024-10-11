<?php
require_once "../conexion/conexion-bbdd.php";
/**
 * @OA\Post(
 *     path="src/api/enviarMedicion.php",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(ref="#/components/schemas/Medicion")
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Medición añadida con éxito",
 *     ),
 *     @OA\Response(
 *         response=400,
 *         description="Error al añadir la medición"
 *     ),
 *     @OA\Response(
 *         response=405,
 *         description="Método no permitido"
 *     )
 * )
 */
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    $hora = $data->Hora;
    $dia = $data->Dia;
    $lugar = $data->Lugar;
    $tipoGas = $data->TipoGas;
    $valor = $data->Valor;

    // Preparar la consulta
    $query = "INSERT INTO mediciones (Hora, Dia, Lugar, `Tipo de Gas`, Valor) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($query);

    // Vincular parámetros
    $stmt->bind_param("ssssi", $hora, $dia, $lugar, $tipoGas, $valor);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Medición añadida con éxito"]);
    } else {
        echo json_encode(["error" => "Error al añadir la medición"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["error" => "Método no permitido"]);
}
?>

