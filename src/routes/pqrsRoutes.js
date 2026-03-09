import express from 'express';
import { crear, listar, listarID, actualizar, borrar } from '../controllers/pqrsControllers.js';

const router = express.Router();

router.post('/pqrs', crear);
router.get('/pqrs', listar);
router.get('/pqrs/:id', listarID);
router.put('/pqrs/:id', actualizar);
router.delete('/pqrs/:id', borrar);

export default router;