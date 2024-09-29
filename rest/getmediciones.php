<?php
require_once "../conexion/conexion-bbdd.php";

    $query = "SELECT * FROM mediciones";

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

    // Devolver los resultados como JSON
    header('Content-Type: application/json');
    echo json_encode($medidas);



