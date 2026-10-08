# README — Evaluación

> **Curso:** PROGRAMACION WEB - II  
> **Código:** 30690  
> **Evaluación:** PA2 — Proceso de Aprendizaje 2  
> **Equipo:** Grupo 7  

## 1. Integrantes

| Integrante | Rol | Aporte principal |
|---|---|---|
| Leonardo Alonso Guillén Zúñiga | Actividad 1 — Servidor | Configuración del servidor Express, estructura de carpetas, variables de entorno y middleware (logger, 404, manejo de errores) |
| Edwin Montoya Romero | Actividad 1 — CRUD | {rutas y controladores del CRUD de solicitudes} |
| Mariano Guerrero Barrueto | Actividad 2 — Modelo | {conexión a MongoDB y modelo Mongoose} |
| Deiner Maluquis Quispe | Actividad 2 — Persistencia | {integración de los servicios REST con MongoDB y pruebas de persistencia} |

## 2. Descripción y objetivo

**Problema:**  
La "Plataforma de Gestión de Solicitudes Académicas" necesita una API backend que gestione usuarios y solicitudes, conserve los datos entre ejecuciones y entregue al frontend endpoints claros y organizados.

**Objetivo:**  
Implementar un backend con Node.js y Express, con persistencia en MongoDB mediante Mongoose, aplicando buenas prácticas en la organización del servidor y el manejo de solicitudes HTTP.

**Solución desarrollada:**  
- Servidor Express con la estructura `config`, `controllers`, `middlewares`, `models`, `routes`.
- Middleware: parseo de JSON (`express.json()`), CORS, `helmet`, un logger de solicitudes, un manejador de rutas no encontradas (404) y un manejador global de errores.
- Variables de entorno con `dotenv` (el archivo `.env` no se sube al repositorio; se incluye `.env.example`).
- {CRUD de la entidad principal: pendiente}
- {Conexión a MongoDB y modelo Mongoose: pendiente}

## 3. Cómo ejecutar o revisar

```bash
git clone https://github.com/Marscience-74/proceso_aprendizaje_2.git
cd proceso_aprendizaje_2
npm install
cp .env.example .env
# Editar .env y completar MONGO_URI con una conexión propia de MongoDB
npm run dev
```

El servidor queda disponible en `http://localhost:3001`.

**Pasos de revisión:**
1. Ejecutar `GET http://localhost:3001/estado`; debe responder `{"estado":"OK"}`.
2. Ejecutar `GET http://localhost:3001/ruta-inexistente`; debe responder 404 en JSON (middleware `notFound`).
3. Revisar la consola del servidor: cada solicitud queda registrada por el logger.
4. {Probar el CRUD de solicitudes: pendiente}
5. {Verificar la persistencia reiniciando el servidor: pendiente}
6. {Probar el manejo de errores: pendiente}

> No publicar contraseñas, tokens, credenciales ni datos sensibles.

## 4. Evidencias

- Respuesta de `GET /estado` junto con la línea del logger en la consola.
- Respuesta 404 de una ruta inexistente.
- Respuesta del manejador de errores.
- {Capturas del CRUD en Postman}
- {Captura de los datos guardados en MongoDB}

## 5. Matriz de participación

| Integrante | Desarrollo | Pruebas | Documentación | Exposición | Evidencia de participación |
|---|---|---|---|---|---|
| Leonardo Alonso Guillén Zúñiga | Alta | Alta | Alta | Sí | Commits en `server.js`, `src/middlewares/`, `.env.example` y `package.json` |
| Edwin Montoya Romero | Alta | Alta | Alta | Sí | {commits en rutas y controladores} |
| Mariano Guerrero Barrueto | Alta | Alta | Alta | Sí | {commits en `src/config/db.js` y `src/models/`} |
| Deiner Maluquis Quispe | Alta | Alta | Alta | Sí | {commits en servicios y pruebas de persistencia} |

## 6. Video de exposición

**Video público de YouTube:** [PEGAR AQUÍ EL ENLACE]

Todos los integrantes deben participar en la exposición con sus cámaras prendidas y explicar el procedimiento, la solución desarrollada y las decisiones tomadas.

## 7. Conclusiones

- {Conclusión sobre Express, rutas y middleware}
- {Conclusión sobre MongoDB y Mongoose}
- {Conclusión sobre la organización del trabajo en equipo}
- {Relación con los contenidos de las sesiones 5 a 7}

---

**Última actualización:** 08/10/2026