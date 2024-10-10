
# Proyecto RubyWeb

Este proyecto es una aplicación web que utiliza varias tecnologías para manejar la emisión BLE y realizar mediciones de sensores. A continuación, se describen los pasos para la instalación, ejecución y detalles técnicos del proyecto.

## Requisitos

- Node.js (>= 12.x)
- npm (Node Package Manager)
- Acceso a internet para instalar dependencias

## Estructura del Proyecto

El proyecto tiene la siguiente estructura básica:

```
/RubyWeb
  ├── /api                  # Contiene el backend de la aplicación (posiblemente REST API)
  ├── /app                  # Contiene la parte del frontend de la aplicación
  ├── /node_modules          # Módulos de Node.js instalados
  ├── /public                # Archivos públicos y estáticos
  ├── /src                   # Código fuente de la aplicación
  ├── /test                  # Pruebas unitarias
  └── package.json           # Archivo de configuración de dependencias Node.js
```

## Instalación

Para instalar y ejecutar el proyecto, sigue los siguientes pasos:

1. Clona el repositorio o extrae los archivos en tu máquina local.
   
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Instala las dependencias del proyecto utilizando npm.

   ```bash
   cd RubyWeb
   npm install
   ```

   Esto instalará todas las dependencias especificadas en el archivo `package.json`.

## Uso

### Desarrollo

Para ejecutar el proyecto en modo de desarrollo, usa el siguiente comando:

```bash
npm run dev
```

Este comando iniciará el servidor en modo de desarrollo y observará los cambios en los archivos de la aplicación.

### Producción

Para construir el proyecto para un entorno de producción, ejecuta:

```bash
npm run build
```

Esto generará los archivos optimizados para producción en la carpeta `build`.

### Backend

Si tu proyecto tiene una carpeta `/api`, puedes configurar y ejecutar el servidor de la API utilizando el siguiente comando:

```bash
npm run start-api
```

Este comando arrancará el servidor backend en el puerto que hayas configurado.

## Scripts Disponibles

- `npm run dev` - Inicia el entorno de desarrollo.
- `npm run build` - Construye la aplicación para producción.
- `npm start` - Inicia la aplicación en el modo de producción.
- `npm run test` - Ejecuta las pruebas del proyecto.

## Pruebas

Para ejecutar las pruebas de la aplicación, utiliza:

```bash
npm run test
```

## Contribuciones

Para contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios.
4. Haz commit a tus cambios (`git commit -m 'Añadir nueva funcionalidad'`).
5. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
6. Crea un nuevo Pull Request.

## Notas

- Asegúrate de tener todos los permisos necesarios para ejecutar el proyecto, especialmente si utiliza funcionalidades específicas del sistema como Bluetooth.
- Consulta la documentación de los archivos `api` y `app` si necesitas más detalles sobre cómo funcionan las diferentes partes de la aplicación.
