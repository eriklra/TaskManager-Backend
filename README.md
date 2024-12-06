# Task Manager Application

## Descripción

Este es un proyecto backend desarrollado con **TypeScript**, utilizando **Express.js** para crear un servidor web robusto. El proyecto permite gestionar tareas, proporcionando operaciones como crear, actualizar, eliminar y mostrar/ocultar tareas.

Este backend está diseñado para ser utilizado en aplicaciones web que requieren un sistema para manejar tareas o notas, con soporte para CRUD completo y una arquitectura limpia, modular y escalable.

## Características

- **CRUD de tareas**: Crear, leer, actualizar, eliminar y modificar visibilidad de tareas.
- **Autenticación**: (Opcional) Gestión de usuarios y autenticación.
- **Validación y manejo de errores**: Respuestas claras para operaciones y errores.

## Requisitos

- Node.js (>= 14.x)
- TypeScript (>= 4.x)

## Configuración

### Creación del archivo `.env`

1. **Crea un archivo `.env`** en la raíz del proyecto, basado en el archivo `template.env`. Este archivo contendrá las variables de configuración necesarias para el funcionamiento del proyecto.

2. **Copia las variables de entorno del archivo `.env`**

`JWT_SECRET="+2TLOcCKs8UuNd7CKStvVM17s27PXWs+nJZpXr8fw6k="`  # Clave secreta utilizada para firmar los tokens JWT. Mantén esta clave en secreto.
`JWT_EXPIRES_IN="1h"`  # Tiempo de expiración del token JWT. En este caso, está configurado para 1 hora ("1h").


## Instalación

### 1. Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

### 2. Navega al directorio del proyecto:

```bash
cd <nombre_del_directorio>
```

### 3. Instala las dependencias:

```bash
npm install
```

### 4. Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

### 5. Ejecuta el proyecto en produccion:

```bash
npm run build
npm run start 
```

# Funcionalidades

El proyecto ofrece las siguientes funcionalidades a través de una API REST:

1. **Crear una tarea** (`POST /tasks`)
   - Crea una nueva tarea.
   - **Cuerpo de la solicitud**:
     ```json
     {
       "title": "Título de la tarea",
       "description": "Descripción de la tarea"
     }
     ```

2. **Obtener todas las tareas** (`GET /tasks`)
   - Recupera todas las tareas disponibles.

3. **Obtener una tarea por ID** (`GET /tasks/:id`)
   - Obtiene una tarea específica por su ID.

4. **Actualizar una tarea** (`PUT /tasks/:id`)
   - Actualiza una tarea existente.
   - **Cuerpo de la solicitud**:
     ```json
     {
       "title": "Nuevo título",
       "description": "Nueva descripción",
       "completed": true
     }
     ```

5. **Eliminar una tarea** (`DELETE /tasks/:id`)
   - Elimina una tarea por su ID.

6. **Ocultar una tarea** (`PUT /tasks/:id/hide`)
   - Oculta una tarea estableciendo el estado `show` como `false`.

7. **Mostrar una tarea** (`PUT /tasks/:id/show`)
   - Muestra una tarea estableciendo el estado `show` como `true`.

---

Estas funcionalidades permiten gestionar las tareas de manera eficiente en este caso sin una base de datos, utilizando almacenamiento en memoria. Las tareas pueden ser visualizadas, actualizadas, eliminadas y modificadas según sea necesario.



## Explicación de la Estructura

1. **`src/`**: Carpeta raíz que contiene todo el código fuente de la aplicación.

2. **`controllers/`**:
   - Contiene los controladores que manejan la lógica de la API.
   - **`task.controller.ts`**: Controlador que gestiona las operaciones relacionadas con las tareas (crear, obtener, actualizar, eliminar).

3. **`routes/`**:
   - Aquí se definen las rutas de la API. Cada ruta está asociada con un controlador.
   - **`task.routes.ts`**: Archivo que define las rutas para gestionar las tareas, como crear, obtener y actualizar.

4. **`services/`**:
   - Contiene la lógica de negocio y los servicios que gestionan las tareas en memoria.
   - **`task.service.ts`**: Servicio que maneja la creación, actualización y eliminación de tareas en memoria. No se usa base de datos en este proyecto, todo se maneja en memoria.

5. **`models/`**:
   - Define los modelos de datos, en este caso el modelo de las tareas.
   - **`task.model.ts`**: Archivo donde se define la estructura de datos de una tarea. Aquí se define qué propiedades tiene una tarea, como `id`, `title`, `description`, etc.

6. **`app.ts`**:
   - Configura y monta el servidor Express, define middlewares globales y otras configuraciones del servidor.

7. **`server.ts`**:
   - Archivo principal que arranca el servidor. Aquí se importa y ejecuta la configuración del servidor desde `app.ts`.

8. **`repository/`**:
   - Este directorio contiene los archivos que gestionan el acceso a los datos de las tareas. El repositorio actúa como una capa intermedia entre los servicios y los datos.
   - **`task.repository.ts`**: Repositorio que gestiona las operaciones de las tareas en memoria, como obtener, agregar y eliminar tareas. Esto simula la interacción con una base de datos.

---

Esta organización permite separar las responsabilidades y facilitar la escalabilidad del proyecto. Al mantener una estructura modular, se puede agregar más funcionalidades o servicios de manera sencilla sin que afecte a otras partes del sistema.
