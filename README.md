# RubyWeb

## Descripción

**RubyWeb** es un proyecto web diseñado para gestionar mediciones de gases a través de una API REST. Cada usuario está asociado con un sensor que recoge datos de gases, los cuales son enviados a la plataforma para su almacenamiento y análisis. La aplicación incluye un sistema de autenticación de usuarios y una interfaz web para consultar las mediciones registradas.
## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **src/**
-- **rest/**: Contiene los endpoints REST para la interacción con la API.
    - `enviarMedicion.php`, `getmediciones.php`: Servicios REST que ofrecen diferentes funcionalidades.

 -- **js/**: Contiene los archivos JavaScript necesarios.
    - `medidas.js`: Script principal para obtener medidas.

 -- **conexion/**: Contiene el archivo php para conectarse a la base de datos.
    - `conexion-bbdd.php`: Conexión a la base de datos.

- **doc/**: Contiene la documentacion del proyecto.
-- `bbdd`: Contiene documentación sobre la base de datos.

## Instalación

### Requisitos previos

Asegúrate de tener los siguientes programas instalados:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Instrucciones

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Rubyy2211/RubyWeb.git
   cd RubyWeb
2. Construye la imagen Docker:

   ```bash
   docker-compose build
 
3. Inicia los contenedores:

   ```bash
   docker-compose up
   
La aplicación estará disponible en http://localhost:8081/src.

### Uso
#### Endpoints principales
   
-   `POST /rest/enviarMedicion.php`: Envía nuevas mediciones.

-   `GET /rest/getmediciones.php`: Recupera las mediciones almacenadas.
