// Importar el framework Express para crear el servidor web
import express from 'express';
// Importar las rutas de la API PQRS
import pqrsRoutes from './routes/pqrsRoutes.js';

// Crear instancia de la aplicación Express
const app = express()
// Definir el puerto donde se ejecutará el servidor
const port = 3000

// Middleware para parsear datos de formularios URL-encoded
app.use(express.urlencoded());
// Montar las rutas de PQRS bajo el prefijo /api
app.use('/api', pqrsRoutes);

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, ()=>{
    console.log(`Servidor iniciado en el puerto :${port}`);
})