# RubyWeb

## Descripción

**RubyWeb** es un proyecto web diseñado para gestionar mediciones de gases a través de una API REST. Cada usuario está asociado con un sensor que recoge datos de gases, los cuales son enviados a la plataforma para su almacenamiento y análisis. La aplicación incluye un sistema de autenticación de usuarios y una interfaz web para consultar las mediciones registradas.
## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **logica/**: Contiene archivos PHP que implementan la lógica principal del servidor.
    - `diHola.php`: Ejemplo de endpoint para saludar.
    - `hacerLogin.php`: Módulo de autenticación.

- **rest/**: Contiene los endpoints REST para la interacción con la API.
    - `diHola.php`, `enviarMedicion.php`, `getmediciones.php`: Servicios REST que ofrecen diferentes funcionalidades.

- **ux/**: Contiene los archivos HTML y JavaScript necesarios para la interfaz de usuario.
    - `index.html`: Página de inicio.
    - `Aplicacion.html`: Página de la aplicación principal.
    - **logicaFake/**: Contiene archivos JavaScript que simulan la lógica de la aplicación.

## Instalación

### Requisitos previos

Asegúrate de tener los siguientes programas instalados:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Instrucciones

1. Clona el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd RubyWeb
2. Construye la imagen Docker:

   ```bash
   docker-compose build
 
3. Inicia los contenedores:

   ```bash
   docker-compose up
   
La aplicación estará disponible en http://localhost:8081.

### Uso
#### Endpoints principales
- `POST /rest/hacerLogin.php`: Endpoint para autenticación de usuarios.

-   `POST /rest/enviarMedicion.php`: Envía nuevas mediciones.
   
-   `POST /rest/enviarMedicion.php`: Envía nuevas mediciones.

-   `GET /rest/getmediciones.php`: Recupera las mediciones almacenadas.
