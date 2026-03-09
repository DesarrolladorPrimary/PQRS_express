// Importar las funciones del modelo PQRS que manejan las operaciones de datos
import { crearPQRS, obtenerTodasPQRS, obtenerPQRSporId, actualizarPQRS, eliminarPQRS } from '../models/pqrsModels.js';

// Controlador para crear una nueva PQRS
export const crear = (req, res) => {
    try {
        // Extraer los datos del cuerpo de la petición
        const { tipo, descripcion, solicitante, email } = req.body;
        
        // Validar que todos los campos requeridos estén presentes
        if (!tipo || !descripcion || !solicitante || !email) {
            return res.status(400).json({
                error: 'Todos los campos son requeridos: tipo, descripcion, solicitante, email'
            });
        }
        
        // Llamar al modelo para crear la nueva PQRS
        const nuevaPQRS = crearPQRS(tipo, descripcion, solicitante, email);
        
        // Responder con estado 201 (creado) y los datos de la nueva PQRS
        res.status(201).json({
            mensaje: 'PQRS creada exitosamente',
            data: nuevaPQRS
        });
    } catch (error) {
        // Manejar errores y responder con estado 500 (error del servidor)
        res.status(500).json({
            error: 'Error al crear la PQRS',
            detalle: error.message
        });
    }
};

// Controlador para listar todas las PQRS registradas
export const listar = (req, res) =>{
    try {
        // Obtener todas las PQRS del modelo
        const todasPQRS = obtenerTodasPQRS();
        
        // Verificar si no hay PQRS registradas
        if (todasPQRS.length === 0) {
            return res.status(200).json({
                mensaje: 'No hay PQRS registradas',
                data: []
            });
        }
        
        // Responder con la lista de PQRS encontradas
        res.status(200).json({
            mensaje: 'PQRS encontradas',
            cantidad: todasPQRS.length,
            data: todasPQRS
        });
    } catch (error) {
        // Manejar errores y responder con estado 500
        res.status(500).json({
            error: 'Error al obtener las PQRS',
            detalle: error.message
        });
    }
};

// Controlador para buscar una PQRS específica por su ID
export const listarID = (req, res) => {
    try {
        // Extraer el ID de los parámetros de la ruta
        const { id } = req.params;
        
        // Validar que se proporcione un ID
        if (!id) {
            return res.status(400).json({
                error: 'El ID es requerido'
            });
        }
        
        // Buscar la PQRS por ID usando el modelo
        const pqrs = obtenerPQRSporId(id);
        
        // Verificar si la PQRS no fue encontrada
        if (!pqrs) {
            return res.status(404).json({
                error: 'PQRS no encontrada'
            });
        }
        
        // Responder con la PQRS encontrada
        res.status(200).json({
            mensaje: 'PQRS encontrada',
            data: pqrs
        });
    } catch (error) {
        // Manejar errores y responder con estado 500
        res.status(500).json({
            error: 'Error al buscar la PQRS',
            detalle: error.message
        });
    }
};

// Controlador para actualizar una PQRS existente
export const actualizar = (req, res) => {
    try {
        // Extraer el ID de los parámetros y los datos del cuerpo
        const { id } = req.params;
        const datosActualizados = req.body;
        
        // Validar que se proporcione un ID
        if (!id) {
            return res.status(400).json({
                error: 'El ID es requerido'
            });
        }
        
        // Validar que se proporcionen datos para actualizar
        if (!datosActualizados || Object.keys(datosActualizados).length === 0) {
            return res.status(400).json({
                error: 'Se deben proporcionar datos para actualizar'
            });
        }
        
        // Actualizar la PQRS usando el modelo
        const pqrsActualizada = actualizarPQRS(id, datosActualizados);
        
        // Verificar si la PQRS no fue encontrada
        if (!pqrsActualizada) {
            return res.status(404).json({
                error: 'PQRS no encontrada'
            });
        }
        
        // Responder con la PQRS actualizada
        res.status(200).json({
            mensaje: 'PQRS actualizada exitosamente',
            data: pqrsActualizada
        });
    } catch (error) {
        // Manejar errores y responder con estado 500
        res.status(500).json({
            error: 'Error al actualizar la PQRS',
            detalle: error.message
        });
    }
};

// Controlador para eliminar una PQRS existente
export const borrar = (req, res) => {
    try {
        // Extraer el ID de los parámetros de la ruta
        const { id } = req.params;
        
        // Validar que se proporcione un ID
        if (!id) {
            return res.status(400).json({
                error: 'El ID es requerido'
            });
        }
        
        // Eliminar la PQRS usando el modelo
        const eliminada = eliminarPQRS(id);
        
        // Verificar si la PQRS no fue encontrada
        if (!eliminada) {
            return res.status(404).json({
                error: 'PQRS no encontrada'
            });
        }
        
        // Responder con mensaje de éxito
        res.status(200).json({
            mensaje: 'PQRS eliminada exitosamente'
        });
    } catch (error) {
        // Manejar errores y responder con estado 500
        res.status(500).json({
            error: 'Error al eliminar la PQRS',
            detalle: error.message
        });
    }
};