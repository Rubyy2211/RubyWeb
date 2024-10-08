<?php
$host = 'rubyweb-db-1'; // Use the container name
$usuario = 'root';  // Ajusta esto según tu usuario MySQL
$password = '1234'; // Ajusta esto según tu contraseña
$dbname = '3ero_A';
$port = 3306; // Puerto como entero, sin comillas

// Conexión a MySQL
$conn = mysqli_connect($host, $usuario, $password, $dbname, $port);

// Verificar conexión
if (!$conn) {
    die("Error de conexión: " . mysqli_connect_error());
}
?>
