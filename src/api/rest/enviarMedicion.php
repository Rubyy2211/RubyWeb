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
 *         description="Medici�n a�adida con �xito",
 *     ),
 *     @OA\Response(
 *         response=400,
 *         description="Error al a�adir la medici�n"
 *     ),
 *     @OA\Response(
 *         response=405,
 *         description="M�todo no permitido"
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

    // Vincular par�metros
    $stmt->bind_param("ssssi", $hora, $dia, $lugar, $tipoGas, $valor);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Medici�n a�adida con �xito"]);
    } else {
        echo json_encode(["error" => "Error al a�adir la medici�n"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["error" => "M�todo no permitido"]);
}
?>

