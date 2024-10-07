# RubyWeb

## Descripci�n

**RubyWeb** es un proyecto web dise�ado para gestionar mediciones de gases a trav�s de una API REST. Cada usuario est� asociado con un sensor que recoge datos de gases, los cuales son enviados a la plataforma para su almacenamiento y an�lisis. La aplicaci�n incluye un sistema de autenticaci�n de usuarios y una interfaz web para consultar las mediciones registradas.
## Estructura del Proyecto

El proyecto est� organizado de la siguiente manera:

- **logica/**: Contiene archivos PHP que implementan la l�gica principal del servidor.
    - `diHola.php`: Ejemplo de endpoint para saludar.
    - `hacerLogin.php`: M�dulo de autenticaci�n.

- **rest/**: Contiene los endpoints REST para la interacci�n con la API.
    - `diHola.php`, `enviarMedicion.php`, `getmediciones.php`: Servicios REST que ofrecen diferentes funcionalidades.

- **ux/**: Contiene los archivos HTML y JavaScript necesarios para la interfaz de usuario.
    - `index.html`: P�gina de inicio.
    - `Aplicacion.html`: P�gina de la aplicaci�n principal.
    - **logicaFake/**: Contiene archivos JavaScript que simulan la l�gica de la aplicaci�n.

## Instalaci�n

### Requisitos previos

Aseg�rate de tener los siguientes programas instalados:

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
   
La aplicaci�n estar� disponible en http://localhost:8081.

### Uso
#### Endpoints principales
- `POST /rest/hacerLogin.php`: Endpoint para autenticaci�n de usuarios.

-   `POST /rest/enviarMedicion.php`: Env�a nuevas mediciones.
   
-   `POST /rest/enviarMedicion.php`: Env�a nuevas mediciones.

-   `GET /rest/getmediciones.php`: Recupera las mediciones almacenadas.
