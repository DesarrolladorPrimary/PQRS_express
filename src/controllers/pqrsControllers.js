import { crearPQRS, obtenerTodasPQRS, obtenerPQRSporId, actualizarPQRS, eliminarPQRS } from '../models/pqrsModels.js';

export const crear = (req, res) => {
    try {
        const { tipo, descripcion, solicitante, email } = req.body;
        
        if (!tipo || !descripcion || !solicitante || !email) {
            return res.status(400).json({
                error: 'Todos los campos son requeridos: tipo, descripcion, solicitante, email'
            });
        }
        
        const nuevaPQRS = crearPQRS(tipo, descripcion, solicitante, email);
        
        res.status(201).json({
            mensaje: 'PQRS creada exitosamente',
            data: nuevaPQRS
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al crear la PQRS',
            detalle: error.message
        });
    }
};

export const listar = (req, res) =>{
    try {
        const todasPQRS = obtenerTodasPQRS();
        
        if (todasPQRS.length === 0) {
            return res.status(200).json({
                mensaje: 'No hay PQRS registradas',
                data: []
            });
        }
        
        res.status(200).json({
            mensaje: 'PQRS encontradas',
            cantidad: todasPQRS.length,
            data: todasPQRS
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener las PQRS',
            detalle: error.message
        });
    }
};

export const listarID = (req, res) => {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({
                error: 'El ID es requerido'
            });
        }
        
        const pqrs = obtenerPQRSporId(id);
        
        if (!pqrs) {
            return res.status(404).json({
                error: 'PQRS no encontrada'
            });
        }
        
        res.status(200).json({
            mensaje: 'PQRS encontrada',
            data: pqrs
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al buscar la PQRS',
            detalle: error.message
        });
    }
};

export const actualizar = (req, res) => {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;
        
        if (!id) {
            return res.status(400).json({
                error: 'El ID es requerido'
            });
        }
        
        if (!datosActualizados || Object.keys(datosActualizados).length === 0) {
            return res.status(400).json({
                error: 'Se deben proporcionar datos para actualizar'
            });
        }
        
        const pqrsActualizada = actualizarPQRS(id, datosActualizados);
        
        if (!pqrsActualizada) {
            return res.status(404).json({
                error: 'PQRS no encontrada'
            });
        }
        
        res.status(200).json({
            mensaje: 'PQRS actualizada exitosamente',
            data: pqrsActualizada
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al actualizar la PQRS',
            detalle: error.message
        });
    }
};

export const borrar = (req, res) => {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({
                error: 'El ID es requerido'
            });
        }
        
        const eliminada = eliminarPQRS(id);
        
        if (!eliminada) {
            return res.status(404).json({
                error: 'PQRS no encontrada'
            });
        }
        
        res.status(200).json({
            mensaje: 'PQRS eliminada exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al eliminar la PQRS',
            detalle: error.message
        });
    }
};