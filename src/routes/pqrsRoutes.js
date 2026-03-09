// Importar el framework Express para crear las rutas
import express from 'express';
// Importar los controladores de PQRS que manejan la lógica de negocio
import { crear, listar, listarID, actualizar, borrar } from '../controllers/pqrsControllers.js';

// Crear una instancia del router de Express para definir las rutas
const router = express.Router();

// Definir las rutas de la API PQRS con sus respectivos métodos HTTP y controladores

// Ruta POST para crear un nuevo PQRS
router.post('/pqrs', crear);

// Ruta GET para obtener todos los PQRS registrados
router.get('/pqrs', listar);

// Ruta GET para obtener un PQRS específico por su ID
router.get('/pqrs/:id', listarID);

// Ruta PUT para actualizar un PQRS existente por su ID
router.put('/pqrs/:id', actualizar);

// Ruta DELETE para eliminar un PQRS existente por su ID
router.delete('/pqrs/:id', borrar);

// Exportar el router para poder usarlo en la aplicación principal
export default router;