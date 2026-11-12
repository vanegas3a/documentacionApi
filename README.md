# Puesto de Chance API

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Jest](https://img.shields.io/badge/tests-Jest-C21325?logo=jest&logoColor=white)](https://jestjs.io/)
[![OpenAPI](https://img.shields.io/badge/API-OpenAPI%203.0-6BA539?logo=swagger&logoColor=white)](https://www.openapis.org/)

API REST para la operación de un puesto de apuestas: autenticación por roles, administración de sorteos, venta y consulta de tiquetes de Chance y Baloto, pago de premios y cierre diario de caja.

## Funcionalidades

- Inicio de sesión y consulta del perfil con token JWT.
- Administración de sorteos de Chance y Baloto (rol `ADMIN`).
- Venta de tiquetes, consulta, anulación y pago de premios.
- Resumen y cierre diario de caja.
- Documentación interactiva de endpoints con Swagger UI.

## Tecnologías

- Node.js y Express
- JSON Web Token y bcryptjs
- Jest y Supertest
- OpenAPI 3.0 y Swagger UI

## Requisitos previos

- Node.js 18 o superior y npm.
- Git para clonar el repositorio.

## Instalación y ejecución local

1. Clona el repositorio y entra a su carpeta:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd documentacionApi
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea el archivo local de configuración a partir de la plantilla:

   ```powershell
   Copy-Item .env.example .env
   ```

   En macOS o Linux, usa `cp .env.example .env`.

4. Cambia `JWT_SECRET` en `.env` por un valor aleatorio privado. No compartas ni subas el archivo `.env`.

5. Inicia el servidor:

   ```bash
   npm run dev
   ```

   La API queda disponible en `http://localhost:3000`. Para iniciar sin modo de desarrollo, usa `npm start`.

## Configuración

Las variables opcionales y sus valores predeterminados están en [.env.example](./.env.example). La aplicación carga las variables de entorno al iniciar. Mantén secretos reales fuera del control de versiones.

## Documentación de la API

- Swagger UI interactivo: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
- Especificación OpenAPI en JSON: [http://localhost:3000/api-docs.json](http://localhost:3000/api-docs.json)
- Archivo fuente de la especificación: [docs/openapi.json](./docs/openapi.json)

Salvo el endpoint de salud y el inicio de sesión, las rutas de la API requieren `Authorization: Bearer <token>`. Los endpoints administrativos requieren el rol `ADMIN`; las ventas y el pago de premios requieren `VENDEDOR`.

### Ejemplos rápidos

Inicio de sesión:

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "usuario": "vendedor1",
  "password": "<contraseña>"
}
```

Venta de Chance (usa el token devuelto por el inicio de sesión):

```http
POST /api/v1/tickets/chance
Authorization: Bearer <token>
Content-Type: application/json

{
  "sorteoId": 1,
  "apuestas": [
    { "numero": "1234", "modalidad": "DIRECTO", "valor": 1000 }
  ]
}
```

La aplicación inicia con datos de demostración en memoria. Esos datos se restablecen al reiniciar el servidor y no deben usarse como persistencia ni configuración de producción.

## Pruebas

Ejecuta la suite con:

```bash
npm test
```

Las pruebas usan una base de datos en memoria reiniciada antes de cada caso.

## Matriz de trazabilidad

La relación entre historias de usuario, módulos y pruebas se encuentra en [docs/matriz-trazabilidad.md](./docs/matriz-trazabilidad.md).
